import {
  AppUserRoutes,
  AppUserService,
} from "@shared/services/app-user-service";
import { useMemo } from "react";
import useSWR from "swr";

export const useGetAppUser = (id: string) => {
  const cacheKey = useMemo(() => AppUserRoutes.getAppUserById + `/${id}`, [id]);

  const { data, isLoading, isValidating, error } = useSWR(cacheKey, () =>
    AppUserService.getAppUserById(id)
  );

  return {
    data,
    isLoading,
    isValidating,
    error,
  };
};
