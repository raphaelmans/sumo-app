
import { AppUserKey } from "@shared/services/app-user-service";
import useSWRMutation from "swr/mutation";
import { AuthRoutes, registerUserMutation } from "@shared/services/auth-service";

export const useCreateAppUser = () => {
  const {
    trigger: createUser,
    data,
    isMutating,
    error,
  } = useSWRMutation(
    AuthRoutes.registerUser,
    registerUserMutation
  );

  return {
    data,
    createUser,
    isMutating,
    error,
  };
};
