'use server'

import { createClient } from '@supabase/supabase-js';

export async function createAdminUser(formData: any) {
  // Use the Service Role Key to bypass RLS and avoid session switching
  const adminClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY! 
  );

  // 1. Create the Auth User
  const { data: authData, error: authErr } = await adminClient.auth.admin.createUser({
    email: formData.email,
    password: formData.password,
    email_confirm: true, // Auto-confirm the email
  });

  if (authErr) throw authErr;

  // 2. Update the profile
  // Note: The trigger should have already created the row, 
  // so we use update() to fill in the custom details.
  const { error: profileErr } = await adminClient
    .from('profiles')
    .update({
      full_name: formData.name,
      phone: formData.phone,
      ulb_id: formData.role === 'Admin' ? formData.ulb_id : null,
      role: formData.role
    })
    .eq('id', authData.user.id);

  if (profileErr) throw profileErr;

  return { success: true };
}