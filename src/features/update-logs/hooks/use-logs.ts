import useAuthToken from "@features/auth/hooks/use-auth-token";
import {
  AuditLogRoutes,
  AuditLogService,
} from "@shared/services/audit-log-service";
import { generateConfigHeaderToken } from "@shared/utils";
import useSWR from "swr";

export const useLogs = () => {
  const { token } = useAuthToken();

  const { data, isLoading, error, isValidating } = useSWR(
    AuditLogRoutes.getAllLogs,
    () => AuditLogService.getAllLogs(generateConfigHeaderToken(token))
  );

  return {
    data,
    isLoading,
    error,
    isValidating,
  };
};
