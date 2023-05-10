import z from "zod";

export const loginSchema = z.object({
  username: z.string().email(),
  password: z.string().min(8)
});


export const registerSchema = z.object({
  password:z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/),
  confirm_pass: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/),
  email: z.string().email(),
});
