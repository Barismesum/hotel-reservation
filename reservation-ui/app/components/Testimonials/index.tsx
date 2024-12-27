"use client";

import { TestimonialCarousel } from "./TestimonialCarousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useRef } from "react";

export function Testimonials() {
  const prevBtnRef = useRef<() => void>(null);
  const nextBtnRef = useRef<() => void>(null);

  const handlePrevClick = useCallback(() => {
    prevBtnRef.current?.();
  }, []);

  const handleNextClick = useCallback(() => {
    nextBtnRef.current?.();
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-purple-700 font-medium mb-4">TESTIMONIALS</h3>
            <h2 className="text-4xl font-bold mb-6">
              Look What Our<br />
              Customers Say!
            </h2>
            <p className="text-gray-600 mb-8">
              Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque
            </p>
            <div className="flex gap-4">
              <button 
                onClick={handlePrevClick}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-purple-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button 
                onClick={handleNextClick}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-purple-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="relative">
            <TestimonialCarousel 
              onPrevClick={(prev: () => void) => prevBtnRef.current = prev}
              onNextClick={(next: () => void) => nextBtnRef.current = next}
            />
          </div>
        </div>
      </div>
    </div>
  );
}