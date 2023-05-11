import baseFetcher from "@shared/api";
import { AppUser } from "@types";
import { AxiosRequestConfig } from "axios";

export const SysConfigRoutes = {
  getReminders: "/UserAPI/reminded-users",
};

export const SysConfigService = {
  getReminders: (config?: AxiosRequestConfig) =>
    baseFetcher.get<AppUser[]>(SysConfigRoutes.getReminders, config),
};
