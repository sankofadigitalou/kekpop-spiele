import Link from "next/link";

export const metadata = {
  title: "Impressum — Kekpop Spiele",
  description: "Impressum und Angaben gemäß § 5 TMG für Kekpop Spiele.",
  openGraph: {
    title: "Impressum — Kekpop Spiele",
    description: "Impressum und Angaben gemäß § 5 TMG für Kekpop Spiele.",
    type: "website" as const,
    locale: "de_DE",
  },
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-kek-cream">
      {/* Header */}
      <header className="bg-white border-b border-kek-purple/10">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-kek-purple rounded-xl flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="currentColor"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-5-5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
              </svg>
            </div>
            <span className="font-display text-xl font-bold text-kek-dark">
              Kekpop <span className="text-kek-purple">Spiele</span>
            </span>
          </Link>
          <Link
            href="/"
            className="font-display text-sm font-medium text-kek-dark/60 hover:text-kek-purple transition-colors"
          >
            &larr; Zurück
          </Link>
        </div>
      </header>

      {/* Content */}
      <main id="main-content" className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl font-bold mb-8">Impressum</h1>

        <div className="max-w-none text-kek-dark/70 space-y-6 leading-relaxed">
          <h2 className="font-display text-2xl font-bold text-kek-dark mt-8">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            Kekpop Spiele
            <br />
            Mathias Wigge
            <br />
            [Adresse wird ergänzt]
            <br />
            Deutschland
          </p>

          <h2 className="font-display text-2xl font-bold text-kek-dark mt-8">
            Kontakt
          </h2>
          <p>
            E-Mail: info@kekpop-spiele.de
          </p>

          <h2 className="font-display text-2xl font-bold text-kek-dark mt-8">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>
            Mathias Wigge
            <br />
            [Adresse wird ergänzt]
          </p>

          <h2 className="font-display text-2xl font-bold text-kek-dark mt-8">
            Haftungsausschluss
          </h2>

          <h3 className="font-display text-xl font-bold text-kek-dark mt-6">
            Haftung für Inhalte
          </h3>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
            gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich.
          </p>

          <h3 className="font-display text-xl font-bold text-kek-dark mt-6">
            Haftung für Links
          </h3>
          <p>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>

          <h3 className="font-display text-xl font-bold text-kek-dark mt-6">
            Urheberrecht
          </h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </main>
    </div>
  );
}
