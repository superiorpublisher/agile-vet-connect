import { ReactNode } from "react";
import { cn } from "@/lib/utils";
type PricingOptionProps = {
  title: string;
  features: string[];
  setupPrice: string;
  monthlyPrice: string;
  valuePrice: string;
  recommended?: boolean;
  className?: string;
  children?: ReactNode;
};
const PricingOption = ({
  title,
  features,
  setupPrice,
  monthlyPrice,
  valuePrice,
  recommended,
  className,
  children
}: PricingOptionProps) => {
  return <div className={cn("rounded-xl p-6 border transition-all duration-300", recommended ? "border-vet-primary-purple bg-vet-soft-purple shadow-lg scale-105" : "border-gray-200 bg-white hover:shadow-md", className)}>
      {recommended && <div className="bg-vet-primary-purple text-white py-1 px-4 rounded-full text-sm font-bold inline-block mb-4">
          Recommended
        </div>}
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="mb-6 text-left">
        {features.map((feature, index) => <li key={index} className="mb-2 flex items-start">
            <span className="text-vet-bright-blue mr-2">✓</span>
            <span>{feature}</span>
          </li>)}
      </ul>
      <div className="mb-2">
        <div className="text-sm text-vet-neutral-gray">Value</div>
        <div className="text-lg font-semibold">{valuePrice}</div>
      </div>
      <div className="mb-2">
        <div className="text-sm text-vet-neutral-gray">Your Price</div>
        <div className="text-2xl font-bold text-vet-dark-gray">{setupPrice}</div>
        {monthlyPrice && <div className="text-2xl font-bold text-vet-dark-gray">+ {monthlyPrice}</div>}
      </div>
      {children}
    </div>;
};
export default PricingOption;