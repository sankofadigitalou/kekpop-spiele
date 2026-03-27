import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-kek-dark text-white overflow-hidden">
      {/* Top Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-kek-purple via-kek-amber to-kek-green" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-kek-purple rounded-xl flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-5-5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
              </div>
              <span className="font-display text-xl font-bold">
                Kekpop <span className="text-kek-purple-light">Spiele</span>
              </span>
            </div>
            <p className="text-white/50 max-w-md leading-relaxed">
              Innovative Brettspiele von Game Designer Mathias Wigge.
              Vom Schöpfer des preisgekrönten Arche Nova.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white/80">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "Über uns" },
                { href: "#spiele", label: "Spiele" },
                { href: "#gruender", label: "Gründer" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-kek-purple-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white/80">
              Rechtliches
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/impressum"
                  className="text-white/40 hover:text-kek-purple-light transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-white/40 hover:text-kek-purple-light transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>

            {/* External Links */}
            <h4 className="font-display font-semibold mb-4 mt-8 text-white/80">
              Extern
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://mathiaswigge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-kek-purple-light transition-colors"
                >
                  mathiaswigge.com
                </a>
              </li>
              <li>
                <a
                  href="https://archenova-brettspiel.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-kek-purple-light transition-colors"
                >
                  archenova-brettspiel.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Kekpop Spiele. Alle Rechte
            vorbehalten.
          </p>
          <p className="text-white/20 text-xs">
            Website by{" "}
            <a
              href="https://sankofa-digital.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-kek-purple-light transition-colors"
            >
              Sankofa Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
