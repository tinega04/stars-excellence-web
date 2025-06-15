
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      announcements: {
        Row: {
          id: string
          title: string
          body: string
          date: string
          type: 'event' | 'info' | 'important'
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          body: string
          date?: string
          type: 'event' | 'info' | 'important'
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          body?: string
          date?: string
          type?: 'event' | 'info' | 'important'
          created_at?: string
        }
      }
      news_updates: {
        Row: {
          id: string
          title: string
          body: string
          image_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          body: string
          image_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          body?: string
          image_url?: string | null
          created_at?: string
        }
      }
      testimonials: {
        Row: {
          id: string
          name: string
          role: string
          message: string
          photo_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          role: string
          message: string
          photo_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          role?: string
          message?: string
          photo_url?: string | null
          created_at?: string
        }
      }
      gallery: {
        Row: {
          id: string
          image_url: string
          caption: string | null
          category: string | null
          uploaded_at: string
        }
        Insert: {
          id?: string
          image_url: string
          caption?: string | null
          category?: string | null
          uploaded_at?: string
        }
        Update: {
          id?: string
          image_url?: string
          caption?: string | null
          category?: string | null
          uploaded_at?: string
        }
      }
      contact_messages: {
        Row: {
          id: string
          full_name: string
          email: string
          subject: string
          message: string
          submitted_at: string
        }
        Insert: {
          id?: string
          full_name: string
          email: string
          subject: string
          message: string
          submitted_at?: string
        }
        Update: {
          id?: string
          full_name?: string
          email?: string
          subject?: string
          message?: string
          submitted_at?: string
        }
      }
      admissions_applications: {
        Row: {
          id: string
          applicant_name: string
          parent_name: string
          contact_info: Json
          grade_applied_for: string
          message: string | null
          document_url: string | null
          submitted_at: string
        }
        Insert: {
          id?: string
          applicant_name: string
          parent_name: string
          contact_info: Json
          grade_applied_for: string
          message?: string | null
          document_url?: string | null
          submitted_at?: string
        }
        Update: {
          id?: string
          applicant_name?: string
          parent_name?: string
          contact_info?: Json
          grade_applied_for?: string
          message?: string | null
          document_url?: string | null
          submitted_at?: string
        }
      }
      hero_banners: {
        Row: {
          id: string
          title: string
          subtitle: string | null
          image_url: string | null
          cta_text: string | null
          cta_link: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          subtitle?: string | null
          image_url?: string | null
          cta_text?: string | null
          cta_link?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          subtitle?: string | null
          image_url?: string | null
          cta_text?: string | null
          cta_link?: string | null
          created_at?: string
        }
      }
      newsletter_subscribers: {
        Row: {
          id: string
          email: string
          subscribed_at: string
        }
        Insert: {
          id?: string
          email: string
          subscribed_at?: string
        }
        Update: {
          id?: string
          email?: string
          subscribed_at?: string
        }
      }
      tour_requests: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          preferred_date: string | null
          message: string | null
          submitted_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          preferred_date?: string | null
          message?: string | null
          submitted_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          preferred_date?: string | null
          message?: string | null
          submitted_at?: string
        }
      }
      faqs: {
        Row: {
          id: string
          question: string
          answer: string
          category: string | null
          created_at: string
        }
        Insert: {
          id?: string
          question: string
          answer: string
          category?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          question?: string
          answer?: string
          category?: string | null
          created_at?: string
        }
      }
      staff_profiles: {
        Row: {
          id: string
          name: string
          title: string
          bio: string | null
          department: string | null
          photo_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          title: string
          bio?: string | null
          department?: string | null
          photo_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          title?: string
          bio?: string | null
          department?: string | null
          photo_url?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
