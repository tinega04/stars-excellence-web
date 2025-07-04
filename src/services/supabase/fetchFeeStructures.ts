
import { supabase } from '@/integrations/supabase/client';

export const fetchFeeStructures = async () => {
  const { data, error } = await supabase
    .from('fee_structures')
    .select(`
      *,
      fee_structure_items (*)
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching fee structures:', error);
    throw error;
  }

  return data;
};
