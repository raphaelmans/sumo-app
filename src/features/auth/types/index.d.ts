import z from 'zod'
import { loginSchema, registerSchema } from "../form-utils";

export type LoginResponse = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  isAdmin: boolean;
};


export type LoginFormType = z.infer<typeof loginSchema>;
export type RegisterFormType = z.infer<typeof registerSchema>;

