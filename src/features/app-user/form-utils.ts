import z from "zod";
import { appUserStatus } from "./constants";

export const editAppUserSchema = z.object({
  userName: z.string().nonempty(),
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  address: z.string().nonempty(),
  emailAddress: z.string().email(),
  status: z.enum(appUserStatus),
});
