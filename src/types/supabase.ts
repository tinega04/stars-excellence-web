
export interface Announcement {
  id: string;
  title: string;
  body: string;
  type: 'info' | 'important' | 'event';
  date: string;
  created_at: string;
}

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
