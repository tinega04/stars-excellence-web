
import { supabase } from '@/integrations/supabase/client';
import type { 
  UserProfile, 
  Student, 
  Educator, 
  Guardian, 
  Class,
  AcademicRecord, 
  AttendanceRecord, 
  Assignment,
  LearningMaterial,
  PaymentRecord,
  Message,
  PortalNotification
} from '@/types/portal';

export class PortalService {
  // User Profile Management
  static async getUserProfile(userId: string): Promise<UserProfile | null> {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }

    return data;
  }

  // Student Data Management
  static async getStudentById(studentId: string): Promise<Student | null> {
    const { data, error } = await supabase
      .from('students')
      .select(`
        *,
        profile:user_profiles(*)
      `)
      .eq('id', studentId)
      .single();

    if (error) {
      console.error('Error fetching student:', error);
      return null;
    }

    return data;
  }

  static async getStudentsByGuardian(guardianId: string): Promise<Student[]> {
    const { data, error } = await supabase
      .from('students')
      .select(`
        *,
        profile:user_profiles(*)
      `)
      .contains('guardian_ids', [guardianId]);

    if (error) {
      console.error('Error fetching students by guardian:', error);
      return [];
    }

    return data || [];
  }

  static async getStudentsByEducator(educatorId: string): Promise<Student[]> {
    // First get the classes taught by the educator
    const { data: classes, error: classError } = await supabase
      .from('classes')
      .select('student_ids')
      .eq('educator_id', educatorId);

    if (classError || !classes) {
      console.error('Error fetching educator classes:', classError);
      return [];
    }

    // Get all unique student IDs
    const studentIds = [...new Set(classes.flatMap(c => c.student_ids))];

    if (studentIds.length === 0) return [];

    const { data, error } = await supabase
      .from('students')
      .select(`
        *,
        profile:user_profiles(*)
      `)
      .in('id', studentIds);

    if (error) {
      console.error('Error fetching students by educator:', error);
      return [];
    }

    return data || [];
  }

  // Academic Records
  static async getAcademicRecords(studentId: string, term?: string): Promise<AcademicRecord[]> {
    let query = supabase
      .from('academic_records')
      .select('*')
      .eq('student_id', studentId)
      .order('date_recorded', { ascending: false });

    if (term) {
      query = query.eq('term', term);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching academic records:', error);
      return [];
    }

    return data || [];
  }

  static async updateGrade(recordId: string, grade: string, percentage: number): Promise<void> {
    const { error } = await supabase
      .from('academic_records')
      .update({ grade, percentage, date_recorded: new Date().toISOString() })
      .eq('id', recordId);

    if (error) {
      console.error('Error updating grade:', error);
      throw error;
    }

    // Notify guardians about grade update
    // This would trigger notifications to guardians
  }

  // Attendance Management
  static async getAttendanceRecords(studentId: string, dateRange?: { start: string; end: string }): Promise<AttendanceRecord[]> {
    let query = supabase
      .from('attendance_records')
      .select('*')
      .eq('student_id', studentId)
      .order('date', { ascending: false });

    if (dateRange) {
      query = query.gte('date', dateRange.start).lte('date', dateRange.end);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching attendance records:', error);
      return [];
    }

    return data || [];
  }

  static async markAttendance(
    studentId: string, 
    classId: string, 
    date: string, 
    status: AttendanceRecord['status'],
    recordedBy: string,
    notes?: string
  ): Promise<void> {
    const { error } = await supabase
      .from('attendance_records')
      .upsert({
        student_id: studentId,
        class_id: classId,
        date,
        status,
        notes,
        recorded_by: recordedBy,
        created_at: new Date().toISOString()
      });

    if (error) {
      console.error('Error marking attendance:', error);
      throw error;
    }
  }

  // Assignment Management
  static async getAssignmentsByClass(classId: string): Promise<Assignment[]> {
    const { data, error } = await supabase
      .from('assignments')
      .select('*')
      .eq('class_id', classId)
      .eq('status', 'published')
      .order('due_date', { ascending: true });

    if (error) {
      console.error('Error fetching assignments:', error);
      return [];
    }

    return data || [];
  }

  static async getAssignmentsByStudent(studentId: string): Promise<Assignment[]> {
    // Get student's classes first
    const { data: student } = await supabase
      .from('students')
      .select('class_id')
      .eq('id', studentId)
      .single();

    if (!student?.class_id) return [];

    return this.getAssignmentsByClass(student.class_id);
  }

  // Learning Materials
  static async getLearningMaterials(classId: string, subject?: string): Promise<LearningMaterial[]> {
    let query = supabase
      .from('learning_materials')
      .select('*')
      .eq('class_id', classId)
      .order('upload_date', { ascending: false });

    if (subject) {
      query = query.eq('subject', subject);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching learning materials:', error);
      return [];
    }

    return data || [];
  }

  // Payment Records
  static async getPaymentRecords(studentId: string, guardianId?: string): Promise<PaymentRecord[]> {
    let query = supabase
      .from('payment_records')
      .select('*')
      .eq('student_id', studentId)
      .order('due_date', { ascending: false });

    if (guardianId) {
      query = query.eq('guardian_id', guardianId);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching payment records:', error);
      return [];
    }

    return data || [];
  }

  // Cross-Portal Communication
  static async sendMessage(
    senderId: string,
    recipientId: string,
    subject: string,
    content: string,
    type: Message['message_type'] = 'private'
  ): Promise<void> {
    const { error } = await supabase
      .from('messages')
      .insert({
        sender_id: senderId,
        recipient_id: recipientId,
        subject,
        content,
        message_type: type,
        read_status: false,
        sent_at: new Date().toISOString()
      });

    if (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }

  static async getMessages(userId: string, type?: Message['message_type']): Promise<Message[]> {
    let query = supabase
      .from('messages')
      .select('*')
      .eq('recipient_id', userId)
      .order('sent_at', { ascending: false });

    if (type) {
      query = query.eq('message_type', type);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching messages:', error);
      return [];
    }

    return data || [];
  }

  // Notifications
  static async getNotifications(userId: string, unreadOnly = false): Promise<PortalNotification[]> {
    let query = supabase
      .from('portal_notifications')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (unreadOnly) {
      query = query.eq('read', false);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching notifications:', error);
      return [];
    }

    return data || [];
  }

  static async markNotificationAsRead(notificationId: string): Promise<void> {
    const { error } = await supabase
      .from('portal_notifications')
      .update({ read: true })
      .eq('id', notificationId);

    if (error) {
      console.error('Error marking notification as read:', error);
      throw error;
    }
  }

  // Real-time subscriptions
  static subscribeToStudentUpdates(studentId: string, callback: (data: any) => void) {
    return supabase
      .channel(`student-${studentId}`)
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'academic_records', filter: `student_id=eq.${studentId}` },
        callback
      )
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'attendance_records', filter: `student_id=eq.${studentId}` },
        callback
      )
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'payment_records', filter: `student_id=eq.${studentId}` },
        callback
      )
      .subscribe();
  }

  static subscribeToGuardianNotifications(guardianId: string, callback: (data: any) => void) {
    return supabase
      .channel(`guardian-${guardianId}`)
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'portal_notifications', filter: `user_id=eq.${guardianId}` },
        callback
      )
      .subscribe();
  }
}
