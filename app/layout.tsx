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
    default: "AJ Software & Consultoria | Soluções Digitais",
    template: "%s | AJ Software & Consultoria",
  },
  description:
    "AJ Software & Consultoria — softwares sob medida, MCP Servers, APIs, automações inteligentes e soluções com Inteligência Artificial para empresas.",
  keywords: [
    "software sob medida",
    "MCP servers",
    "inteligência artificial",
    "automações",
    "APIs REST",
    "integrações",
    "consultoria",
    "ERP",
    "dashboards",
    "AJ Software",
    "quanto custa um software",
    "desenvolvimento de aplicativos",
    "FAQ software",
  ],
  authors: [{ name: "AJ Software & Consultoria" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "AJ Software & Consultoria | Soluções Digitais",
    description:
      "Desenvolvemos softwares sob medida, servidores MCP, automações e soluções com IA para empresas que querem crescer com tecnologia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AJ Software & Consultoria",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
    apple: [{ url: "/favicon.ico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AJ Software & Consultoria | Soluções Digitais",
    description:
      "Softwares sob medida, MCP Servers, integrações e Inteligência Artificial para empresas.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${onest.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
