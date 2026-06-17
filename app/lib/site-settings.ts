import { connectMongoDB } from "@/app/lib/mongodb";
import { DEFAULT_SITE_CONTENT, mergeSiteContent, type SiteSettingsData } from "@/app/lib/site-content-fields";
import { SiteSettings, type SiteSettingsDocument } from "@/app/models/SiteSettings";

export type { SiteSettingsData } from "@/app/lib/site-content-fields";
export {
  DEFAULT_SITE_CONTENT,
  mergeSiteContent,
  parseTypewriterWords,
  pickText,
  resolveImageUrl,
} from "@/app/lib/site-content-fields";

function toData(doc: SiteSettingsDocument | null): SiteSettingsData {
  if (!doc) return DEFAULT_SITE_CONTENT;

  const partial = {} as SiteSettingsData;
  for (const key of Object.keys(DEFAULT_SITE_CONTENT) as (keyof SiteSettingsData)[]) {
    const value = doc[key];
    partial[key] = typeof value === "string" && value.trim() ? value : DEFAULT_SITE_CONTENT[key];
  }
  return partial;
}

export async function getSiteSettings(): Promise<SiteSettingsData> {
  await connectMongoDB();
  const doc = await SiteSettings.findOne({ singleton: "main" }).lean<SiteSettingsDocument>();
  return toData(doc);
}

export async function updateSiteSettings(input: SiteSettingsData): Promise<SiteSettingsData> {
  await connectMongoDB();
  const doc = await SiteSettings.findOneAndUpdate(
    { singleton: "main" },
    { singleton: "main", ...input },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  ).lean<SiteSettingsDocument>();

  return toData(doc);
}
