
import { supabase } from '@/integrations/supabase/client';
import type { ExtendedDatabase } from '@/types/supabase-extensions';

type StudentBalanceWithDetails = ExtendedDatabase['public']['Tables']['student_balances']['Row'] & {
  students: ExtendedDatabase['public']['Tables']['students']['Row'] | null;
  fee_structures: ExtendedDatabase['public']['Tables']['fee_structures']['Row'] | null;
};

export const fetchStudentBalances = async (): Promise<StudentBalanceWithDetails[]> => {
  try {
    const { data, error } = await supabase
      .from('student_balances')
      .select(`
        *,
        students (
          id,
          student_id,
          first_name,
          last_name,
          grade_level,
          guardian_name,
          guardian_phone,
          guardian_email
        ),
        fee_structures (
          id,
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

    // Ensure related data is properly handled
    const processedData = (data || []).map(balance => ({
      ...balance,
      students: balance.students || null,
      fee_structures: balance.fee_structures || null
    }));

    return processedData as StudentBalanceWithDetails[];
  } catch (error) {
    console.error('Error in fetchStudentBalances:', error);
    return [];
  }
};
