
import { supabase } from '@/integrations/supabase/client';

export interface AdmissionsApplicationData {
  applicantName: string;
  parentName: string;
  gradeAppliedFor: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  message?: string;
  documentUrl?: string;
}

export const submitAdmissionsApplication = async (data: AdmissionsApplicationData): Promise<void> => {
  const { error } = await supabase
    .from('admissions_applications')
    .insert({
      applicant_name: data.applicantName,
      parent_name: data.parentName,
      grade_applied_for: data.gradeAppliedFor,
      contact_info: data.contactInfo,
      message: data.message,
      document_url: data.documentUrl,
    });

  if (error) {
    console.error('Error submitting admissions application:', error);
    throw error;
  }
};
