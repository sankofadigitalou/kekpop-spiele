import Link from "next/link";

export const metadata = {
  title: "Datenschutz — Kekpop Spiele",
  description:
    "Datenschutzerklärung von Kekpop Spiele. Informationen zur Datenverarbeitung.",
  openGraph: {
    title: "Datenschutz — Kekpop Spiele",
    description: "Datenschutzerklärung von Kekpop Spiele.",
    type: "website" as const,
    locale: "de_DE",
  },
};

export default function Datenschutz() {
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
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl font-bold mb-8">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-lg max-w-none text-kek-dark/70 space-y-6">
          <h2 className="font-display text-2xl font-bold text-kek-dark mt-8">
            1. Datenschutz auf einen Blick
          </h2>

          <h3 className="font-display text-xl font-bold text-kek-dark mt-6">
            Allgemeine Hinweise
          </h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <h3 className="font-display text-xl font-bold text-kek-dark mt-6">
            Datenerfassung auf dieser Website
          </h3>
          <p>
            <strong>
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </strong>
          </p>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
            dieser Website entnehmen.
          </p>

          <h2 className="font-display text-2xl font-bold text-kek-dark mt-8">
            2. Hosting
          </h2>
          <p>
            Diese Website wird bei einem externen Dienstleister gehostet
            (Hoster). Die personenbezogenen Daten, die auf dieser Website
            erfasst werden, werden auf den Servern des Hosters gespeichert.
            Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta-
            und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
            Websitezugriffe und sonstige Daten, die über eine Website generiert
            werden, handeln.
          </p>

          <h2 className="font-display text-2xl font-bold text-kek-dark mt-8">
            3. Allgemeine Hinweise und Pflichtinformationen
          </h2>

          <h3 className="font-display text-xl font-bold text-kek-dark mt-6">
            Datenschutz
          </h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3 className="font-display text-xl font-bold text-kek-dark mt-6">
            Hinweis zur verantwortlichen Stelle
          </h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
          </p>
          <p>
            Kekpop Spiele
            <br />
            Mathias Wigge
            <br />
            [Adresse wird ergänzt]
            <br />
            E-Mail: info@kekpop-spiele.de
          </p>

          <h2 className="font-display text-2xl font-bold text-kek-dark mt-8">
            4. Datenerfassung auf dieser Website
          </h2>

          <h3 className="font-display text-xl font-bold text-kek-dark mt-6">
            Kontaktformular
          </h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
            nicht ohne Ihre Einwilligung weiter.
          </p>

          <h3 className="font-display text-xl font-bold text-kek-dark mt-6">
            Server-Log-Dateien
          </h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch
            Informationen in so genannten Server-Log-Dateien, die Ihr Browser
            automatisch an uns übermittelt. Dies sind: Browsertyp und
            Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname
            des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
          </p>

          <h2 className="font-display text-2xl font-bold text-kek-dark mt-8">
            5. Ihre Rechte
          </h2>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
            Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
            Datenverarbeitung erteilt haben, können Sie diese Einwilligung
            jederzeit für die Zukunft widerrufen. Hierzu sowie zu weiteren
            Fragen zum Thema Datenschutz können Sie sich jederzeit an uns
            wenden.
          </p>
        </div>
      </main>
    </div>
  );
}
