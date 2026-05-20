
export const site = {
  name: "Rey Mark",
  role: "Software Developer",
  location: "Earth",
  email: "markr7636@gmail.com",
  bio:
    "I build web apps end-to-end from React UIs to the APIs and infrastructure behind them. I care about fast feedback loops, well-named code, and shipping things people actually use.",
  socials: {
    github: "https://github.com/pilipinEgul",
    linkedin: "https://linkedin.com/in/your-handle",
    twitter: "https://twitter.com/your-handle",
  },
};

export const skills: Array<{ group: string; items: string[] }> = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "PHP", "SQL", "C#", "Java"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Bootstrap CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Laravel", "REST API", "MySQL", "SQLite"],
  },
  {
    group: "Infra & Tools",
    items: ["GitHub Actions"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  year: string;
};

export const projects: Project[] = [
  {
    title: "Realtime Collab Editor",
    description:
      "A multiplayer markdown editor with CRDT-based sync, presence, and offline support. Sub-50ms typing latency over WebSocket.",
    tags: ["TypeScript", "Next.js", "Yjs", "WebSocket"],
    href: "https://example.com",
    repo: "https://github.com/your-handle/collab-editor",
    year: "2025",
  },
  {
    title: "Indie Analytics",
    description:
      "Privacy-friendly product analytics with a cookieless tracker and a column-store query engine. Replaces Google Analytics for ~30 small sites.",
    tags: ["Go", "ClickHouse", "React", "Cloudflare"],
    href: "https://example.com",
    repo: "https://github.com/your-handle/indie-analytics",
    year: "2024",
  },
  {
    title: "PaperTrail CLI",
    description:
      "Developer tool that captures shell sessions and converts them into shareable, annotated runbooks. ~5k weekly active users.",
    tags: ["Rust", "CLI", "TUI"],
    repo: "https://github.com/your-handle/papertrail",
    year: "2024",
  },
  {
    title: "This portfolio",
    description:
      "The site you're looking at. Next.js App Router, Tailwind, shadcn-style primitives, light/dark theming.",
    tags: ["Next.js", "Tailwind"],
    repo: "https://github.com/your-handle/portfolio",
    year: "2026",
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  href?: string;
};

export const experience: ExperienceItem[] = [
  // {
  //   company: "Acme Corp",
  //   role: "Senior Software Engineer",
  //   period: "2023 — Present",
  //   description:
  //     "Lead developer on the billing platform. Migrated a monolith to a service-oriented architecture, cutting median request latency by 60%.",
  //   href: "https://acme.example",
  // },
  // {
  //   company: "Globex",
  //   role: "Software Engineer",
  //   period: "2020 — 2023",
  //   description:
  //     "Built the customer-facing dashboard from scratch in Next.js. Owned the design system and the auth/session layer.",
  // },
  {
    company: "Chiu Kim Group Of Campanies",
    role: "Software Developer",
    period: "2025 — Present",
    description:
      "My first role in the IT industry. Built websites with Laravel and Next.js, ran cross-database data migrations via custom scripts (and chased down the data issues that surfaced along the way), automated processes with n8n workflows, built a JavaFX desktop system backed by Hibernate, and authored reports with JasperSoft.",
  },
];
