
import { useState, useEffect } from 'react';
import { PortalService } from '@/services/portal/PortalService';
import type { 
  UserProfile, 
  Student, 
  AcademicRecord, 
  AttendanceRecord, 
  PaymentRecord,
  PortalNotification
} from '@/types/portal';

// Hook for student data in learner portal
export const useLearnerData = (studentId: string) => {
  const [student, setStudent] = useState<Student | null>(null);
  const [academicRecords, setAcademicRecords] = useState<AcademicRecord[]>([]);
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);
  const [notifications, setNotifications] = useState<PortalNotification[]>([]);
  const [loading, setLoading] = useState(true);

  const loadLearnerData = async () => {
    if (!studentId) return;

    try {
      setLoading(true);
      const [studentData, academicData, attendanceData, notificationData] = await Promise.all([
        PortalService.getStudentById(studentId),
        PortalService.getAcademicRecords(studentId),
        PortalService.getAttendanceRecords(studentId),
        PortalService.getNotifications(studentId)
      ]);

      setStudent(studentData);
      setAcademicRecords(academicData);
      setAttendanceRecords(attendanceData);
      setNotifications(notificationData);
    } catch (error) {
      console.error('Error loading learner data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLearnerData();

    // Subscribe to real-time updates
    const subscription = PortalService.subscribeToStudentUpdates(studentId, (payload) => {
      console.log('Student update received:', payload);
      // Refresh data on updates
      loadLearnerData();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [studentId]);

  return {
    student,
    academicRecords,
    attendanceRecords,
    notifications,
    loading,
    refreshData: loadLearnerData
  };
};

// Hook for guardian data
export const useGuardianData = (guardianId: string) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [paymentRecords, setPaymentRecords] = useState<PaymentRecord[]>([]);
  const [notifications, setNotifications] = useState<PortalNotification[]>([]);
  const [loading, setLoading] = useState(true);

  const loadGuardianData = async () => {
    if (!guardianId) return;

    try {
      setLoading(true);
      const studentsData = await PortalService.getStudentsByGuardian(guardianId);
      setStudents(studentsData);

      // Get payment records for all students
      const allPaymentRecords = await Promise.all(
        studentsData.map(student => PortalService.getPaymentRecords(student.id, guardianId))
      );
      setPaymentRecords(allPaymentRecords.flat());

      const notificationData = await PortalService.getNotifications(guardianId);
      setNotifications(notificationData);
    } catch (error) {
      console.error('Error loading guardian data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGuardianData();

    // Subscribe to notifications
    const subscription = PortalService.subscribeToGuardianNotifications(guardianId, () => {
      loadGuardianData();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [guardianId]);

  return {
    students,
    paymentRecords,
    notifications,
    loading,
    refreshData: loadGuardianData
  };
};

// Hook for educator data
export const useEducatorData = (educatorId: string) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  const loadEducatorData = async () => {
    if (!educatorId) return;

    try {
      setLoading(true);
      const studentsData = await PortalService.getStudentsByEducator(educatorId);
      setStudents(studentsData);
    } catch (error) {
      console.error('Error loading educator data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEducatorData();
  }, [educatorId]);

  return {
    students,
    loading,
    refreshData: loadEducatorData
  };
};
