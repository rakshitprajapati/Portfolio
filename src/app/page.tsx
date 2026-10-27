"use client";

import { SpatialBackground } from "@/components/spatial/SpatialBackground";
import { SpatialDock } from "@/components/spatial/SpatialDock";
import { HeroSection } from "@/components/sections/HeroSection";
import { TelemetryBanner } from "@/components/cyber/TelemetryBanner";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CyberTerminal } from "@/components/cyber/CyberTerminal";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { LinkedInFeedSection } from "@/components/sections/LinkedInFeedSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Interactive 3D Quantum Space Background */}
      <SpatialBackground />


      {/* VisionOS Floating Capsule Dock */}
      <SpatialDock />

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <TelemetryBanner />
        <SkillsSection />
        <ProjectsSection />
        <CyberTerminal />
        <CertificationsSection />
        <LinkedInFeedSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
