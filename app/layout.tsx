import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import { PasswordGate } from "@/components/ui/password-gate";

const libreFranklin = Libre_Franklin({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Closing the Context Gap — NYT × Summer Friday",
  description: "Engagement recap: discovery, design pilots, and context kit infrastructure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={`${libreFranklin.variable}`}>
      <body><PasswordGate>{children}</PasswordGate></body>
    </html>
  );
}
