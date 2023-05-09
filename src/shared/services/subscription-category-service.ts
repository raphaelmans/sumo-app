import baseFetcher from "@shared/api";
import { SubscriptionCategory } from "@types";
import { AxiosResponse } from "axios";

import { MutationFetcher } from "swr/mutation";

export const SubscriptionCategoryAPIRoutes = {
  getAllSubscriptionCategories: `/SubscriptionCategoryAPI/GetAllSubscriptionCategories`,
  createSubscriptionCategory: `/SubscriptionCategoryAPI/CreateSubscriptionCategory`,
};

export const SubscriptionCategoryKey = {
  createSubscriptionCategory:  SubscriptionCategoryAPIRoutes.createSubscriptionCategory+'/new',
}

export const SubscriptionCategoryService = {
  getAllSubscriptionCategories: () =>
    baseFetcher.get<SubscriptionCategory[]>(SubscriptionCategoryAPIRoutes.getAllSubscriptionCategories),
  createSubscriptionCategory: (sub: SubscriptionCategoryCreate) =>
    baseFetcher.post<string>(SubscriptionCategoryAPIRoutes.createSubscriptionCategory, sub),
};

export type SubscriptionCategoryCreate = Omit<SubscriptionCategory, "id">;
export const createSubscriptionCategoryMutation: MutationFetcher<
  AxiosResponse<string>,
  {
    data: SubscriptionCategoryCreate;
  },
  string
> = (_, { arg }) => SubscriptionCategoryService.createSubscriptionCategory(arg.data);
