import { deleteCertification, updateCertification } from "@/app/lib/certifications";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type BodyInput = {
  courseName?: string;
  description?: string;
  workload?: string;
  displayDate?: string;
  imageUrl?: string;
  adminPassword?: string;
};

function isValid(body: BodyInput) {
  return Boolean(body.courseName?.trim() && body.description?.trim() && body.imageUrl?.trim());
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

  const certification = await updateCertification(id, {
    courseName: body.courseName!.trim(),
    description: body.description!.trim(),
    workload: body.workload?.trim() || "",
    displayDate: body.displayDate?.trim() || "",
    imageUrl: body.imageUrl!.trim(),
  });

  if (!certification) {
    return NextResponse.json({ message: "Certificado nao encontrado." }, { status: 404 });
  }

  return NextResponse.json(certification);
}

export async function DELETE(request: Request, context: RouteContext) {
  const { id } = await context.params;
  const body = (await request.json()) as { adminPassword?: string };

  if (body.adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ message: "Acesso negado." }, { status: 401 });
  }

  await deleteCertification(id);
  return NextResponse.json({ message: "Certificado removido." });
}
