import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Store in Supabase
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { error: dbError } = await supabase
      .from("bookings")
      .insert({ name, email, message: message || "" });

    if (dbError) {
      console.error("Supabase error:", dbError);
    }

    // Send email notification via Resend
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.NOTIFICATION_EMAIL || "your@gmail.com",
      subject: `[Portfolio] New Call Booking from ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #f0f0ff; padding: 32px; border-radius: 12px; border: 1px solid #6246ff40;">
          <h2 style="color: #a78bfa; margin-bottom: 24px;">New Call Booking Request</h2>
          <div style="background: #1a1a2e; padding: 20px; border-radius: 8px; margin-bottom: 16px;">
            <p><strong style="color: #22d3ee;">Name:</strong> ${name}</p>
            <p><strong style="color: #22d3ee;">Email:</strong> <a href="mailto:${email}" style="color: #a78bfa;">${email}</a></p>
          </div>
          ${message ? `
          <div style="background: #1a1a2e; padding: 20px; border-radius: 8px;">
            <p><strong style="color: #22d3ee;">Notes:</strong></p>
            <p style="line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>` : ""}
          <div style="margin-top: 24px; padding: 16px; background: #6246ff20; border-radius: 8px; border: 1px solid #6246ff50;">
            <p style="color: #a78bfa; margin: 0;">They will complete booking on your Cal.com page. Follow up if needed.</p>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 24px;">Sent from shivenpaudyal.dev portfolio</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json({ error: "Failed to process booking" }, { status: 500 });
  }
}
