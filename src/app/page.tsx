import Image from "next/image";
import { LayoutAuth } from "@features/auth/layouts";
import LoginForm from "@features/auth/login-form";

export default function Home() {
  return (
    <LayoutAuth>
      <LoginForm />
    </LayoutAuth>
  );
}
