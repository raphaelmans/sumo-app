import baseFetcher from "@shared/api";
import { generateConfigHeaderToken } from "@shared/utils";
import { AppUser } from "@types";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { config } from "process";

import { MutationFetcher } from "swr/mutation";

export const AppUserRoutes = {
  getAppUserById: `/UserAPI/getUser`,
  getAllAppUser: `/UserAPI/list`,
  editAppUserById: `/UserAPI/edit`,
  deleteAppUserById: `/UserAPI/delete`,
  remindUsers: `/UserAPI/remind`,
};

export const AppUserKey = {
  editAppUser: AppUserRoutes.editAppUserById + "/edit",
};

export const AppUserService = {
  getAllAppUser: (config?: AxiosRequestConfig) =>
    baseFetcher.get<AppUser[]>(AppUserRoutes.getAllAppUser, config),
  getAppUserById: (id: string, config?: AxiosRequestConfig) =>
    baseFetcher.get<AppUser>(AppUserRoutes.getAppUserById, {
      params: {
        id: id,
      },
      ...config,
    }),
  editAppUserById: (data: AppUser, config?: AxiosRequestConfig) =>
    baseFetcher.put(AppUserRoutes.editAppUserById, data, config),
  deleteAppUserById: (id: string, config?: AxiosRequestConfig) =>
    baseFetcher.delete(AppUserRoutes.deleteAppUserById, {
      params: {
        id,
      },
      ...config,
    }),

  remindUsers: (emails: string[], config?: AxiosRequestConfig) =>
    baseFetcher.put(AppUserRoutes.remindUsers, { emails }, config),
};

export type AppUserCreate = Omit<AppUser, "id">;
export const editAppUserMutation: MutationFetcher<
  AxiosResponse,
  {
    data: AppUser;
  },
  [string, string?]
> = ([_, token], { arg }) =>
  AppUserService.editAppUserById(arg.data, generateConfigHeaderToken(token));

export const deleteAppUserMutation: MutationFetcher<
  AxiosResponse,
  {
    id: string;
  },
  [string, string?]
> = async ([_, token], { arg }) => {
  return AppUserService.deleteAppUserById(
    arg.id,
    generateConfigHeaderToken(token)
  );
};

export const remindAppUsersMutation: MutationFetcher<
  AxiosResponse,
  {
    emails: string[];
  },
  [string, string?]
> = async ([_, token], { arg }) => {
  return AppUserService.remindUsers(
    arg.emails,
    generateConfigHeaderToken(token)
  );
};
