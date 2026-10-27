

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
    twitter: string;
    email: string;
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
    name: "CYPHER // ZERO",
    displayName: "Alexander Vance",
    handle: "@vance_sec",
    role: "Cybersecurity Architect & High-Performance Systems Developer",
    clearanceLevel: "LEVEL 5 // TOP SECRET // DEVSEC",
    location: "Global / Distributed",
    availability: "Available for Elite Security Audits & Engineering Roles",
    bio: "Bridging deep low-level security research with cutting-edge high-performance software engineering. Specializing in zero-trust architecture, post-quantum cryptography, offensive penetration testing, and scalable cloud systems.",
    stats: [
      { label: "Vulnerabilities Mitigated", value: "350+" },
      { label: "Systems Protected", value: "99.99%" },
      { label: "Code Repositories", value: "48+" },
      { label: "Years in Cyber & Dev", value: "6+ Yrs" },
    ],
  },
  telemetry: {
    systemHealth: "100% INTEGRITY",
    zeroTrustMode: "ENFORCED",
    cipherSuite: "TLS 1.3 / Kyber-1024 PQ",
    firewallLatency: "0.84 ms",
    threatLevel: "ELEVATED (GUARD ON)",
    clusterNode: "NODE-APEX-09",
  },
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    email: "alexander.vance.sec@proton.me",
    pgpKeyId: "4096R / 0x89F12DE940B7C621",
    pgpFingerprint: "E3A8 4C91 29F0 87B2 9182  0174 89F1 2DE9 40B7 C621",
  },
  skillsCategories: [
    {
      title: "Defensive & Offensive Security",
      iconName: "Shield",
      description: "Penetration testing, threat modeling, reverse engineering, and zero-trust engineering.",
      skills: [
        { name: "Zero Trust Architecture", level: 96, category: "Architecture", tag: "Core" },
        { name: "Offensive Penetration Testing", level: 94, category: "Offense", tag: "Red Team" },
        { name: "Reverse Engineering (Ghidra / IDA)", level: 88, category: "Binary", tag: "x86/ARM" },
        { name: "Web App Security (OWASP Top 10)", level: 98, category: "Application", tag: "Audit" },
        { name: "Cryptography & PKI (Post-Quantum)", level: 92, category: "Crypto", tag: "Kyber" },
        { name: "Cloud SIEM & Threat Hunting", level: 90, category: "SOC", tag: "Wazuh/Splunk" },
      ],
    },
    {
      title: "Software Engineering & Systems",
      iconName: "Cpu",
      description: "High-throughput microservices, distributed systems, and modern web applications.",
      skills: [
        { name: "Rust & Memory Safety", level: 92, category: "Systems", tag: "High-Perf" },
        { name: "Go (Golang) Microservices", level: 95, category: "Backend", tag: "gRPC" },
        { name: "TypeScript & Next.js / React", level: 94, category: "Full-Stack", tag: "Modern" },
        { name: "Python (Security Automation & ML)", level: 90, category: "Scripting", tag: "Automation" },
        { name: "Docker, Kubernetes & eBPF", level: 89, category: "DevSecOps", tag: "K8s" },
        { name: "PostgreSQL & Redis Caching", level: 91, category: "Storage", tag: "ACID" },
      ],
    },
  ],
  projects: [
    {
      id: "aegis-mesh",
      title: "AEGIS // Zero-Trust Microservice Mesh",
      tagline: "Cryptographically authenticated service-to-service communication with dynamic mTLS rotation",
      category: "Security",
      description:
        "High-performance distributed zero-trust mesh written in Rust. Enforces hardware-backed mTLS authentication, real-time token rotation, and eBPF-based kernel packet filtering to prevent side-channel telemetry leaks and lateral network movement.",
      threatModel: "Mitigates rogue container privilege escalation, unauthorized lateral movement, and man-in-the-middle packet spoofing across multi-cloud Kubernetes clusters.",
      architecture: [
        "Rust core proxy with asynchronous tokio runtime",
        "eBPF kernel probes for sub-millisecond packet inspection",
        "SPIFFE/SPIRE workload identity integration",
        "Hardware-backed TPM 2.0 key signing",
      ],
      metrics: [
        { label: "Throughput", value: "480k req/s" },
        { label: "p99 Latency", value: "< 1.2 ms" },
        { label: "CVE Mitigations", value: "14 Verified" },
      ],
      tags: ["Rust", "eBPF", "Zero-Trust", "Kubernetes", "mTLS", "SPIFFE"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      status: "Operational",
      stars: 428,
    },
    {
      id: "sentinel-vault",
      title: "SENTINEL // Post-Quantum Encrypted Vault",
      tagline: "Client-side encrypted zero-knowledge secrets vault with Kyber-1024 hybrid key encapsulation",
      category: "Systems",
      description:
        "End-to-end encrypted spatial key-management system resilient against future harvest-now-decrypt-later quantum attacks. Combines X25519 with ML-KEM (Kyber) algorithms for hybrid key exchange and biometric web authentication.",
      threatModel: "Protects enterprise credentials against state-sponsored quantum decryption attempts and insider database tampering via zero-knowledge proof verification.",
      architecture: [
        "WebAssembly (WASM) cryptographic core running in browser sandbox",
        "Hybrid X25519 + Kyber-1024 key encapsulation mechanism",
        "Argon2id memory-hard key derivation",
        "Distributed Shamir's Secret Sharing for emergency key recovery",
      ],
      metrics: [
        { label: "Encryption", value: "AES-256-GCM" },
        { label: "Quantum Rating", value: "NIST Level 5" },
        { label: "Recovery Nodes", value: "3 of 5 Shards" },
      ],
      tags: ["TypeScript", "WASM", "Post-Quantum", "Kyber", "WebCrypto", "React"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      status: "Hardened",
      stars: 312,
    },
    {
      id: "vuln-hunter-ai",
      title: "NEXUS // Autonomous AST Security Audit Engine",
      tagline: "Static & dynamic taint-analysis engine analyzing smart contracts and web APIs for zero-days",
      category: "Security",
      description:
        "Deep static code analysis and taint tracking tool that converts TypeScript, Go, and Solidity codebases into control flow graphs (CFGs) to discover injection vectors, logic bugs, and reentrancy vulnerabilities before deployment.",
      threatModel: "Detects SQLi, SSRF, remote code execution (RCE), and race conditions in CI/CD pipelines before production release.",
      architecture: [
        "Tree-sitter AST parser with custom vulnerability rule engine",
        "Symbolic execution engine for branch path exploration",
        "Automated PoC payload synthesis and sandboxed execution",
        "SARIF report generation for GitHub Security integration",
      ],
      metrics: [
        { label: "Scan Velocity", value: "12,000 LOC/s" },
        { label: "False Positive Rate", value: "< 2.1%" },
        { label: "CVEs Uncovered", value: "9 Bounties" },
      ],
      tags: ["Go", "Python", "AST Parsing", "Taint Analysis", "SARIF", "Docker"],
      githubUrl: "https://github.com",
      featured: true,
      status: "Operational",
      stars: 580,
    },
    {
      id: "hyper-cloud",
      title: "PULSE // Distributed Resilient Edge Cloud",
      tagline: "Ultra-low-latency edge compute node network with automated DDoS dampening and geo-routing",
      category: "Cloud",
      description:
        "Global edge orchestration plane handling traffic distribution, anycast routing, and synthetic traffic generation with instant mitigation for L3/L4 and L7 volumetric attack waves.",
      threatModel: "Dampens SYN floods, HTTP/2 Rapid Reset attacks, and slowloris connection starvation across 24 edge points of presence.",
      architecture: [
        "Golang edge daemon with QUIC / HTTP/3 native transport",
        "Distributed Redis cluster with Raft consensus",
        "Next.js spatial telemetry dashboard with real-time WebSockets",
      ],
      metrics: [
        { label: "Global Nodes", value: "24 Edge PoPs" },
        { label: "DDoS Capacity", value: "1.2 Tbps" },
        { label: "Uptime SLA", value: "99.999%" },
      ],
      tags: ["Go", "HTTP/3", "Edge Compute", "Redis", "Next.js", "WebSockets"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      status: "Operational",
      stars: 245,
    },
  ],
  certifications: [
    {
      id: "cert-1",
      name: "OSCP // Offensive Security Certified Professional",
      issuer: "OffSec",
      date: "2024",
      verificationId: "OS-102948-V",
      status: "Verified",
      badgeColor: "from-red-500/30 to-amber-500/20",
    },
    {
      id: "cert-2",
      name: "CISSP // Certified Information Systems Security Professional",
      issuer: "(ISC)²",
      date: "2024",
      verificationId: "ISC2-948123-SEC",
      status: "Verified",
      badgeColor: "from-cyan-500/30 to-blue-500/20",
    },
    {
      id: "cert-3",
      name: "AWS Certified Security - Specialty",
      issuer: "Amazon Web Services",
      date: "2025",
      verificationId: "AWS-SEC-872619",
      status: "Active",
      badgeColor: "from-amber-500/30 to-orange-500/20",
    },
    {
      id: "cert-4",
      name: "Certified Kubernetes Security Specialist (CKS)",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      date: "2025",
      verificationId: "LF-CKS-449102",
      status: "Verified",
      badgeColor: "from-emerald-500/30 to-cyan-500/20",
    },
  ],
  terminalCommands: [
    { cmd: "help", desc: "List all terminal commands and system clearances" },
    { cmd: "whoami", desc: "Display operative profile, clearance, and core directive" },
    { cmd: "skills", desc: "Print full security and development capability breakdown" },
    { cmd: "projects", desc: "Display active mission projects and architecture reports" },
    { cmd: "scan", desc: "Execute real-time spatial vulnerability & port security audit" },
    { cmd: "certs", desc: "Verify cryptographic credentials and certifications" },
    { cmd: "contact", desc: "Display encrypted communication channels and PGP key" },
    { cmd: "easteregg", desc: "Decrypt classified dossier & secret audio channel" },
    { cmd: "clear", desc: "Clear terminal buffer" },
  ],
};
