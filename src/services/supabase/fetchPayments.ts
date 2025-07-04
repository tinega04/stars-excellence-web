
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/types/supabase';

type PaymentWithDetails = Database['public']['Tables']['payments']['Row'] & {
  students: Database['public']['Tables']['students']['Row'] | null;
  payment_items: Database['public']['Tables']['payment_items']['Row'][];
};

export const fetchPayments = async (): Promise<PaymentWithDetails[]> => {
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

  return data as PaymentWithDetails[];
};
