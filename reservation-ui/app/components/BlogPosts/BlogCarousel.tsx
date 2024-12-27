"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlogCard } from "./BlogCard";

const blogPosts = [
  {
    date: { day: 28, month: "Tue" },
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    title: "Top 10 Home Buying Mistakes to Avoid",
    description: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"
  },
  {
    date: { day: 8, month: "Mon" },
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    title: "How to Stage Your Home for a Quick Sale",
    description: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc."
  },
  {
    date: { day: 26, month: "Wed" },
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=800&h=600&fit=crop",
    title: "5 Tips for First-Time Home Sellers",
    description: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus."
  }
];

const infiniteBlogs = [...blogPosts, ...blogPosts, ...blogPosts];

export function BlogCarousel() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
    skipSnaps: false,
    duration: 30
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    let intervalId: NodeJS.Timeout;
    
    const startAutoplay = () => {
      intervalId = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000); 
    };

    startAutoplay();

    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });

    const stopAutoplay = () => clearInterval(intervalId);
    const rootNode = emblaApi.rootNode();
    
    rootNode.addEventListener('mouseenter', stopAutoplay);
    rootNode.addEventListener('mouseleave', startAutoplay);

    return () => {
      clearInterval(intervalId);
      rootNode.removeEventListener('mouseenter', stopAutoplay);
      rootNode.removeEventListener('mouseleave', startAutoplay);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {infiniteBlogs.map((post, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(33.33%-1rem)]">
              <BlogCard {...post} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}