import Image from "next/image";
import { TestButton } from "@shared/components";
import { LayoutAuth } from "@features/auth/layouts";
import { LoginForm } from "@features/auth";

export default function Home() {
  return (
    <LayoutAuth>
      <LoginForm />
    </LayoutAuth>
  );
}
