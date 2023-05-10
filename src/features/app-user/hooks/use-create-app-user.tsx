
import { AppUserKey, createAppUserMutation } from "@shared/services/app-user-service";
import useSWRMutation from "swr/mutation";

export const useCreateAppUser = () => {
  const {
    trigger: createUser,
    data,
    isMutating,
    error,
  } = useSWRMutation(
    AppUserKey.createAppUser,
    createAppUserMutation
  );

  return {
    data,
    createUser,
    isMutating,
    error,
  };
};
