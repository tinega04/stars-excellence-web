
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
      fee_structures: {
        Row: {
          id: string
          name: string
          grade_level: string
          academic_year: string
          term: string
          base_amount: number
          description: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          grade_level: string
          academic_year: string
          term: string
          base_amount: number
          description?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          grade_level?: string
          academic_year?: string
          term?: string
          base_amount?: number
          description?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      fee_structure_items: {
        Row: {
          id: string
          fee_structure_id: string
          name: string
          amount: number
          description: string | null
          is_mandatory: boolean
          created_at: string
        }
        Insert: {
          id?: string
          fee_structure_id: string
          name: string
          amount: number
          description?: string | null
          is_mandatory?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          fee_structure_id?: string
          name?: string
          amount?: number
          description?: string | null
          is_mandatory?: boolean
          created_at?: string
        }
      }
      students: {
        Row: {
          id: string
          student_id: string
          first_name: string
          last_name: string
          grade_level: string
          guardian_name: string | null
          guardian_phone: string | null
          guardian_email: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          student_id: string
          first_name: string
          last_name: string
          grade_level: string
          guardian_name?: string | null
          guardian_phone?: string | null
          guardian_email?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          first_name?: string
          last_name?: string
          grade_level?: string
          guardian_name?: string | null
          guardian_phone?: string | null
          guardian_email?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      payments: {
        Row: {
          id: string
          student_id: string
          amount: number
          payment_method: string
          payment_status: string
          payment_reference: string
          payment_date: string
          receipt_number: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          student_id: string
          amount: number
          payment_method: string
          payment_status: string
          payment_reference: string
          payment_date: string
          receipt_number?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          amount?: number
          payment_method?: string
          payment_status?: string
          payment_reference?: string
          payment_date?: string
          receipt_number?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      payment_items: {
        Row: {
          id: string
          payment_id: string
          fee_structure_item_id: string | null
          description: string
          amount: number
          created_at: string
        }
        Insert: {
          id?: string
          payment_id: string
          fee_structure_item_id?: string | null
          description: string
          amount: number
          created_at?: string
        }
        Update: {
          id?: string
          payment_id?: string
          fee_structure_item_id?: string | null
          description?: string
          amount?: number
          created_at?: string
        }
      }
      student_balances: {
        Row: {
          id: string
          student_id: string
          fee_structure_id: string
          balance: number
          total_fees: number
          total_paid: number
          last_payment_date: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          student_id: string
          fee_structure_id: string
          balance: number
          total_fees: number
          total_paid: number
          last_payment_date?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          fee_structure_id?: string
          balance?: number
          total_fees?: number
          total_paid?: number
          last_payment_date?: string | null
          created_at?: string
          updated_at?: string
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

// Helper types for better type inference
export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T]
