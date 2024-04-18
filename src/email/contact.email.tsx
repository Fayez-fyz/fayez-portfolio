import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h3 className="text-primary underline font-bold text-lg">
      Hi I&apos;m {name},
    </h3>
    <p className="text-primary text-sm ">{message}</p>
    <br />
    <br />
    <p className="text-primary text-sm">Email: {email}</p>
  </div>
);
