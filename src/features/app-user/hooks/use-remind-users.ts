import useAuthToken from "@features/auth/hooks/use-auth-token";
import {
  AppUserRoutes,
  remindAppUsersMutation,
} from "@shared/services/app-user-service";
import useSWRMutation from "swr/mutation";

export const useRemindUsers = () => {
  const { token } = useAuthToken();

  const {
    trigger: remindUser,
    data,
    isMutating,
    error,
  } = useSWRMutation(
    [AppUserRoutes.remindUsers, token],
    remindAppUsersMutation
  );

  return {
    data,
    remindUser,
    isMutating,
    error,
  };
};
