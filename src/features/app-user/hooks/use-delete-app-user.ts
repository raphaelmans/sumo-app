import {
  AppUserRoutes,
  deleteAppUserMutation,
} from "@shared/services/app-user-service";
import useSWRMutation from "swr/mutation";

export const useDeleteAppUser = () => {
  const {
    trigger: deleteAppUser,
    data,
    isMutating,
    error,
  } = useSWRMutation(AppUserRoutes.getAllAppUser, deleteAppUserMutation);

  return {
    data,
    deleteAppUser,
    isMutating,
    error,
  };
};
