import useAuthToken from "@features/auth/hooks/use-auth-token";
import {
  AuditLogCacheKey,
  AuditLogService,
} from "@shared/services/audit-log-service";
import { generateConfigHeaderToken } from "@shared/utils";
import useSWR from "swr";

export const useGetLog = (id: number) => {
  const { token } = useAuthToken();

  const { data, isLoading, error, isValidating } = useSWR(
    AuditLogCacheKey.getLogById,
    () => AuditLogService.getLogById(id, generateConfigHeaderToken(token))
  );

  return {
    data,
    isLoading,
    error,
    isValidating,
  };
};
