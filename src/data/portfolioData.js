export const PERSONAL_INFO = {
  name: "Gokilavani",
  callsign: "CYBER_ARCHITECT",
  title: "Senior Full Stack & Distributed Systems Engineer",
  tagline: "Architecting Resilient Cloud Systems & High-Velocity Digital Experiences",
  bio: "Full Stack Engineer with 7+ years of expertise in architecting high-concurrency cloud systems, real-time distributed pipelines, and ultra-responsive web applications. Passionate about microsecond latency optimization, zero-trust security, and aesthetic cybernetic interfaces.",
  status: "ONLINE // AVAILABLE FOR HIRE",
  location: "San Francisco, CA / Remote Worldwide",
  email: "gokilavani.dev@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  discord: "https://discord.com",
  uptime: "99.99%",
  experienceYears: "7+",
  completedProjects: "45+",
  codeCommits: "3,840+",
};

export const SYSTEM_METRICS = [
  { label: "Engineering Exp", value: "7+ Yrs", detail: "Full Stack & Cloud" },
  { label: "Production Apps", value: "45+", detail: "Enterprise & SaaS" },
  { label: "System Uptime SLA", value: "99.99%", detail: "High Availability" },
  { label: "Latency Benchmark", value: "<15ms", detail: "Edge Optimized" },
];

export const SKILL_CATEGORIES = [
  { id: "all", name: "All Technologies" },
  { id: "frontend", name: "Frontend & UI" },
  { id: "backend", name: "Backend & Systems" },
  { id: "cloud", name: "Cloud & DevOps" },
  { id: "data", name: "Databases & Messaging" },
];

export const SKILLS = [
  // Frontend
  { name: "React 19 / Next.js", category: "frontend", level: 96, icon: "Code2", tag: "Core Frontend", description: "SSR, Server Components, Suspense, Custom Hooks" },
  { name: "TypeScript", category: "frontend", level: 94, icon: "FileCode", tag: "Strict Mode", description: "Complex generics, AST parsing, Type safety" },
  { name: "Tailwind CSS v3", category: "frontend", level: 98, icon: "Palette", tag: "Design Systems", description: "Responsive layouts, micro-animations, theme tokens" },
  { name: "WebSockets & WebRTC", category: "frontend", level: 88, icon: "Radio", tag: "Real-Time", description: "Bi-directional streaming, low latency data sync" },
  { name: "State Architecture (Zustand/Redux)", category: "frontend", level: 92, icon: "Layers", tag: "Client State", description: "Immutable caches, optimistic updates, offline state" },

  // Backend
  { name: "Node.js & Express", category: "backend", level: 95, icon: "Server", tag: "Runtime", description: "Event loop optimization, worker threads, clustering" },
  { name: "Go (Golang)", category: "backend", level: 89, icon: "Cpu", tag: "Concurrency", description: "Goroutines, high-throughput microservices, gRPC" },
  { name: "Python / FastAPI", category: "backend", level: 87, icon: "Terminal", tag: "AI / APIs", description: "Async endpoints, PyTorch integration, data pipelines" },
  { name: "gRPC & GraphQL", category: "backend", level: 90, icon: "Network", tag: "Protocols", description: "Protobuf contracts, schema stitching, federation" },
  { name: "RESTful API Security", category: "backend", level: 93, icon: "ShieldCheck", tag: "Zero-Trust", description: "OAuth2, JWT, rate limiting, HMAC request signing" },

  // Cloud & DevOps
  { name: "Docker & Kubernetes", category: "cloud", level: 91, icon: "Box", tag: "Containers", description: "Helm charts, pod autoscaling, ingress controllers" },
  { name: "AWS Cloud Infrastructure", category: "cloud", level: 90, icon: "Cloud", tag: "Infrastructure", description: "ECS, Lambda, CloudFront, S3, RDS, IAM Zero-Trust" },
  { name: "CI/CD & GitHub Actions", category: "cloud", level: 94, icon: "GitBranch", tag: "Automation", description: "Multi-stage automated pipelines, security scanners" },
  { name: "Terraform / IaC", category: "cloud", level: 86, icon: "FileJson", tag: "Provisioning", description: "Declarative infrastructure as code, state locking" },

  // Databases & Messaging
  { name: "PostgreSQL & Prisma", category: "data", level: 93, icon: "Database", tag: "Relational", description: "Query planning, indexing, connection pooling, migrations" },
  { name: "Redis & In-Memory Caching", category: "data", level: 95, icon: "Zap", tag: "Cache & PubSub", description: "Distributed caching, rate limiting, pub/sub channels" },
  { name: "Apache Kafka / RabbitMQ", category: "data", level: 88, icon: "Activity", tag: "Event Streaming", description: "Event-driven architecture, consumer groups, offsets" },
  { name: "MongoDB & Vector DBs", category: "data", level: 85, icon: "HardDrive", tag: "NoSQL & RAG", description: "Embedding storage, cosine similarity search, sharding" },
];

export const PROJECTS = [
  {
    id: "neuralflow",
    title: "NeuralFlow AI Cloud Platform",
    category: "ai",
    categoryLabel: "AI & Distributed Cloud",
    badge: "FEATURED MISSION",
    status: "PRODUCTION",
    image: "/project1.jpg",
    summary: "Real-time distributed machine learning inference engine and model orchestration dashboard with dynamic neural network topology visualization.",
    tech: ["React 19", "Tailwind CSS", "Go / gRPC", "Python FastAPI", "Docker", "Redis"],
    stats: {
      latency: "12.8ms avg",
      throughput: "12.5k nodes",
      accuracy: "98.2%",
    },
    github: "https://github.com",
    liveUrl: "https://example.com/demo1",
    architecture: {
      problem: "Traditional inference gateways suffered from high cold-start times and lacked real-time visibility into layer activations across distributed GPU clusters.",
      solution: "Engineered a low-latency gRPC router written in Go combined with a custom interactive React canvas visualization that graphs neural activations in real time.",
      highlights: [
        "Reduced end-to-end API latency from 85ms to 12.8ms using Redis pub/sub and HTTP/3 streaming",
        "Interactive SVG/Canvas neural topology viewer supporting 5,000+ simultaneous live nodes",
        "Automated failover across 3 geographical cloud regions with 99.99% uptime guarantee"
      ]
    }
  },
  {
    id: "cybervault",
    title: "CyberVault // Zero-Trust Security Suite",
    category: "security",
    categoryLabel: "Cybersecurity & Identity",
    badge: "ENTERPRISE",
    status: "PRODUCTION",
    image: "/project2.jpg",
    summary: "Zero-trust identity platform featuring encrypted ledger audits, biometric MFA verification, and global live threat telemetry visualizers.",
    tech: ["React", "TypeScript", "Node.js", "WebCrypto API", "PostgreSQL", "Tailwind CSS"],
    stats: {
      compliance: "98.2%",
      activeUsers: "4,119",
      threatsBlocked: "843 / hr",
    },
    github: "https://github.com",
    liveUrl: "https://example.com/demo2",
    architecture: {
      problem: "Remote enterprise workforces required continuous authentication verification without introducing friction into internal developer portals.",
      solution: "Designed a lightweight Zero-Trust Network Access (ZTNA) control plane with end-to-end client cryptographic challenge handshakes.",
      highlights: [
        "Hardware-backed WebAuthn / FIDO2 biometric authentication flow with passkey support",
        "Tamper-evident cryptographically signed audit logs using SHA-256 block hashing",
        "Global vector threat map displaying live attack vectors with automated IP isolation"
      ]
    }
  },
  {
    id: "synthetix",
    title: "Synthetix Algorithmic Order Engine",
    category: "fintech",
    categoryLabel: "FinTech & Low Latency",
    badge: "HIGH FREQUENCY",
    status: "STABLE",
    image: "/project3.jpg",
    summary: "Sub-millisecond cryptocurrency and equity telemetry platform with Level-2 order book depth visualization and algorithmic strategy backtesting.",
    tech: ["React", "Vite", "WebSockets", "Go", "TimescaleDB", "Tailwind CSS"],
    stats: {
      executionTime: "<1.2ms",
      sharpeRatio: "3.1",
      orderDepth: "50k levels",
    },
    github: "https://github.com",
    liveUrl: "https://example.com/demo3",
    architecture: {
      problem: "Standard web-based trading terminals lagged under volatile high-volume tick bursts, causing frame drops and inaccurate order book representations.",
      solution: "Created an offscreen WebWorker data pipeline with binary buffer deserialization and custom virtualization rendering at a consistent 60 FPS.",
      highlights: [
        "High-frequency WebSocket feed consuming over 100,000 tick updates per second",
        "Dual-buffer memory architecture preventing UI thread locking during market spikes",
        "Automated risk containment triggers and algorithmic profit/loss telemetry"
      ]
    }
  },
  {
    id: "nexusmesh",
    title: "NexusMesh Kubernetes Observability",
    category: "devops",
    categoryLabel: "DevOps & Cloud Native",
    badge: "OPEN SOURCE",
    status: "V2 RELEASED",
    image: "/project4.jpg",
    summary: "3D microservices service mesh monitor and Kubernetes cluster topology visualizer mapping service latency, error budgets, and network throughput.",
    tech: ["React 19", "Tailwind CSS", "Kubernetes API", "Prometheus", "Docker", "Node.js"],
    stats: {
      clustersMonitored: "14 Nodes",
      throughput: "42k req/s",
      activePods: "288 Pods",
    },
    github: "https://github.com",
    liveUrl: "https://example.com/demo4",
    architecture: {
      problem: "Engineering teams struggled to trace cross-service latency degradation across distributed multi-region Kubernetes clusters.",
      solution: "Built an interactive dependency graph with live telemetry overlays and automatic bottleneck detection using eBPF probes.",
      highlights: [
        "Interactive 3D isometric node layout showing real-time HTTP/gRPC packet flow",
        "Automated anomaly alerts integrated with Slack, PagerDuty, and webhooks",
        "Over 1,200 GitHub stars and adopted by several tech startups for cluster monitoring"
      ]
    }
  }
];

export const WORK_EXPERIENCE = [
  {
    period: "2023 - PRESENT",
    role: "Staff / Lead Full Stack Systems Architect",
    company: "CyberNetix Technologies",
    location: "San Francisco, CA (Remote)",
    description: "Lead architect for distributed cloud systems and frontend infrastructure. Spearheaded migration to modern React 19 micro-frontends and high-throughput Go microservices, improving throughput by 340%.",
    technologies: ["React 19", "Go", "Kubernetes", "AWS", "Kafka", "PostgreSQL"],
    achievements: [
      "Mentored a team of 12 full stack engineers across 3 time zones",
      "Cut cloud infrastructure expenditures by $180,000/year through intelligent autoscaling",
      "Architected internal design system used across 6 enterprise products"
    ]
  },
  {
    period: "2021 - 2023",
    role: "Senior Full Stack Software Engineer",
    company: "QuantumScale Cloud Solutions",
    location: "Austin, TX (Hybrid)",
    description: "Built real-time telemetry dashboards and scalable REST/GraphQL APIs serving 2M+ active daily queries with 99.99% uptime compliance.",
    technologies: ["React", "Node.js", "TypeScript", "Docker", "Redis", "Tailwind CSS"],
    achievements: [
      "Engineered real-time data streaming pipeline handling 50k events/sec",
      "Redesigned core client app leading to a 45% boost in user session duration",
      "Achieved 95%+ unit and integration test coverage across core backend services"
    ]
  },
  {
    period: "2019 - 2021",
    role: "Full Stack Engineer",
    company: "NeoTokyo Digital Labs",
    location: "Seattle, WA",
    description: "Developed interactive web applications, client-facing dashboards, and automated CI/CD deployment pipelines for enterprise clients.",
    technologies: ["React", "JavaScript", "Python", "Flask", "PostgreSQL", "CSS3"],
    achievements: [
      "Delivered 14 successful client projects on schedule with zero critical post-launch bugs",
      "Automated testing and linting pipelines, reducing release regression incidents by 60%"
    ]
  }
];

export const TERMINAL_COMMANDS = {
  help: "Available commands:\n  whoami       - Display developer summary\n  skills       - List core technical competencies\n  projects     - List flagship production missions\n  contact      - Display communication channels\n  clear        - Clear console output\n  matrix       - Trigger cyber matrix pulse",
  whoami: "Gokilavani [Senior Full Stack & Systems Engineer]\nLocation: San Francisco, CA / Remote\nExperience: 7+ Years\nCore: React 19, TypeScript, Node.js, Go, Kubernetes, AWS\nFocus: High-concurrency systems, low latency, cybernetic interfaces",
  skills: "Frontend: React 19, TypeScript, Tailwind CSS, WebSockets\nBackend: Node.js, Go (Golang), Python FastAPI, gRPC\nCloud: Docker, Kubernetes, AWS, Terraform, CI/CD\nDatabases: PostgreSQL, Redis, Kafka, MongoDB",
  projects: "1. NeuralFlow AI Cloud Platform (AI & Cloud)\n2. CyberVault Zero-Trust Security Suite (Security)\n3. Synthetix Algorithmic Order Engine (FinTech)\n4. NexusMesh Kubernetes Observability (DevOps)",
  contact: "Email: gokilavani.dev@gmail.com\nGitHub: github.com\nLinkedIn: linkedin.com\nStatus: Available for full-time senior engineering & consulting",
};
