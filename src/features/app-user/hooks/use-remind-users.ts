import {
  AppUserRoutes,
  remindAppUsersMutation,
} from "@shared/services/app-user-service";
import useSWRMutation from "swr/mutation";

export const useRemindUsers = () => {
  const {
    trigger: remindUser,
    data,
    isMutating,
    error,
  } = useSWRMutation(AppUserRoutes.remindUsers, remindAppUsersMutation);

  return {
    data,
    remindUser,
    isMutating,
    error,
  };
};
