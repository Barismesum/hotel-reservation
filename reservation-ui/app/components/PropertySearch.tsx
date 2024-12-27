"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Search, SlidersHorizontal } from "lucide-react";

export function PropertyCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
  ];

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="embla overflow-hidden rounded-3xl" ref={emblaRef}>
        <div className="embla__container">
          {images.map((src, index) => (
            <div key={index} className="embla__slide relative w-full flex-[0_0_100%]">
              <div className="pt-[75%] relative">
                <Image
                  src={src}
                  alt={`Property ${index + 1}`}
                  fill
                  className="absolute inset-0 object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

export function SearchCard() {
  const [activeTab, setActiveTab] = useState("sale");

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 w-full md:w-[482px] md:h-full flex flex-col">
      <div className="flex mb-6 md:mb-10 border-b">
        <button
          className={`flex-1 pb-3 md:pb-4 text-center transition relative ${
            activeTab === "sale"
              ? "text-purple-700 font-medium"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("sale")}
        >
          For Sale
          {activeTab === "sale" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-700" />
          )}
        </button>
        <button
          className={`flex-1 pb-3 md:pb-4 text-center transition relative ${
            activeTab === "rent"
              ? "text-purple-700 font-medium"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("rent")}
        >
          For Rent
          {activeTab === "rent" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-700" />
          )}
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-6 md:space-y-8">
          <input
            type="text"
            placeholder="New York, San Francisco, etc"
            className="w-full p-3 md:p-4 bg-gray-50 rounded-lg border-0 placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
          />
          <select className="w-full p-3 md:p-4 bg-gray-50 rounded-lg border-0 text-gray-500 focus:ring-2 focus:ring-purple-500 appearance-none">
            <option value="">Select Property Type</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Condo</option>
          </select>
          <select className="w-full p-3 md:p-4 bg-gray-50 rounded-lg border-0 text-gray-500 focus:ring-2 focus:ring-purple-500 appearance-none">
            <option value="">Select Rooms</option>
            <option>1</option>
            <option>2</option>
            <option>3+</option>
          </select>
        </div>

        <div className="space-y-6 md:space-y-8 mt-8 md:mt-10">
          <div className="flex items-center gap-2 text-purple-700">
            <SlidersHorizontal className="w-4 h-4" />
            <button className="text-sm font-medium hover:text-purple-800 transition">
              Advance Search
            </button>
          </div>

          <button className="w-full bg-purple-700 text-white py-3 md:py-4 rounded-full hover:bg-purple-800 transition flex items-center justify-center gap-2">
            <Search className="w-5 h-5" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}