"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    content: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    author: {
      name: "Barbara D. Smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop",
      rating: 4
    }
  },
  {
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: {
      name: "Michael R. Johnson",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=96&h=96&fit=crop",
      rating: 5
    }
  },
  {
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: {
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=96&h=96&fit=crop",
      rating: 5
    }
  }
];

export function TestimonialCarousel({ onPrevClick, onNextClick }: { onPrevClick: (fn: () => void) => void, onNextClick: (fn: () => void) => void }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    slidesToScroll: 1
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onPrevClick(scrollPrev);
    onNextClick(scrollNext);

    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
    return () => {
      emblaApi.off('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    };
  }, [emblaApi, onPrevClick, onNextClick, scrollPrev, scrollNext]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === selectedIndex
                ? "w-6 bg-purple-700"
                : "w-1.5 bg-purple-200 hover:bg-purple-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}