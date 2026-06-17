import { connectMongoDB } from "@/app/lib/mongodb";
import { Certification, type CertificationDocument } from "@/app/models/Certification";

export type CertificationRecord = CertificationDocument & {
  _id: string;
  createdAt?: string;
  updatedAt?: string;
};

export async function listCertifications(): Promise<CertificationRecord[]> {
  try {
    await connectMongoDB();
    return await Certification.find().sort({ createdAt: -1 }).lean<CertificationRecord[]>();
  } catch {
    return [];
  }
}

export async function createCertification(input: CertificationDocument) {
  await connectMongoDB();
  return Certification.create(input);
}

export async function updateCertification(id: string, input: CertificationDocument) {
  await connectMongoDB();
  return Certification.findByIdAndUpdate(id, input, { new: true }).lean<CertificationRecord>();
}

export async function deleteCertification(id: string) {
  await connectMongoDB();
  await Certification.findByIdAndDelete(id);
}
