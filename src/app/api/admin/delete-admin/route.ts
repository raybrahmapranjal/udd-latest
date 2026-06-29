import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();

    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // 1. Delete from Auth (This triggers the delete, but might not remove the profile record)
    const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(userId);
    if (authError) return Response.json({ error: authError.message }, { status: 400 });

    // 2. Explicitly delete the profile record to ensure UI consistency
    const { error: dbError } = await supabaseAdmin
      .from('profiles')
      .delete()
      .eq('id', userId);

    if (dbError) return Response.json({ error: dbError.message }, { status: 400 });

    return Response.json({ success: true });
  } catch (err: any) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}