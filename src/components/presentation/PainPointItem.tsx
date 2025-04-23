
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PainPointItemProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
};

const PainPointItem = ({ title, description, icon, className }: PainPointItemProps) => {
  return (
    <div className={cn("flex gap-4 mb-6", className)}>
      {icon && (
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-500">
          {icon}
        </div>
      )}
      <div>
        <h3 className="font-semibold text-lg text-vet-dark-gray">{title}</h3>
        <p className="text-vet-neutral-gray">{description}</p>
      </div>
    </div>
  );
};

export default PainPointItem;
