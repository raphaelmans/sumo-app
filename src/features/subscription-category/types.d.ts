import z from 'zod'
import { BillingCycle } from "./constants";
import { createSubscriptionCategorySchema } from "./form-utils";

export type BillingCycle = (typeof BillingCycle)[number];

export type CreateSubscriptionCategoryForm = z.infer<typeof createSubscriptionCategorySchema>;
