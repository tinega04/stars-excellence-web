
-- Create newsletter_subscribers table
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on newsletter_subscribers
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public insert for newsletter subscribers
CREATE POLICY "Allow public insert on newsletter_subscribers" 
  ON public.newsletter_subscribers 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow public read for newsletter subscribers (optional, for admin purposes)
CREATE POLICY "Allow authenticated read on newsletter_subscribers" 
  ON public.newsletter_subscribers 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Create tour_requests table
CREATE TABLE public.tour_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  preferred_date DATE,
  message TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on tour_requests
ALTER TABLE public.tour_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public insert for tour requests
CREATE POLICY "Allow public insert on tour_requests" 
  ON public.tour_requests 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow authenticated read for tour requests (for admin purposes)
CREATE POLICY "Allow authenticated read on tour_requests" 
  ON public.tour_requests 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
