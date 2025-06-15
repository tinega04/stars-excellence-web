
import { supabase } from '@/integrations/supabase/client';

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string | null;
  created_at: string;
}

export const fetchFaqs = async (): Promise<FAQ[]> => {
  const { data, error } = await supabase
    .from('faqs')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching FAQs:', error);
    throw new Error('Failed to fetch FAQs');
  }

  return data || [];
};

export const fetchFaqsByCategory = async (category: string): Promise<FAQ[]> => {
  const { data, error } = await supabase
    .from('faqs')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching FAQs by category:', error);
    throw new Error('Failed to fetch FAQs by category');
  }

  return data || [];
};
