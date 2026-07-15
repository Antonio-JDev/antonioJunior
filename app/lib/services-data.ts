import type { IconType } from "react-icons";
import type { ServiceMockupType } from "@/app/components/ServiceMockup";
import {
  HiOutlineCog,
  HiOutlineCpuChip,
  HiOutlineCubeTransparent,
  HiOutlineDevicePhoneMobile,
  HiOutlineLink,
  HiOutlineSparkles,
} from "react-icons/hi2";

export type ServiceItem = {
  title: string;
  description: string;
  Icon: IconType;
  mockup: ServiceMockupType;
  imageSrc?: string;
  imageAlt?: string;
};

export const services: ServiceItem[] = [
  {
    title: "Desenvolvimento de Software",
    description: "Criamos sistemas personalizados para empresas.",
    Icon: HiOutlineCubeTransparent,
    mockup: "laptop",
    imageSrc: "/assets/images/desenvolvimento-software.png",
    imageAlt: "Desenvolvimento de software — sistemas personalizados",
  },
  {
    title: "Desenvolvimento Mobile",
    description: "Aplicativos e experiências mobile sob medida, com design premium e performance de alto nível.",
    Icon: HiOutlineDevicePhoneMobile,
    mockup: "laptop",
    imageSrc: "/assets/images/segurando-celular.png",
    imageAlt: "Desenvolvimento mobile — dashboard em smartphone",
  },
  {
    title: "MCP Servers",
    description: "Desenvolvemos servidores MCP para integracao entre IA e sistemas corporativos.",
    Icon: HiOutlineCpuChip,
    mockup: "diagram",
    imageSrc: "/assets/images/mcp-server.png",
    imageAlt: "MCP Servers — infraestrutura de integração com IA",
  },
  {
    title: "Automacao Inteligente",
    description: "Automatizamos processos utilizando IA, n8n e integracoes.",
    Icon: HiOutlineSparkles,
    mockup: "chatbot",
  },
  {
    title: "Integracoes",
    description: "Conectamos ERPs, APIs, CRMs, bancos de dados e aplicacoes.",
    Icon: HiOutlineLink,
    mockup: "dashboard",
  },
  {
    title: "Consultoria",
    description: "Ajudamos empresas na arquitetura e modernizacao de sistemas.",
    Icon: HiOutlineCog,
    mockup: "architecture",
  },
];
