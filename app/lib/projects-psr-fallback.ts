export type ProjectPsr = {
  problem: string;
  solution: string;
  result: string;
};

const psrByTitle: Record<string, ProjectPsr> = {
  s3e: {
    problem: "Controle manual de obras e falta de visibilidade operacional.",
    solution: "ERP completo com gestão centralizada de processos.",
    result: "Centralização dos processos da empresa e decisões mais rápidas.",
  },
};

function normalizeTitle(title: string) {
  return title.trim().toLowerCase().replace(/\s+/g, "");
}

export function getProjectPsr(title: string, fields?: Partial<ProjectPsr>): ProjectPsr | null {
  const problem = fields?.problem?.trim();
  const solution = fields?.solution?.trim();
  const result = fields?.result?.trim();

  if (problem && solution && result) {
    return { problem, solution, result };
  }

  const fallback = psrByTitle[normalizeTitle(title)];
  if (!fallback) return null;

  return {
    problem: problem || fallback.problem,
    solution: solution || fallback.solution,
    result: result || fallback.result,
  };
}
