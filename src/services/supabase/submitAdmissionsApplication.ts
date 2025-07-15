
import { supabase } from '@/integrations/supabase/client';

export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
  [key: string]: any;
}

export interface AdmissionsApplicationData {
  applicant_name: string;
  parent_name: string;
  grade_applied_for: string;
  contact_info: ContactInfo;
  message?: string;
  document_url?: string;
}

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

export const uploadAdmissionsDocument = async (file: File): Promise<string> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `admissions/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('admissions-documents')
    .upload(filePath, file);

  if (uploadError) {
    console.error('Error uploading file:', uploadError);
    throw uploadError;
  }

  const { data } = supabase.storage
    .from('admissions-documents')
    .getPublicUrl(filePath);

  return data.publicUrl;
};
