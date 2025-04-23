
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SlideProps = {
  children: ReactNode;
  className?: string;
  backgroundClass?: string;
  id?: string;
};

const Slide = ({ children, className, backgroundClass, id }: SlideProps) => {
  return (
    <div 
      id={id}
      className={cn(
        "min-h-screen w-full flex flex-col items-center justify-center p-8 md:p-12 snap-start",
        backgroundClass || "bg-white",
        className
      )}
    >
      <div className="max-w-6xl w-full mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Slide;
