"use client";

import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: "Innovation",
    description:
      "Einzigartige Spielmechaniken, die frischen Wind in die Brettspielwelt bringen. Jedes Spiel bietet ein neues, überraschendes Erlebnis.",
    color: "kek-purple",
    bgColor: "bg-kek-purple/5",
    borderColor: "border-kek-purple/20",
    textColor: "text-kek-purple",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: "Spielspaß",
    description:
      "Spiele, die ab der ersten Runde fesseln und über hunderte Partien begeistern. Hohe Wiederspielbarkeit steht im Mittelpunkt.",
    color: "kek-amber",
    bgColor: "bg-kek-amber/5",
    borderColor: "border-kek-amber/20",
    textColor: "text-kek-amber",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Gemeinschaft",
    description:
      "Brettspiele verbinden Menschen. Wir schaffen Erlebnisse, die am Tisch geteilt werden und unvergessliche Momente entstehen lassen.",
    color: "kek-green",
    bgColor: "bg-kek-green/5",
    borderColor: "border-kek-green/20",
    textColor: "text-kek-green",
  },
];

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span
            className={`inline-block font-display text-sm font-semibold text-kek-purple uppercase tracking-widest mb-4 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Über uns
          </span>
          <h2
            className={`section-title mb-6 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Spiele, die
            <span className="text-gradient-purple"> verbinden</span>
          </h2>
          <p
            className={`section-subtitle mx-auto transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Kekpop Spiele ist das neugegründete Spieleunternehmen von
            Game Designer Mathias Wigge. Wir entwickeln Brettspiele mit Tiefgang,
            die einfach zu lernen sind aber immer wieder überraschen.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`game-card p-8 border ${pillar.borderColor} transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div
                className={`w-16 h-16 ${pillar.bgColor} rounded-2xl flex items-center justify-center ${pillar.textColor} mb-6`}
              >
                {pillar.icon}
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">
                {pillar.title}
              </h3>
              <p className="text-kek-dark/60 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div
          className={`mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 md:p-12 bg-gradient-to-r from-kek-purple/5 via-kek-amber/5 to-kek-green/5 rounded-3xl border border-kek-purple/10 transition-all duration-700 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "2022", label: "Deutscher Spielepreis" },
            { value: "1M+", label: "Verkaufte Exemplare" },
            { value: "40+", label: "Sprachen" },
            { value: "∞", label: "Spielspaß" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-kek-dark/50 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
