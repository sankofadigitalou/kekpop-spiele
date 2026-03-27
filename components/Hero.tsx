"use client";

import { useEffect, useState } from "react";

function Meeple({
  color,
  size,
  style,
  delay,
}: {
  color: string;
  size: number;
  style: React.CSSProperties;
  delay: string;
}) {
  return (
    <div
      className="absolute animate-float-slow"
      style={{ ...style, animationDelay: delay }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 120"
        fill={color}
        opacity="0.15"
      >
        <path d="M50 0C38 0 28 12 28 26C28 36 34 44 42 48L24 110C24 114 28 120 34 120H66C72 120 76 114 76 110L58 48C66 44 72 36 72 26C72 12 62 0 50 0Z" />
      </svg>
    </div>
  );
}

function Dice({
  style,
  dots,
  delay,
}: {
  style: React.CSSProperties;
  dots: number;
  delay: string;
}) {
  const dotPositions: Record<number, string[]> = {
    1: ["top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"],
    2: ["top-2 right-2", "bottom-2 left-2"],
    3: ["top-2 right-2", "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", "bottom-2 left-2"],
    4: ["top-2 left-2", "top-2 right-2", "bottom-2 left-2", "bottom-2 right-2"],
    5: [
      "top-2 left-2",
      "top-2 right-2",
      "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      "bottom-2 left-2",
      "bottom-2 right-2",
    ],
    6: [
      "top-2 left-2",
      "top-2 right-2",
      "top-1/2 left-2 -translate-y-1/2",
      "top-1/2 right-2 -translate-y-1/2",
      "bottom-2 left-2",
      "bottom-2 right-2",
    ],
  };

  return (
    <div
      className="absolute animate-float-medium opacity-15"
      style={{ ...style, animationDelay: delay }}
    >
      <div className="w-16 h-16 bg-white rounded-xl border-2 border-kek-purple/30 relative shadow-lg">
        {dotPositions[dots]?.map((pos, i) => (
          <div
            key={i}
            className={`absolute w-2.5 h-2.5 bg-kek-purple rounded-full ${pos}`}
          />
        ))}
      </div>
    </div>
  );
}

function HexGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern
            id="hexagons"
            width="56"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(2)"
          >
            <path
              d="M28 0L56 16.6V50L28 66.6L0 50V16.6Z"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="0.5"
            />
            <path
              d="M28 33.3L56 50V83.3L28 100L0 83.3V50Z"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-kek-cream via-white to-kek-cream">
      <HexGrid />

      {/* Floating Game Elements */}
      {mounted && (
        <>
          <Meeple
            color="#7C3AED"
            size={80}
            style={{ top: "10%", left: "5%" }}
            delay="0s"
          />
          <Meeple
            color="#F59E0B"
            size={60}
            style={{ top: "20%", right: "8%" }}
            delay="1s"
          />
          <Meeple
            color="#EF4444"
            size={50}
            style={{ bottom: "25%", left: "10%" }}
            delay="2s"
          />
          <Meeple
            color="#10B981"
            size={70}
            style={{ bottom: "15%", right: "5%" }}
            delay="0.5s"
          />
          <Dice
            dots={6}
            style={{ top: "15%", left: "20%" }}
            delay="1.5s"
          />
          <Dice
            dots={3}
            style={{ top: "30%", right: "15%" }}
            delay="0.8s"
          />
          <Dice
            dots={5}
            style={{ bottom: "20%", left: "25%" }}
            delay="2.5s"
          />
          <Dice
            dots={1}
            style={{ bottom: "30%", right: "20%" }}
            delay="1.2s"
          />

          {/* Decorative Hexagons */}
          <div
            className="absolute w-32 h-32 border-2 border-kek-purple/10 animate-spin-slow hex-shape"
            style={{ top: "8%", right: "30%" }}
          />
          <div
            className="absolute w-20 h-20 bg-kek-amber/5 animate-float-slow hex-shape"
            style={{ bottom: "10%", left: "35%", animationDelay: "3s" }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-kek-purple/5 border border-kek-purple/10 mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 bg-kek-green rounded-full animate-pulse" />
          <span className="font-display text-sm font-medium text-kek-purple">
            Vom Schöpfer von Arche Nova
          </span>
        </div>

        {/* Title */}
        <h1
          className={`section-title mb-6 transition-all duration-700 delay-150 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Willkommen bei
          <br />
          <span className="text-gradient">Kekpop Spiele</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`section-subtitle mx-auto mb-10 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Innovative Brettspiele, die Menschen zusammenbringen.
          Durchdachtes Game Design trifft auf unvergessliche Spielerlebnisse.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="#spiele" className="btn-primary">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Unsere Spiele
          </a>
          <a href="#about" className="btn-secondary">
            Mehr erfahren
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs font-display text-kek-dark/40 tracking-widest uppercase">
          Scroll
        </span>
        <svg
          className="w-5 h-5 text-kek-dark/30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
