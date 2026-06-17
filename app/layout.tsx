import type { Metadata } from "next";
import { Geist, Onest } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://antonio-junior.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Antonio Junior dos Santos | Desenvolvedor FullStack",
    template: "%s | Antonio Junior",
  },
  description:
    "Portfólio de Antonio Junior dos Santos - Desenvolvedor Full-Stack especializado em React.js, Node.js e TypeScript, com foco em solucoes digitais de alto impacto.",
  keywords: [
    "desenvolvedor",
    "fullstack",
    "frontend",
    "react",
    "next.js",
    "typescript",
    "javascript",
    "node.js",
    "express",
    "tailwindcss",
    "postgresql",
    "mongodb",
    "prisma",
    "docker",
    "n8n",
    "llm",
    "portfolio",
    "engenharia de requisitos",
  ],
  authors: [{ name: "Antonio Junior dos Santos" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Antonio Junior dos Santos | Desenvolvedor FullStack",
    description:
      "Desenvolvedor Full-Stack especializado em React.js, Node.js e TypeScript, com experiencia em APIs, IA, automacao e arquitetura escalavel.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Antonio Junior dos Santos - Desenvolvedor FullStack",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/g.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio Junior dos Santos | Desenvolvedor FullStack",
    description:
      "Desenvolvedor Full-Stack especializado em React.js, Node.js e TypeScript, com experiencia em APIs, IA, automacao e arquitetura escalavel.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${onest.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
