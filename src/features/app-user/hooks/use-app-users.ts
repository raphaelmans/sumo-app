import useAuthToken from "@features/auth/hooks/use-auth-token";
import {
  AppUserRoutes,
  AppUserService,
} from "@shared/services/app-user-service";
import { generateConfigHeaderToken } from "@shared/utils";
import useSWR from "swr";

export const useAppUsers = () => {
  const { token } = useAuthToken();

  const { data, isLoading, isValidating, error } = useSWR(
    AppUserRoutes.getAllAppUser,
    () => AppUserService.getAllAppUser(generateConfigHeaderToken(token))
  );

  return {
    data,
    isLoading,
    isValidating,
    error,
  };
};
