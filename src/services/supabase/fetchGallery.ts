
import { supabase } from '@/lib/supabase';

export interface GalleryImage {
  id: string;
  image_url: string;
  caption: string | null;
  category: string | null;
  uploaded_at: string;
}

export const fetchGallery = async (category?: string): Promise<GalleryImage[]> => {
  try {
    let query = supabase
      .from('gallery')
      .select('*')
      .order('uploaded_at', { ascending: false });

    if (category) {
      query = query.eq('category', category);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching gallery images:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Failed to fetch gallery images:', error);
    return [];
  }
};
