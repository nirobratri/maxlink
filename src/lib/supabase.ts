/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Safety check: Detect if the key is a service_role key
if (supabaseAnonKey && supabaseAnonKey.includes('service_role')) {
  console.error('CRITICAL SECURITY ERROR: You are using a SERVICE_ROLE key in the browser. This is forbidden and will cause the "Forbidden use of secret API key" error. Please replace it with the ANON/PUBLIC key in your AI Studio Secrets.');
}

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials missing. Please check your AI Studio Secrets.');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);
