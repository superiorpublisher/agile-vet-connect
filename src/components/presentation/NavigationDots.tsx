
import { cn } from "@/lib/utils";

type NavigationDotsProps = {
  totalSlides: number;
  currentSlide: number;
  onDotClick: (index: number) => void;
  className?: string;
};

const NavigationDots = ({ 
  totalSlides, 
  currentSlide, 
  onDotClick,
  className 
}: NavigationDotsProps) => {
  return (
    <div className={cn("flex gap-2 justify-center", className)}>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          className={cn(
            "w-3 h-3 rounded-full transition-all duration-300",
            currentSlide === index 
              ? "bg-vet-primary-purple scale-125" 
              : "bg-gray-300 hover:bg-gray-400"
          )}
          onClick={() => onDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
