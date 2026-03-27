import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen bg-kek-cream flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Dice icon */}
        <div className="w-24 h-24 bg-kek-purple/5 rounded-2xl flex items-center justify-center mx-auto mb-8 border-2 border-kek-purple/10">
          <svg
            viewBox="0 0 24 24"
            className="w-12 h-12 text-kek-purple"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-5-5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          </svg>
        </div>

        <h1 className="font-display text-5xl font-bold mb-4">
          <span className="text-gradient">404</span>
        </h1>
        <p className="font-display text-2xl font-bold text-kek-dark mb-3">
          Seite nicht gefunden
        </p>
        <p className="text-kek-dark/60 mb-8">
          Diese Seite scheint nicht zu existieren. Vielleicht wurde sie
          verschoben oder der Link ist fehlerhaft.
        </p>
        <Link href="/" className="btn-primary">
          Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
