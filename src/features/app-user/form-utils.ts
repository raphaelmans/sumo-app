import z from "zod";
import { appUserStatus } from "./constants";

export const createAppUserSchema = z.object({
  email: z.string().nonempty(),
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  address: z.string().nonempty(),
  status: z.enum(appUserStatus),
});

export const editAppUserSchema = z.object({
  email: z.string().nonempty(),
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  address: z.string().nonempty(),
  status: z.enum(appUserStatus),
});
