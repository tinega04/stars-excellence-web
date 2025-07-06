
import { supabase } from '@/integrations/supabase/client';
import type { ExtendedDatabase } from '@/types/supabase-extensions';

type PaymentWithDetails = ExtendedDatabase['public']['Tables']['payments']['Row'] & {
  students: ExtendedDatabase['public']['Tables']['students']['Row'] | null;
  payment_items: ExtendedDatabase['public']['Tables']['payment_items']['Row'][];
};

export const fetchPayments = async (): Promise<PaymentWithDetails[]> => {
  try {
    const { data, error } = await supabase
      .from('payments')
      .select(`
        *,
        students (
          id,
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

    // Ensure payment_items is always an array and handle null students
    const processedData = (data || []).map(payment => ({
      ...payment,
      students: payment.students || null,
      payment_items: Array.isArray(payment.payment_items) 
        ? payment.payment_items 
        : []
    }));

    return processedData as PaymentWithDetails[];
  } catch (error) {
    console.error('Error in fetchPayments:', error);
    return [];
  }
};
