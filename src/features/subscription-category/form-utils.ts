
import z from 'zod'

export const createSubscriptionCategorySchema = z
  .object({
    categoryName: z.string().nonempty(),
  }).required()
