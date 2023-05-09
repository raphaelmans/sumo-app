import {
  SubscriptionKey,
  editSubscriptionMutation,
} from "@shared/services/subscription-service";
import useSWRMutation from "swr/mutation";

export const useEditSubscription = () => {
  const {
    trigger: editSubscription,
    data,
    isMutating,
    error,
  } = useSWRMutation(
    SubscriptionKey.editSubscription,
    editSubscriptionMutation
  );

  return {
    data,
    editSubscription,
    isMutating,
    error,
  };
};
