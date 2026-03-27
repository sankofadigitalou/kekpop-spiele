"use client";

import { useEffect, useRef, useState } from "react";

function GameCard({
  title,
  subtitle,
  description,
  features,
  award,
  gradient,
  iconBg,
  delay,
  visible,
  featured,
  link,
}: {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  award?: string;
  gradient: string;
  iconBg: string;
  delay: number;
  visible: boolean;
  featured?: boolean;
  link?: string;
}) {
  return (
    <div
      className={`game-card group ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      } transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Card Top Gradient */}
      <div className={`h-3 ${gradient}`} />

      <div className={`p-8 ${featured ? "md:p-12" : ""}`}>
        {/* Award Badge */}
        {award && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-kek-amber/10 border border-kek-amber/20 rounded-full mb-6">
            <svg
              className="w-4 h-4 text-kek-amber"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-sm font-display font-semibold text-kek-amber">
              {award}
            </span>
          </div>
        )}

        {/* Game Icon */}
        <div
          className={`w-20 h-20 ${iconBg} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
        >
          <svg
            className="w-10 h-10 text-white"
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
        </div>

        {/* Content */}
        <span className="text-xs font-display font-semibold text-kek-dark/40 uppercase tracking-widest">
          {subtitle}
        </span>
        <h3
          className={`font-display font-bold mb-4 mt-2 ${
            featured ? "text-3xl md:text-4xl" : "text-2xl"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-kek-dark/60 leading-relaxed mb-6 ${
            featured ? "text-lg" : ""
          }`}
        >
          {description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 bg-kek-cream rounded-lg text-sm font-medium text-kek-dark/60"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-kek-purple font-display font-semibold hover:gap-3 transition-all"
          >
            Mehr erfahren
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

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
      {/* Background */}
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
            aufregenden Neuheiten, die bald erscheinen.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Featured: Arche Nova */}
          <GameCard
            title="Arche Nova"
            subtitle="Feuerland Spiele"
            description="In Arche Nova plant und errichtet ihr einen modernen, wissenschaftlich geführten Zoo. Mit über 250 einzigartigen Tierkarten erlebt ihr ein strategisches Brettspiel mit hoher Wiederspielbarkeit. Unterstützt Artenschutzprojekte weltweit und baut den attraktivsten Zoo — ein verwobenes Spielerlebnis, das Strategie und Thema perfekt vereint."
            features={[
              "1-4 Spieler",
              "90-150 Min",
              "Strategie",
              "Kennerspiel",
              "250+ Karten",
            ]}
            award="Deutscher Spielepreis 2022"
            gradient="bg-gradient-to-r from-kek-green via-emerald-500 to-teal-500"
            iconBg="bg-gradient-to-br from-kek-green to-teal-600"
            delay={300}
            visible={visible}
            featured
            link="https://archenova-brettspiel.de/"
          />

          {/* Upcoming Game 1 */}
          <GameCard
            title="Neues Projekt"
            subtitle="In Entwicklung"
            description="Ein neues Spielerlebnis ist in Arbeit. Mathias Wigge arbeitet an seinem nächsten großen Brettspiel — bleibt gespannt auf innovative Mechaniken und überraschendes Gameplay."
            features={["Coming Soon", "2025"]}
            gradient="bg-gradient-to-r from-kek-purple via-violet-500 to-fuchsia-500"
            iconBg="bg-gradient-to-br from-kek-purple to-violet-600"
            delay={450}
            visible={visible}
          />

          {/* Upcoming Game 2 */}
          <GameCard
            title="Geheimes Projekt"
            subtitle="Ankündigung folgt"
            description="Hinter den Kulissen wird an etwas Besonderem gearbeitet. Folgt uns für Updates und Ankündigungen zu kommenden Veröffentlichungen."
            features={["Top Secret", "TBA"]}
            gradient="bg-gradient-to-r from-kek-amber via-orange-500 to-red-500"
            iconBg="bg-gradient-to-br from-kek-amber to-orange-600"
            delay={600}
            visible={visible}
          />
        </div>
      </div>
    </section>
  );
}
