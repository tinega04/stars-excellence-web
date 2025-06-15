
import { supabase } from '@/integrations/supabase/client';

export interface StaffProfile {
  id: string;
  name: string;
  title: string;
  bio: string | null;
  department: string | null;
  photo_url: string | null;
  created_at: string;
}

export const fetchStaffProfiles = async (): Promise<StaffProfile[]> => {
  const { data, error } = await supabase
    .from('staff_profiles')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching staff profiles:', error);
    throw new Error('Failed to fetch staff profiles');
  }

  return data || [];
};

export const fetchStaffProfilesByDepartment = async (department: string): Promise<StaffProfile[]> => {
  const { data, error } = await supabase
    .from('staff_profiles')
    .select('*')
    .eq('department', department)
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching staff profiles by department:', error);
    throw new Error('Failed to fetch staff profiles by department');
  }

  return data || [];
};
