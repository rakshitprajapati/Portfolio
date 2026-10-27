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
  status: "Operational" | "In Development" | "Prototype";
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
      { label: "Degree Program", value: "M.Sc. Cyber" },
      { label: "Institution", value: "NFSU Goa" },
      { label: "Cisco CTF Campus", value: "1st Place" },
      { label: "Undergraduate", value: "B.Sc. CS & IT" },
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
    phone: "+91 9265630380",
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
      title: "Guardian Global // Tourist Safety Monitoring Platform",
      tagline: "Smart tourist safety monitoring architecture for high-risk and remote regions",
      category: "Security",
      description:
        "Designed as System Architect for Smart India Hackathon (SIH) 2025. Conceptualized an architecture for a smart tourist safety platform integrating AI for pattern monitoring, blockchain-based identity verification, and geo-fencing for real-time safety alerts in remote regions.",
      threatModel:
        "Focuses on reliable identity verification, preventing location data spoofing in remote zones, and establishing secure channels for emergency alerts.",
      architecture: [
        "AI-assisted movement pattern and anomaly monitoring",
        "Blockchain-based digital identity verification concept",
        "Geo-fencing boundary triggers for high-risk zones",
        "Emergency alert routing for remote area responders",
      ],
      metrics: [
        { label: "Event", value: "SIH 2025" },
        { label: "Role", value: "System Architect" },
        { label: "Focus", value: "Safety & Geo-fencing" },
      ],
      tags: ["Smart India Hackathon", "AI", "Blockchain", "Geo-fencing", "Architecture"],
      githubUrl: "https://github.com/rakshitprajapati",
      featured: true,
      status: "Prototype",
      stars: 45,
    },
    {
      id: "ehr-traditional-medicine",
      title: "EHR Traditional Medicine API Integration",
      tagline: "Integrating Indian traditional medicine datasets into Electronic Health Record (EHR) systems",
      category: "Systems",
      description:
        "Conceptualized at National Forensic Sciences University (NFSU). Designed a web application MVP framework to integrate Indian traditional medicine datasets into standard Electronic Health Record (EHR) systems by mapping NAMASTE and ICD-11 TM2 terminologies with automated Entity-Relationship (ER) graph generation.",
      threatModel:
        "Emphasizes healthcare data privacy compliance, standardized medical terminology translation, and structural integrity of patient electronic records.",
      architecture: [
        "API framework mapping NAMASTE terminology to ICD-11 TM2 standards",
        "Automated Entity-Relationship (ER) graph generation",
        "Modular REST endpoints structured for EHR interoperability",
        "Structured data validation schemas for medical datasets",
      ],
      metrics: [
        { label: "Standard", value: "ICD-11 TM2" },
        { label: "Dataset", value: "NAMASTE" },
        { label: "Output", value: "ER Graph Model" },
      ],
      tags: ["API Design", "EHR Standards", "ICD-11 TM2", "NAMASTE", "NFSU"],
      githubUrl: "https://github.com/rakshitprajapati",
      featured: true,
      status: "Prototype",
      stars: 38,
    },
    {
      id: "cisco-ctf-qualification",
      title: "Cisco Capture The Flag (CTF) Competitions",
      tagline: "Secured 1st Place at NFSU Goa Campus and 2nd Place at Finals in NFSU Gandhinagar",
      category: "Security",
      description:
        "Competed with Team GOA_Nulldrift in the Cisco Capture The Flag (CTF) qualification and final rounds. Solved practical technical challenges involving web application security, basic reverse engineering, network forensics, and cryptography under timed competition rules.",
      threatModel:
        "Investigated web vulnerabilities (injection, auth bypass), packet traces (PCAP), and binary disassembly challenges to uncover flags and understand defensive remediation.",
      architecture: [
        "Web security challenge auditing and payload analysis",
        "Network packet capture inspection (Wireshark/PCAP)",
        "Basic binary reverse engineering workflows",
        "Team-based collaboration and real-time problem solving",
      ],
      metrics: [
        { label: "NFSU Goa", value: "1st Place" },
        { label: "Finals (Gandhinagar)", value: "2nd Place" },
        { label: "Team", value: "GOA_Nulldrift" },
      ],
      tags: ["CTF", "Cisco", "Web Security", "Network Forensics", "Team Competition"],
      githubUrl: "https://github.com/rakshitprajapati",
      featured: true,
      status: "Operational",
      stars: 52,
    },
    {
      id: "gorilla-grind",
      title: "Gorilla Grind (Gamified Diet Planning MVP)",
      tagline: "Gamified health and fitness application MVP from concept to technical specification",
      category: "Full-Stack",
      description:
        "Designed at NFSU. Developed the concept and technical specification for a gamified health and fitness application MVP. Created comprehensive Product Requirements Documents (PRD) and intuitive screen flows to guide development and user experience.",
      threatModel:
        "Ensures user session security, safe input validation, and privacy protection for personal health metrics.",
      architecture: [
        "Comprehensive Product Requirements Document (PRD)",
        "Interactive screen flows and UX layout specifications",
        "Gamified habit-building and milestone mechanisms",
        "Dietary and workout calculation logic guidelines",
      ],
      metrics: [
        { label: "Deliverable", value: "PRD & Screen Flows" },
        { label: "Role", value: "Product Architect" },
        { label: "Type", value: "App MVP" },
      ],
      tags: ["Product Design", "PRD", "Screen Flows", "HealthTech", "NFSU"],
      githubUrl: "https://github.com/rakshitprajapati",
      featured: false,
      status: "Prototype",
      stars: 28,
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
      name: "Cisco CTF Finals — 2nd Place (NFSU Gandhinagar)",
      issuer: "NFSU Gandhinagar Finals",
      date: "Sep 2026",
      verificationId: "TEAM-GOA-NULLDRIFT-2ND",
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
        "Thrilled to announce that our team GOA_Nulldrift secured 1st Place at the NFSU Goa Campus qualification round and went on to achieve 2nd Place at the National Finals held at NFSU Gandhinagar! Grateful for the intense technical challenges spanning web vulnerabilities, packet analysis, and reverse engineering. Big thanks to Cisco and NFSU for organizing such an enriching experience!",
      tags: ["#CiscoCTF", "#Cybersecurity", "#TeamNulldrift", "#NFSUGoa", "#ProblemSolving"],
      likes: 64,
      comments: 12,
      postUrl: "https://www.linkedin.com/in/kolawada-rakshit/",
      featured: true,
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
    { cmd: "contact", desc: "Display contact methods (LinkedIn, GitHub, Email, Phone)" },
    { cmd: "clear", desc: "Clear the terminal output" },
  ],
};
