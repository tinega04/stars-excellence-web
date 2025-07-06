
import { supabase } from '@/integrations/supabase/client';

export interface Announcement {
  id: string;
  title: string;
  body: string;
  date: string;
  type: 'event' | 'info' | 'important';
  created_at: string;
}

export const fetchAnnouncements = async (): Promise<Announcement[]> => {
  try {
    const { data, error } = await supabase
      .from('announcements')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching announcements:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Failed to fetch announcements:', error);
    return [];
  }
};
