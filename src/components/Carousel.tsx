import { useState, useEffect, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
//import { ChevronLeft, ChevronRight } from "lucide-react"
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
interface CarouselProps {
  slides: {
    id: number;
    image: string;
    content: ReactNode;
  }[];
  autoPlayInterval?: number;
}

export default function Carousel({
  slides,
  autoPlayInterval = 4000,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length, autoPlayInterval]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div
        className="absolute inset-0 transition-transform duration-500 ease-in-out"
        style={{
          backgroundImage: `url('${slides[currentSlide].image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `scale(1.05)`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        {slides[currentSlide].content}
      </div>

      <div className="absolute inset-0 flex justify-between items-center px-6 z-20">
        <Button
          onClick={prevSlide}
          size="icon"
          className="bg-transparent hover:bg-white transition-colors duration-200 shadow-lg"
          aria-label="Previous slide"
        >
          <GoChevronLeft className="h-12 w-12 text-white-500" />
        </Button>
        <Button
          onClick={nextSlide}
          size="icon"
          className="bg-transparent hover:bg-white transition-colors duration-200 shadow-lg"
          aria-label="Next slide"
        >
          <GoChevronRight className="h-12 w-12 text-white-600" />
        </Button>
      </div>

      <div className="flex justify-center mt-8 space-x-2 absolute bottom-8 left-1/2 -translate-x-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-blue-600" : "bg-white/50"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
