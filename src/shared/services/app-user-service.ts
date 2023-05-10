import baseFetcher from "@shared/api";
import { AppUser } from "@types";
import { AxiosResponse } from "axios";

import { MutationFetcher } from "swr/mutation";

export const AppUserRoutes = {
  getAppUserById: (id: string) => `/AppUserAPI/${id}`,
  getAllAppUser: `/AppUserAPI`,
  createAppUser: `/AppUserAPI/add`,
  editAppUserById: (id: number) => `/AppUserAPI/${id}`,
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
    baseFetcher.get<AppUser>(AppUserRoutes.getAppUserById(id)),
  editAppUserById: (id: number, data: AppUserEdit) =>
    baseFetcher.put(AppUserRoutes.editAppUserById(id), {
      ...data,
    }),
};

export type AppUserCreate = Omit<AppUser, "id">;
export type AppUserEdit = Omit<AppUser, "id">;

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
    id: number;
    data: AppUserEdit;
  },
  string
> = (_, { arg }) =>
AppUserService.editAppUserById(arg.id, arg.data);
