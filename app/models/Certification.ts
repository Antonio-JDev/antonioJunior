import { model, models, Schema } from "mongoose";

export type CertificationDocument = {
  courseName: string;
  description: string;
  workload: string;
  displayDate: string;
  imageUrl: string;
};

const CertificationSchema = new Schema<CertificationDocument>(
  {
    courseName: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    workload: { type: String, default: "", trim: true },
    displayDate: { type: String, default: "", trim: true },
    imageUrl: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export const Certification =
  models.Certification || model<CertificationDocument>("Certification", CertificationSchema);
