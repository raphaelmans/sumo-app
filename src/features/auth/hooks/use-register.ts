import {
    AuthRoutes,
    registerUserMutation,
  } from "@shared/services/auth-service";
  import useSWRMutation from "swr/mutation";
  
  export const useRegister = () => {
    const {
      trigger: registerUser,
      data,
      error,
      isMutating,
    } = useSWRMutation(AuthRoutes.registerUser, registerUserMutation);
  
    return {
      registerUser,
      data,
      error,
      isMutating,
    };
  };
  