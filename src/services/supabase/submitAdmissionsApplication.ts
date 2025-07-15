
import { supabase } from '@/integrations/supabase/client';
import type { AdmissionsApplicationData } from '@/types/supabase';

export const submitAdmissionsApplication = async (data: AdmissionsApplicationData) => {
  console.log('Submitting admissions application:', data);

  // Transform ContactInfo to Json format for database
  const submissionData = {
    applicant_name: data.applicant_name,
    parent_name: data.parent_name,
    grade_applied_for: data.grade_applied_for,
    contact_info: data.contact_info as any, // Convert to Json type
    message: data.message || null,
    document_url: data.document_url || null,
  };

  const { data: result, error } = await supabase
    .from('admissions_applications')
    .insert([submissionData])
    .select();

  if (error) {
    console.error('Error submitting admissions application:', error);
    throw error;
  }

  console.log('Admissions application submitted successfully:', result);
  return result;
};
