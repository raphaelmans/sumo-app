import useAuthToken from "@features/auth/hooks/use-auth-token";
import {
  AppUserKey,
  AppUserRoutes,
  editAppUserMutation,
} from "@shared/services/app-user-service";
import useSWRMutation from "swr/mutation";

export const useEditUser = () => {
  const { token } = useAuthToken();

  const {
    trigger: editUser,
    data,
    isMutating,
    error,
  } = useSWRMutation([AppUserRoutes.getAllAppUser, token], editAppUserMutation);

  return {
    data,
    editUser,
    isMutating,
    error,
  };
};
