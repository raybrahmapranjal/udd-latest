import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // DEBUGGING STEP: Log to see if the server actually sees the key
  console.log("Service Key Loaded:", !!process.env.SUPABASE_SERVICE_ROLE_KEY);

  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json(
      { error: "Configuration Error: SUPABASE_SERVICE_ROLE_KEY is not defined on the server" }, 
      { status: 500 }
    );
  }

  try {
    const { userId } = await req.json();
    
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error } = await supabaseAdmin.auth.admin.deleteUser(userId);

    if (error) return NextResponse.json({ error: error.message }, { status: 400 });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}