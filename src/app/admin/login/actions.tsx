'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    // If login fails, redirect back to login page with an error message
    redirect('/admin/login?error=Authentication failed')
  }

  // Clear cache and redirect to the dashboard
  revalidatePath('/admin', 'layout')
  redirect('/admin')
}