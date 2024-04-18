import { cn } from "@/lib/twMerge";
import { ReactNode } from "react";

const ContainerWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn(`mx-auto max-w-screen-xl px-2.5 md:px-20`, className)}>
      {children}
    </div>
  );
};

export default ContainerWrapper;
