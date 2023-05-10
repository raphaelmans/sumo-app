import { cookies } from "next/headers";
import { AUTH_TOKEN } from "./cookies-constants";
import { redirect } from "next/navigation";

export const validateUserToken = () => {
  const cookieStore = cookies();
  const token = cookieStore.get(AUTH_TOKEN);

  if (!token?.value) {
    redirect("/");
  }
};

export const redirectLoggedUser = () => {
  const cookieStore = cookies();
  const token = cookieStore.get(AUTH_TOKEN);

  if (token?.value) {
    redirect("/dashboard");
  }
};
