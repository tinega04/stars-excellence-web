
import { supabase } from '@/integrations/supabase/client';

export interface NewsUpdate {
  id: string;
  title: string;
  body: string;
  image_url: string | null;
  created_at: string;
}

export const fetchNewsUpdates = async (limit: number = 5): Promise<NewsUpdate[]> => {
  try {
    const { data, error } = await supabase
      .from('news_updates')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching news updates:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Failed to fetch news updates:', error);
    throw error;
  }
};
