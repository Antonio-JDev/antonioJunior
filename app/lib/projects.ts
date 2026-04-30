import { connectMongoDB } from "@/app/lib/mongodb";
import { Project, type ProjectDocument } from "@/app/models/Project";

export async function listProjects() {
  try {
    await connectMongoDB();
    const projects = await Project.find().sort({ createdAt: -1 }).lean<ProjectDocument[]>();
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
