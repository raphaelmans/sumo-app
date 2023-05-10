import {
  AuthRoutes,
  loginUserMutation,
} from "@shared/services/auth-service";
import useSWRMutation from "swr/mutation";

export const useLogin = () => {
  const {
    trigger: loginUser,
    data,
    error,
    isMutating,
  } = useSWRMutation(AuthRoutes.loginUser, loginUserMutation);

  return {
    loginUser,
    data,
    error,
    isMutating,
  };
};
