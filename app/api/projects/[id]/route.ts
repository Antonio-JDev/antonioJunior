import { deleteProject, updateProject } from "@/app/lib/projects";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type BodyInput = {
  title?: string;
  description?: string;
  imageUrl?: string;
  linkGithub?: string;
  linkDeploy?: string;
  technologies?: string[];
  displayDate?: string;
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

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PUT(request: Request, context: RouteContext) {
  const { id } = await context.params;
  const body = (await request.json()) as BodyInput;

  if (body.adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ message: "Acesso negado." }, { status: 401 });
  }

  if (!isValid(body)) {
    return NextResponse.json({ message: "Payload invalido." }, { status: 400 });
  }

  const project = await updateProject(id, {
    title: body.title!,
    description: body.description!,
    imageUrl: body.imageUrl!,
    linkGithub: body.linkGithub!,
    linkDeploy: body.linkDeploy!,
    technologies: body.technologies!,
    displayDate: body.displayDate?.trim() || "",
  });

  if (!project) {
    return NextResponse.json({ message: "Projeto nao encontrado." }, { status: 404 });
  }

  return NextResponse.json(project);
}

export async function DELETE(request: Request, context: RouteContext) {
  const { id } = await context.params;
  const body = (await request.json()) as { adminPassword?: string };

  if (body.adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ message: "Acesso negado." }, { status: 401 });
  }

  await deleteProject(id);
  return NextResponse.json({ message: "Projeto removido." });
}
