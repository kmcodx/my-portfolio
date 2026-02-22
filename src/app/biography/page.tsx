import type { Metadata } from "next";
import { BiographyPageClient } from "@/components/biography/BiographyPageClient";
import { ChapterData } from "@/components/biography/types";

export const metadata: Metadata = {
  title: "Biography | Khurram Malik",
  description:
    "Explore the complete chapter-based professional journey of Khurram Malik — from early engineering foundations to leadership, architecture, and global delivery.",
  alternates: {
    canonical: "/biography",
  },
  openGraph: {
    title: "Biography | Khurram Malik",
    description:
      "A premium timeline-style biography covering Khurram Malik's journey across software engineering, DevOps, SaaS, and leadership.",
    type: "article",
    url: "/biography",
  },
};

const chapters: ChapterData[] = [
  {
    id: "early-foundations",
    number: 1,
    title: "Early Foundations",
    subtitle: "Curiosity, logic, and the first principles of system thinking.",
    period: "2016–2020",
    paragraphs: [
      "Khurram Malik's journey into technology began with curiosity rather than ambition.",
      "After completing Intermediate in Computer Science (ICS), where he first worked with C++, he developed a structured way of thinking — problem-solving through logic and system design.",
      "He later earned a Bachelor of Science in Computer Science from Preston University (2016–2020). But unlike many students, he didn't wait for graduation to begin building.",
      "By 2016, he had already entered the professional world, working in live production environments and learning by shipping real systems.",
    ],
    quote: "Build real systems. Solve real problems. Learn by shipping.",
  },
  {
    id: "php-era",
    number: 2,
    title: "The PHP Era",
    subtitle: "Mastering backend engineering at production scale.",
    period: "2016–2021",
    paragraphs: [
      "Khurram's early career was deeply rooted in PHP-based backend development, working with Core PHP, Laravel, CodeIgniter, and WordPress custom themes and plugins.",
      "During this phase, he mastered database architecture, normalization, MVC patterns, scalable backend design, requirement engineering, and production deployment.",
      "At Nexus Technologies, he contributed to the Prime Minister's National Laptop Scheme (HEC – Pakistan), supporting one of the country's largest user-facing initiatives.",
      "This chapter shaped his understanding of high-user systems, reliability, data integrity, and performance optimization.",
    ],
    quote: "Scale begins with disciplined architecture, not accidental growth.",
    metrics: [
      { label: "Users Served", value: 100000, suffix: "+" },
      { label: "Frameworks Mastered", value: 4, suffix: "+" },
      { label: "Years of Backend Focus", value: 5, suffix: "+" },
    ],
    callouts: [
      "Government-level systems exposure through HEC's National Laptop Scheme.",
      "Transitioned into Senior Software Engineer responsibilities.",
    ],
  },
  {
    id: "leadership-emerges",
    number: 3,
    title: "Leadership Emerges",
    subtitle: "From individual contributor to delivery owner.",
    paragraphs: [
      "As technical depth grew, so did responsibility. At Nexus Technologies, Khurram led architecture decisions and coordinated cross-functional execution.",
      "He managed teams of up to 15 developers, conducted client requirement meetings, and maintained deployment reliability through DevOps-led workflows.",
      "He hired 80+ professionals over time, mentoring engineers and building teams structured for accountability and throughput.",
      "By this stage, he was designing systems, leading people, and owning results.",
    ],
    quote: "Leadership in engineering is measured by reliability, clarity, and outcomes.",
    metrics: [
      { label: "Team Size Led", value: 15, suffix: "+" },
      { label: "Professionals Hired", value: 80, suffix: "+" },
      { label: "Production Uptime", value: 98, suffix: "%" },
    ],
  },
  {
    id: "expanding-stack",
    number: 4,
    title: "Expanding the Stack",
    subtitle: "Modern fullstack and infrastructure ownership.",
    paragraphs: [
      "As the industry evolved, Khurram expanded beyond PHP into modern fullstack and infrastructure engineering.",
      "He transitioned into Node.js, NestJS, and REST API architecture on the backend while building modern interfaces with Next.js, React.js, and Vue.js.",
      "On infrastructure, he developed practical command over Linux VPS provisioning, Docker, CI/CD pipelines, Nginx and Apache reverse proxies, cloud VPS environments, Redis, Cloudflare security, and operational tooling.",
      "This evolution positioned him as a rare fullstack engineer who also owns infrastructure from provisioning to production reliability.",
    ],
    quote: "Code is only half the product. Infrastructure is the other half.",
  },
  {
    id: "founding-codex",
    number: 5,
    title: "Founding CodeX",
    subtitle: "The entrepreneurial leap from builder to executive technologist.",
    period: "2024–2026",
    paragraphs: [
      "In October 2024, Khurram co-founded CodeX and stepped into the CTO role.",
      "At CodeX, he led technical strategy, managed engineering and DevOps teams, supervised operations, and delivered multi-client software initiatives.",
      "Major initiatives included a multi-vendor SaaS e-commerce platform, PackNGo modular SaaS architecture (NestJS + Next.js), Stripe subscription billing systems, and Odoo 18 ERP deployment via Docker on private VPS.",
      "Though he exited in February 2026 due to partnership conflicts, the chapter sharpened business thinking, financial awareness, and executive decision-making.",
    ],
    quote: "Building a company forces architecture, leadership, and business to converge.",
    metrics: [
      { label: "Active Clients Managed", value: 20, suffix: "+" },
      { label: "Revenue Generated", value: 100000, suffix: "+" },
      { label: "Budget Ownership", value: 80000, suffix: "+" },
    ],
  },
  {
    id: "architectural-thinking",
    number: 6,
    title: "Architectural Thinking",
    subtitle: "Designing for scalability under real-world constraints.",
    paragraphs: [
      "Khurram's core strength lies in architecture that survives production pressure.",
      "He has designed scalable REST APIs, SaaS foundations, enterprise database schemas, Redis caching layers, Stripe billing integrations, and Zoom SDK workflows.",
      "He understands practical scalability deeply: bottlenecks, infrastructure trade-offs, performance tuning, and deployment lifecycle management.",
      "His edge is pragmatic architecture built for real constraints, especially VPS-based systems that need reliability without excess complexity.",
    ],
    quote: "Scalability is practical when architecture respects constraints.",
  },
  {
    id: "international-exposure",
    number: 7,
    title: "International Exposure",
    subtitle: "Delivering across cultures, markets, and expectations.",
    paragraphs: [
      "Khurram has delivered for Pakistani government ministries, MENA region clients, UK companies, US clients, and European businesses.",
      "His projects include mental health platforms, taxi booking systems, export directories, ERP deployments, hosting infrastructure, and SaaS products.",
      "Beyond engineering, he independently leads meetings, translates business requirements into architecture, and manages stakeholder expectations across distributed teams.",
    ],
    quote: "Global delivery requires technical fluency and communication maturity.",
  },
  {
    id: "freelance-phase",
    number: 8,
    title: "Freelance Phase",
    subtitle: "Independent delivery, senior ownership, and focused execution.",
    period: "2026–Present",
    paragraphs: [
      "Today, Khurram operates as a full-time freelance Senior Software Engineer.",
      "He focuses on Laravel backend systems, fullstack architecture with Next.js, DevOps deployments, VPS hardening, CI/CD pipelines, and SaaS system design.",
      "He is currently open to remote Senior Software Engineer roles with UK/US companies in the $3K–$5K monthly range.",
      "His positioning is clear: end-to-end ownership across backend, architecture, and production deployment.",
    ],
    quote: "Senior engineering is ownership from design to deployment.",
  },
  {
    id: "leadership-philosophy",
    number: 9,
    title: "Leadership Philosophy",
    subtitle: "Principles that shape systems and teams.",
    paragraphs: [
      "Khurram believes shipping beats perfection, infrastructure matters as much as code, and performance is always a feature.",
      "He treats DevOps as non-optional and sees engineering as inseparable from business outcomes.",
      "With extensive hiring and mentorship experience, he emphasizes delegation, accountability, and strong execution rhythms.",
      "His philosophy is simple: teams scale systems, not individuals.",
    ],
    quote: "Great teams create durable systems and durable results.",
  },
  {
    id: "identity-vision",
    number: 10,
    title: "Identity & Vision",
    subtitle: "A system builder with full-spectrum technical ownership.",
    paragraphs: [
      "Khurram Malik is not defined by a single title. He is not only a PHP developer, CTO, or DevOps engineer.",
      "He evolved through a clear progression: Developer to Senior Engineer to Technical Lead to CTO to Independent Architect.",
      "His foundation is Laravel. His expansion is Next.js and NestJS. His edge is DevOps. His strength is ownership.",
      "The identity is consistent across every phase: a system builder who ships with precision.",
    ],
    quote: "Identity is built through shipped systems, not labels.",
  },
];

export default function BiographyPage() {
  return <BiographyPageClient chapters={chapters} />;
}
