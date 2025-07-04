
import { supabase } from '@/integrations/supabase/client';

export const fetchStudents = async () => {
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
