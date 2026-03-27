import { NextResponse } from "next/server";
import { Resend } from "resend";

const ALLOWED_SUBJECTS = ["general", "press", "business", "feedback"];

const SUBJECT_LABELS: Record<string, string> = {
  general: "Allgemeine Anfrage",
  press: "Presse & Medien",
  business: "Geschäftliche Anfrage",
  feedback: "Feedback",
};

function sanitize(input: string): string {
  return input.replace(/[<>]/g, "").trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = sanitize(String(body.name || ""));
    const email = sanitize(String(body.email || ""));
    const subject = String(body.subject || "");
    const message = sanitize(String(body.message || ""));

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Alle Felder sind erforderlich." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Ungültige E-Mail-Adresse." },
        { status: 400 }
      );
    }

    // Validate subject
    if (!ALLOWED_SUBJECTS.includes(subject)) {
      return NextResponse.json(
        { error: "Ungültiger Betreff." },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length > 2000) {
      return NextResponse.json(
        { error: "Nachricht ist zu lang (max. 2000 Zeichen)." },
        { status: 400 }
      );
    }

    // Send email via Resend if API key is configured
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Kekpop Spiele <noreply@kekpop.sankofa-digital.ai>",
        to: ["info@kekpop-spiele.de"],
        reply_to: email,
        subject: `[${SUBJECT_LABELS[subject]}] Neue Anfrage von ${name}`,
        text: `Name: ${name}\nE-Mail: ${email}\nBetreff: ${SUBJECT_LABELS[subject]}\n\nNachricht:\n${message}`,
      });
    } else {
      // Log as fallback when Resend is not configured
      console.log("Contact form submission (no RESEND_API_KEY):", {
        name,
        email,
        subject,
        message: message.substring(0, 100),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuche es später erneut." },
      { status: 500 }
    );
  }
}
