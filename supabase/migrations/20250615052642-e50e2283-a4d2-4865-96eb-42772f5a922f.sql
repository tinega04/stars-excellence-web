
-- Create hero_banners table
CREATE TABLE public.hero_banners (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  image_url TEXT,
  cta_text TEXT,
  cta_link TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on hero_banners
ALTER TABLE public.hero_banners ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read for hero banners
CREATE POLICY "Allow public read on hero_banners" 
  ON public.hero_banners 
  FOR SELECT 
  USING (true);

-- Create policy to allow insert/update for authenticated users (IT/Admin)
CREATE POLICY "Allow authenticated insert/update on hero_banners" 
  ON public.hero_banners 
  FOR ALL 
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Create storage bucket for public assets
INSERT INTO storage.buckets (id, name, public) 
VALUES ('public-assets', 'public-assets', true);

-- Create storage policies for public assets bucket
CREATE POLICY "Allow public read of public assets" 
  ON storage.objects 
  FOR SELECT 
  USING (bucket_id = 'public-assets');

-- Create policy to allow authenticated users to upload to public assets
CREATE POLICY "Allow authenticated upload to public assets" 
  ON storage.objects 
  FOR INSERT 
  WITH CHECK (bucket_id = 'public-assets' AND auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update public assets
CREATE POLICY "Allow authenticated update of public assets" 
  ON storage.objects 
  FOR UPDATE 
  USING (bucket_id = 'public-assets' AND auth.role() = 'authenticated');

-- Create policy to allow authenticated users to delete public assets
CREATE POLICY "Allow authenticated delete of public assets" 
  ON storage.objects 
  FOR DELETE 
  USING (bucket_id = 'public-assets' AND auth.role() = 'authenticated');
