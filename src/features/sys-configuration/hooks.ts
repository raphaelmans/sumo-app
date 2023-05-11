import useAuthToken from "@features/auth/hooks/use-auth-token";
import {
  SysConfigRoutes,
  SysConfigService,
} from "@shared/services/sys-config-service";
import { generateConfigHeaderToken } from "@shared/utils";
import useSWR from "swr";

export const useGetReminderUsers = () => {
  const { token } = useAuthToken();
  const {
    data: recipientUsers,
    isLoading,
    isValidating,
    error,
  } = useSWR(SysConfigRoutes.getReminders, () =>
    SysConfigService.getReminders(generateConfigHeaderToken(token))
  );

  return {
    recipientUsers,
    isLoading,
    isValidating,
    error,
  };
};
