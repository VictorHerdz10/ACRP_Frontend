import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "errorEmail : Tu correo electrónico es obligatorio" })
    .email({ message: "errorEmail : Formato de correo inválido" }),
  password: z
    .string()
    .min(1, { message: "errorPassword : La contraseña es obligatoria" }),
});

export const ApiResponseSchema = z.object({
  msg: z.string(),
});
export const UserSchema = z.object({
  _id: z.string(),
  nombre: z.string(),
  email: z.string().email(),
  telefono: z.string(),
  tipo_usuario: z.string(),
  accessToken: z.string()
});
