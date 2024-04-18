"use client";
import ContainerWrapper from "@/common/ContainerWrapper";
import { buttonVariants } from "@/components/ui/button";
import { useInView } from "framer-motion";
import { StickyNote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
const AboutComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      style={{
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="lg:h-[calc(100vh-4rem)] flex items-center justify-center  sm:m-0 "
      id="about"
    >
      <ContainerWrapper>
        <h1 className="text-4xl text-primary text-center">About</h1>
        <div
          ref={ref}
          className="border dark:border-accent border-accent-foreground mt-4"
        />

        <div className="mt-4 max-w-screen-lg mx-auto">
          <div className="flex lg:flex-nowrap flex-wrap  dark:bg-zinc-950 bg-primary-foreground  p-6 rounded-lg shadow-lg gap-4 sm:gap-10">
            <div className="flex flex-col items-center w-full">
              <div className="relative w-40 h-40 md:w-96 md:h-96">
                <Image
                  src={"/fayez-pic.jpg"}
                  alt="Fayez"
                  fill
                  quality={100}
                  className=" shadow-2xl rounded-full md:rounded-none "
                />
              </div>
              <blockquote className="text-accent-foreground italic text-opacity-50 text-xs text-center mt-3">
                “If you are not going to tell the world who you are, the world
                is not going to tell you, how good you are”
              </blockquote>
            </div>
            <div>
              <h3 className="font-bold text-2xl ">I&apos;m Fayez</h3>
              <p className="text-primary text-lg sm:text-xl  font-semibold ">
                Software Engineer / Full Stack Developer
              </p>

              <p className="text-primary text-xs mt-2 ">
                A Full Stack developer with a solid track record of over two
                years in the industry. My passion lies in solving intricate
                problems with innovative solutions, consistently aiming for
                excellence in every project I undertake.
              </p>
              <p className="text-primary text-xs  mt-2 ">
                Over the course of my career, I&apos;ve had the privilege of
                contributing to the development of several noteworthy products,
                including{" "}
                <Link
                  href={"https://www.hyring.com/"}
                  target={"_blank"}
                  className="underline"
                >
                  Hyring.com
                </Link>{" "}
                , Ryzone mobile apps, and Riceportal mobile apps. Additionally,
                I&apos;ve taken the lead on various mini projects such as Social
                App, Blog App, and Simple Job Portal App, where I&apos;ve honed
                my skills across diverse domains.
              </p>
              <p className="text-primary text-xs  mt-2 ">
                My expertise spans both frontend and backend development, with
                proficiency in technologies like React.js, Next.js, Node.js,
                Express.js, and Nest.js. I thrive on delving into every layer of
                the stack, meticulously crafting seamless user experiences while
                architecting scalable server-side solutions.
              </p>
              <p className="text-primary text-xs mt-2 ">
                Driven by a fervent dedication to staying at the forefront of
                technological advancements, I actively seek out opportunities to
                learn and adapt to emerging trends and tools. The dynamic nature
                of the tech industry fuels my enthusiasm, and I&apos;m always
                eager to collaborate on exciting projects and make meaningful
                contributions. Let&apos;s connect and embark on a journey of
                innovation together!
              </p>
              <Link
                className={buttonVariants({
                  size: "sm",
                  variant: "default",
                  className: "font-semibold w-full mt-3",
                })}
                href={
                  "https://drive.google.com/file/d/1ytwTZiURnHLDr7iy91C5oYb9HXnXMJD4/view?usp=sharing"
                }
                target={"_blank"}
              >
                <StickyNote className="h-4 w-4 mr-2" /> Download Resume
              </Link>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};
export default AboutComponent;
