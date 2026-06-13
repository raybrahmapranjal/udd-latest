"use server";

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function updateProfileAction(prevState: any, formData: FormData) {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll() { return cookieStore.getAll(); } } }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { success: false, message: "Unauthorized" };

  const fullName = formData.get('full_name') as string;
  const phone = formData.get('phone') as string;
  const userType = formData.get('user_type') as string;
  const password = formData.get('password') as string;

  // 1. Update Profile Table
  const { error: profileError } = await supabase
    .from('profiles')
    .update({ 
      full_name: fullName, 
      phone: phone,
      role: userType // Updating user role
    })
    .eq('id', user.id);

  // 2. Update Password (if provided)
  if (password && password.length >= 6) {
    await supabase.auth.updateUser({ password });
  }

  if (profileError) return { success: false, message: profileError.message };
  return { success: true, message: "Profile updated successfully." };
}