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
  editAppUserById: (data: AppUserEdit) =>
    baseFetcher.put(AppUserRoutes.editAppUserById, data),
  deleteAppUserById: (id: number) =>
    baseFetcher.delete(AppUserRoutes.deleteAppUserById, {
      params: {
        id,
      },
    }),
};

export type AppUserCreate = Omit<AppUser, "id">;
export type AppUserEdit = AppUser;
export const editAppUserMutation: MutationFetcher<
  AxiosResponse,
  {
    data: AppUserEdit;
  },
  string
> = (_, { arg }) => AppUserService.editAppUserById(arg.data);

export const deleteAppUserMutation: MutationFetcher<
  AxiosResponse,
  {
    id: number;
  },
  string
> = async (_, { arg }) => {
  return AppUserService.deleteAppUserById(arg.id);
};
