import useAuthToken from "@features/auth/hooks/use-auth-token";
import {
  SubscriptionCategoryAPIRoutes,
  SubscriptionCategoryService,
} from "@shared/services/subscription-category-service";
import { generateConfigHeaderToken } from "@shared/utils";
import useSWR from "swr";

export const useSubscriptionCategories = () => {
  const { token } = useAuthToken();
  const { data, isLoading, isValidating, error } = useSWR(
    SubscriptionCategoryAPIRoutes.getAllSubscriptionCategories,
    () =>
      SubscriptionCategoryService.getAllSubscriptionCategories(
        generateConfigHeaderToken(token)
      )
  );

  return {
    data,
    isLoading,
    isValidating,
    error,
  };
};
