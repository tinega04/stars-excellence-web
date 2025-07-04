
import { supabase } from '@/integrations/supabase/client';

export const fetchPayments = async () => {
  const { data, error } = await supabase
    .from('payments')
    .select(`
      *,
      students (
        student_id,
        first_name,
        last_name,
        grade_level
      ),
      payment_items (*)
    `)
    .order('payment_date', { ascending: false });

  if (error) {
    console.error('Error fetching payments:', error);
    throw error;
  }

  return data;
};
