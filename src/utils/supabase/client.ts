import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // This initializes the Supabase client using your environment variables
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}