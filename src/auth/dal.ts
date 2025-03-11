import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { UserSchema } from "../schemas";
import { cache } from "react";

export const verifySession = cache(async () => {
  const token = (await cookies()).get("ACRP_TOKEN")?.value;
  if (!token) {
    redirect("/admin");
  }
  const url = `${process.env.API_URL}/api/usuario/perfil`;
  const req = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const session = await req.json();
  const result = UserSchema.safeParse(session);
  if (!result.success) {
    redirect("/admin");
  }
  return {
    user: result.data,
    isAith: true,
  };
});
