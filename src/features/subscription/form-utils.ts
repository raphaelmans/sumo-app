
import z from 'zod'
import { billingCycle, subscriptionStatus } from './constants'

export const createSubscriptionSchema = z
  .object({
    subscriptionName: z.string().nonempty(),
    subscriptionCost:  z.string().nonempty().refine((val) => !isNaN(Number(val))),
    billingCycle: z.enum(billingCycle),
    status:  z.enum(subscriptionStatus),
    subscriptionCategoryId:  z.string().nonempty(),
  })

export const editSubscriptionSchema = z
  .object({
    subscriptionName: z.string().nonempty(),
    subscriptionCost:  z.string().nonempty().refine((val) => !isNaN(Number(val))),
    billingCycle: z.enum(billingCycle),
    status:  z.enum(subscriptionStatus),
    subscriptionCategoryId:  z.string().nonempty(),
  })

