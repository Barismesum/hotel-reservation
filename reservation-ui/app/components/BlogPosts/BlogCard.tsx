"use client";

import Image from "next/image";

interface BlogCardProps {
  date: {
    day: number;
    month: string;
  };
  image: string;
  title: string;
  description: string;
}

export function BlogCard({ date, image, title, description }: BlogCardProps) {
  return (
    <div className="relative group">
      <div className="relative h-64 rounded-3xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition duration-300"
        />
        <div className="absolute top-4 left-4 bg-white rounded-xl p-2 text-center min-w-[60px]">
          <div className="text-xl font-bold">{date.day}</div>
          <div className="text-sm text-gray-600">{date.month}</div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}