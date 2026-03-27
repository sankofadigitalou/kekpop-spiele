"use client";

import { useEffect, useRef, useState } from "react";

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <section
      id="gruender"
      ref={sectionRef}
      className="relative py-24 md:py-32 game-table-bg overflow-hidden"
    >
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-hex-pattern opacity-20" />

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 border border-kek-purple-light/10 hex-shape animate-spin-slow" />
      <div
        className="absolute bottom-20 left-10 w-16 h-16 bg-kek-amber/5 rounded-full animate-float-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Portrait Placeholder */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Main Portrait Area */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-kek-purple/20 via-kek-purple/10 to-kek-amber/10 border border-white/10">
                {/* Placeholder Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  {/* Stylized Initials */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-kek-purple to-kek-purple-dark flex items-center justify-center mb-6 shadow-2xl shadow-kek-purple/30">
                    <span className="font-display text-5xl font-bold text-white">
                      MW
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Mathias Wigge
                  </h3>
                  <p className="text-white/50 font-display">
                    Game Designer & Gründer
                  </p>
                </div>

                {/* Decorative Corner Accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-kek-amber/30 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-kek-amber/30 rounded-br-lg" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 md:right-auto md:-left-6 bg-white rounded-2xl p-4 shadow-xl shadow-kek-dark/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-kek-amber/10 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-kek-amber"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-bold text-kek-dark text-sm">
                      Deutscher Spielepreis
                    </div>
                    <div className="text-xs text-kek-dark/50">
                      Gewinner 2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <span className="inline-block font-display text-sm font-semibold text-kek-purple-light uppercase tracking-widest mb-4">
              Der Gründer
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Mathias Wigge
            </h2>
            <div className="space-y-4 text-white/70 text-lg leading-relaxed">
              <p>
                Mathias Wigge ist ein preisgekrönter Game Designer und der kreative
                Kopf hinter <strong className="text-white">Kekpop Spiele</strong>.
                Als Schöpfer des internationalen Bestsellers{" "}
                <strong className="text-kek-amber">Arche Nova</strong> hat er
                bewiesen, dass durchdachtes Spieldesign Millionen begeistern kann.
              </p>
              <p>
                Arche Nova wurde in über 40 Sprachen übersetzt und mit dem
                prestigeträchtigen{" "}
                <strong className="text-kek-amber">
                  Deutschen Spielepreis 2022
                </strong>{" "}
                ausgezeichnet. Das Spiel kombiniert auf einzigartige Weise
                strategische Tiefe mit einem leidenschaftlichen Thema —
                Artenschutz und Zoomanagement.
              </p>
              <p>
                Mit der Gründung von Kekpop Spiele geht Mathias den nächsten
                Schritt: ein eigenes Unternehmen, das seine Vision von
                innovativem, zugänglichem und nachhaltigem Game Design
                verwirklicht.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://mathiaswigge.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-display font-semibold rounded-xl border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                mathiaswigge.com
              </a>
              <a
                href="https://archenova-brettspiel.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-kek-green/20 backdrop-blur-sm text-kek-green font-display font-semibold rounded-xl border border-kek-green/20 hover:bg-kek-green/30 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Arche Nova
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
