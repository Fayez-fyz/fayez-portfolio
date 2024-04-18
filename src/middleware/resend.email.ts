import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
// template is callback function
interface sendMailProps {
  fromName: string;
  subject: string;
  react: any;
}

export async function sendEmail({ fromName, subject, react }: sendMailProps) {
  const { data, error } = await resend.emails.send({
    from: `${fromName} <onboarding@resend.dev>`,
    to: "zeyaffayez007@gmail.com",
    subject,
    react,
  });
  return { data, error };
}
