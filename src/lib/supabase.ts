
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

const supabaseUrl = "https://hmwysjwbbuwmjtvlscew.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhtd3lzandiYnV3bWp0dmxzY2V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MzY2OTIsImV4cCI6MjA2NTUxMjY5Mn0.o2RC0zEAyHPnOq7rSOi_daaxJuEuoTMDkZ1rJolbutI";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
