import {
  AuditLogCacheKey,
  AuditLogService,
} from "@shared/services/audit-log-service";
import useSWR from "swr";

export const useGetLog = (id: number) => {
  const { data, isLoading, error, isValidating } = useSWR(
    AuditLogCacheKey.getLogById,
    () => AuditLogService.getLogById(id)
  );

  return {
    data,
    isLoading,
    error,
    isValidating,
  };
};
