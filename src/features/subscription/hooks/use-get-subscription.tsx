import {
  SubscriptionAPIRoutes,
  SubscriptionService,
} from "@shared/services/subscription-service";
import { useMemo } from "react";
import useSWR from "swr";

export const useGetSubscription = (id: string) => {
  const cacheKey = useMemo(
    () => SubscriptionAPIRoutes.getSubscriptionById(id),
    [id]
  );

  const { data, isLoading, isValidating, error } = useSWR(cacheKey, () =>
    SubscriptionService.getSubscriptionById(id)
  );

  return {
    data,
    isLoading,
    isValidating,
    error,
  };
};
