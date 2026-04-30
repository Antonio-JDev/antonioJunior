import { AdminLoginForm } from "@/app/components/AdminLoginForm";
import { AdminProjectForm } from "@/app/components/AdminProjectForm";
import { cookies } from "next/headers";

export const metadata = {
  title: "Admin",
  description: "Painel administrativo para cadastro de projetos",
};

export default async function AdminPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("admin-auth")?.value;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-4 py-10">
      {auth === process.env.ADMIN_PASSWORD ? <AdminProjectForm /> : <AdminLoginForm />}
    </main>
  );
}
