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
  title: "Kolawada Rakshit // Cybersecurity & Computer Science Specialist | CTF Champion",
  description:
    "M.Sc. in Cybersecurity at NFSU Goa. Cisco CTF Winner (1st Place Campus / 2nd Place National Finals) & Smart India Hackathon System Architect. Specializing in Web App Security, CTF, Vulnerability Assessment, and API Architecture.",
  keywords: [
    "Kolawada Rakshit",
    "Rakshit Prajapati",
    "Cybersecurity",
    "NFSU Goa",
    "Capture The Flag",
    "CTF",
    "Smart India Hackathon",
    "Web Security",
    "Vulnerability Assessment",
    "EHR Architecture",
  ],
  authors: [{ name: "Kolawada Rakshit" }],
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
