import {
  SubscriptionAPIRoutes,
  SubscriptionService,
} from "@shared/services/subscription-service";
import { useMemo } from "react";
import useSWR from "swr";

export const useGetSubscription = (id?: string) => {
  const cacheKey = useMemo(
    () => SubscriptionAPIRoutes.getSubscriptionById(id ?? "9999"),
    [id]
  );

  const { data, isLoading, isValidating, error } = useSWR(cacheKey, () =>
    id ? SubscriptionService.getSubscriptionById(id) : null
  );

  return {
    data,
    isLoading,
    isValidating,
    error,
  };
};
