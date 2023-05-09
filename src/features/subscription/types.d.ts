import { BillingCycle } from "./constants";
import { createSubscriptionSchema } from "./form-utils";

export type BillingCycle = (typeof BillingCycle)[number];

export type CreateSubscriptionForm = z.infer<typeof createSubscriptionSchema>;
