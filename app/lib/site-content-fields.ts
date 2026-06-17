export type SiteSettingsData = {
  heroGreeting: string;
  heroFullName: string;
  heroRolePrefix: string;
  heroTypewriterWords: string;
  heroBio: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  heroImageUrl: string;
  aboutSectionTitle: string;
  aboutSectionSubtitle: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  aboutParagraph3: string;
  aboutImageUrl: string;
};

export const DEFAULT_SITE_CONTENT: SiteSettingsData = {
  heroGreeting: "Ola, eu sou",
  heroFullName: "Antonio Junior dos Santos",
  heroRolePrefix: "Desenvolvedor",
  heroTypewriterWords: "React, TypeScript, Node.JS, Next.js, ApiRESTfull",
  heroBio:
    "Desenvolvedor Backend com foco em Node.js e PostgreSQL, criando APIs seguras, microsservicos e solucoes que impactam produtividade e resultados de negocio.",
  heroCtaPrimary: "Ver projetos",
  heroCtaSecondary: "Falar comigo",
  heroImageUrl: "",
  aboutSectionTitle: "Sobre mim",
  aboutSectionSubtitle: "Tecnologia orientada a resultado de negocio",
  aboutParagraph1:
    "Sou Antonio Junior dos Santos, desenvolvedor com foco em Node.js, PostgreSQL e TypeScript. Atuo na criacao de solucoes seguras e eficientes, com base em Engenharia de Requisitos, metodologias ageis (Scrum/Kanban) e arquitetura de microsservicos orientada a eventos.",
  aboutParagraph2:
    "Tenho experiencia no desenvolvimento de ERPs para automacao de processos, incluindo tratamento de dados sensiveis e conformidade com a LGPD. Tambem trabalho com APIs REST, Socket.io, React 18, Prisma ORM, Docker e testes com Jest.",
  aboutParagraph3:
    "Aplico IA e automacao com n8n e LLMs para otimizar fluxos operacionais, sempre com foco em Clean Code e entrega de valor ao cliente.",
  aboutImageUrl: "",
};

export type ContentFieldConfig = {
  key: keyof SiteSettingsData;
  label: string;
  description?: string;
  type?: "text" | "textarea" | "url";
  rows?: number;
};

export const HERO_CONTENT_FIELDS: ContentFieldConfig[] = [
  { key: "heroGreeting", label: "Saudacao", description: "Texto acima do nome (ex: Ola, eu sou)" },
  { key: "heroFullName", label: "Nome completo" },
  { key: "heroRolePrefix", label: "Prefixo da funcao", description: "Aparece antes do efeito digitando (ex: Desenvolvedor)" },
  {
    key: "heroTypewriterWords",
    label: "Palavras do efeito digitando",
    description: "Separe por virgula: React, TypeScript, Node.JS",
  },
  { key: "heroBio", label: "Descricao curta", type: "textarea", rows: 3 },
  { key: "heroCtaPrimary", label: "Botao principal" },
  { key: "heroCtaSecondary", label: "Botao secundario" },
  { key: "heroImageUrl", label: "URL da foto do Hero", type: "url" },
];

export const ABOUT_CONTENT_FIELDS: ContentFieldConfig[] = [
  { key: "aboutSectionTitle", label: "Titulo da secao" },
  { key: "aboutSectionSubtitle", label: "Subtitulo da secao" },
  { key: "aboutParagraph1", label: "Paragrafo 1", type: "textarea", rows: 4 },
  { key: "aboutParagraph2", label: "Paragrafo 2", type: "textarea", rows: 4 },
  { key: "aboutParagraph3", label: "Paragrafo 3", type: "textarea", rows: 4 },
  { key: "aboutImageUrl", label: "URL da foto do Sobre", type: "url" },
];

export function resolveImageUrl(customUrl: string, fallbackUrl: string) {
  return customUrl.trim() || fallbackUrl;
}

export function parseTypewriterWords(value: string) {
  return value
    .split(",")
    .map((word) => word.trim())
    .filter(Boolean);
}

export function mergeSiteContent(partial: Partial<SiteSettingsData> | null | undefined): SiteSettingsData {
  return { ...DEFAULT_SITE_CONTENT, ...partial };
}

export function pickText(value: string, fallback: string) {
  return value.trim() || fallback;
}
