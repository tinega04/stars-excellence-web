
import { supabase } from '@/integrations/supabase/client';

export interface HeroBanner {
  id: string;
  title: string;
  subtitle: string | null;
  image_url: string | null;
  cta_text: string | null;
  cta_link: string | null;
  created_at: string;
}

export const fetchHeroBanners = async (): Promise<HeroBanner[]> => {
  try {
    const { data, error } = await supabase
      .from('hero_banners')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching hero banners:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Failed to fetch hero banners:', error);
    throw error;
  }
};
