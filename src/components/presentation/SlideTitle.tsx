
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SlideTitleProps = {
  children: ReactNode;
  className?: string;
};

const SlideTitle = ({ children, className }: SlideTitleProps) => {
  return (
    <h2 
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-vet-dark-gray",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default SlideTitle;
