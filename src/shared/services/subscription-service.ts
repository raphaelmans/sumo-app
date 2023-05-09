import baseFetcher from "@shared/api";
import { Subscription } from "@types";
import { AxiosResponse } from "axios";

import { MutationFetcher } from "swr/mutation";



export const SubscriptionAPIRoutes = {
  getSubscriptionById: (id: string) => `/SubscriptionAPI/${id}`,
  getAllSubscriptions: `/SubscriptionAPI`,
  createSubscription: `/SubscriptionAPI`,
};

export const SubscriptionKey = {
    createSubscription:  SubscriptionAPIRoutes.createSubscription+'/post',
}

export const SubscriptionService = {
  getAllSubscriptions: () =>
    baseFetcher.get<Subscription[]>(SubscriptionAPIRoutes.getAllSubscriptions),
  createSubscription: (sub: SubscriptionCreate) =>
    baseFetcher.post<string>(SubscriptionAPIRoutes.createSubscription, sub),
};

export type SubscriptionCreate = Omit<Subscription, "id" | 'creationDate' | 'lastUpdated'>;
export const createSubscriptionMutation: MutationFetcher<
  AxiosResponse<string>,
  {
    subscription: SubscriptionCreate;
  },
  string
> = (_, { arg }) => SubscriptionService.createSubscription(arg.subscription);
