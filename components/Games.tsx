"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const resellers = [
  { name: "Amazon.de", url: "https://www.amazon.de/Feuerland-Spiele-31012-Arche-Nova/dp/B0B8VD45WM", region: "DE" },
  { name: "Thalia.de", url: "https://www.thalia.de/shop/home/artikeldetails/A1061957194", region: "DE" },
  { name: "Amazon.com", url: "https://www.amazon.com/Capstone-Games-Drafting-Management-Strategy/dp/B09L6FCP9S", region: "US" },
  { name: "Miniature Market", url: "https://www.miniaturemarket.com/csgfs5100.html", region: "US" },
  { name: "Game Nerdz", url: "https://www.gamenerdz.com/ark-nova", region: "US" },
  { name: "BoardGamePrices", url: "https://boardgameprices.com/item/show/40549/ark-nova", region: "INT" },
  { name: "TableTopFinder (EU)", url: "https://www.tabletopfinder.eu/en/boardgame/26698/ark-nova", region: "EU" },
];

export default function Games() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="spiele"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-kek-cream overflow-hidden"
    >
      <div className="absolute inset-0 bg-hex-pattern" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span
            className={`inline-block font-display text-sm font-semibold text-kek-purple uppercase tracking-widest mb-4 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Unsere Spiele
          </span>
          <h2
            className={`section-title mb-6 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Abenteuer auf dem
            <span className="text-gradient-purple"> Spieltisch</span>
          </h2>
          <p
            className={`section-subtitle mx-auto transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Entdecke unsere Spiele — von preisgekrönten Klassikern bis zu
            aufregenden Neuheiten.
          </p>
        </div>

        {/* Featured: Arche Nova */}
        <div
          className={`game-card overflow-hidden mb-12 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="h-2 bg-gradient-to-r from-kek-green via-emerald-500 to-teal-500" />
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Image */}
            <div className="relative aspect-square md:aspect-auto bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-8 md:p-12">
              <div className="relative w-full max-w-sm aspect-square">
                <Image
                  src="/images/ark-nova-box.jpg"
                  alt="Arche Nova — Brettspiel Box Cover"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
              </div>
            </div>

            {/* Right: Details */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              {/* Award Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-kek-amber/10 border border-kek-amber/20 rounded-full mb-4 w-fit">
                <svg className="w-4 h-4 text-kek-amber" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-sm font-display font-semibold text-kek-amber">
                  Deutscher Spielepreis 2022
                </span>
              </div>

              <span className="text-xs font-display font-semibold text-kek-dark/40 uppercase tracking-widest">
                Feuerland Spiele
              </span>
              <h3 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
                Arche Nova
              </h3>
              <p className="text-kek-dark/60 text-lg leading-relaxed mb-6">
                In Arche Nova plant und errichtet ihr einen modernen,
                wissenschaftlich geführten Zoo. Mit über 250 einzigartigen
                Tierkarten erlebt ihr ein strategisches Brettspiel mit hoher
                Wiederspielbarkeit. Unterstützt Artenschutzprojekte weltweit und
                baut den attraktivsten Zoo.
              </p>

              {/* Game Info */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Spieler", value: "1–4" },
                  { label: "Dauer", value: "90–150 Min" },
                  { label: "Alter", value: "14+" },
                  { label: "BGG Rang", value: "#3" },
                ].map((info) => (
                  <div key={info.label} className="text-center p-3 bg-kek-cream/50 rounded-xl">
                    <div className="font-display text-xl font-bold text-kek-purple">
                      {info.value}
                    </div>
                    <div className="text-xs text-kek-dark/50 font-medium">
                      {info.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Strategie", "Kennerspiel", "250+ Karten", "Engine Building", "Solo-Modus"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-kek-cream rounded-lg text-sm font-medium text-kek-dark/60"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://archenova-brettspiel.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-kek-green font-display font-semibold hover:gap-3 transition-all"
                >
                  Offizielle Seite
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <span className="text-kek-dark/20">|</span>
                <a
                  href="https://boardgamegeek.com/boardgame/342942/ark-nova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-kek-purple font-display font-semibold hover:gap-3 transition-all"
                >
                  BoardGameGeek
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ark Nova 3DITION + Upcoming */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* 3DITION Gamefound */}
          <div
            className={`game-card group transition-all duration-700 delay-450 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="h-2 bg-gradient-to-r from-kek-purple via-violet-500 to-fuchsia-500" />
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-violet-50 to-purple-50">
              <Image
                src="/images/gamefound-3dition.png"
                alt="Ark Nova 3DITION — Gamefound Kampagne"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-kek-green/10 border border-kek-green/20 rounded-full mb-3 text-xs font-display font-semibold text-kek-green">
                2.000.000€+ funded
              </div>
              <span className="block text-xs font-display font-semibold text-kek-dark/40 uppercase tracking-widest">
                Gamefound Kampagne
              </span>
              <h3 className="font-display text-2xl font-bold mt-1 mb-3">
                Ark Nova 3DITION
              </h3>
              <p className="text-kek-dark/60 leading-relaxed mb-4">
                Die ultimative Version von Ark Nova: 3D-Tiles, doppellagige
                Spielerbretter, Big Box Accessory Expansion mit exklusiven
                Sponsor-Karten. Über 7.900 Unterstützer auf Gamefound.
              </p>
              <a
                href="https://gamefound.com/en/projects/kekpop-spiele/ark-nova"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-kek-purple font-display font-semibold hover:gap-3 transition-all"
              >
                Auf Gamefound ansehen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Marine Worlds Expansion */}
          <div
            className={`game-card group transition-all duration-700 delay-600 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="h-2 bg-gradient-to-r from-kek-blue via-cyan-500 to-teal-500" />
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-kek-blue to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18a.94.94 0 00-.662.274" />
                  </svg>
                </div>
                <span className="font-display text-lg font-bold text-kek-dark/40">
                  Wasserwelten / Marine Worlds
                </span>
              </div>
            </div>
            <div className="p-8">
              <span className="block text-xs font-display font-semibold text-kek-dark/40 uppercase tracking-widest">
                Erweiterung
              </span>
              <h3 className="font-display text-2xl font-bold mt-1 mb-3">
                Arche Nova: Wasserwelten
              </h3>
              <p className="text-kek-dark/60 leading-relaxed mb-4">
                Die erste große Erweiterung bringt Meerestiere, Aquarien und
                neue Mechaniken. Taucht ein in die Unterwasserwelt und erweitert
                euren Zoo um faszinierende Ozeanbewohner.
              </p>
              <a
                href="https://www.amazon.de/s?k=Arche+Nova+Wasserwelten"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-kek-blue font-display font-semibold hover:gap-3 transition-all"
              >
                Erweiterung kaufen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Where to Buy */}
        <div
          className={`transition-all duration-700 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-display text-2xl font-bold text-center mb-8">
            Arche Nova kaufen
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {resellers.map((shop) => (
              <a
                key={shop.name}
                href={shop.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl border border-kek-purple/10 font-display font-medium text-kek-dark/70 hover:border-kek-purple hover:text-kek-purple hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <span className="text-xs px-2 py-0.5 bg-kek-purple/5 rounded-md font-semibold text-kek-purple/60">
                  {shop.region}
                </span>
                {shop.name}
                <svg className="w-4 h-4 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
