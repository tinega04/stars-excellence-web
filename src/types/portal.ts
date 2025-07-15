
// Shared types for portal data models
export interface UserProfile {
  id: string;
  email: string;
  role: 'student' | 'educator' | 'guardian' | 'admin';
  first_name: string;
  last_name: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Student {
  id: string;
  user_id: string;
  student_id: string;
  grade_level: string;
  class_id: string;
  enrollment_date: string;
  status: 'active' | 'transferred' | 'graduated';
  guardian_ids: string[];
  profile: UserProfile;
}

export interface Educator {
  id: string;
  user_id: string;
  employee_id: string;
  department: string;
  subjects: string[];
  class_ids: string[];
  hire_date: string;
  profile: UserProfile;
}

export interface Guardian {
  id: string;
  user_id: string;
  relationship_type: 'parent' | 'guardian' | 'relative';
  emergency_contact: boolean;
  student_ids: string[];
  profile: UserProfile;
}

export interface Class {
  id: string;
  name: string;
  grade_level: string;
  subject?: string;
  educator_id: string;
  student_ids: string[];
  academic_year: string;
  term: string;
}

export interface AcademicRecord {
  id: string;
  student_id: string;
  class_id: string;
  subject: string;
  assignment_name: string;
  grade: string;
  percentage: number;
  max_score: number;
  term: string;
  academic_year: string;
  date_recorded: string;
  educator_id: string;
}

export interface AttendanceRecord {
  id: string;
  student_id: string;
  class_id: string;
  date: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  notes?: string;
  recorded_by: string;
  created_at: string;
}

export interface Assignment {
  id: string;
  class_id: string;
  educator_id: string;
  title: string;
  description: string;
  due_date: string;
  max_score: number;
  subject: string;
  status: 'draft' | 'published' | 'completed';
  attachments?: string[];
  created_at: string;
}

export interface LearningMaterial {
  id: string;
  class_id: string;
  educator_id: string;
  title: string;
  description: string;
  file_url: string;
  file_type: string;
  subject: string;
  grade_level: string;
  upload_date: string;
  is_public: boolean;
}

export interface PaymentRecord {
  id: string;
  student_id: string;
  guardian_id: string;
  amount: number;
  currency: string;
  payment_type: 'tuition' | 'fees' | 'uniform' | 'transport' | 'meal' | 'other';
  description: string;
  due_date: string;
  paid_date?: string;
  status: 'pending' | 'paid' | 'overdue' | 'cancelled';
  payment_method?: string;
  reference_number?: string;
}

export interface Message {
  id: string;
  sender_id: string;
  recipient_id: string;
  subject: string;
  content: string;
  message_type: 'announcement' | 'private' | 'notification';
  read_status: boolean;
  sent_at: string;
  attachments?: string[];
}

export interface PortalNotification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'grade_update' | 'attendance' | 'payment_due' | 'assignment' | 'announcement';
  read: boolean;
  created_at: string;
  related_entity_id?: string;
  related_entity_type?: string;
}
