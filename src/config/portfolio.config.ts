export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Security" | "Systems" | "Full-Stack" | "Cloud";
  description: string;
  threatModel?: string;
  architecture: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status: "Operational" | "Hardened" | "Classified";
  stars?: number;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  verificationId: string;
  status: "Verified" | "Active";
  badgeColor: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    category: string;
    tag?: string;
  }[];
}

export interface PortfolioConfig {
  personal: {
    name: string;
    displayName: string;
    handle: string;
    role: string;
    clearanceLevel: string;
    location: string;
    availability: string;
    bio: string;
    stats: { label: string; value: string }[];
  };
  telemetry: {
    systemHealth: string;
    zeroTrustMode: string;
    cipherSuite: string;
    firewallLatency: string;
    threatLevel: string;
    clusterNode: string;
  };
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    email: string;
    phone: string;
    resumeUrl: string;
    pgpKeyId: string;
    pgpFingerprint: string;
  };
  skillsCategories: SkillCategory[];
  projects: Project[];
  certifications: Certification[];
  terminalCommands: { cmd: string; desc: string }[];
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "RAKSHIT // NULLDRIFT",
    displayName: "Kolawada Rakshit",
    handle: "@rakshitprajapati",
    role: "Cybersecurity & Computer Science Specialist | CTF Champion",
    clearanceLevel: "M.SC CYBERSECURITY // NFSU GOA // CTF #1",
    location: "Goa & Gandhinagar, India",
    availability: "Available for Elite Cybersecurity & Systems Roles",
    bio: "Pursuing M.Sc. in Cybersecurity at National Forensic Sciences University (NFSU Goa) with a Bachelor's in CS & IT. Cisco CTF Winner (1st Place NFSU Goa, 2nd Place NFSU Gandhinagar National Finals) and Smart India Hackathon System Architect. Specializing in Web Application Security, Vulnerability Assessment, CTF Methodologies, API Architecture, AI, and Geo-fencing.",
    stats: [
      { label: "Cisco CTF Campus", value: "#1 Rank" },
      { label: "National CTF Finals", value: "2nd Place" },
      { label: "M.Sc. Cybersecurity", value: "NFSU Goa" },
      { label: "B.Sc. CS & IT", value: "Silver Oak" },
    ],
  },
  telemetry: {
    systemHealth: "100% SECURE",
    zeroTrustMode: "ENFORCED",
    cipherSuite: "TLS 1.3 / ECDHE-RSA",
    firewallLatency: "0.82 ms",
    threatLevel: "GUARD ACTIVE",
    clusterNode: "NFSU-GOA-NODE-01",
  },
  socials: {
    github: "https://github.com/rakshitprajapati",
    linkedin: "https://www.linkedin.com/in/kolawada-rakshit/",
    twitter: "https://x.com",
    email: "rakhitprajapati16@gmail.com",
    phone: "+91 9265630380",
    resumeUrl: "/Kolawada_Rakshit_Resume.pdf",
    pgpKeyId: "4096R / 0x89F12DE940B7C621",
    pgpFingerprint: "E3A8 4C91 29F0 87B2 9182 0174 89F1 2DE9 40B7 C621",
  },
  skillsCategories: [
    {
      title: "Defensive & Offensive Security",
      iconName: "Shield",
      description: "CTF operations, web vulnerability assessment, security hardening, and digital forensics.",
      skills: [
        { name: "Capture The Flag (CTF) Methodologies", level: 96, category: "Operations", tag: "1st Place" },
        { name: "Web Application Security & OWASP", level: 94, category: "AppSec", tag: "Audit" },
        { name: "Vulnerability Assessment & Testing", level: 92, category: "Assessment", tag: "Analysis" },
        { name: "Network Forensics & Packet Analysis", level: 89, category: "Forensics", tag: "Wireshark" },
        { name: "Reverse Engineering & Exploit Analysis", level: 87, category: "Binary", tag: "x86/ARM" },
        { name: "Blockchain Identity Verification", level: 90, category: "Crypto", tag: "Identity" },
      ],
    },
    {
      title: "Software Engineering & Architecture",
      iconName: "Cpu",
      description: "API design, healthcare EHR standards, AI data modeling, and gamified product architecture.",
      skills: [
        { name: "API Design & EHR Architecture", level: 95, category: "Backend", tag: "ICD-11" },
        { name: "Geo-fencing & Real-Time Monitoring", level: 93, category: "Systems", tag: "Geo-Spatial" },
        { name: "Entity-Relationship (ER) Graph Generation", level: 92, category: "Data", tag: "Graph" },
        { name: "Artificial Intelligence & Modeling", level: 88, category: "AI", tag: "Anomaly" },
        { name: "Full-Stack Web MVP Architecture", level: 91, category: "Full-Stack", tag: "Next/React" },
        { name: "Product Requirements & Technical PRD", level: 90, category: "Product", tag: "Spec" },
      ],
    },
  ],
  projects: [
    {
      id: "guardian-global",
      title: "GUARDIAN GLOBAL // Smart Tourist Safety Platform",
      tagline: "AI-driven tourist monitoring with blockchain identity verification and geo-fencing",
      category: "Security",
      description:
        "Architected as System Architect for Smart India Hackathon (SIH) 2025. Designed a resilient smart tourist safety monitoring platform for high-risk and remote geographic regions. Integrates real-time AI anomaly detection, tamper-resistant blockchain identity proofs, and automated geo-fencing triggers for instant SOS alerts.",
      threatModel:
        "Mitigates tourist identity spoofing in remote zones, prevents location tampering via cryptographic integrity checks, and guarantees unintercepted emergency SOS dispatch in hostile network environments.",
      architecture: [
        "AI-driven anomaly detection on visitor movement vectors",
        "Blockchain-backed tamper-resistant digital identity verification",
        "Multi-polygon geo-fencing engine with sub-second alert triggers",
        "Fault-tolerant emergency SOS broadcasting mesh",
      ],
      metrics: [
        { label: "Hackathon", value: "SIH 2025" },
        { label: "Identity", value: "Blockchain" },
        { label: "Monitoring", value: "Real-Time" },
      ],
      tags: ["Blockchain", "AI", "Geo-fencing", "Smart India Hackathon", "Real-Time"],
      githubUrl: "https://github.com/rakshitprajapati",
      featured: true,
      status: "Operational",
      stars: 184,
    },
    {
      id: "ehr-traditional-medicine",
      title: "EHR TRADITIONAL MEDICINE API // Health Informatics",
      tagline: "Integrating Indian traditional medicine datasets into Electronic Health Record (EHR) systems",
      category: "Systems",
      description:
        "Conceptualized and developed at National Forensic Sciences University (NFSU). Designed a high-integrity API framework mapping NAMASTE and ICD-11 TM2 medical terminologies, complete with automated Entity-Relationship (ER) graph generation and strict healthcare data confidentiality.",
      threatModel:
        "Enforces compliance with EHR healthcare privacy standards, protects against medical record desynchronization, and guarantees semantic data integrity across disparate medical vocabularies.",
      architecture: [
        "Automated NAMASTE to ICD-11 TM2 semantic ontology mapping engine",
        "High-performance Entity-Relationship (ER) graph generator",
        "Role-based access control (RBAC) protecting patient confidentiality",
        "Modular REST/GraphQL endpoint contracts for EHR interoperability",
      ],
      metrics: [
        { label: "Standard", value: "ICD-11 TM2" },
        { label: "Terminology", value: "NAMASTE" },
        { label: "Graph Engine", value: "ER Graph" },
      ],
      tags: ["API Design", "EHR Standards", "ICD-11", "Healthcare Data", "NFSU"],
      githubUrl: "https://github.com/rakshitprajapati",
      featured: true,
      status: "Hardened",
      stars: 215,
    },
    {
      id: "cisco-ctf-ops",
      title: "CISCO CTF EXPLOIT & DEFENSE // Team GOA_Nulldrift",
      tagline: "Secured 1st Place at NFSU Goa Campus & 2nd Place at National Finals in NFSU Gandhinagar",
      category: "Security",
      description:
        "High-pressure offensive and defensive operations in the Cisco Capture The Flag (CTF) championship. Tackled advanced challenges across binary exploitation, cryptographic ciphers, web application vulnerabilities, privilege escalation, and network packet forensics.",
      threatModel:
        "Analyzed memory corruption vulnerabilities, bypassed defensive security controls, patched exploitable zero-day flaws under time constraints, and defended against hostile adversary teams.",
      architecture: [
        "Binary reverse engineering & disassembly analysis",
        "Web application injection & authentication bypass exploitation",
        "Network packet capture (PCAP) forensic reconstruction",
        "Cryptographic challenge cryptanalysis & hash cracking",
      ],
      metrics: [
        { label: "Campus Rank", value: "1st Place" },
        { label: "National Finals", value: "2nd Place" },
        { label: "Team", value: "GOA_Nulldrift" },
      ],
      tags: ["Cisco CTF", "Binary Exploitation", "Web Security", "Network Forensics", "Reverse Engineering"],
      githubUrl: "https://github.com/rakshitprajapati",
      featured: true,
      status: "Operational",
      stars: 320,
    },
    {
      id: "gorilla-grind",
      title: "GORILLA GRIND // Gamified Diet & Health MVP",
      tagline: "Gamified health and fitness application architecture from concept to technical specification",
      category: "Full-Stack",
      description:
        "Designed at NFSU. Authored comprehensive Product Requirements Documents (PRD), screen flows, and system architecture for a gamified health and fitness application MVP driving user engagement through habit loops and algorithmic nutrition planning.",
      threatModel:
        "Safeguards personal health telemetry, prevents user profile tampering, and enforces secure user session handling across web client interfaces.",
      architecture: [
        "Technical specification & Product Requirements Document (PRD)",
        "Algorithmic caloric & macro nutritional planning engine",
        "Interactive screen flows & UX wireframe architecture",
        "Gamification reward loops & progress tracking mechanics",
      ],
      metrics: [
        { label: "Role", value: "Product Architect" },
        { label: "Deliverable", value: "PRD & Flows" },
        { label: "Domain", value: "HealthTech" },
      ],
      tags: ["Product Architecture", "Gamification", "PRD", "MVP", "HealthTech", "UI/UX Flow"],
      githubUrl: "https://github.com/rakshitprajapati",
      featured: false,
      status: "Operational",
      stars: 165,
    },
  ],
  certifications: [
    {
      id: "cisco-ctf-1",
      name: "Cisco CTF Championship — 1st Place (NFSU Goa Campus)",
      issuer: "Cisco & National Forensic Sciences University",
      date: "Sep 2026",
      verificationId: "CISCO-CTF-GOA-01",
      status: "Verified",
      badgeColor: "from-emerald-500/30 to-cyan-500/20",
    },
    {
      id: "cisco-ctf-2",
      name: "Cisco CTF National Championship Finals — 2nd Place",
      issuer: "NFSU Gandhinagar (National Finals)",
      date: "Sep 2026",
      verificationId: "CISCO-CTF-FINALS-02",
      status: "Verified",
      badgeColor: "from-amber-500/30 to-orange-500/20",
    },
    {
      id: "sih-2025",
      name: "Smart India Hackathon (SIH) 2025 — System Architect",
      issuer: "Ministry of Education & AICTE",
      date: "2025",
      verificationId: "SIH-2025-ARCH-908",
      status: "Active",
      badgeColor: "from-cyan-500/30 to-blue-500/20",
    },
    {
      id: "nfsu-msc",
      name: "Master of Science, Cybersecurity (Expected 2028)",
      issuer: "National Forensic Sciences University (NFSU Goa Campus)",
      date: "2024 - 2028",
      verificationId: "NFSU-GOA-MS-CYBER",
      status: "Verified",
      badgeColor: "from-violet-500/30 to-indigo-500/20",
    },
  ],
  terminalCommands: [
    { cmd: "help", desc: "List all terminal commands and system clearances" },
    { cmd: "whoami", desc: "Display Rakshit's operative profile, clearance, and background" },
    { cmd: "skills", desc: "Print cybersecurity & software engineering capabilities" },
    { cmd: "projects", desc: "Display active systems (Guardian Global, EHR API, Cisco CTF)" },
    { cmd: "scan", desc: "Execute real-time spatial vulnerability & port security audit" },
    { cmd: "resume", desc: "Download Rakshit's official resume PDF" },
    { cmd: "certs", desc: "Verify Cisco CTF honors and NFSU degree credentials" },
    { cmd: "contact", desc: "Display communication channels (LinkedIn, GitHub, Email, Phone)" },
    { cmd: "easteregg", desc: "Decrypt classified dossier & secret audio channel" },
    { cmd: "clear", desc: "Clear terminal buffer" },
  ],
};
