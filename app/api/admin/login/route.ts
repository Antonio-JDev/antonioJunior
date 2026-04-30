import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as { password?: string };
  if (body.password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ message: "Senha inválida." }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set("admin-auth", process.env.ADMIN_PASSWORD!, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return NextResponse.json({ ok: true });
}
