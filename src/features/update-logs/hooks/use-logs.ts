import {
  AuditLogRoutes,
  AuditLogService,
} from "@shared/services/audit-log-service";
import useSWR from "swr";

export const useLogs = () => {
  const { data, isLoading, error, isValidating } = useSWR(
    AuditLogRoutes.getAllLogs,
    AuditLogService.getAllLogs
  );

  return {
    data,
    isLoading,
    error,
    isValidating,
  };
};
