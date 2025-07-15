
import { supabase } from '@/integrations/supabase/client';
import type { Announcement } from '@/types/supabase';

export const fetchAnnouncements = async (): Promise<Announcement[]> => {
  console.log('Fetching announcements from Supabase...');
  
  const { data, error } = await supabase
    .from('announcements')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching announcements:', error);
    throw error;
  }

  if (!data) {
    console.log('No announcements data returned');
    return [];
  }

  console.log('Fetched announcements:', data);

  // Transform data to match expected type structure
  const transformedData: Announcement[] = data.map(item => ({
    id: item.id,
    title: item.title,
    body: item.body,
    type: ['info', 'important', 'event'].includes(item.type) ? item.type as 'info' | 'important' | 'event' : 'info',
    date: item.date,
    created_at: item.created_at
  }));

  return transformedData;
};
