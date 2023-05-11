import useAuthToken from "@features/auth/hooks/use-auth-token";
import {
  SubscriptionAPIRoutes,
  SubscriptionService,
} from "@shared/services/subscription-service";
import { generateConfigHeaderToken } from "@shared/utils";
import useSWR from "swr";

export const useSubscriptions = () => {
  const { token } = useAuthToken();

  const { data, isLoading, isValidating, error } = useSWR(
    SubscriptionAPIRoutes.getAllSubscriptions,
    () =>
      SubscriptionService.getAllSubscriptions(generateConfigHeaderToken(token))
  );

  return {
    data,
    isLoading,
    isValidating,
    error,
  };
};
