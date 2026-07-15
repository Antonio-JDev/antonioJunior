export type ProjectBentoSize = "lg" | "md" | "wide" | "sm";

export function getProjectBentoSize(index: number, total: number): ProjectBentoSize {
  if (total === 1) return "lg";
  if (total === 2) return index === 0 ? "lg" : "md";
  if (total === 3) {
    if (index === 0) return "lg";
    return "md";
  }

  const pattern: ProjectBentoSize[] = ["lg", "md", "md", "wide", "sm", "sm"];
  return pattern[index % pattern.length];
}
