"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const body = await res.json().catch(() => null);
        setError(
          body?.error || "Etwas ist schiefgelaufen. Bitte versuche es erneut."
        );
      }
    } catch {
      setError(
        "Verbindungsfehler. Bitte prüfe deine Internetverbindung und versuche es erneut."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="kontakt"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: Info */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block font-display text-sm font-semibold text-kek-purple uppercase tracking-widest mb-4">
              Kontakt
            </span>
            <h2 className="section-title mb-6">
              Lass uns
              <span className="text-gradient-purple"> spielen</span>
            </h2>
            <p className="section-subtitle mb-10">
              Fragen, Vorschläge oder Interesse an einer Zusammenarbeit?
              Wir freuen uns auf deine Nachricht.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="game-card p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-kek-purple/5 rounded-xl flex items-center justify-center text-kek-purple shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-display font-semibold text-kek-dark">
                    E-Mail
                  </div>
                  <a
                    href="mailto:info@kekpop-spiele.de"
                    className="text-kek-dark/60 hover:text-kek-purple transition-colors"
                  >
                    info@kekpop-spiele.de
                  </a>
                </div>
              </div>

              <div className="game-card p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-kek-green/5 rounded-xl flex items-center justify-center text-kek-green shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-display font-semibold text-kek-dark">
                    Web
                  </div>
                  <a
                    href="https://mathiaswigge.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-kek-dark/60 hover:text-kek-purple transition-colors"
                  >
                    mathiaswigge.com
                  </a>
                </div>
              </div>

              <div className="game-card p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-kek-amber/5 rounded-xl flex items-center justify-center text-kek-amber shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-display font-semibold text-kek-dark">
                    Standort
                  </div>
                  <span className="text-kek-dark/60">Deutschland</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {submitted ? (
              <div className="game-card p-8 md:p-10 border border-kek-green/20 text-center">
                <div className="w-16 h-16 bg-kek-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-kek-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">
                  Nachricht gesendet!
                </h3>
                <p className="text-kek-dark/60 mb-6">
                  Vielen Dank für deine Nachricht. Wir melden uns so schnell wie
                  möglich bei dir.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Neue Nachricht senden
                </button>
              </div>
            ) : (
              <form
                className="game-card p-8 md:p-10 border border-kek-purple/10"
                onSubmit={handleSubmit}
              >
                <h3 className="font-display text-2xl font-bold mb-6">
                  Nachricht senden
                </h3>

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-display font-semibold text-kek-dark/70 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Dein Name"
                      className="w-full px-4 py-3 bg-kek-cream/50 border border-kek-purple/10 rounded-xl font-body text-kek-dark placeholder:text-kek-dark/30 focus:outline-none focus:ring-2 focus:ring-kek-purple/20 focus:border-kek-purple/30 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-display font-semibold text-kek-dark/70 mb-2"
                    >
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="deine@email.de"
                      className="w-full px-4 py-3 bg-kek-cream/50 border border-kek-purple/10 rounded-xl font-body text-kek-dark placeholder:text-kek-dark/30 focus:outline-none focus:ring-2 focus:ring-kek-purple/20 focus:border-kek-purple/30 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-display font-semibold text-kek-dark/70 mb-2"
                    >
                      Betreff
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 bg-kek-cream/50 border border-kek-purple/10 rounded-xl font-body text-kek-dark focus:outline-none focus:ring-2 focus:ring-kek-purple/20 focus:border-kek-purple/30 transition-all"
                    >
                      <option value="" disabled>
                        Bitte wählen...
                      </option>
                      <option value="general">Allgemeine Anfrage</option>
                      <option value="press">Presse &amp; Medien</option>
                      <option value="business">Geschäftliche Anfrage</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-display font-semibold text-kek-dark/70 mb-2"
                    >
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      maxLength={2000}
                      placeholder="Deine Nachricht..."
                      className="w-full px-4 py-3 bg-kek-cream/50 border border-kek-purple/10 rounded-xl font-body text-kek-dark placeholder:text-kek-dark/30 focus:outline-none focus:ring-2 focus:ring-kek-purple/20 focus:border-kek-purple/30 transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="p-4 bg-kek-red/5 border border-kek-red/20 rounded-xl text-kek-red text-sm font-medium"
                    >
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  >
                    {submitting ? (
                      <>
                        <svg
                          className="w-5 h-5 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                          />
                        </svg>
                        Nachricht senden
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
