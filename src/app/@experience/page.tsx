"use client";
import ContainerWrapper from "@/common/ContainerWrapper";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
const ExperienceComponent = () => {
  const workOne = useRef(null);
  const workTwo = useRef(null);
  const isInViewOne = useInView(workOne, { once: true });
  const isInViewTwo = useInView(workTwo, { once: true });
  return (
    <div className=" mt-20 sm:mt-40" id="experience">
      <ContainerWrapper>
        <h1
          style={{
            transform: isInViewOne ? "none" : "translateX(-200px)",
            opacity: isInViewOne ? 1 : 0,
            transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="text-4xl text-primary text-center"
        >
          Work Experience
        </h1>
        <div
          style={{
            transform: isInViewOne ? "none" : "translateX(-200px)",
            opacity: isInViewOne ? 1 : 0,
            transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="border dark:border-accent border-accent-foreground mt-4"
        />
        <div
          style={{
            transform: isInViewOne ? "none" : "translateX(-200px)",
            opacity: isInViewOne ? 1 : 0,
            transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="mt-4"
        >
          <div className="flex justify-center  lg:flex-nowrap flex-wrap  dark:bg-zinc-950 bg-primary-foreground   p-6 rounded-lg shadow-lg gap-4 sm:gap-10">
            <div className="flex flex-col justify-center items-center min-w-[300px] gap-4">
              <div className="relative h-40 w-40 ">
                <Image
                  src={"/hyring-logo.jpeg"}
                  alt="Hyring Logo"
                  fill
                  quality={100}
                  className="rounded-full"
                />
              </div>
              <Link
                ref={workOne}
                href={"https://hyring.com/"}
                className="text-primary text-2xl font-bold text-center underline underline-offset-[7px]"
              >
                Hyring
              </Link>
              <p className="text-primary text-lg font-semibold">
                Full Stack Developer
              </p>
              <p className="text-primary text-md text-opacity-50">
                January 2024 - Present
              </p>
            </div>
            <div>
              <ul className="list-disc  text-primary text-sm space-y-2">
                <li>
                  Designed and developed responsive web applications using
                  modern front-end technologies such as HTML5, CSS3, JavaScript,
                  Tailwind CSS, and frameworks like  React.js, and Next.js
                  ensuring seamless user experiences across devices.{" "}
                </li>
                <li>
                  Implemented robust back-end systems using Node.js, Express.js,
                  NestJs, and PostgreSQL, delivering scalable and efficient
                  solutions to meet business requirements.{" "}
                </li>
                <li>
                  Utilized RESTful APIs to integrate various third-party
                  services and data sources, enhancing the functionality and
                  usability of our applications.
                </li>
                <li>
                  Optimized application performance through thorough code
                  reviews, debugging, and refactoring, resulting in significant
                  improvements in speed and efficiency.
                </li>
                <li>
                  Implemented security best practices to safeguard sensitive
                  data and mitigate potential vulnerabilities, ensuring
                  compliance with industry standards and regulations.
                </li>
                <li>
                  Actively participated in Agile development methodologies,
                  including sprint planning, daily stand-ups, and
                  retrospectives, fostering a culture of continuous improvement
                  and innovation.
                </li>
                <li>
                  Provided technical guidance and mentorship to junior
                  developers, facilitating their growth and development within
                  the team.
                </li>
                <li>
                  Proficient in Next.js for building server-side rendered React
                  applications, ensuring efficient rendering and improved SEO
                  performance.
                </li>
                <li>
                  Experienced in working with PostgreSQL for database
                  management, including schema design, query optimization, and
                  data migration.
                </li>
                <li>
                  Skilled in basic deployment processes, including setting up
                  servers, configuring environments, and deploying applications
                  using platforms like Heroku, AWS, and Digital Ocean
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          style={{
            transform: isInViewTwo ? "none" : "translateX(200px)",
            opacity: isInViewTwo ? 1 : 0,
            transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="mt-4"
        >
          <div className="flex justify-center  lg:flex-nowrap flex-wrap  dark:bg-zinc-950 bg-primary-foreground   p-6 rounded-lg shadow-lg gap-4 sm:gap-10">
            <div className="flex flex-col justify-center items-center min-w-[300px] gap-4">
              <div className="relative h-40 w-40 ">
                <Image
                  src={"/domaincer-logo.jpeg"}
                  alt="Domaincer Logo"
                  fill
                  quality={100}
                  className="rounded-full"
                />
              </div>
              <Link
                ref={workTwo}
                href={"https://domaincer.com/"}
                className="text-primary text-2xl font-bold text-center underline underline-offset-[6px]"
              >
                Domaincer
              </Link>
              <p className="text-primary text-lg font-semibold">
                Full Stack Developer
              </p>
              <p className="text-primary text-md text-opacity-50">
                January 2022 - January 2024
              </p>
            </div>
            <div>
              <ul className="list-disc text-primary text-sm space-y-2">
                <li>
                  Spearheaded the development of a robust backend API system,
                  ensuring efficient data flow and seamless functionality for
                  web and mobile applications.
                </li>
                <li>
                  Designed and optimized databases using PostgreSQL and MongoDB,
                  enhancing data management and retrieval processes.
                </li>
                <li>
                  Implemented responsive design principles to guarantee optimal
                  user experience across multiple devices and screen sizes.
                </li>
                <li>
                  Proficiently troubleshooted, debugged, and upgraded
                  applications to maintain high performance and reliability.
                </li>
                <li>
                  Collaborated closely with cross-functional development teams
                  to drive project success and meet deliverables on time.
                </li>
                <li>
                  Implemented comprehensive protection and data security
                  measures to safeguard sensitive information and ensure
                  compliance with industry standards.
                </li>
                <li>
                  Proficient in developing React Native applications using Expo,
                  ensuring efficient development and deployment processes.
                </li>
                <li>
                  Skilled in leveraging Next.js to develop server-side rendered
                  React applications, enhancing rendering efficiency and
                  bolstering SEO performance.
                </li>
                <li>
                  Orchestrated the seamless deployment of applications on
                  diverse platforms including AWS, Digital Ocean, Play Store,
                  and App Store, facilitating widespread accessibility and user
                  adoption.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};
export default ExperienceComponent;
