import { AdminDashboard } from "@/app/components/AdminDashboard";
import { AdminLoginForm } from "@/app/components/AdminLoginForm";
import { cookies } from "next/headers";

export const metadata = {
  title: "Admin",
  description: "Painel administrativo do portfolio",
};

export default async function AdminPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("admin-auth")?.value;

  return (
    <main className="admin-page mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-8 sm:px-6 sm:py-10">
      {auth === process.env.ADMIN_PASSWORD ? <AdminDashboard /> : <AdminLoginForm />}
    </main>
  );
}
