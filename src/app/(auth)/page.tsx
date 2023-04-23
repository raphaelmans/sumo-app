import Image from "next/image";
import { LayoutAuth } from "@features/auth/layouts";
import LoginForm from "@features/auth/login-form";

export default function LoginPage() {
  return (
    <LayoutAuth>
      <LoginForm />
    </LayoutAuth>
  );
}
