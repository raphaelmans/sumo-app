import baseFetcher from "@shared/api";
import { AuditLog } from "@types";


export const AuditLogCacheKey = {
    getLogById: `/AuditLog/get`
}
export const AuditLogRoutes = {
  getAllLogs: `/AuditLog`,
  getLogById: (id: number) => `/AuditLog/${id}`,
};

export const AuditLogService = {
  getAllLogs: () => baseFetcher.get<AuditLog[]>(AuditLogRoutes.getAllLogs),
  getLogById: (id: number) =>
    baseFetcher.get<AuditLog>(AuditLogRoutes.getLogById(id)),
};
