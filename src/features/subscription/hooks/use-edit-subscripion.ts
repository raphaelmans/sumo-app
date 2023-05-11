import useAuthToken from "@features/auth/hooks/use-auth-token";
import {
  SubscriptionKey,
  editSubscriptionMutation,
} from "@shared/services/subscription-service";
import useSWRMutation from "swr/mutation";

export const useEditSubscription = () => {
  const { token } = useAuthToken();

  const {
    trigger: editSubscription,
    data,
    isMutating,
    error,
  } = useSWRMutation(
    [SubscriptionKey.editSubscription, token ?? ""],
    editSubscriptionMutation
  );

  return {
    data,
    editSubscription,
    isMutating,
    error,
  };
};
