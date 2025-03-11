"use client";

import { login } from "@/actions/login_admin";
import { useActionState, useEffect } from "react";
import ErrorMessage from "../ui/ErrorMessage";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [state, dispatch] = useActionState(login, {
    errors: [],
    payload: new FormData(),
    apiResponse : ""
  });
  useEffect(()=>{
    if (state.apiResponse) {
      toast.error(state.apiResponse)
  }
},[state])

  return (
    <>

      <form noValidate action={dispatch}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Ingresa tu correo electrónico"
            autoComplete="email"
            defaultValue={(state.payload?.get("email") || "") as string}
            required
          />
          {state.errors.find(
            (error) =>
              error.includes("electrónico") && error.includes("errorEmail")
          ) ? (
            <ErrorMessage>
              {state.errors
                .find((error) => error.includes("electrónico"))
                ?.split(":")[1]
                .trim()}
            </ErrorMessage>
          ) : state.errors.find(
              (error) =>
                error.includes("inválido") && error.includes("errorEmail")
            ) ? (
            <ErrorMessage>
              {state.errors
                .find((error) => error.includes("inválido"))
                ?.split(":")[1]
                .trim()}
            </ErrorMessage>
          ) : null}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Ingresa tu contraseña"
            autoComplete="current-password"
            defaultValue={(state.payload?.get("password") || "") as string}
            required
          />
          {state.errors
            .filter((error) => error.includes("errorPassword"))
            .map((error, index) => {
              if (error.includes("errorPassword")) {
                error = error.split(":")[1].trim();
              }
              return <ErrorMessage key={index}>{error}</ErrorMessage>;
            })}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Ingresar
        </button>
      </form>
    </>
  );
}
