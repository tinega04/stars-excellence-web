
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
