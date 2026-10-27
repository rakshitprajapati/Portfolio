"use client";

import { useEffect } from "react";
import { SpatialBackground } from "@/components/spatial/SpatialBackground";
import { SpatialDock } from "@/components/spatial/SpatialDock";
import { CyberDiveHUD } from "@/components/spatial/CyberDiveHUD";
import { CyberDiveSection } from "@/components/spatial/CyberDiveSection";
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
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Interactive 3D Quantum Space Background (Z-Warp Cyber Dive) */}
      <SpatialBackground />

      {/* Cyber Dive Depth Telemetry HUD */}
      <CyberDiveHUD />

      {/* VisionOS Floating Capsule Dock */}
      <SpatialDock />

      {/* Main Content Area with 3D Spatial Dive Transitions */}
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <TelemetryBanner />

        <CyberDiveSection>
          <SkillsSection />
        </CyberDiveSection>

        <CyberDiveSection>
          <ProjectsSection />
        </CyberDiveSection>

        <CyberDiveSection>
          <CyberTerminal />
        </CyberDiveSection>

        <CyberDiveSection>
          <CertificationsSection />
        </CyberDiveSection>

        <CyberDiveSection>
          <LinkedInFeedSection />
        </CyberDiveSection>

        <CyberDiveSection>
          <ContactSection />
        </CyberDiveSection>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
