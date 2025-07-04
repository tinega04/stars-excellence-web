
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type StudentBalanceWithDetails = Database['public']['Tables']['student_balances']['Row'] & {
  students: Database['public']['Tables']['students']['Row'] | null;
  fee_structures: Database['public']['Tables']['fee_structures']['Row'] | null;
};

export const fetchStudentBalances = async (): Promise<StudentBalanceWithDetails[]> => {
  try {
    const { data, error } = await supabase
      .from('student_balances')
      .select(`
        *,
        students (
          student_id,
          first_name,
          last_name,
          grade_level,
          guardian_name,
          guardian_phone,
          guardian_email
        ),
        fee_structures (
          name,
          academic_year,
          term
        )
      `)
      .order('balance', { ascending: false });

    if (error) {
      console.error('Error fetching student balances:', error);
      throw error;
    }

    return (data || []) as StudentBalanceWithDetails[];
  } catch (error) {
    console.error('Error in fetchStudentBalances:', error);
    return [];
  }
};
