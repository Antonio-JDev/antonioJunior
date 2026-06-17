import { createCertification, listCertifications } from "@/app/lib/certifications";
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

export async function GET() {
  const certifications = await listCertifications();
  return NextResponse.json(certifications);
}

export async function POST(request: Request) {
  const body = (await request.json()) as BodyInput;

  if (body.adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ message: "Acesso negado." }, { status: 401 });
  }

  if (!isValid(body)) {
    return NextResponse.json({ message: "Payload invalido." }, { status: 400 });
  }

  const certification = await createCertification({
    courseName: body.courseName!.trim(),
    description: body.description!.trim(),
    workload: body.workload?.trim() || "",
    displayDate: body.displayDate?.trim() || "",
    imageUrl: body.imageUrl!.trim(),
  });

  return NextResponse.json(certification, { status: 201 });
}
