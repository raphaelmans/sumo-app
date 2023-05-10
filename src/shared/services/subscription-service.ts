import baseFetcher from "@shared/api";
import { Subscription } from "@types";
import { AxiosResponse } from "axios";
import { cache } from "swr/_internal";

import { MutationFetcher } from "swr/mutation";

export const SubscriptionAPIRoutes = {
  getSubscriptionById: (id: string) => `/SubscriptionAPI/${id}`,
  getAllSubscriptions: `/SubscriptionAPI`,
  createSubscription: `/SubscriptionAPI`,
  editSubscriptionById: (id: number) => `/SubscriptionAPI/${id}`,
  deleteSubscriptionById: (id: number) => `/SubscriptionAPI/${id}`,
};

export const SubscriptionKey = {
  createSubscription: SubscriptionAPIRoutes.createSubscription + "/post",
  editSubscription: "/SubscriptionAPI/" + "/edit",
  deleteSubscription: "/SubscriptionAPI/" + "/delete",
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
  deleteSubscriptionById: (id: number) =>
    baseFetcher.delete<Subscription>(
      SubscriptionAPIRoutes.deleteSubscriptionById(id)
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

export const deleteSubscriptionMutation: MutationFetcher<
  AxiosResponse,
  {
    id: number;
  },
  string
> = async (_, { arg }) => {
  return SubscriptionService.deleteSubscriptionById(arg.id);
};
