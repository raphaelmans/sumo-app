import {
  SubscriptionKey,
  createSubscriptionMutation,
} from "@shared/services/subscription-service";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export const useCreateSubscription = () => {
  const {
    trigger: createSubscription,
    data,
    isMutating,
    error,
  } = useSWRMutation(
    SubscriptionKey.createSubscription,
    createSubscriptionMutation
  );

  return {
    data,
    createSubscription,
    isMutating,
    error,
  };
};
