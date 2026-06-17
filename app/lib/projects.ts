import { connectMongoDB } from "@/app/lib/mongodb";
import { Project, type ProjectDocument } from "@/app/models/Project";

export type ProjectRecord = ProjectDocument & {
  _id: string;
  createdAt?: string;
  updatedAt?: string;
};

export async function listProjects(): Promise<ProjectRecord[]> {
  try {
    await connectMongoDB();
    const projects = await Project.find().sort({ createdAt: -1 }).lean<ProjectRecord[]>();
    return projects;
  } catch {
    return [];
  }
}

export async function createProject(input: ProjectDocument) {
  await connectMongoDB();
  const project = await Project.create(input);
  return project;
}

export async function updateProject(id: string, input: ProjectDocument) {
  await connectMongoDB();
  const project = await Project.findByIdAndUpdate(id, input, { new: true }).lean<ProjectRecord>();
  return project;
}

export async function deleteProject(id: string) {
  await connectMongoDB();
  await Project.findByIdAndDelete(id);
}
