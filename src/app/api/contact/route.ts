import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Direct basic server validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // In a production environment, you would log to database or trigger email/admin notifications.
    console.log("Contact form message received:", body);

    return NextResponse.json({
      success: true,
      message: "Your message has been received successfully."
    });
  } catch (error: any) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process message submission" },
      { status: 500 }
    );
  }
}
