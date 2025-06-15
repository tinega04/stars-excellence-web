
import { supabase } from '@/lib/supabase';

export interface ContactMessageData {
  full_name: string;
  email: string;
  subject: string;
  message: string;
}

export const submitContactMessage = async (data: ContactMessageData) => {
  try {
    const { error } = await supabase
      .from('contact_messages')
      .insert([data]);

    if (error) {
      console.error('Error submitting contact message:', error);
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to submit contact message:', error);
    throw error;
  }
};
