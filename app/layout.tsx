import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dimax.nl"),
  title: {
    default: "Dimax — Chauffeursdienst | Van A naar B zonder zelf te rijden",
    template: "%s | Dimax",
  },
  description:
    "Dimax biedt betrouwbare chauffeursdiensten met vriendelijke studentchauffeurs. Wij rijden u in uw eigen auto naar Schiphol, een feest of waar dan ook.",
  openGraph: {
    siteName: "Dimax",
    locale: "nl_NL",
    type: "website",
    title: "Dimax — Chauffeursdienst",
    description:
      "Betrouwbare chauffeursdiensten met vriendelijke studentchauffeurs. Van A naar B zonder zelf te rijden.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
