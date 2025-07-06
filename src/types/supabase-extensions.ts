
import type { Database } from '@/integrations/supabase/types';

export interface ExtendedTables {
  students: {
    Row: {
      id: string;
      student_id: string;
      first_name: string;
      last_name: string;
      grade_level: string;
      guardian_name: string | null;
      guardian_phone: string | null;
      guardian_email: string | null;
      is_active: boolean;
      created_at: string;
      updated_at: string;
    };
    Insert: {
      id?: string;
      student_id: string;
      first_name: string;
      last_name: string;
      grade_level: string;
      guardian_name?: string | null;
      guardian_phone?: string | null;
      guardian_email?: string | null;
      is_active?: boolean;
      created_at?: string;
      updated_at?: string;
    };
    Update: {
      id?: string;
      student_id?: string;
      first_name?: string;
      last_name?: string;
      grade_level?: string;
      guardian_name?: string | null;
      guardian_phone?: string | null;
      guardian_email?: string | null;
      is_active?: boolean;
      created_at?: string;
      updated_at?: string;
    };
    Relationships: [];
  };
  fee_structures: {
    Row: {
      id: string;
      name: string;
      description: string | null;
      academic_year: string;
      term: string;
      grade_level: string;
      base_amount: number;
      is_active: boolean;
      created_at: string;
      updated_at: string;
    };
    Insert: {
      id?: string;
      name: string;
      description?: string | null;
      academic_year: string;
      term: string;
      grade_level: string;
      base_amount: number;
      is_active?: boolean;
      created_at?: string;
      updated_at?: string;
    };
    Update: {
      id?: string;
      name?: string;
      description?: string | null;
      academic_year?: string;
      term?: string;
      grade_level?: string;
      base_amount?: number;
      is_active?: boolean;
      created_at?: string;
      updated_at?: string;
    };
    Relationships: [];
  };
  fee_structure_items: {
    Row: {
      id: string;
      structure_id: string;
      name: string;
      description: string | null;
      amount: number;
      is_mandatory: boolean;
      created_at: string;
    };
    Insert: {
      id?: string;
      structure_id: string;
      name: string;
      description?: string | null;
      amount: number;
      is_mandatory?: boolean;
      created_at?: string;
    };
    Update: {
      id?: string;
      structure_id?: string;
      name?: string;
      description?: string | null;
      amount?: number;
      is_mandatory?: boolean;
      created_at?: string;
    };
    Relationships: [
      {
        foreignKeyName: "fee_structure_items_structure_id_fkey";
        columns: ["structure_id"];
        referencedRelation: "fee_structures";
        referencedColumns: ["id"];
      }
    ];
  };
  payments: {
    Row: {
      id: string;
      student_id: string;
      amount: number;
      payment_date: string;
      payment_method: string;
      payment_status: string;
      payment_reference: string | null;
      notes: string | null;
      created_at: string;
      updated_at: string;
    };
    Insert: {
      id?: string;
      student_id: string;
      amount: number;
      payment_date: string;
      payment_method: string;
      payment_status?: string;
      payment_reference?: string | null;
      notes?: string | null;
      created_at?: string;
      updated_at?: string;
    };
    Update: {
      id?: string;
      student_id?: string;
      amount?: number;
      payment_date?: string;
      payment_method?: string;
      payment_status?: string;
      payment_reference?: string | null;
      notes?: string | null;
      created_at?: string;
      updated_at?: string;
    };
    Relationships: [
      {
        foreignKeyName: "payments_student_id_fkey";
        columns: ["student_id"];
        referencedRelation: "students";
        referencedColumns: ["id"];
      }
    ];
  };
  payment_items: {
    Row: {
      id: string;
      payment_id: string;
      fee_item_name: string;
      amount: number;
      created_at: string;
    };
    Insert: {
      id?: string;
      payment_id: string;
      fee_item_name: string;
      amount: number;
      created_at?: string;
    };
    Update: {
      id?: string;
      payment_id?: string;
      fee_item_name?: string;
      amount?: number;
      created_at?: string;
    };
    Relationships: [
      {
        foreignKeyName: "payment_items_payment_id_fkey";
        columns: ["payment_id"];
        referencedRelation: "payments";
        referencedColumns: ["id"];
      }
    ];
  };
  student_balances: {
    Row: {
      id: string;
      student_id: string;
      fee_structure_id: string;
      balance: number;
      last_updated: string;
      created_at: string;
    };
    Insert: {
      id?: string;
      student_id: string;
      fee_structure_id: string;
      balance: number;
      last_updated?: string;
      created_at?: string;
    };
    Update: {
      id?: string;
      student_id?: string;
      fee_structure_id?: string;
      balance?: number;
      last_updated?: string;
      created_at?: string;
    };
    Relationships: [
      {
        foreignKeyName: "student_balances_student_id_fkey";
        columns: ["student_id"];
        referencedRelation: "students";
        referencedColumns: ["id"];
      },
      {
        foreignKeyName: "student_balances_fee_structure_id_fkey";
        columns: ["fee_structure_id"];
        referencedRelation: "fee_structures";
        referencedColumns: ["id"];
      }
    ];
  };
}

export type ExtendedDatabase = {
  public: {
    Tables: Database['public']['Tables'] & ExtendedTables;
    Views: Database['public']['Views'];
    Functions: Database['public']['Functions'];
    Enums: Database['public']['Enums'];
    CompositeTypes: Database['public']['CompositeTypes'];
  };
};
