import type { IconType } from "react-icons";
import {
  HiOutlineBeaker,
  HiOutlineClipboardDocumentList,
  HiOutlineCloudArrowUp,
  HiOutlineCodeBracketSquare,
  HiOutlinePaintBrush,
  HiOutlineSquares2X2,
} from "react-icons/hi2";

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  duration: string;
  Icon: IconType;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Imersão",
    description:
      "Sentamos com sua equipe para compreender o problema real, identificar restrições técnicas, mapear processos e definir indicadores de sucesso. Antes de escrever qualquer linha de código, entregamos escopo validado e proposta técnica.",
    duration: "~2 semanas",
    Icon: HiOutlineClipboardDocumentList,
  },
  {
    number: "02",
    title: "Arquitetura",
    description:
      "Definimos toda a base tecnológica do projeto: arquitetura, banco de dados, integrações, infraestrutura, segurança, escalabilidade e documentação técnica.",
    duration: "~1 semana",
    Icon: HiOutlineSquares2X2,
  },
  {
    number: "03",
    title: "Design",
    description:
      "Construção de wireframes, fluxos, protótipos de alta fidelidade e Design System completo no Figma para validação antes do desenvolvimento.",
    duration: "~3 semanas",
    Icon: HiOutlinePaintBrush,
  },
  {
    number: "04",
    title: "Desenvolvimento",
    description:
      "Sprints quinzenais, ambiente de homologação disponível, acompanhamento constante e revisões de código obrigatórias. O cliente acompanha tudo através do Linear ou Jira.",
    duration: "8–16 semanas",
    Icon: HiOutlineCodeBracketSquare,
  },
  {
    number: "05",
    title: "Testes & Qualidade",
    description:
      "Executamos testes automatizados, testes manuais, testes de carga e validações completas para garantir estabilidade antes da publicação. Nosso objetivo é identificar problemas antes que eles cheguem ao usuário.",
    duration: "~2 semanas",
    Icon: HiOutlineBeaker,
  },
  {
    number: "06",
    title: "Deploy & Suporte",
    description:
      "Publicação monitorada em produção utilizando boas práticas DevOps, monitoramento contínuo e suporte especializado durante os primeiros 90 dias.",
    duration: "90 dias inclusos",
    Icon: HiOutlineCloudArrowUp,
  },
];
