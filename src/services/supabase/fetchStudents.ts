
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/types/supabase';

type Student = Database['public']['Tables']['students']['Row'];

export const fetchStudents = async (): Promise<Student[]> => {
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .eq('is_active', true)
    .order('first_name', { ascending: true });

  if (error) {
    console.error('Error fetching students:', error);
    throw error;
  }

  return data;
};
