import {
  SubscriptionCategoryAPIRoutes,
  SubscriptionCategoryService,
} from "@shared/services/subscription-category-service";
import useSWR from "swr";

export const useSubscriptionCategories = () => {
  const { data, isLoading, isValidating, error } = useSWR(
    SubscriptionCategoryAPIRoutes.getAllSubscriptionCategories,
    SubscriptionCategoryService.getAllSubscriptionCategories
  );

  return {
    data,
    isLoading,
    isValidating,
    error,
  };
};
