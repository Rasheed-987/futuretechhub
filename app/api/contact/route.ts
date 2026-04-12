import { NextResponse } from "next/server";
import { escapeHtml, sendWebsiteEmail } from "@/lib/mailer";

export const runtime = "nodejs";

type ContactRequestBody = {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
};

const normalize = (value: unknown) => (typeof value === "string" ? value.trim() : "");
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    const name = normalize(body.name);
    const email = normalize(body.email);
    const phone = normalize(body.phone);
    const interest = normalize(body.interest);
    const message = normalize(body.message);

    if (!name || !email || !interest || !message || !isValidEmail(email)) {
      return NextResponse.json(
        { message: "Please complete all required fields with valid details." },
        { status: 400 },
      );
    }

    const submittedAt = new Date().toISOString();
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeInterest = escapeHtml(interest);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    await sendWebsiteEmail({
      subject: `New Contact Inquiry - ${interest}`,
      replyTo: email,
      text: [
        "New contact inquiry",
        `Submitted at: ${submittedAt}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Interest: ${interest}`,
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Submitted at:</strong> ${escapeHtml(submittedAt)}</p>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Interest:</strong> ${safeInterest}</p>
        <p><strong>Message:</strong><br />${safeMessage}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email send failed", error);
    return NextResponse.json(
      { message: "Unable to send your inquiry right now. Please try again." },
      { status: 500 },
    );
  }
}
