import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="de">
      <body>
        <a href="#main-content" className="skip-link">
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
