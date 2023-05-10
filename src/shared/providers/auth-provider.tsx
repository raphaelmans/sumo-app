"use client";
import useAuthToken from "@features/auth/hooks/use-auth-token";
import React, { useEffect } from "react";

type Props = React.PropsWithChildren;
const AuthProvider = ({ children }: Props) => {
  const { token, isValidToken, removeAuthToken } = useAuthToken();

  useEffect(() => {
    if (token && !isValidToken) {
      removeAuthToken();
    }
  }, [token, isValidToken, removeAuthToken]);
  return <>{children}</>;
};

export default AuthProvider;
