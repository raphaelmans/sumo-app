import baseFetcher from "@shared/api";
import { AppUser } from "@types";
import { AxiosResponse } from "axios";

import { MutationFetcher } from "swr/mutation";

export const AppUserRoutes = {
  getAppUserById: `/UserAPI/getUser`,
  getAllAppUser: `/UserAPI/list`,
  editAppUserById: `/UserAPI/edit`,
  deleteAppUserById: `/UserAPI/delete`,
};

export const AppUserKey = {
  editAppUser: AppUserRoutes.editAppUserById + "/edit",
};

export const AppUserService = {
  getAllAppUser: () => baseFetcher.get<AppUser[]>(AppUserRoutes.getAllAppUser),
  getAppUserById: (id: string) =>
    baseFetcher.get<AppUser>(AppUserRoutes.getAppUserById, {
      params: {
        id: id,
      },
    }),
  editAppUserById: (data: AppUser) =>
    baseFetcher.put(AppUserRoutes.editAppUserById, data),
  deleteAppUserById: (id: string) =>
    baseFetcher.delete(AppUserRoutes.deleteAppUserById, {
      params: {
        id,
      },
    }),
};

export type AppUserCreate = Omit<AppUser, "id">;
export const editAppUserMutation: MutationFetcher<
  AxiosResponse,
  {
    data: AppUser;
  },
  string
> = (_, { arg }) => AppUserService.editAppUserById(arg.data);

export const deleteAppUserMutation: MutationFetcher<
  AxiosResponse,
  {
    id: string;
  },
  string
> = async (_, { arg }) => {
  return AppUserService.deleteAppUserById(arg.id);
};
