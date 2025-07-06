
import { supabase } from '@/integrations/supabase/client';
import type { ExtendedDatabase } from '@/types/supabase-extensions';

type FeeStructureWithItems = ExtendedDatabase['public']['Tables']['fee_structures']['Row'] & {
  fee_structure_items: ExtendedDatabase['public']['Tables']['fee_structure_items']['Row'][];
};

export const fetchFeeStructures = async (): Promise<FeeStructureWithItems[]> => {
  try {
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

    // Ensure fee_structure_items is always an array
    const processedData = (data || []).map(structure => ({
      ...structure,
      fee_structure_items: Array.isArray(structure.fee_structure_items) 
        ? structure.fee_structure_items 
        : []
    }));

    return processedData as FeeStructureWithItems[];
  } catch (error) {
    console.error('Error in fetchFeeStructures:', error);
    return [];
  }
};
