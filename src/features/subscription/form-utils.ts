
import z from 'zod'
import { BillingCycle, SubscriptionStatus } from './constants'

export const createSubscriptionSchema = z
  .object({
    subscriptionName: z.string().nonempty(),
    subscriptionCost:  z.string().nonempty().refine((val) => !isNaN(Number(val))),
    billingCycle: z.enum(BillingCycle),
    status:  z.enum(SubscriptionStatus),
    subscriptionCategoryId:  z.string().nonempty(),
  })
