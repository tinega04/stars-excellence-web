
import { supabase } from '@/integrations/supabase/client';
import type { ExtendedDatabase } from '@/types/supabase-extensions';

type Student = ExtendedDatabase['public']['Tables']['students']['Row'];

export const fetchStudents = async (): Promise<Student[]> => {
  try {
    const { data, error } = await supabase
      .from('students')
      .select('*')
      .eq('is_active', true)
      .order('first_name', { ascending: true });

    if (error) {
      console.error('Error fetching students:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in fetchStudents:', error);
    return [];
  }
};
