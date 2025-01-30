import { useState,useEffect,useRef } from "react";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import Slider from "./slider";

export function CarouselWithDots() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = Array.from({ length: 3 }); // Replace with your actual slides or data.

  // Store interval ID to clear it later
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleSlideChange = (index: number) => {
    // Clear the existing interval when the slide is manually changed
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Update active slide index
    setActiveIndex(index);

    // Restart the interval to change slides every 5 seconds
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length); // Cycle through slides
    }, 5000);
  };

  // Automatically change the slide every 5 seconds when the component mounts
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length); // Cycle through slides
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [items.length])
  return (
    <div className="relative w-full">
      <Carousel
        className="w-full"
        onChange={(index) => handleSlideChange(index)} // Listen for slide changes
      >
        <Slider index={activeIndex}/>
      </Carousel>

      {/* Dots */}
      <div className="absolute z-[99] bottom-[-35%] lg:bottom-4  left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
}
