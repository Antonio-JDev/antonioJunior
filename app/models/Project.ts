import { model, models, Schema } from "mongoose";

export type ProjectDocument = {
  title: string;
  description: string;
  imageUrl: string;
  linkGithub: string;
  linkDeploy: string;
  technologies: string[];
};

const ProjectSchema = new Schema<ProjectDocument>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    imageUrl: { type: String, required: true, trim: true },
    linkGithub: { type: String, required: true, trim: true },
    linkDeploy: { type: String, required: true, trim: true },
    technologies: [{ type: String, required: true, trim: true }],
  },
  { timestamps: true }
);

export const Project = models.Project || model<ProjectDocument>("Project", ProjectSchema);
