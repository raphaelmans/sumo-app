import useAuthToken from "@features/auth/hooks/use-auth-token";
import {
  SubscriptionAPIRoutes,
  deleteSubscriptionMutation,
} from "@shared/services/subscription-service";
import useSWRMutation from "swr/mutation";

export const useDeleteSubscription = () => {
  const { token } = useAuthToken();

  const {
    trigger: deleteSubscription,
    data,
    isMutating,
    error,
  } = useSWRMutation(
    [SubscriptionAPIRoutes.getAllSubscriptions, token ?? ""],

    deleteSubscriptionMutation,
    {
      revalidate: true,
      populateCache: false,
    }
  );

  return {
    data,
    deleteSubscription,
    isMutating,
    error,
  };
};
