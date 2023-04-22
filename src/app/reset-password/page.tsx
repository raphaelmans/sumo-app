import Image from "next/image";
import { LayoutAuth } from "@features/auth/layouts";
import ResetPasswordForm from "@features/auth/reset-password-form";

export default function ForgotPasswordPage() {
  return (
    <LayoutAuth>
      <ResetPasswordForm />
    </LayoutAuth>
  );
}
