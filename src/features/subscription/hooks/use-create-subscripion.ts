import useAuthToken from "@features/auth/hooks/use-auth-token";
import {
  SubscriptionAPIRoutes,
  SubscriptionKey,
  createSubscriptionMutation,
} from "@shared/services/subscription-service";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export const useCreateSubscription = () => {
  const { token } = useAuthToken();

  const {
    trigger: createSubscription,
    data,
    isMutating,
    error,
  } = useSWRMutation(
    [SubscriptionAPIRoutes.getAllSubscriptions, token ?? ""],
    createSubscriptionMutation,
    {
      revalidate: true,
      populateCache: false,
    }
  );

  return {
    data,
    createSubscription,
    isMutating,
    error,
  };
};
