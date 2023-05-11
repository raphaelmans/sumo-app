import baseFetcher from "@shared/api";
import { generateConfigHeaderToken } from "@shared/utils";
import { AuditLog } from "@types";
import { AxiosRequestConfig } from "axios";

export const AuditLogCacheKey = {
  getLogById: `/AuditLog/get`,
};
export const AuditLogRoutes = {
  getAllLogs: `/AuditLog`,
  getLogById: (id: number) => `/AuditLog/${id}`,
};

export const AuditLogService = {
  getAllLogs: (config?: AxiosRequestConfig) =>
    baseFetcher.get<AuditLog[]>(AuditLogRoutes.getAllLogs, config),
  getLogById: (id: number, config?: AxiosRequestConfig) =>
    baseFetcher.get<AuditLog>(AuditLogRoutes.getLogById(id), config),
};
