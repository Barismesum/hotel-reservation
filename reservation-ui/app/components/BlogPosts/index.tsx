"use client";

import { BlogCarousel } from "./BlogCarousel";

export function BlogPosts() {
  return (
    <div className="bg-purple-700 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-purple-200 font-medium mb-2">WHATS TRENDING</h3>
          <h2 className="text-3xl font-bold text-white">Latest Blogs & Posts</h2>
        </div>

        <BlogCarousel />

        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === 0 ? "w-8 bg-white" : "w-4 bg-purple-400 hover:bg-purple-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}