
-- Create contact_messages table
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on contact_messages
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public insert for contact messages
CREATE POLICY "Allow public insert on contact_messages" 
  ON public.contact_messages 
  FOR INSERT 
  WITH CHECK (true);

-- Create admissions_applications table
CREATE TABLE public.admissions_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  applicant_name TEXT NOT NULL,
  parent_name TEXT NOT NULL,
  contact_info JSONB NOT NULL, -- Store email, phone, address as JSON
  grade_applied_for TEXT NOT NULL,
  message TEXT,
  document_url TEXT, -- For uploaded documents
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on admissions_applications
ALTER TABLE public.admissions_applications ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public insert for admissions applications
CREATE POLICY "Allow public insert on admissions_applications" 
  ON public.admissions_applications 
  FOR INSERT 
  WITH CHECK (true);

-- Create storage bucket for admissions documents
INSERT INTO storage.buckets (id, name, public) 
VALUES ('admissions-documents', 'admissions-documents', false);

-- Create storage policies for admissions documents
CREATE POLICY "Allow public upload to admissions documents" 
  ON storage.objects 
  FOR INSERT 
  WITH CHECK (bucket_id = 'admissions-documents');

CREATE POLICY "Allow public read of admissions documents" 
  ON storage.objects 
  FOR SELECT 
  USING (bucket_id = 'admissions-documents');
