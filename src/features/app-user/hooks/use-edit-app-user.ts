import { AppUserKey, editAppUserMutation } from "@shared/services/app-user-service";
import useSWRMutation from "swr/mutation";

export const useEditUser = () => {
  const {
    trigger: editUser,
    data,
    isMutating,
    error,
  } = useSWRMutation(
    AppUserKey.editAppUser,
    editAppUserMutation
  );

  return {
    data,
    editUser,
    isMutating,
    error,
  };
};
