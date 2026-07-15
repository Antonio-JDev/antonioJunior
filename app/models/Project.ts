import { model, models, Schema } from "mongoose";

export type ProjectDocument = {
  title: string;
  description: string;
  imageUrl: string;
  linkGithub: string;
  linkDeploy: string;
  technologies: string[];
  displayDate: string;
  problem?: string;
  solution?: string;
  result?: string;
};

const ProjectSchema = new Schema<ProjectDocument>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    imageUrl: { type: String, required: true, trim: true },
    linkGithub: { type: String, required: true, trim: true },
    linkDeploy: { type: String, required: true, trim: true },
    technologies: [{ type: String, required: true, trim: true }],
    displayDate: { type: String, default: "", trim: true },
    problem: { type: String, default: "", trim: true },
    solution: { type: String, default: "", trim: true },
    result: { type: String, default: "", trim: true },
  },
  { timestamps: true }
);

export const Project = models.Project || model<ProjectDocument>("Project", ProjectSchema);
