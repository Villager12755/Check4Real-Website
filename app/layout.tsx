import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Check4Real - Routing Number Verification",
  description: "Verify check routing numbers using Federal Reserve database information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

