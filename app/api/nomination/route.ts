import { NextResponse } from "next/server";
import { escapeHtml, sendWebsiteEmail } from "@/lib/mailer";

export const runtime = "nodejs";

type NominationRequestBody = {
  name?: string;
  org?: string;
  email?: string;
  reason?: string;
};

const normalize = (value: unknown) => (typeof value === "string" ? value.trim() : "");
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as NominationRequestBody;

    const name = normalize(body.name);
    const org = normalize(body.org);
    const email = normalize(body.email);
    const reason = normalize(body.reason);

    if (!name || !org || !email || !reason || !isValidEmail(email)) {
      return NextResponse.json(
        { message: "Please complete all required fields with valid details." },
        { status: 400 },
      );
    }

    const submittedAt = new Date().toISOString();
    const safeName = escapeHtml(name);
    const safeOrg = escapeHtml(org);
    const safeEmail = escapeHtml(email);
    const safeReason = escapeHtml(reason).replace(/\n/g, "<br />");

    await sendWebsiteEmail({
      subject: `New Nomination Request - ${org}`,
      replyTo: email,
      text: [
        "New nomination request",
        `Submitted at: ${submittedAt}`,
        `Name: ${name}`,
        `Organization: ${org}`,
        `Email: ${email}`,
        "Reason:",
        reason,
      ].join("\n"),
      html: `
        <h2>New Nomination Request</h2>
        <p><strong>Submitted at:</strong> ${escapeHtml(submittedAt)}</p>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Organization:</strong> ${safeOrg}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Reason:</strong><br />${safeReason}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Nomination email send failed", error);
    return NextResponse.json(
      { message: "Unable to send your request right now. Please try again." },
      { status: 500 },
    );
  }
}
