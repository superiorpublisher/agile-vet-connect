
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BenefitItemProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
};

const BenefitItem = ({ title, description, icon, className }: BenefitItemProps) => {
  return (
    <div className={cn("flex gap-4 mb-4", className)}>
      {icon && (
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-vet-soft-purple text-vet-primary-purple">
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

export default BenefitItem;
