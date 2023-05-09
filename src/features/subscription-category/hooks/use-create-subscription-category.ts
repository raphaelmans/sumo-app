import {
  SubscriptionCategoryKey,
  createSubscriptionCategoryMutation,
} from "@shared/services/subscription-category-service";

import useSWRMutation from "swr/mutation";

export const useCreateSubscriptionCategory = () => {
  const {
    trigger: createSubscriptionCategory,
    data,
    isMutating,
    error,
  } = useSWRMutation(
    SubscriptionCategoryKey.createSubscriptionCategory,
    createSubscriptionCategoryMutation
  );

  return {
    data,
    createSubscriptionCategory,
    isMutating,
    error,
  };
};
