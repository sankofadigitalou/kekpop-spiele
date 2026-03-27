"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
      <div className="absolute top-10 right-10 w-24 h-24 border border-kek-purple-light/10 hex-shape animate-spin-slow" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Real Photo */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Main Portrait */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-kek-purple/20">
                <Image
                  src="/images/mathias-wigge.webp"
                  alt="Mathias Wigge — Game Designer und Gründer von Kekpop Spiele"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient Overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-kek-dark/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-display text-2xl font-bold text-white">
                    Mathias Wigge
                  </h3>
                  <p className="text-white/70 font-display">
                    Game Designer &amp; Gründer
                  </p>
                </div>
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-kek-amber/40 rounded-tl-lg" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-kek-amber/40 rounded-br-lg" />

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 md:right-auto md:-left-6 bg-white rounded-2xl p-4 shadow-xl shadow-kek-dark/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-kek-amber/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-kek-amber" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-bold text-kek-dark text-sm">
                      Deutscher Spielepreis
                    </div>
                    <div className="text-xs text-kek-dark/50">Gewinner 2022</div>
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
                Mit viel Liebe zum Thema hat der preisgekrönte Spieleautor Mathias
                Wigge ein interessantes und verwobenes Spiel geschaffen. Mit hoher
                Wiederspielbarkeit und reichhaltigen Komponenten bietet{" "}
                <strong className="text-kek-amber">Arche Nova</strong> ein
                bemerkenswertes Spielerlebnis.
              </p>
              <p>
                Arche Nova wurde in über 40 Sprachen übersetzt, erreichte{" "}
                <strong className="text-white">Platz #3 auf BoardGameGeek</strong>{" "}
                und gewann den{" "}
                <strong className="text-kek-amber">
                  Deutschen Spielepreis 2022
                </strong>
                , den Swiss Gamers Award und den International Gamers Award.
              </p>
              <p>
                Mit <strong className="text-white">Kekpop Spiele</strong> und der{" "}
                <strong className="text-kek-amber">Ark Nova 3DITION</strong> auf
                Gamefound (über 2 Mio. € und 7.900+ Unterstützer) geht Mathias
                den nächsten Schritt: ein eigenes Unternehmen, das seine Vision
                von innovativem Game Design verwirklicht.
              </p>
            </div>

            {/* Services */}
            <div className="flex flex-wrap gap-3 mt-6 mb-8">
              {["Entwicklung", "Playtesting", "Beratung"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-white/80 font-display text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://mathiaswigge.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-display font-semibold rounded-xl border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" />
                </svg>
                mathiaswigge.com
              </a>
              <a
                href="https://gamefound.com/en/projects/kekpop-spiele/ark-nova"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-kek-purple/30 backdrop-blur-sm text-kek-purple-light font-display font-semibold rounded-xl border border-kek-purple/20 hover:bg-kek-purple/40 transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Gamefound 3DITION
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
