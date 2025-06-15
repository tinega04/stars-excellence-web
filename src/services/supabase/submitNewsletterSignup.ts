
import { supabase } from '@/lib/supabase';

export interface NewsletterSignupData {
  email: string;
}

export const submitNewsletterSignup = async (data: NewsletterSignupData) => {
  try {
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({
        email: data.email.trim().toLowerCase()
      });

    if (error) {
      console.error('Error submitting newsletter signup:', error);
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to submit newsletter signup:', error);
    throw error;
  }
};
