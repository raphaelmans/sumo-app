import baseFetcher from "@shared/api";
import { generateConfigHeaderToken } from "@shared/utils";
import { Subscription } from "@types";
import { AxiosRequestConfig, AxiosResponse } from "axios";
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
  getAllSubscriptions: (config?: AxiosRequestConfig) =>
    baseFetcher.get<Subscription[]>(
      SubscriptionAPIRoutes.getAllSubscriptions,
      config
    ),
  createSubscription: (sub: SubscriptionCreate, config?: AxiosRequestConfig) =>
    baseFetcher.post<string>(
      SubscriptionAPIRoutes.createSubscription,
      sub,
      config
    ),

  getSubscriptionById: (id: string, config?: AxiosRequestConfig) =>
    baseFetcher.get<Subscription>(
      SubscriptionAPIRoutes.getSubscriptionById(id),
      config
    ),
  deleteSubscriptionById: (id: number, config?: AxiosRequestConfig) =>
    baseFetcher.delete<Subscription>(
      SubscriptionAPIRoutes.deleteSubscriptionById(id),
      config
    ),
  editSubscriptionById: (
    id: number,
    data: SubscriptionEdit,
    config?: AxiosRequestConfig
  ) =>
    baseFetcher.put(
      SubscriptionAPIRoutes.editSubscriptionById(id),
      {
        ...data,
      },
      config
    ),
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
  [string, string]
> = ([_, token], { arg }) =>
  SubscriptionService.createSubscription(
    arg.subscription,
    generateConfigHeaderToken(token)
  );
export const editSubscriptionMutation: MutationFetcher<
  AxiosResponse,
  {
    id: number;
    subscription: SubscriptionEdit;
  },
  [string, string]
> = ([_, token], { arg }) =>
  SubscriptionService.editSubscriptionById(
    arg.id,
    arg.subscription,
    generateConfigHeaderToken(token)
  );

export const deleteSubscriptionMutation: MutationFetcher<
  AxiosResponse,
  {
    id: number;
  },
  [string, string]
> = async ([_, token], { arg }) => {
  return SubscriptionService.deleteSubscriptionById(
    arg.id,
    generateConfigHeaderToken(token)
  );
};
