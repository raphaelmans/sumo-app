import useAuthToken from "@features/auth/hooks/use-auth-token";
import {
  SubscriptionCategoryKey,
  createSubscriptionCategoryMutation,
} from "@shared/services/subscription-category-service";

import useSWRMutation from "swr/mutation";

export const useCreateSubscriptionCategory = () => {
  const { token } = useAuthToken();

  const {
    trigger: createSubscriptionCategory,
    data,
    isMutating,
    error,
  } = useSWRMutation(
    [SubscriptionCategoryKey.createSubscriptionCategory, token ?? ""],
    createSubscriptionCategoryMutation
  );

  return {
    data,
    createSubscriptionCategory,
    isMutating,
    error,
  };
};
