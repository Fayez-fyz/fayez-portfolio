"use server";

import { ContactEmail } from "@/email/contact.email";
import { sendEmail } from "@/middleware/resend.email";

import { Resend } from "resend";
interface MyFormData {
  name: string;
  email: string;
  message: string;
}

export async function handleContactSubmit(data: MyFormData) {
  const { name, email, message } = data;
  const resend = await sendEmail({
    fromName: name,
    subject: "Hey Fayez - Someone wants to hire you",
    react: ContactEmail({ name, email, message }),
  });
  if (resend.error) {
    throw new Error("Failed to send email");
  }
  return true;
}
