"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ApiResponseSchema, LoginSchema } from "@/src/schemas";

type ActionStateType = {
  errors: string[];
  payload?: FormData;
  apiResponse? : string
};

export async function login(prevState: ActionStateType, formData: FormData) {
  const loginData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const login = LoginSchema.safeParse(loginData);

  if (!login.success) {
    const errors = login.error.errors.map((er) => er.message);
    return {
      errors,
      payload: formData,
      apiResponse: ''
    };
  }
  const url = `${process.env.API_URL}/api/usuario/login`;
  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: login.data.password,
      email: login.data.email,
    }),
  });

  const json = await req.json();
  if (!req.ok) {
    const { msg } = ApiResponseSchema.parse(json);
    return {
      errors: [],
      payload: formData,
      apiResponse: msg

    };
  }

  // Setear Cookies
  (
    await // Setear Cookies
    cookies()
  ).set({
    name: "ACRP_TOKEN",
    value: json.token,
    httpOnly: true,
    path: "/",
  });

  redirect("/admin/dashboard");
}
