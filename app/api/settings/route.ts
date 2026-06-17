import { getSiteSettings, updateSiteSettings } from "@/app/lib/site-settings";
import type { SiteSettingsData } from "@/app/lib/site-content-fields";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type BodyInput = Partial<SiteSettingsData> & {
  adminPassword?: string;
};

export async function GET() {
  const settings = await getSiteSettings();
  return NextResponse.json(settings);
}

export async function PUT(request: Request) {
  const body = (await request.json()) as BodyInput;

  if (body.adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ message: "Acesso negado." }, { status: 401 });
  }

  const current = await getSiteSettings();
  const { adminPassword: _, ...content } = body;
  const settings = await updateSiteSettings({ ...current, ...content });

  return NextResponse.json(settings);
}
