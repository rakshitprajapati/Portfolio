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
  status: "Operational" | "In Development" | "Prototype" | "Open Source";
  stars?: number;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  verificationId: string;
  status: "Enrolled" | "Completed" | "Participated";
  badgeColor: string;
  image?: string;
}

export interface LinkedInPost {
  id: string;
  title: string;
  date: string;
  category: "CTF" | "Project" | "Education" | "General";
  content: string;
  tags: string[];
  likes: number;
  comments: number;
  postUrl: string;
  featured?: boolean;
  bannerType?: "ctf" | "sih" | "ehr" | "nfsu";
  image?: string;
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
    resumeUrl: string;
    pgpKeyId: string;
    pgpFingerprint: string;
  };
  skillsCategories: SkillCategory[];
  projects: Project[];
  certifications: Certification[];
  linkedinPosts: LinkedInPost[];
  terminalCommands: { cmd: string; desc: string }[];
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "RAKSHIT // DEV",
    displayName: "Kolawada Rakshit",
    handle: "@rakshitprajapati",
    role: "Cybersecurity & Computer Science Student",
    clearanceLevel: "M.SC. CYBERSECURITY // NFSU GOA CAMPUS",
    location: "Goa & Gujarat, India",
    availability: "Seeking Cybersecurity Internships & Practical Opportunities",
    bio: "I am pursuing an M.Sc. in Cybersecurity at NFSU Goa, with a bachelor's degree in Computer Science and IT. Academic projects, hackathons, and CTF competitions have helped me develop teamwork and problem-solving skills. I am actively seeking opportunities to apply my learning and gain practical cybersecurity experience.",
    stats: [
      { label: "Cisco CTF (Goa)", value: "1st Place" },
      { label: "All NFSU Campuses", value: "2nd Place" },
      { label: "Degree Program", value: "M.Sc. Cyber" },
      { label: "Institution", value: "NFSU Goa" },
    ],
  },
  telemetry: {
    systemHealth: "ACADEMIC ENV",
    zeroTrustMode: "SECURE LAB",
    cipherSuite: "TLS 1.3 / Standard",
    firewallLatency: "1.02 ms",
    threatLevel: "STUDENT NODE",
    clusterNode: "NFSU-GOA-STUDENT-01",
  },
  socials: {
    github: "https://github.com/rakshitprajapati",
    linkedin: "https://www.linkedin.com/in/kolawada-rakshit/",
    twitter: "https://x.com",
    email: "rakhitprajapati16@gmail.com",
    resumeUrl: "/Kolawada_Rakshit_Resume.pdf",
    pgpKeyId: "4096R / 0x89F12DE940B7C621",
    pgpFingerprint: "E3A8 4C91 29F0 87B2 9182 0174 89F1 2DE9 40B7 C621",
  },
  skillsCategories: [
    {
      title: "Cybersecurity & CTF Fundamentals",
      iconName: "Shield",
      description: "Hands-on experience from CTF competitions, vulnerability assessments, and academic security labs.",
      skills: [
        { name: "Capture The Flag (CTF) Methodologies", level: 85, category: "Practical", tag: "Cisco CTF" },
        { name: "Web Application Security Basics", level: 80, category: "WebSec", tag: "OWASP" },
        { name: "Vulnerability Assessment", level: 78, category: "Assessment", tag: "Testing" },
        { name: "Network Packet Analysis (Wireshark)", level: 75, category: "Forensics", tag: "Networking" },
        { name: "Binary & Exploit Fundamentals", level: 70, category: "Systems", tag: "Basics" },
        { name: "Blockchain Identity Concepts", level: 76, category: "Emerging", tag: "SIH 2025" },
      ],
    },
    {
      title: "Software Development & Architecture",
      iconName: "Cpu",
      description: "API design, healthcare data frameworks, data modeling, and product specifications.",
      skills: [
        { name: "API Design & EHR Architecture", level: 84, category: "Backend", tag: "ICD-11 TM2" },
        { name: "Entity-Relationship (ER) Graph Generation", level: 82, category: "Database", tag: "NAMASTE" },
        { name: "Geo-fencing & Location Logic", level: 78, category: "Logic", tag: "Monitoring" },
        { name: "Python & Scripting Fundamentals", level: 80, category: "Scripting", tag: "Core" },
        { name: "Web Development & MVP Building", level: 82, category: "Web", tag: "Frontend/Backend" },
        { name: "Product Requirements Documents (PRD)", level: 80, category: "Planning", tag: "Documentation" },
      ],
    },
  ],
  projects: [
    {
      id: "guardian-global",
      title: "Guardian Global: Tourist Safety System",
      tagline: "Smart monitoring architecture designed for tourist safety in remote & high-risk regions",
      category: "Security",
      description:
        "Developed as System Architect for Smart India Hackathon (SIH) 2025. Designed an end-to-end conceptual architecture for an intelligent tourist safety platform that utilizes automated geo-fencing perimeter alerts, emergency responder dispatch routing, and tamper-resistant digital identification to protect travelers in remote zones.",
      threatModel:
        "Focuses on preventing location spoofing, ensuring tamper-proof identity verification, and maintaining reliable alert transmissions even in low-connectivity remote environments.",
      architecture: [
        "Automated geo-fencing boundary triggers for restricted and hazardous zones",
        "Direct emergency responder routing and automated incident dispatch",
        "AI-assisted movement pattern and route anomaly analysis",
        "Decentralized digital ID verification concept for verified traveler safety",
      ],
      metrics: [
        { label: "Event", value: "SIH 2025" },
        { label: "Role", value: "System Architect" },
        { label: "Focus", value: "Geo-Fencing & Safety" },
      ],
      tags: ["Smart India Hackathon", "Geo-Fencing", "Emergency Routing", "System Architecture"],
      githubUrl: "https://github.com/rakshitprajapati",
      featured: true,
      status: "Prototype",
      stars: 45,
    },
    {
      id: "ehr-traditional-medicine",
      title: "Traditional Medicine EHR Integration Framework",
      tagline: "Bridging Indian traditional medicine datasets with modern Electronic Health Record systems",
      category: "Systems",
      description:
        "Academic research and API architecture project developed at National Forensic Sciences University (NFSU). Designed a middleware framework to standardize and integrate Indian traditional medicine datasets (NAMASTE portal) into Electronic Health Record (EHR) workflows mapped against WHO ICD-11 TM2 standards with automated Entity-Relationship (ER) graph generation.",
      threatModel:
        "Prioritizes healthcare data privacy compliance, standardized semantic translation across medical terminologies, and strict schema validation for patient records.",
      architecture: [
        "API middleware mapping NAMASTE herbal terminologies to ICD-11 TM2 standards",
        "Automated Entity-Relationship (ER) graph generation for healthcare data models",
        "Modular REST API endpoints structured for standard EHR interoperability",
        "Data validation schemas ensuring clinical integrity across medical datasets",
      ],
      metrics: [
        { label: "Institution", value: "NFSU Goa" },
        { label: "Standard", value: "ICD-11 TM2" },
        { label: "Dataset", value: "NAMASTE" },
      ],
      tags: ["API Design", "EHR Interoperability", "ICD-11 TM2", "Health Informatics", "NFSU Goa"],
      githubUrl: "https://github.com/rakshitprajapati",
      featured: true,
      status: "Prototype",
      stars: 38,
    },
    {
      id: "cisco-ctf-qualification",
      title: "Cisco CTF: Network Forensics & Web Security",
      tagline: "Secured 1st Place at NFSU Goa and 2nd Place nationwide across all NFSU campuses",
      category: "Security",
      description:
        "Technical challenge investigations conducted with Team GOA_Nulldrift during the Cisco Capture The Flag (CTF) competition. Solved hands-on challenges across web application security, packet capture (PCAP) network forensics, and binary reverse engineering, earning 1st Place at NFSU Goa and 2nd Place overall across all NFSU campuses.",
      threatModel:
        "Hands-on analysis of web vulnerabilities (parameter manipulation, authentication bypass, SQL injection) and extraction of hidden credentials from network traffic captures.",
      architecture: [
        "Web vulnerability auditing: payload analysis, auth bypass, and parameter tampering",
        "Network packet capture (PCAP) inspection and forensic analysis via Wireshark",
        "Cryptographic puzzle decoding and hash analysis workflows",
        "High-pressure team collaboration and rapid incident triage",
      ],
      metrics: [
        { label: "Goa Campus", value: "1st Place" },
        { label: "All NFSU", value: "2nd Place" },
        { label: "Team", value: "GOA_Nulldrift" },
      ],
      tags: ["CTF", "Cisco Security", "Network Forensics", "Web Security", "Wireshark"],
      githubUrl: "https://github.com/rakshitprajapati",
      featured: true,
      status: "Operational",
      stars: 52,
    },
    {
      id: "gorilla-grind",
      title: "Gorilla Grind: Gamified Diet Planner MVP",
      tagline: "Gamified nutrition and fitness MVP designed for fast, thumb-friendly meal tracking",
      category: "Full-Stack",
      description:
        "An open-source, gamified nutrition and diet-planning MVP hosted on GitHub. Created comprehensive Product Requirements Documents (PRD), responsive screen flows, and interactive prototypes designed for single-thumb navigation ('fat responsive'). Features caloric and macronutrient calculators, meal swapping, and daily progression loops.",
      threatModel:
        "Built with strict input validation for biometric data, secure client-side state storage, and privacy preservation for personal dietary metrics.",
      architecture: [
        "Comprehensive Product Requirements Document (PRD) and detailed UX screen flows",
        "Single-thumb responsive interaction design with high-contrast dark mode",
        "Nutritional calculation logic for caloric and macronutrient tracking",
        "Interactive meal swapping interface with alternative dietary suggestions",
      ],
      metrics: [
        { label: "Deliverable", value: "PRD & Screen Flows" },
        { label: "Platform", value: "Web & Mobile MVP" },
        { label: "Codebase", value: "GitHub Open Source" },
      ],
      tags: ["Product Design", "PRD", "UI/UX", "HealthTech", "GitHub"],
      githubUrl: "https://github.com/rakshitprajapati/Gorilla-GRIND",
      featured: true,
      status: "Open Source",
      stars: 48,
    },
  ],
  certifications: [
    {
      id: "edu-msc",
      name: "Master of Science, Cybersecurity",
      issuer: "National Forensic Sciences University (Goa Campus)",
      date: "Expected 2028",
      verificationId: "NFSU-GOA-MSC",
      status: "Enrolled",
      badgeColor: "from-cyan-500/30 to-blue-500/20",
    },
    {
      id: "edu-bsc",
      name: "Bachelor of Science, Computer Science & IT",
      issuer: "Silver Oak University",
      date: "Graduated",
      verificationId: "SOU-BSC-CSIT",
      status: "Completed",
      badgeColor: "from-emerald-500/30 to-teal-500/20",
    },
    {
      id: "cisco-ctf-goa",
      name: "Cisco CTF — 1st Place (NFSU Goa Campus)",
      issuer: "NFSU Goa Campus / Cisco CTF",
      date: "Sep 2026",
      verificationId: "TEAM-GOA-NULLDRIFT-1ST",
      status: "Completed",
      badgeColor: "from-amber-500/30 to-yellow-500/20",
    },
    {
      id: "cisco-ctf-finals",
      name: "Cisco CTF Finals — 2nd Place Overall (Across All NFSU Campuses)",
      issuer: "National Forensic Sciences University",
      date: "Sep 2026",
      verificationId: "ALL-NFSU-CAMPUSES-2ND",
      status: "Completed",
      badgeColor: "from-violet-500/30 to-purple-500/20",
    },
  ],
  linkedinPosts: [
    {
      id: "post-cisco-ctf",
      title: "Excited to share our journey at the Cisco CTF Competition!",
      date: "Sep 2026",
      category: "CTF",
      content:
        "Thrilled to announce that our team GOA_Nulldrift secured 1st Place at the NFSU Goa Campus round and went on to achieve 2nd Place overall across all NFSU campuses nationwide! Grateful for the intense technical challenges spanning web vulnerabilities, packet analysis, and reverse engineering. Big thanks to Cisco and NFSU for organizing such an enriching competition!",
      tags: ["#CiscoCTF", "#Cybersecurity", "#TeamNulldrift", "#NFSUGoa", "#AllNFSUCampuses"],
      likes: 64,
      comments: 12,
      postUrl: "https://www.linkedin.com/in/kolawada-rakshit/",
      featured: true,
      bannerType: "ctf",
    },
    {
      id: "post-sih-2025",
      title: "Building Guardian Global for Smart India Hackathon (SIH) 2025",
      date: "2025",
      category: "Project",
      content:
        "Honored to work as System Architect on 'Guardian Global' for Smart India Hackathon (SIH) 2025. Our team designed a smart tourist safety platform for high-risk remote regions, combining AI anomaly monitoring, blockchain-based identity verification, and real-time geo-fencing. Grateful for the mentorship and teamwork that brought this architecture together!",
      tags: ["#SmartIndiaHackathon", "#SIH2025", "#SystemArchitecture", "#Blockchain", "#GeoFencing"],
      likes: 58,
      comments: 9,
      postUrl: "https://www.linkedin.com/in/kolawada-rakshit/",
      featured: true,
      bannerType: "sih",
    },
    {
      id: "post-ehr-api",
      title: "Health Informatics: Bridging NAMASTE & ICD-11 TM2 Terminologies",
      date: "2025",
      category: "Project",
      content:
        "At NFSU, I conceptualized a web application MVP to integrate Indian traditional medicine datasets into modern Electronic Health Record (EHR) systems. Focused on mapping complex medical terminologies and generating automated Entity-Relationship (ER) graph models while maintaining strict healthcare privacy standards.",
      tags: ["#EHR", "#APIDesign", "#HealthInformatics", "#ICD11", "#NFSU"],
      likes: 42,
      comments: 7,
      postUrl: "https://www.linkedin.com/in/kolawada-rakshit/",
      featured: false,
      bannerType: "ehr",
    },
    {
      id: "post-nfsu-journey",
      title: "Starting My M.Sc. in Cybersecurity Journey at NFSU Goa",
      date: "2024",
      category: "Education",
      content:
        "Having completed my Bachelor's degree in Computer Science and IT at Silver Oak University, I am excited to pursue my Master's in Cybersecurity at National Forensic Sciences University (NFSU Goa Campus). Looking forward to learning deeper forensics, offensive security, and collaborative problem-solving!",
      tags: ["#Cybersecurity", "#NFSUGoa", "#HigherEducation", "#ContinuousLearning"],
      likes: 89,
      comments: 18,
      postUrl: "https://www.linkedin.com/in/kolawada-rakshit/",
      featured: false,
      bannerType: "nfsu",
    },
  ],
  terminalCommands: [
    { cmd: "help", desc: "List all available terminal commands" },
    { cmd: "whoami", desc: "Display student profile and academic background" },
    { cmd: "posts", desc: "Display latest LinkedIn activity and reflections" },
    { cmd: "education", desc: "View degree details (NFSU Goa & Silver Oak University)" },
    { cmd: "skills", desc: "List technical skills in security and software" },
    { cmd: "projects", desc: "Display academic & hackathon projects" },
    { cmd: "resume", desc: "Download official resume PDF" },
    { cmd: "competitions", desc: "View CTF and hackathon participation details" },
    { cmd: "contact", desc: "Display contact methods (LinkedIn, GitHub, Email)" },
    { cmd: "clear", desc: "Clear the terminal output" },
  ],
};
