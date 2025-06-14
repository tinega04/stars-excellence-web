
import { supabase } from '@/lib/supabase';

export interface NewsUpdate {
  id: string;
  title: string;
  body: string;
  image_url: string | null;
  created_at: string;
}

export const fetchNewsUpdates = async (): Promise<NewsUpdate[]> => {
  try {
    const { data, error } = await supabase
      .from('news_updates')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching news updates:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Failed to fetch news updates:', error);
    return [];
  }
};
