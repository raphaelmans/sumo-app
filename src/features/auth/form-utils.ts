import { appUserStatus } from "@features/app-user/constants";
import z from "zod";

export const loginSchema = z.object({
  userName: z.string().nonempty(),
  password: z.string().min(8),
});

export const registerSchema = z
  .object({
    password: z
      .string()
      .min(8)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/),
    confirmPassword: z
      .string()
      .min(8)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/),
    userName: z.string().nonempty(),
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty(),
    address: z.string().nonempty(),
    emailAddress: z.string().email(),
    status: z.enum(appUserStatus),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
