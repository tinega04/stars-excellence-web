export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admissions_applications: {
        Row: {
          applicant_name: string
          contact_info: Json
          document_url: string | null
          grade_applied_for: string
          id: string
          message: string | null
          parent_name: string
          submitted_at: string
        }
        Insert: {
          applicant_name: string
          contact_info: Json
          document_url?: string | null
          grade_applied_for: string
          id?: string
          message?: string | null
          parent_name: string
          submitted_at?: string
        }
        Update: {
          applicant_name?: string
          contact_info?: Json
          document_url?: string | null
          grade_applied_for?: string
          id?: string
          message?: string | null
          parent_name?: string
          submitted_at?: string
        }
        Relationships: []
      }
      announcements: {
        Row: {
          body: string
          created_at: string
          date: string
          id: string
          title: string
          type: string
        }
        Insert: {
          body: string
          created_at?: string
          date?: string
          id?: string
          title: string
          type?: string
        }
        Update: {
          body?: string
          created_at?: string
          date?: string
          id?: string
          title?: string
          type?: string
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          email: string
          full_name: string
          id: string
          message: string
          subject: string
          submitted_at: string
        }
        Insert: {
          email: string
          full_name: string
          id?: string
          message: string
          subject: string
          submitted_at?: string
        }
        Update: {
          email?: string
          full_name?: string
          id?: string
          message?: string
          subject?: string
          submitted_at?: string
        }
        Relationships: []
      }
      faqs: {
        Row: {
          answer: string
          category: string | null
          created_at: string
          id: string
          question: string
        }
        Insert: {
          answer: string
          category?: string | null
          created_at?: string
          id?: string
          question: string
        }
        Update: {
          answer?: string
          category?: string | null
          created_at?: string
          id?: string
          question?: string
        }
        Relationships: []
      }
      gallery: {
        Row: {
          caption: string | null
          category: string | null
          id: string
          image_url: string
          uploaded_at: string
        }
        Insert: {
          caption?: string | null
          category?: string | null
          id?: string
          image_url: string
          uploaded_at?: string
        }
        Update: {
          caption?: string | null
          category?: string | null
          id?: string
          image_url?: string
          uploaded_at?: string
        }
        Relationships: []
      }
      hero_banners: {
        Row: {
          created_at: string
          cta_link: string | null
          cta_text: string | null
          id: string
          image_url: string | null
          subtitle: string | null
          title: string
        }
        Insert: {
          created_at?: string
          cta_link?: string | null
          cta_text?: string | null
          id?: string
          image_url?: string | null
          subtitle?: string | null
          title: string
        }
        Update: {
          created_at?: string
          cta_link?: string | null
          cta_text?: string | null
          id?: string
          image_url?: string | null
          subtitle?: string | null
          title?: string
        }
        Relationships: []
      }
      news_updates: {
        Row: {
          body: string
          created_at: string
          id: string
          image_url: string | null
          title: string
        }
        Insert: {
          body: string
          created_at?: string
          id?: string
          image_url?: string | null
          title: string
        }
        Update: {
          body?: string
          created_at?: string
          id?: string
          image_url?: string | null
          title?: string
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          email: string
          id: string
          subscribed_at: string
        }
        Insert: {
          email: string
          id?: string
          subscribed_at?: string
        }
        Update: {
          email?: string
          id?: string
          subscribed_at?: string
        }
        Relationships: []
      }
      staff_profiles: {
        Row: {
          bio: string | null
          created_at: string
          department: string | null
          id: string
          name: string
          photo_url: string | null
          title: string
        }
        Insert: {
          bio?: string | null
          created_at?: string
          department?: string | null
          id?: string
          name: string
          photo_url?: string | null
          title: string
        }
        Update: {
          bio?: string | null
          created_at?: string
          department?: string | null
          id?: string
          name?: string
          photo_url?: string | null
          title?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          created_at: string
          id: string
          message: string
          name: string
          photo_url: string | null
          role: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          name: string
          photo_url?: string | null
          role: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          name?: string
          photo_url?: string | null
          role?: string
        }
        Relationships: []
      }
      tour_requests: {
        Row: {
          email: string
          id: string
          message: string | null
          name: string
          phone: string | null
          preferred_date: string | null
          submitted_at: string
        }
        Insert: {
          email: string
          id?: string
          message?: string | null
          name: string
          phone?: string | null
          preferred_date?: string | null
          submitted_at?: string
        }
        Update: {
          email?: string
          id?: string
          message?: string | null
          name?: string
          phone?: string | null
          preferred_date?: string | null
          submitted_at?: string
        }
        Relationships: []
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
