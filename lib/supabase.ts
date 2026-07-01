import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Detect if we have Supabase configuration. If not, use mock client in development.
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

// Define standard types for our inquiries to ensure database consistency
export interface InquiryData {
  name: string;
  email: string;
  phone?: string;
  degree_level?: string;
  study_field?: string;
  message?: string;
}

// Development Mock Client to allow immediate local testing without Supabase setup
const mockSupabaseClient = {
  from: (table: string) => {
    return {
      insert: async (data: any) => {
        console.log(`[Supabase Mock] Inserting into table "${table}":`, data);
        // Simulate network latency
        await new Promise((resolve) => setTimeout(resolve, 800));
        return {
          data: [{ id: 'mock-uuid-12345', created_at: new Date().toISOString(), ...data }],
          error: null,
        };
      },
      select: async () => {
        console.log(`[Supabase Mock] Selecting from table "${table}"`);
        await new Promise((resolve) => setTimeout(resolve, 500));
        return { data: [], error: null };
      }
    };
  }
};

// Instantiate the actual or mock client
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : (mockSupabaseClient as any);
