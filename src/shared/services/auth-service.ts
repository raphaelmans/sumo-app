import { LoginResponse } from "@features/auth/types";
import baseFetcher from "@shared/api";
import { RegisterAuthUser, SubscriptionCategory } from "@types";
import { AxiosResponse } from "axios";

import { MutationFetcher } from "swr/mutation";

export const AuthRoutes = {
  registerUser: "/UserAPI/register",
  loginUser: "/token",
};

export const AuthService = {
  loginUser: (username: string, password: string) =>
    baseFetcher.post(AuthRoutes.loginUser, { username, password }),
  registerUser: (data: RegisterAuthUser) => {
    return baseFetcher.post(AuthRoutes.registerUser, data);
  },
};

// export const createSubscriptionCategoryMutation: MutationFetcher<
//   AxiosResponse<string>,
//   {
//     data: SubscriptionCategoryCreate;
//   },
//   string
// > = (_, { arg }) =>
//   SubscriptionCategoryService.createSubscriptionCategory(arg.data);

export const loginUserMutation: MutationFetcher<
  AxiosResponse<LoginResponse>,
  {
    username: string;
    password: string;
  },
  string
> = (_, { arg }) => AuthService.loginUser(arg.username, arg.password);
