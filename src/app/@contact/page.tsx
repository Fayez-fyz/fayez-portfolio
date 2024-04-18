"use client";
import ContainerWrapper from "@/common/ContainerWrapper";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { CustomTextField } from "@/elements/custom-textField";
import { CustomTextArea } from "@/elements/custom-textarea";
import { contactFormSchema } from "@/validation/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useInView } from "framer-motion";
import { ChevronsUp, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { handleContactSubmit } from "../actions/contact.form";
const ContactComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    try {
      const res = await handleContactSubmit(data);
      if (res) {
        toast({
          title: "Hooraay!🎉",
          description: "Your message has been sent successfully",
        });
        form.reset({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oops!😵",
        description: "Something went wrong",
      });
    }
  };
  return (
    <div className="lg:h-[calc(100vh-4rem)] mt-20 relative" id="contact">
      <ContainerWrapper>
        <h1
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="text-4xl text-primary text-center"
        >
          Contact
        </h1>
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="border dark:border-accent border-accent-foreground mt-4"
        />
        <div className="mt-4">
          <div
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="flex  lg:flex-nowrap flex-wrap  dark:bg-zinc-950 bg-primary-foreground   p-6 rounded-lg shadow-lg gap-4 sm:gap-10"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 w-full"
              >
                <CustomTextField
                  control={form.control}
                  name="name"
                  label="Full Name"
                  type="text"
                />
                <CustomTextField
                  control={form.control}
                  name="email"
                  label="Email"
                  type="email"
                />
                <CustomTextArea
                  control={form.control}
                  name="message"
                  label="Message"
                  type="text"
                  rows={10}
                />
                <Button type="submit" className="w-full ">
                  Submit
                </Button>
              </form>
            </Form>
            <div className="flex flex-col gap-4 w-full">
              <Link
                href={
                  "https://www.google.com/maps/place/Tamil+Nadu/@10.8099344,75.6476796,7z/data=!4m6!3m5!1s0x3b00c582b1189633:0x559475cc463361f0!8m2!3d11.1271225!4d78.6568942!16zL20vMDdjOTg?entry=ttu"
                }
                target="_blank"
                className="cursor-pointer border border-primary rounded-lg p-6 transform transition duration-400 hover:scale-105 w-full "
              >
                <div className="flex flex-col items-center gap-6">
                  <MapPin className="w-12 h-12" />
                  <p className="text-primary text-lg sm:text-xl  font-semibold ">
                    Tamil Nadu, India
                  </p>
                </div>
              </Link>
              <Link
                href={"tel:+918098838503"}
                className="cursor-pointer border border-primary rounded-lg p-6 transform transition duration-400 hover:scale-105 w-full "
              >
                <div className="flex flex-col items-center gap-6">
                  <Phone className="w-12 h-12" />
                  <p className="text-primary text-lg sm:text-xl  font-semibold ">
                    +91-8098838503
                  </p>
                </div>
              </Link>
              <Link
                href={"mailto:zeyaffayez007@gmail.com"}
                className="cursor-pointer border border-primary rounded-lg p-6 transform transition duration-400 hover:scale-105 w-full"
              >
                <div className="flex flex-col items-center gap-6">
                  <Mail className="w-12 h-12" />
                  <p className="text-primary text-lg sm:text-xl  font-semibold ">
                    zeyaffayez007@gmail.com
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </ContainerWrapper>
      <Link
        href={"#home"}
        className="absolute bottom-10 right-0 bg-muted p-2 rounded-full animate-bounce cursor-pointer hidden sm:block"
      >
        <ChevronsUp className="w-10 h-10" />
      </Link>
    </div>
  );
};
export default ContactComponent;
