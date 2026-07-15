import type { IconType } from "react-icons";
import {
  HiOutlineBolt,
  HiOutlineCodeBracket,
  HiOutlineHandRaised,
  HiOutlineLockClosed,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

export type WhyAjCard = {
  title: string;
  description: string;
  Icon: IconType;
  tags?: string[];
};

export const whyAjCards: WhyAjCard[] = [
  {
    title: "Código próprio",
    description: "Nada de plataformas prontas ou soluções engessadas. Cada entrega é arquitetada para o seu negócio.",
    Icon: HiOutlineCodeBracket,
  },
  {
    title: "Performance",
    description: "Soluções rápidas, escaláveis e preparadas para crescimento sem retrabalho.",
    Icon: HiOutlineBolt,
  },
  {
    title: "Segurança",
    description: "Boas práticas de arquitetura, autenticação, LGPD e infraestrutura desde o primeiro sprint.",
    Icon: HiOutlineLockClosed,
  },
  {
    title: "Suporte próximo",
    description: "Você fala diretamente com quem desenvolve o projeto — sem intermediários.",
    Icon: HiOutlineHandRaised,
  },
  {
    title: "Tecnologia moderna",
    description: "Stack atual para construir produtos que duram e evoluem com o mercado.",
    Icon: HiOutlineShieldCheck,
    tags: ["Node.js", "Next.js", "TypeScript", "PostgreSQL", "Docker", "LLMs", "MCP"],
  },
];
