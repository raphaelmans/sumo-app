import z from "zod";
import { sysRecipientsSchema } from "./form-utils";

export type SysRecipientsForm = z.infer<typeof sysRecipientsSchema>;
