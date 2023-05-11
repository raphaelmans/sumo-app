import useAuthToken from "@features/auth/hooks/use-auth-token";
import {
  AppUserRoutes,
  AppUserService,
} from "@shared/services/app-user-service";
import { generateConfigHeaderToken } from "@shared/utils";
import { useMemo } from "react";
import useSWR from "swr";

export const useGetAppUser = (id: string) => {
  const { token } = useAuthToken();

  const cacheKey = useMemo(() => AppUserRoutes.getAppUserById + `/${id}`, [id]);

  const { data, isLoading, isValidating, error } = useSWR(cacheKey, () =>
    AppUserService.getAppUserById(id, generateConfigHeaderToken(token))
  );

  return {
    data,
    isLoading,
    isValidating,
    error,
  };
};
