export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Quanto custa um software?",
    answer:
      "O investimento varia conforme escopo, integrações e complexidade. Após o diagnóstico inicial, entregamos proposta técnica com escopo, prazo e valor fechado — sem surpresas no meio do projeto.",
  },
  {
    question: "Quanto tempo leva?",
    answer:
      "Projetos menores podem levar de 4 a 8 semanas. Sistemas completos, ERPs ou soluções com IA geralmente ficam entre 2 e 4 meses. O cronograma é definido no planejamento, com entregas parciais.",
  },
  {
    question: "Vocês desenvolvem aplicativos?",
    answer:
      "Sim. Desenvolvemos aplicações web responsivas, PWAs e integrações mobile via APIs. Quando necessário, estruturamos o backend e a arquitetura para apps nativos ou híbridos.",
  },
  {
    question: "Fazem integração entre sistemas?",
    answer:
      "Sim. Conectamos ERPs, CRMs, gateways de pagamento, bancos de dados, APIs legadas e ferramentas de automação como n8n — com monitoramento e tratamento de erros.",
  },
  {
    question: "Criam soluções com Inteligência Artificial?",
    answer:
      "Sim. Desenvolvemos agentes, chatbots, automações com LLMs, RAG, classificação de dados e fluxos inteligentes integrados aos seus sistemas existentes.",
  },
  {
    question: "Criam servidores MCP?",
    answer:
      "Sim. Implementamos MCP Servers para conectar IA a bases de dados, APIs internas e ferramentas corporativas com segurança e governança.",
  },
  {
    question: "Posso contratar suporte após a entrega?",
    answer:
      "Sim. Oferecemos planos de evolução contínua, correções, monitoramento e novas funcionalidades conforme sua operação cresce.",
  },
];
