
import { supabase } from '@/integrations/supabase/client';

export const fetchStudentBalances = async () => {
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

  return data;
};
