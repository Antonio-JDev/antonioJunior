import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
  SiDocker,
  SiGooglecloud,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";

export type TechLogo = {
  name: string;
  Icon: IconType;
};

export const techLogos: TechLogo[] = [
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Docker", Icon: SiDocker },
  { name: "OpenAI", Icon: SiOpenai },
  { name: "Google Cloud", Icon: SiGooglecloud },
  { name: "AWS", Icon: FaAws },
  { name: "Vercel", Icon: SiVercel },
  { name: "n8n", Icon: SiN8N },
];
