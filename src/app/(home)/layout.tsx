import { validateUserToken } from "@shared/auth-guard";
import { AUTH_TOKEN } from "@shared/cookies-constants";
import { LayoutHome } from "@shared/layouts";
import { RootStyleRegistry } from "@shared/providers";
import AuthProvider from "@shared/providers/auth-provider";
import { cookies } from "next/headers";

export const metadata = {
  title: "SuMo",
  description: "A Subscription Manager",
};

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  validateUserToken();
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <RootStyleRegistry>
            <LayoutHome>{children}</LayoutHome>
          </RootStyleRegistry>
        </AuthProvider>
      </body>
    </html>
  );
}
