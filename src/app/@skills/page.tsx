"use client";
import {
  CSSIcon,
  ExpoIcon,
  ExpressIcon,
  GitHubIcon,
  GitIcon,
  HTMLIcon,
  JavaScriptIcon,
  MaterialUIIcon,
  MongoDBIcon,
  NestIcon,
  NextIcon,
  NodeIcon,
  PostgresqlIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "@/assets";
import ContainerWrapper from "@/common/ContainerWrapper";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Marquee from "react-fast-marquee";
const SkillsComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className=" dark:bg-zinc-950 bg-primary-foreground p-6 mt-20"
      id="skills"
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <ContainerWrapper>
        <h1 className="text-4xl text-primary text-center">Technical Skills</h1>
        <div
          ref={ref}
          className="border dark:border-accent border-accent-foreground mt-4"
        />
        <div className="mt-10 max-w-screen-lg mx-auto overflow-hidden">
          <Marquee>
            <div className="flex flex-col items-center gap-3 mx-4">
              <HTMLIcon className="text-5xl md:text-8xl" />
              <p className="text-center font-bold  ">HTML</p>
            </div>
            <div className="flex flex-col items-center gap-3 mx-4">
              <CSSIcon className="text-5xl md:text-8xl" />
              <p className="text-center font-bold  ">CSS</p>
            </div>
            <div className="flex flex-col items-center gap-3 mx-4">
              <JavaScriptIcon className="text-5xl md:text-8xl" />
              <p className="text-center font-bold  ">JavaScript</p>
            </div>
            <div className="flex flex-col items-center gap-3 mx-4">
              <TypeScriptIcon className="text-5xl md:text-8xl" />
              <p className="text-center font-bold  ">TypeScript</p>
            </div>
            <div className="flex flex-col items-center gap-3 mx-4">
              <ReactIcon className="text-5xl md:text-8xl" />
              <p className="text-center font-bold  ">React.js</p>
            </div>
            <div className="flex flex-col items-center gap-3 mx-4">
              <ReduxIcon className="text-5xl md:text-8xl" />
              <p className="text-center font-bold  ">Redux</p>
            </div>
            <div className="flex flex-col items-center gap-3 mx-4">
              <NextIcon className="text-5xl md:text-8xl" />
              <p className="text-center font-bold  ">Next.js</p>
            </div>
            <div className="flex flex-col items-center gap-3 mx-4">
              <NodeIcon className="text-5xl md:text-8xl" />
              <p className="text-center font-bold  ">Node.js</p>
            </div>
            <div className="flex flex-col items-center gap-3 mx-4">
              <ExpressIcon className="text-5xl md:text-8xl dark:fill-white fill-zinc-900" />
              <p className="text-center font-bold  ">Express.js</p>
            </div>
            <div className="flex flex-col items-center gap-3 mx-4">
              <ReactIcon className="text-5xl md:text-8xl" />
              <p className="text-center font-bold  ">React Native</p>
            </div>
            <div className="flex flex-col items-center gap-3 mx-4">
              <ExpoIcon className="text-5xl md:text-8xl dark:fill-white fill-zinc-900" />
              <p className="text-center font-bold  ">Expo</p>
            </div>
            <div className="flex flex-col items-center gap-3 mx-4">
              <NestIcon className="text-5xl md:text-8xl" />
              <p className="text-center font-bold  ">Nest.js</p>
            </div>
            <div className="flex flex-col items-center gap-3 mx-4">
              <PostgresqlIcon className="text-5xl md:text-8xl" />
              <p className="text-center font-bold  ">PostgreSQL</p>
            </div>
            <div className="flex flex-col items-center gap-3 mx-4">
              <MongoDBIcon className="text-5xl md:text-8xl" />
              <p className="text-center font-bold  ">MongoDB</p>
            </div>
            <div className="flex flex-col items-center gap-3 mx-4">
              <TailwindIcon className="text-5xl md:text-8xl" />
              <p className="text-center font-bold  ">Tailwind</p>
            </div>
            <div className="flex flex-col items-center gap-3 mx-4">
              <MaterialUIIcon className="text-5xl md:text-8xl" />
              <p className="text-center font-bold  ">Material UI</p>
            </div>
            <div className="flex flex-col items-center gap-3 mx-4">
              <GitHubIcon className="text-5xl md:text-8xl dark:fill-white fill-zinc-900" />
              <p className="text-center font-bold   ">GitHub</p>
            </div>
            <div className="flex flex-col items-center gap-3 mx-4">
              <GitIcon className="text-5xl md:text-8xl" />
              <p className="text-center font-bold  ">Git</p>
            </div>
          </Marquee>
        </div>
      </ContainerWrapper>
    </div>
  );
};
export default SkillsComponent;
