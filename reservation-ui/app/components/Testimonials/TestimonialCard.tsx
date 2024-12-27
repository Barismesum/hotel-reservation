"use client";

import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  content: string;
  author: {
    name: string;
    avatar: string;
    rating: number;
  };
}

export function TestimonialCard({ content, author }: TestimonialCardProps) {
  return (
    <div className="w-[333px] md:w-auto bg-white rounded-3xl p-6 md:p-8 shadow-lg">
      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
        <span className="text-purple-700 text-4xl leading-none"></span>
      </div>

      <p className="text-gray-600 text-sm md:text-base mb-6">{content}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="font-medium text-sm md:text-base">{author.name}</span>
        </div>

        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < author.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}