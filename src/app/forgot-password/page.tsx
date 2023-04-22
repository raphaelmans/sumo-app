import Image from "next/image";
import { LayoutAuth } from "@features/auth/layouts";
import ForgotPasswordForm from "@features/auth/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <LayoutAuth>
      <ForgotPasswordForm />
    </LayoutAuth>
  );
}
