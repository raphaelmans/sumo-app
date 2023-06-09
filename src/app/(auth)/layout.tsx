import { LayoutAuth } from "@features/auth/layouts";
import { redirectLoggedUser } from "@shared/auth-guard";
import { RootStyleRegistry } from "@shared/providers";

export const metadata = {
  title: "SuMo",
  description: "A Subscription Manager",
};

export default function AuthPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  redirectLoggedUser();
  return (
    <html lang="en">
      <body>
        <RootStyleRegistry>
          <LayoutAuth>{children}</LayoutAuth>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
