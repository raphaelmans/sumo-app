import z from 'zod'
import { appUserStatus } from "./constants";
import { editAppUserSchema } from "./form-utils";

export type AppUserStatus = (typeof appUserStatus)[number];
export type EditAppUserForm = z.infer<typeof editAppUserSchema>;
