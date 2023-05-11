import useAuthToken from "@features/auth/hooks/use-auth-token";
import {
  AppUserRoutes,
  deleteAppUserMutation,
} from "@shared/services/app-user-service";
import useSWRMutation from "swr/mutation";

export const useDeleteAppUser = () => {
  const { token } = useAuthToken();

  const {
    trigger: deleteAppUser,
    data,
    isMutating,
    error,
  } = useSWRMutation(
    [AppUserRoutes.getAllAppUser, token],
    deleteAppUserMutation
  );

  return {
    data,
    deleteAppUser,
    isMutating,
    error,
  };
};
