import FooterComponent from "@/common/Footer";
import Navbar from "@/common/Navbar";
import ParticlesContainer from "@/common/ParticlesContainer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/twMerge";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";
import "../styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fayez Portfolio",
  description:
    "Experienced Full Stack Developer proficient in front-end and back-end development. Skilled in HTML, CSS, JavaScript, React, React Native, Next.js, Node.js, Express, PostgreSQL, MongoDB, Tailwind CSS. Strong problem-solving abilities and a passion for creating scalable web and mobile applications. Seeking opportunities to contribute to an innovative organization and deliver high-quality software solutions.",
  icons: "/favicon.ico",
  robots: "index, follow",
  authors: [{ name: "Fayez" }],
  creator: "Fayez",
  publisher: "Fayez",
  category: "Personal Website",
  applicationName: "Fayez Portfolio",
  keywords: [
    "Fayez",
    "Portfolio",
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Frontend Engineer",
    "Backend Engineer",
    "JavaScript Developer",
    "React Developer",
    "Node.js Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="zinc scroll-smooth no-scrollbar">
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-zinc-200 dark:bg-primary-foreground",
          montserrat.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main id="home">
            <ParticlesContainer />

            <Navbar />
            <Toaster />
            {children}
            <FooterComponent />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
