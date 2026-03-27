"use client";

import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    channel: "Shut Up & Sit Down",
    title: "Ark Nova Review",
    quote: "Phenomenal... It does everything right, this game is a miracle of design.",
    url: "https://www.shutupandsitdown.com/videos/review-ark-nova/",
    lang: "EN",
  },
  {
    channel: "The Dice Tower",
    title: "Ark Nova Review",
    quote: "An incredible game in just about every dimension.",
    url: "https://www.dicetower.com/video/ark-nova-review-oliver-east",
    lang: "EN",
  },
  {
    channel: "Spiel doch mal!",
    title: "Arche Nova Rezension",
    quote: "Ein bemerkenswertes Spielerlebnis, das immer wieder neu auf den Tisch kommt.",
    url: "https://boardgamegeek.com/video/363635/ark-nova/spiel-doch-mal-arche-nova-brettspiel-rezension-mei",
    lang: "DE",
  },
  {
    channel: "Meeple Mountain",
    title: "Ark Nova — First Take",
    quote: "A fine breed of strategy game that stands above most competitors.",
    url: "https://www.meeplemountain.com/reviews/ark-nova-first-take/",
    lang: "EN",
  },
];

const awards = [
  { name: "Deutscher Spielepreis 2022", icon: "trophy" },
  { name: "BGG #3 Weltweit", icon: "chart" },
  { name: "International Gamers Award", icon: "globe" },
  { name: "Swiss Gamers Award", icon: "trophy" },
  { name: "Kennerspiel des Jahres — Empfohlen", icon: "star" },
  { name: "Golden Geek Award", icon: "trophy" },
];

const socialLinks = [
  {
    name: "BoardGameGeek",
    url: "https://boardgamegeek.com/boardgame/342942/ark-nova",
    description: "Platz #3 — Über 50.000 Bewertungen",
  },
  {
    name: "Gamefound",
    url: "https://gamefound.com/en/projects/kekpop-spiele/ark-nova",
    description: "Ark Nova 3DITION Kampagne",
  },
  {
    name: "Steam / Digital",
    url: "https://store.steampowered.com/app/2438990/Ark_Nova/",
    description: "Ark Nova Digital von Dire Wolf",
  },
  {
    name: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Ark_Nova",
    description: "Hintergrund und Geschichte",
  },
];

export default function Media() {
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
      id="media"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span
            className={`inline-block font-display text-sm font-semibold text-kek-purple uppercase tracking-widest mb-4 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Presse & Medien
          </span>
          <h2
            className={`section-title mb-6 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Was die Welt
            <span className="text-gradient-purple"> sagt</span>
          </h2>
          <p
            className={`section-subtitle mx-auto transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Arche Nova hat weltweit Kritiker und Spieler begeistert.
            Entdecke Reviews, Auszeichnungen und mehr.
          </p>
        </div>

        {/* Awards Ribbon */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {awards.map((award) => (
            <div
              key={award.name}
              className="flex items-center gap-2 px-5 py-3 bg-kek-amber/5 border border-kek-amber/15 rounded-xl"
            >
              <svg className="w-5 h-5 text-kek-amber shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {award.icon === "trophy" && (
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                )}
                {award.icon === "chart" && (
                  <path d="M3 13h2v8H3v-8zm5-4h2v12H8V9zm5-6h2v18h-2V3zm5 8h2v10h-2V11z" />
                )}
                {award.icon === "globe" && (
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                )}
                {award.icon === "star" && (
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                )}
              </svg>
              <span className="font-display text-sm font-semibold text-kek-dark/70">
                {award.name}
              </span>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {reviews.map((review, index) => (
            <a
              key={review.channel}
              href={review.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`game-card p-8 group border border-kek-purple/5 hover:border-kek-purple/20 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-0.5 bg-kek-purple/5 rounded font-display font-semibold text-kek-purple/60">
                      {review.lang}
                    </span>
                    <span className="font-display font-bold text-kek-dark">
                      {review.channel}
                    </span>
                  </div>
                  <span className="text-sm text-kek-dark/40">
                    {review.title}
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-kek-dark/20 group-hover:text-kek-purple transition-colors shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
              <blockquote className="text-kek-dark/70 text-lg italic leading-relaxed">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
            </a>
          ))}
        </div>

        {/* Social & External Links */}
        <div
          className={`transition-all duration-700 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-display text-2xl font-bold text-center mb-8">
            Mehr entdecken
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="game-card p-6 group border border-kek-purple/5 hover:border-kek-purple/20 text-center"
              >
                <div className="font-display font-bold text-kek-dark group-hover:text-kek-purple transition-colors mb-1">
                  {link.name}
                </div>
                <div className="text-sm text-kek-dark/50">
                  {link.description}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
