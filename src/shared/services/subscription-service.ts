import baseFetcher from "@shared/api";
import { Subscription } from "@types";
import { AxiosResponse } from "axios";

import { MutationFetcher } from "swr/mutation";

export const SubscriptionAPIRoutes = {
  getSubscriptionById: (id: string) => `/SubscriptionAPI/${id}`,
  getAllSubscriptions: `/SubscriptionAPI`,
  createSubscription: `/SubscriptionAPI`,
  editSubscriptionById: (id: number) => `/SubscriptionAPI/${id}`,
};

export const SubscriptionKey = {
  createSubscription: SubscriptionAPIRoutes.createSubscription + "/post",
  editSubscription: SubscriptionAPIRoutes.editSubscriptionById + "/edit",
};

export const SubscriptionService = {
  getAllSubscriptions: () =>
    baseFetcher.get<Subscription[]>(SubscriptionAPIRoutes.getAllSubscriptions),
  createSubscription: (sub: SubscriptionCreate) =>
    baseFetcher.post<string>(SubscriptionAPIRoutes.createSubscription, sub),
  getSubscriptionById: (id: string) =>
    baseFetcher.get<Subscription>(
      SubscriptionAPIRoutes.getSubscriptionById(id)
    ),
  editSubscriptionById: (id: number, data: SubscriptionEdit) =>
    baseFetcher.put(SubscriptionAPIRoutes.editSubscriptionById(id), {
      ...data,
    }),
};

export type SubscriptionCreate = Omit<
  Subscription,
  "id" | "creationDate" | "lastUpdated"
>;
export type SubscriptionEdit = Omit<
  Subscription,
  "id" | "creationDate" | "lastUpdated"
>;

export const createSubscriptionMutation: MutationFetcher<
  AxiosResponse<string>,
  {
    subscription: SubscriptionCreate;
  },
  string
> = (_, { arg }) => SubscriptionService.createSubscription(arg.subscription);
export const editSubscriptionMutation: MutationFetcher<
  AxiosResponse,
  {
    id: number;
    subscription: SubscriptionEdit;
  },
  string
> = (_, { arg }) =>
  SubscriptionService.editSubscriptionById(arg.id, arg.subscription);
