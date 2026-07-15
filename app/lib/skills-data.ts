import type { IconType } from "react-icons";
import { N8nIcon } from "@/app/components/icons/N8nIcon";
import { HiOutlineArrowsRightLeft, HiOutlineCpuChip, HiOutlineSparkles } from "react-icons/hi2";
import {
  SiAnthropic,
  SiApachekafka,
  SiClaude,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGnubash,
  SiGo,
  SiGraphql,
  SiJest,
  SiLinux,
  SiMake,
  SiMarkdown,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPandas,
  SiPostgresql,
  SiPrisma,
  SiPuppeteer,
  SiReact,
  SiRedis,
  SiShadcnui,
  SiSupabase,
  SiSwagger,
  SiSvelte,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVite,
  SiVitest,
} from "react-icons/si";

export type SkillNode = {
  id: string;
  name: string;
  subtitle?: string;
  icon: IconType;
  active?: boolean;
  glow: string;
  iconColor?: string;
};

export type SkillCategory = {
  id: string;
  label: string;
  skills: SkillNode[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { id: "react", name: "React", subtitle: "v18+", icon: SiReact, active: true, glow: "rgba(97, 218, 251, 0.5)", iconColor: "#61dafb" },
      { id: "typescript", name: "TypeScript", subtitle: "strict", icon: SiTypescript, active: true, glow: "rgba(49, 120, 198, 0.5)", iconColor: "#3178c6" },
      { id: "nextjs", name: "Next.js", subtitle: "App Router", icon: SiNextdotjs, active: true, glow: "rgba(255, 255, 255, 0.32)", iconColor: "#f4f4f5" },
      { id: "tailwind", name: "Tailwind", subtitle: "v4", icon: SiTailwindcss, active: true, glow: "rgba(56, 189, 248, 0.48)", iconColor: "#38bdf8" },
      { id: "svelte", name: "Svelte", subtitle: "components", icon: SiSvelte, active: true, glow: "rgba(255, 62, 0, 0.42)", iconColor: "#ff3e00" },
      { id: "shadcn", name: "shadcn/ui", subtitle: "design system", icon: SiShadcnui, active: true, glow: "rgba(255, 255, 255, 0.28)", iconColor: "#fafafa" },
      { id: "vite", name: "Vite", subtitle: "bundler", icon: SiVite, active: true, glow: "rgba(189, 147, 249, 0.48)", iconColor: "#bd93f9" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { id: "nodejs", name: "Node.js", subtitle: "runtime", icon: SiNodedotjs, active: true, glow: "rgba(51, 153, 51, 0.48)", iconColor: "#68a063" },
      { id: "go", name: "Go", subtitle: "linguagem", icon: SiGo, active: true, glow: "rgba(0, 173, 216, 0.48)", iconColor: "#00add8" },
      { id: "express", name: "Express", subtitle: "API", icon: SiExpress, active: true, glow: "rgba(255, 255, 255, 0.28)", iconColor: "#f4f4f5" },
      { id: "nestjs", name: "NestJS", subtitle: "framework", icon: SiNestjs, active: true, glow: "rgba(234, 57, 112, 0.42)", iconColor: "#ea3970" },
      { id: "grpc", name: "gRPC", subtitle: "HTTP/2", icon: HiOutlineArrowsRightLeft, active: true, glow: "rgba(46, 168, 255, 0.45)", iconColor: "#2ea8ff" },
      { id: "graphql", name: "GraphQL", subtitle: "API layer", icon: SiGraphql, active: true, glow: "rgba(225, 0, 152, 0.42)", iconColor: "#e10098" },
      { id: "redis", name: "Redis", subtitle: "cache", icon: SiRedis, active: true, glow: "rgba(220, 56, 45, 0.45)", iconColor: "#dc382d" },
      { id: "prisma", name: "Prisma", subtitle: "ORM", icon: SiPrisma, active: true, glow: "rgba(45, 212, 191, 0.42)", iconColor: "#2dd4bf" },
      { id: "supabase", name: "Supabase", subtitle: "BaaS", icon: SiSupabase, active: true, glow: "rgba(62, 207, 142, 0.45)", iconColor: "#3ecf8e" },
      { id: "kafka", name: "Kafka", subtitle: "streaming", icon: SiApachekafka, active: true, glow: "rgba(255, 255, 255, 0.28)", iconColor: "#fafafa" },
    ],
  },
  {
    id: "ai",
    label: "AI & Agents",
    skills: [
      { id: "ai", name: "AI", subtitle: "LLMs & ML", icon: SiOpenai, active: true, glow: "rgba(16, 163, 127, 0.45)", iconColor: "#10a37f" },
      { id: "mcp", name: "MCP Server", subtitle: "IA ↔ sistemas", icon: HiOutlineCpuChip, active: true, glow: "rgba(212, 175, 55, 0.45)", iconColor: "#d4af37" },
      { id: "claude-code", name: "Claude Code", subtitle: "agentic coding", icon: SiClaude, active: true, glow: "rgba(217, 119, 87, 0.45)", iconColor: "#d97757" },
      { id: "agents", name: "Agents", subtitle: "autonômos", icon: HiOutlineSparkles, active: true, glow: "rgba(248, 224, 138, 0.42)", iconColor: "#f8e08a" },
      { id: "anthropic", name: "Anthropic", subtitle: "Claude API", icon: SiAnthropic, active: true, glow: "rgba(217, 119, 87, 0.35)", iconColor: "#d97757" },
      { id: "openai", name: "OpenAI", subtitle: "GPT & APIs", icon: SiOpenai, active: true, glow: "rgba(16, 163, 127, 0.4)", iconColor: "#10a37f" },
    ],
  },
  {
    id: "data",
    label: "Dados",
    skills: [
      { id: "mongodb", name: "MongoDB", subtitle: "NoSQL", icon: SiMongodb, active: true, glow: "rgba(71, 162, 72, 0.48)", iconColor: "#47a248" },
      { id: "postgresql", name: "PostgreSQL", subtitle: "SQL", icon: SiPostgresql, active: true, glow: "rgba(51, 103, 145, 0.5)", iconColor: "#336791" },
      { id: "mysql", name: "MySQL", subtitle: "relational", icon: SiMysql, active: true, glow: "rgba(68, 121, 161, 0.48)", iconColor: "#4479a1" },
      { id: "pandas", name: "Pandas", subtitle: "analytics", icon: SiPandas, active: true, glow: "rgba(21, 89, 154, 0.48)", iconColor: "#15599a" },
    ],
  },
  {
    id: "tools",
    label: "Ferramentas",
    skills: [
      { id: "docker", name: "Docker", subtitle: "containers", icon: SiDocker, active: true, glow: "rgba(36, 150, 237, 0.5)", iconColor: "#2496ed" },
      { id: "make", name: "Make", subtitle: "build automation", icon: SiMake, active: true, glow: "rgba(248, 224, 138, 0.4)", iconColor: "#f8e08a" },
      { id: "git", name: "Git", subtitle: "versioning", icon: SiGit, active: true, glow: "rgba(240, 80, 50, 0.42)", iconColor: "#f05032" },
      { id: "github", name: "GitHub", subtitle: "collab", icon: SiGithub, active: true, glow: "rgba(255, 255, 255, 0.28)", iconColor: "#f4f4f5" },
      { id: "gitbash", name: "Git Bash", subtitle: "shell", icon: SiGnubash, active: true, glow: "rgba(255, 255, 255, 0.22)", iconColor: "#e2e8f0" },
      { id: "linux", name: "Linux", subtitle: "server", icon: SiLinux, active: true, glow: "rgba(255, 255, 255, 0.28)", iconColor: "#f8fafc" },
      { id: "jest", name: "Jest", subtitle: "testing", icon: SiJest, active: true, glow: "rgba(153, 66, 91, 0.45)", iconColor: "#99425b" },
      { id: "vitest", name: "Vitest", subtitle: "testing", icon: SiVitest, active: true, glow: "rgba(180, 255, 57, 0.38)", iconColor: "#b4ff39" },
      { id: "puppeteer", name: "Puppeteer", subtitle: "automation", icon: SiPuppeteer, active: true, glow: "rgba(0, 180, 216, 0.42)", iconColor: "#00b4d8" },
      { id: "n8n", name: "n8n", subtitle: "workflows", icon: N8nIcon, active: true, glow: "rgba(234, 75, 113, 0.48)", iconColor: "#EA4B71" },
      { id: "swagger", name: "Swagger", subtitle: "API docs", icon: SiSwagger, active: true, glow: "rgba(132, 189, 0, 0.42)", iconColor: "#85bd00" },
      { id: "trello", name: "Trello", subtitle: "agile", icon: SiTrello, active: true, glow: "rgba(0, 121, 191, 0.45)", iconColor: "#0079bf" },
      { id: "markdown", name: "Markdown", subtitle: "docs", icon: SiMarkdown, active: true, glow: "rgba(255, 255, 255, 0.22)", iconColor: "#e2e8f0" },
    ],
  },
];

export function splitSkillsForOrbit(skills: SkillNode[]) {
  const midpoint = Math.ceil(skills.length / 2);
  return {
    left: skills.slice(0, midpoint),
    right: skills.slice(midpoint),
  };
}

export function getArcOffset(index: number, total: number, side: "left" | "right"): number {
  if (total <= 1) return 0;

  const center = (total - 1) / 2;
  const distFromCenter = Math.abs(index - center);
  const maxDist = Math.max(center, 1);
  const edgeFactor = distFromCenter / maxDist;
  const towardCenter = 0.55 * (1 - edgeFactor);
  const towardEdge = 1.45 * edgeFactor;

  if (side === "left") {
    return towardCenter - towardEdge;
  }

  return towardEdge - towardCenter;
}
