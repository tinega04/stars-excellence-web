
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type PaymentWithDetails = Database['public']['Tables']['payments']['Row'] & {
  students: Database['public']['Tables']['students']['Row'] | null;
  payment_items: Database['public']['Tables']['payment_items']['Row'][];
};

export const fetchPayments = async (): Promise<PaymentWithDetails[]> => {
  try {
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

    // Ensure payment_items is always an array
    const processedData = (data || []).map(payment => ({
      ...payment,
      payment_items: payment.payment_items || []
    }));

    return processedData as PaymentWithDetails[];
  } catch (error) {
    console.error('Error in fetchPayments:', error);
    return [];
  }
};
