"use client";
import Link from "next/link";
import React, { useState } from "react";
import ContainerWrapper from "./ContainerWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, Moon, SquareMenu, SquareX, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav
        className={`${menuOpen ? "bg-primary-foreground" : "bg-transparent"} sticky top-0 z-50 w-full  inset-x-0 py-3 transition-all `}
      >
        <ContainerWrapper>
          <div className=" hidden sm:flex items-center justify-between text-primary dark:text-black ">
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{
                x: 0,
                transition: {
                  duration: 1.8,
                  ease: [0.6, 0.01, -0.05, 0.9],
                },
              }}
            >
              <Link
                href={"/"}
                className="text-2xl font-bold text-secondary-foreground dark:text-primary"
              >
                {"<FYZ/>"}
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{
                x: 0,
                transition: {
                  duration: 1.8,
                  ease: [0.6, 0.01, -0.05, 0.9],
                },
              }}
              className="flex gap-6 items-center"
            >
              <Link
                className={buttonVariants({
                  size: "sm",
                  variant: "link",
                  className: "font-semibold",
                })}
                href={"#about"}
              >
                About
              </Link>
              <>
                <Link
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "font-semibold",
                  })}
                  href={"#skills"}
                >
                  Technical Skills
                </Link>
                <Link
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "font-semibold",
                  })}
                  href={"#experience"}
                >
                  Work Experience
                </Link>
                {/* <Link
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "font-semibold",
                  })}
                  href={"/sign-in"}
                >
                  Projects
                </Link> */}
                <Link
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "font-semibold",
                  })}
                  href={"#contact"}
                >
                  Contact
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="font-semibold hover:bg-white dark:hover:bg-accent"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <Moon className="absolute text-secondary-foreground dark:text-primary h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                </Button>
              </>
            </motion.div>
          </div>
          {/* Mobile Navbar */}
          <div className="sm:hidden flex items-center justify-between  ">
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{
                x: 0,
                transition: {
                  duration: 1.8,
                  ease: [0.6, 0.01, -0.05, 0.9],
                },
              }}
            >
              <Link
                href={"/"}
                className="text-2xl font-bold text-secondary-foreground dark:text-primary"
              >
                {"<FYZ/>"}
              </Link>
            </motion.div>
            <motion.div
              className="flex gap-2 items-center"
              initial={{ x: "100vw" }}
              animate={{
                x: 0,
                transition: {
                  duration: 1.8,
                  ease: [0.6, 0.01, -0.05, 0.9],
                },
              }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="font-semibold hover:bg-white dark:hover:bg-accent"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Moon className="absolute text-secondary-foreground dark:text-primary h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              </Button>
              {!menuOpen ? (
                <SquareMenu
                  className="h-8 w-8"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              ) : (
                <SquareX
                  className="h-8 w-8"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              )}
            </motion.div>
          </div>
          {menuOpen && (
            <div className="flex gap-1 flex-col  w-full origin-top animate-open-menu bg-primary-foreground backdrop-blur-lg">
              <Link
                className={buttonVariants({
                  size: "sm",
                  variant: "link",
                  className: "font-semibold",
                })}
                href={"#about"}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                About
              </Link>
              <>
                <Link
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "font-semibold",
                  })}
                  href={"#skills"}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Technical Skills
                </Link>
                <Link
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "font-semibold",
                  })}
                  href={"#experience"}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Work Experience
                </Link>
                {/* <Link
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "font-semibold",
                  })}
                  href={"/sign-in"}
                >
                  Projects
                </Link> */}
                <Link
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "font-semibold",
                  })}
                  href={"#contact"}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Contact
                </Link>
              </>
            </div>
          )}
        </ContainerWrapper>
      </nav>
    </>
  );
};

export default Navbar;
