import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Alexander Vance // Cybersecurity & High-Performance Systems Developer",
  description:
    "Spatial VisionOS Cyber Defense & Software Engineering Portfolio. Specializing in zero-trust architecture, post-quantum cryptography, offensive penetration testing, and distributed systems.",
  keywords: [
    "Cybersecurity",
    "Software Developer",
    "Zero Trust",
    "Post-Quantum",
    "Rust",
    "Golang",
    "Three.js",
    "Next.js",
    "VisionOS",
    "Infosec",
  ],
  authors: [{ name: "Alexander Vance" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth dark`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-slate-100 font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
