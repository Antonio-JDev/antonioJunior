import { createProject, listProjects } from "@/app/lib/projects";
import { NextResponse } from "next/server";

type BodyInput = {
  title?: string;
  description?: string;
  imageUrl?: string;
  linkGithub?: string;
  linkDeploy?: string;
  technologies?: string[];
  adminPassword?: string;
};

function isValid(body: BodyInput) {
  return (
    body.title &&
    body.description &&
    body.imageUrl &&
    body.linkGithub &&
    body.linkDeploy &&
    Array.isArray(body.technologies) &&
    body.technologies.length > 0
  );
}

export async function GET() {
  const projects = await listProjects();
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  const body = (await request.json()) as BodyInput;
  if (body.adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ message: "Acesso negado." }, { status: 401 });
  }

  if (!isValid(body)) {
    return NextResponse.json({ message: "Payload inválido." }, { status: 400 });
  }

  const project = await createProject({
    title: body.title!,
    description: body.description!,
    imageUrl: body.imageUrl!,
    linkGithub: body.linkGithub!,
    linkDeploy: body.linkDeploy!,
    technologies: body.technologies!,
  });

  return NextResponse.json(project, { status: 201 });
}
