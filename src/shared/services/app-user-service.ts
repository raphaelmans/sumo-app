import baseFetcher from "@shared/api";
import { AppUser } from "@types";
import { AxiosResponse } from "axios";

import { MutationFetcher } from "swr/mutation";

export const AppUserRoutes = {
  getAppUserById: `/AppUserAPI/getUser`,
  getAllAppUser: `/AppUserAPI/list`,
  createAppUser: `/AppUserAPI/add`,
  editAppUserById: `/AppUserAPI/edit`,
  deleteAppUserById: `/AppUserAPI/delete`,
};

export const AppUserKey = {
  createAppUser: AppUserRoutes.createAppUser + "/post",
  editAppUser: AppUserRoutes.editAppUserById + "/edit",
};

export const AppUserService = {
  getAllAppUser: () => baseFetcher.get<AppUser[]>(AppUserRoutes.getAllAppUser),
  createAppUser: (data: AppUserCreate) =>
    baseFetcher.post<string>(AppUserRoutes.createAppUser, data),
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

export const createAppUserMutation: MutationFetcher<
  AxiosResponse<string>,
  {
    data: AppUserCreate;
  },
  string
> = (_, { arg }) => AppUserService.createAppUser(arg.data);
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
