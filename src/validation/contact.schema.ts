import { z } from "zod";
// name first letter uppercase validation
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters." })
    .transform((name) => name.charAt(0).toUpperCase() + name.slice(1)),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});
