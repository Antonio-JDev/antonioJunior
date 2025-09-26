
export type SkillCategory = 'Frontend' | 'Backend' | 'Banco de Dados' | 'Ferramentas' | 'Análise & Suporte';

export interface Skill {
  name: string;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
}