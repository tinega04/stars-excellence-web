
import { supabase } from '@/integrations/supabase/client';

export interface TourRequestData {
  name: string;
  email: string;
  phone?: string;
  preferred_date?: string;
  message?: string;
}

export const submitTourRequest = async (data: TourRequestData) => {
  try {
    const { error } = await supabase
      .from('tour_requests')
      .insert({
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        phone: data.phone?.trim() || null,
        preferred_date: data.preferred_date || null,
        message: data.message?.trim() || null
      });

    if (error) {
      console.error('Error submitting tour request:', error);
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to submit tour request:', error);
    throw error;
  }
};
