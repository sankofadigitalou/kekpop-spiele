import type { Metadata } from "next";
import { Inter, Fredoka } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kekpop.sankofa-digital.ai"),
  title: "Kekpop Spiele — Brettspiele von Mathias Wigge",
  description:
    "Kekpop Spiele ist das Spieleunternehmen von Game Designer Mathias Wigge, dem Schöpfer des preisgekrönten Brettspiels Arche Nova (Deutscher Spielepreis 2022).",
  keywords: [
    "Kekpop Spiele",
    "Mathias Wigge",
    "Arche Nova",
    "Brettspiele",
    "Game Design",
    "Deutscher Spielepreis",
  ],
  authors: [{ name: "Mathias Wigge" }],
  openGraph: {
    title: "Kekpop Spiele — Brettspiele von Mathias Wigge",
    description:
      "Das Spieleunternehmen des preisgekrönten Game Designers Mathias Wigge.",
    type: "website",
    locale: "de_DE",
    siteName: "Kekpop Spiele",
    images: [
      {
        url: "/images/visitenkarte-archenova.jpg",
        width: 1200,
        height: 630,
        alt: "Kekpop Spiele — Arche Nova",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kekpop.sankofa-digital.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${fredoka.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
