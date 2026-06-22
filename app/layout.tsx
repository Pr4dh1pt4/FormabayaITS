import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Formabaya - Forum Mahasiswa Blitar Raya ITS",
  description: "Berjaya Bersama Tanah Para Raja.",
  keywords: ["Formabaya", "youth organization", "educational programs", "community development", "youth empowerment", "innovation"],
  authors: [{ name: "Formabaya" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", 
  },
  openGraph: {
    title: "Formabaya - Forum Mahasiswa Blitar Raya ITS",
    description: "Berjaya Bersama Tanah Para Raja.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}