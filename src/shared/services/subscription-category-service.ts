import baseFetcher from "@shared/api";
import { generateConfigHeaderToken } from "@shared/utils";
import { SubscriptionCategory } from "@types";
import { AxiosRequestConfig, AxiosResponse } from "axios";

import { MutationFetcher } from "swr/mutation";

export const SubscriptionCategoryAPIRoutes = {
  getAllSubscriptionCategories: `/SubscriptionCategoryAPI/GetAllSubscriptionCategories`,
  createSubscriptionCategory: `/SubscriptionCategoryAPI/CreateSubscriptionCategory`,
};

export const SubscriptionCategoryKey = {
  createSubscriptionCategory:
    SubscriptionCategoryAPIRoutes.createSubscriptionCategory + "/new",
};

export const SubscriptionCategoryService = {
  getAllSubscriptionCategories: (config?: AxiosRequestConfig) =>
    baseFetcher.get<SubscriptionCategory[]>(
      SubscriptionCategoryAPIRoutes.getAllSubscriptionCategories,
      config
    ),
  createSubscriptionCategory: (
    sub: SubscriptionCategoryCreate,
    config?: AxiosRequestConfig
  ) =>
    baseFetcher.post<string>(
      SubscriptionCategoryAPIRoutes.createSubscriptionCategory,
      sub,
      config
    ),
};

export type SubscriptionCategoryCreate = Omit<SubscriptionCategory, "id">;
export const createSubscriptionCategoryMutation: MutationFetcher<
  AxiosResponse<string>,
  {
    data: SubscriptionCategoryCreate;
  },
  [string, string]
> = ([_, token], { arg }) =>
  SubscriptionCategoryService.createSubscriptionCategory(
    arg.data,
    generateConfigHeaderToken(token)
  );
