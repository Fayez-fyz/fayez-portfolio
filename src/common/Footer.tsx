"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex justify-center dark:bg-zinc-950 bg-primary-foreground  p-4 mt-3 sm:m-0  shadow-lg ">
      <h2
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        ref={ref}
        className="self-center text-primary font-semibold text-sm"
      >
        © ALL OF THE RIGHTS RESERVED
      </h2>
    </div>
  );
};
export default Footer;
