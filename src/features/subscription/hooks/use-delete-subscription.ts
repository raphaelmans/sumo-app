import {
  SubscriptionAPIRoutes,
  deleteSubscriptionMutation,
} from "@shared/services/subscription-service";
import useSWRMutation from "swr/mutation";

export const useDeleteSubscription = () => {
  const {
    trigger: deleteSubscription,
    data,
    isMutating,
    error,
  } = useSWRMutation(
    SubscriptionAPIRoutes.getAllSubscriptions,
    deleteSubscriptionMutation
  );

  return {
    data,
    deleteSubscription,
    isMutating,
    error,
  };
};
