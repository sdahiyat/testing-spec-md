import { createClientComponentClient, createServerComponentClient, createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import type { Database } from '@/types/database'

// Client-side Supabase client
export const createClientSupabase = () => createClientComponentClient<Database>()

// Server-side Supabase client for Server Components
export const createServerSupabase = () => createServerComponentClient<Database>({ cookies })

// Server-side Supabase client for Route Handlers
export const createRouteHandlerSupabase = () => createRouteHandlerClient<Database>({ cookies })

// Service role client for admin operations
export const createServiceSupabase = () => {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('Missing Supabase environment variables')
  }
  
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    }
  )
}
