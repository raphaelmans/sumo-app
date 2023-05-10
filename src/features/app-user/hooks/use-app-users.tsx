import { AppUserRoutes, AppUserService } from "@shared/services/app-user-service";
import useSWR from "swr";

export const useAppUsers = () => {
  const { data, isLoading, isValidating, error } = useSWR(
    AppUserRoutes.getAllAppUser,
    AppUserService.getAllAppUser
  );

  return {
    data,
    isLoading,
    isValidating,
    error,
  };
};
