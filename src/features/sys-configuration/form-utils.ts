import z from "zod";

const emailSchema = z.string().email({ message: "Invalid email format" });

export const sysRecipientsSchema = z.object({
  emails: z.string().refine(
    (value) => {
      const emails = value.split(",").map((email) => email.trim());
      return emails.every((email) => emailSchema.safeParse(email).success);
    },
    { message: "Invalid email list format" }
  ),
});
