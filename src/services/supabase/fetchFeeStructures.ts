
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/types/supabase';

type FeeStructureWithItems = Database['public']['Tables']['fee_structures']['Row'] & {
  fee_structure_items: Database['public']['Tables']['fee_structure_items']['Row'][];
};

export const fetchFeeStructures = async (): Promise<FeeStructureWithItems[]> => {
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

  return data as FeeStructureWithItems[];
};
