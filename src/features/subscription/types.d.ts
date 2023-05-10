import z from 'zod'
import { billingCycle } from "./constants";
import { createSubscriptionSchema, editSubscriptionSchema } from "./form-utils";

export type BillingCycle = (typeof billingCycle)[number];
export type SubscriptionStatus = (typeof SubscriptionStatus)[number];

export type CreateSubscriptionForm = z.infer<typeof createSubscriptionSchema>;
export type EditSubscriptionForm = z.infer<typeof editSubscriptionSchema>;
export type SubscriptionUpdated = {
    id: boolean;
    subscriptionName: boolean;
    subscriptionCost: boolean;
    billingCycle: boolean;
    creationDate: boolean;
    lastUpdated: boolean;
    status: boolean;
    subscriptionCategoryId: boolean;
    appUserId: boolean;
  };