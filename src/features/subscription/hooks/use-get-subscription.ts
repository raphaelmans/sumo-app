import useAuthToken from "@features/auth/hooks/use-auth-token";
import {
  SubscriptionAPIRoutes,
  SubscriptionService,
} from "@shared/services/subscription-service";
import { generateConfigHeaderToken } from "@shared/utils";
import { useMemo } from "react";
import useSWR from "swr";

export const useGetSubscription = (id?: string) => {
  const { token } = useAuthToken();

  const cacheKey = useMemo(
    () => SubscriptionAPIRoutes.getSubscriptionById(id ?? "9999"),
    [id]
  );

  const { data, isLoading, isValidating, error } = useSWR(cacheKey, () =>
    id
      ? SubscriptionService.getSubscriptionById(
          id,
          generateConfigHeaderToken(token)
        )
      : null
  );

  return {
    data,
    isLoading,
    isValidating,
    error,
  };
};
