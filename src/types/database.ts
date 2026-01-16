export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      account_links: {
        Row: {
          id: string;
          linked_at: string | null;
          linked_email: string | null;
          linked_provider: string;
          linked_provider_id: string;
          primary_auth_user_id: string;
        };
        Insert: {
          id?: string;
          linked_at?: string | null;
          linked_email?: string | null;
          linked_provider: string;
          linked_provider_id: string;
          primary_auth_user_id: string;
        };
        Update: {
          id?: string;
          linked_at?: string | null;
          linked_email?: string | null;
          linked_provider?: string;
          linked_provider_id?: string;
          primary_auth_user_id?: string;
        };
        Relationships: [];
      };
      audit_logs: {
        Row: {
          auth_user_id: string | null;
          created_at: string | null;
          event_data: Json | null;
          event_type: string;
          id: string;
          ip_address: string | null;
          user_agent: string | null;
        };
        Insert: {
          auth_user_id?: string | null;
          created_at?: string | null;
          event_data?: Json | null;
          event_type: string;
          id?: string;
          ip_address?: string | null;
          user_agent?: string | null;
        };
        Update: {
          auth_user_id?: string | null;
          created_at?: string | null;
          event_data?: Json | null;
          event_type?: string;
          id?: string;
          ip_address?: string | null;
          user_agent?: string | null;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          auth_user_id: string;
          avatar_url: string | null;
          created_at: string | null;
          deleted_at: string | null;
          email: string | null;
          id: string;
          name: string | null;
          provider: string;
          provider_id: string;
          updated_at: string | null;
        };
        Insert: {
          auth_user_id: string;
          avatar_url?: string | null;
          created_at?: string | null;
          deleted_at?: string | null;
          email?: string | null;
          id?: string;
          name?: string | null;
          provider: string;
          provider_id: string;
          updated_at?: string | null;
        };
        Update: {
          auth_user_id?: string;
          avatar_url?: string | null;
          created_at?: string | null;
          deleted_at?: string | null;
          email?: string | null;
          id?: string;
          name?: string | null;
          provider?: string;
          provider_id?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];

export type TablesInsert<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Insert"];

export type TablesUpdate<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Update"];
