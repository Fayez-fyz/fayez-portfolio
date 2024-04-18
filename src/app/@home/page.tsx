"use client";

import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, StickyNote } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
const HomeComponent = () => {
  return (
    <div
      className="flex justify-center items-center h-[calc(100dvh-4rem)] ]"
      id="home"
    >
      {" "}
      <div className="flex flex-col gap-4 justify-center">
        <motion.h1
          initial={{ x: "100vw" }}
          animate={{
            x: 0,
            transition: {
              duration: 1.5,
              ease: [0.6, 0.01, -0.05, 0.9],
            },
          }}
          className="sm:text-7xl text-4xl font-bold text-center"
        >
          Hey! I&apos;m Fayez
        </motion.h1>
        <motion.p
          initial={{ x: "-100vw" }}
          animate={{
            x: 0,
            transition: {
              duration: 1.5,
              ease: [0.6, 0.01, -0.05, 0.9],
            },
          }}
          className="sm:text-lg text-sm  uppercase text-secondary-foreground dark:text-white dark:text-opacity-25 text-opacity-35 text-center tracking-[8px] sm:tracking-[25px]"
        >
          SOFTWARE ENGINEER
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex justify-center items-center"
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Frontend Developer",
              2000,
              "Backend Developer",
              2000,
              "React Native Developer",
              2000,
            ]}
            wrapper="span"
            speed={20}
            className="sm:text-5xl text-xl font-semibold text-center"
            cursor={true}
            repeat={Infinity}
          />
        </motion.div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{
            x: 0,
            transition: {
              duration: 1.5,
              ease: [0.6, 0.01, -0.05, 0.9],
            },
          }}
          className="border dark:border-accent border-accent-foreground "
        />
        {/* <Link
          className={buttonVariants({
            size: "sm",
            className: "font-semibold w-fit self-center",
          })}
          href={"/sign-in"}
        >
          Connect with me
        </Link> */}
        <motion.div
          initial={{ y: "100vh" }}
          animate={{
            y: 0,
            transition: {
              duration: 3,
              ease: [0.6, 0.01, -0.05, 0.9],
            },
          }}
          className="flex justify-center items-center gap-6 "
        >
          <Link
            href={"https://github.com/Fayez-fyz"}
            target="_blank"
            className="cursor-pointer border border-primary rounded-full p-3 transform transition duration-400 hover:scale-125"
          >
            <Github className="sm:h-10 sm:w-10 h-7 w-7" />
          </Link>
          <Link
            href={"mailto:zeyaffayez007@gmail.com"}
            className="cursor-pointer border border-primary rounded-full p-3 transform transition duration-400 hover:scale-125"
          >
            <Mail className="sm:h-10 sm:w-10 h-7 w-7" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/fayez007/"}
            target="_blank"
            className="cursor-pointer border border-primary rounded-full p-3 transform transition duration-400 hover:scale-125"
          >
            <Linkedin className="sm:h-10 sm:w-10 h-7 w-7" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: "100vh" }}
          animate={{
            y: 0,
            transition: {
              duration: 4,
              ease: [0.6, 0.01, -0.05, 0.9],
            },
          }}
          className="flex justify-center items-center"
        >
          <Link
            className={buttonVariants({
              size: "sm",
              variant: "default",
              className: "font-semibold mt-3 w-fit ",
            })}
            href={
              "https://drive.google.com/file/d/1ytwTZiURnHLDr7iy91C5oYb9HXnXMJD4/view?usp=sharing"
            }
            target={"_blank"}
          >
            <StickyNote className="h-4 w-4 mr-2" /> Download Resume
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
export default HomeComponent;
