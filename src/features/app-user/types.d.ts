import z from 'zod'
import { appUserStatus } from "./constants";
import { createAppUserSchema, editAppUserSchema } from "./form-utils";

export type AppUserStatus = (typeof appUserStatus)[number];

export type CreateAppUserForm = z.infer<typeof createAppUserSchema>;
export type EditAppUserForm = z.infer<typeof editAppUserSchema>;
