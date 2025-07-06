
import { supabase } from '@/integrations/supabase/client';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  message: string;
  photo_url: string | null;
  created_at: string;
}

export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching testimonials:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Failed to fetch testimonials:', error);
    return [];
  }
};
