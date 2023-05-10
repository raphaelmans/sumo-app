import { AUTH_TOKEN } from "@shared/cookies-constants";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import jwtDecode from "jwt-decode";


export const getAuthToken = () => getCookie(AUTH_TOKEN)?.toString();

const useAuthToken = () => {
  const setAuthToken = (authToken: string) => setCookie(AUTH_TOKEN, authToken);

  const removeAuthToken = () => deleteCookie(AUTH_TOKEN);

  const decodeToken = (): {
    id: string;
    exp: number;
  } | null => {
    const authToken = getCookie(AUTH_TOKEN)?.toString();
    if (!authToken) {
      return null;
    }
    return jwtDecode<{
      id: string;
      exp: number;
    }>(authToken);
  };

  const getId = (): string | undefined => decodeToken()?.id ?? undefined;

  const isValidToken = (): boolean => {
    let isValid = true;
    const decodedToken = decodeToken();
    const dateNow = new Date();
    if (decodedToken && decodedToken.exp > dateNow.getTime()) {
      isValid = false;
    }

    return isValid;
  };

  return {
    token: getAuthToken(),
    setAuthToken,
    removeAuthToken,
    getId,
    isValidToken,
  };
};

export default useAuthToken;
