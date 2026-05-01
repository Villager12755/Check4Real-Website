import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeScript from "@/components/ThemeScript";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Check4Real — Routing Number Verification",
    template: "%s · Check4Real",
  },
  description:
    "Instantly verify ABA routing numbers against the official Federal Reserve database. Mod-10 check digit validation with bank lookup. Private, fast, and free.",
  keywords: [
    "routing number",
    "ABA",
    "check verification",
    "Federal Reserve",
    "Mod-10",
    "bank lookup",
  ],
  authors: [{ name: "Check4Real" }],
  openGraph: {
    title: "Check4Real — Routing Number Verification",
    description:
      "Instantly verify ABA routing numbers with Mod-10 validation and bank lookup.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Check4Real — Routing Number Verification",
    description:
      "Instantly verify ABA routing numbers with Mod-10 validation and bank lookup.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
