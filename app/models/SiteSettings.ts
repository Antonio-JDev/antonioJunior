import { model, models, Schema } from "mongoose";

export type SiteSettingsDocument = {
  singleton: string;
  heroGreeting: string;
  heroFullName: string;
  heroRolePrefix: string;
  heroTypewriterWords: string;
  heroBio: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  heroImageUrl: string;
  aboutSectionTitle: string;
  aboutSectionSubtitle: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  aboutParagraph3: string;
  aboutImageUrl: string;
};

const SiteSettingsSchema = new Schema<SiteSettingsDocument>(
  {
    singleton: { type: String, default: "main", unique: true },
    heroGreeting: { type: String, default: "", trim: true },
    heroFullName: { type: String, default: "", trim: true },
    heroRolePrefix: { type: String, default: "", trim: true },
    heroTypewriterWords: { type: String, default: "", trim: true },
    heroBio: { type: String, default: "", trim: true },
    heroCtaPrimary: { type: String, default: "", trim: true },
    heroCtaSecondary: { type: String, default: "", trim: true },
    heroImageUrl: { type: String, default: "", trim: true },
    aboutSectionTitle: { type: String, default: "", trim: true },
    aboutSectionSubtitle: { type: String, default: "", trim: true },
    aboutParagraph1: { type: String, default: "", trim: true },
    aboutParagraph2: { type: String, default: "", trim: true },
    aboutParagraph3: { type: String, default: "", trim: true },
    aboutImageUrl: { type: String, default: "", trim: true },
  },
  { timestamps: true }
);

export const SiteSettings =
  models.SiteSettings || model<SiteSettingsDocument>("SiteSettings", SiteSettingsSchema);
