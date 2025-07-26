import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-8xl px-4 md:px-20 lg:px-24",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
