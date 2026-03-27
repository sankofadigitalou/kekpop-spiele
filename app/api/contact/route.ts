import { NextResponse } from "next/server";

const ALLOWED_SUBJECTS = ["general", "press", "business", "feedback"];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

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

    // TODO: Wire up Resend email sending once RESEND_API_KEY is configured
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Kekpop Spiele <noreply@kekpop.sankofa-digital.ai>',
    //   to: ['info@kekpop-spiele.de'],
    //   subject: `[${subject}] Neue Anfrage von ${name}`,
    //   text: `Name: ${name}\nE-Mail: ${email}\nBetreff: ${subject}\n\nNachricht:\n${message}`,
    // });

    console.log("Contact form submission:", { name, email, subject, message: message.substring(0, 100) });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten." },
      { status: 500 }
    );
  }
}
