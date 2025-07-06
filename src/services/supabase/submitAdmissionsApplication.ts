
import { supabase } from '@/integrations/supabase/client';

export interface ContactInfo {
  email: string;
  phone: string;
  address?: string;
}

export interface AdmissionsApplicationData {
  applicant_name: string;
  parent_name: string;
  contact_info: ContactInfo;
  grade_applied_for: string;
  message?: string;
  document_url?: string;
}

export const submitAdmissionsApplication = async (data: AdmissionsApplicationData) => {
  try {
    const { error } = await supabase
      .from('admissions_applications')
      .insert([data]);

    if (error) {
      console.error('Error submitting admissions application:', error);
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to submit admissions application:', error);
    throw error;
  }
};

export const uploadAdmissionsDocument = async (file: File, applicationId: string) => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${applicationId}-${Date.now()}.${fileExt}`;
    const filePath = `documents/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('admissions-documents')
      .upload(filePath, file);

    if (uploadError) {
      console.error('Error uploading document:', uploadError);
      throw uploadError;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('admissions-documents')
      .getPublicUrl(filePath);

    return { url: publicUrl, path: filePath };
  } catch (error) {
    console.error('Failed to upload document:', error);
    throw error;
  }
};
