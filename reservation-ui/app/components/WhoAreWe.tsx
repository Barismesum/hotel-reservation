"use client";

import { Home, Users } from "lucide-react";
import Image from "next/image";

export function WhoAreWe() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <h3 className="text-purple-700 font-medium mb-4 text-sm uppercase tracking-wide">WHO ARE WE</h3>
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            Assisting individuals in locating the appropriate real estate.
          </h2>
          
          <p className="text-gray-600 text-sm md:text-base mb-8">
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it
          </p>

          <div className="md:hidden grid grid-cols-2 gap-4 mb-8">
            <div className="h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=1000&fit=crop"
                alt="Modern house with pool"
                width={400}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-4">
              <div className="h-[192px] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=400&h=400&fit=crop"
                  alt="Cozy bedroom"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[192px] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=400&h=400&fit=crop"
                  alt="Modern living room"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Home className="w-5 h-5 text-purple-700" />
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold text-purple-700 mb-2">
                  Lorem ipsum has been the
                </h4>
                <p className="text-gray-600 text-sm">
                  when an unknown printer took a galley
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Users className="w-5 h-5 text-purple-700" />
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold text-purple-700 mb-2">
                  Lorem ipsum has been the
                </h4>
                <p className="text-gray-600 text-sm">
                  when an unknown printer took a galley
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden md:flex gap-6">
          <div className="flex-1">
            <div className="rounded-[32px] overflow-hidden h-full">
              <Image
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=1000&fit=crop"
                alt="Modern house with pool"
                width={800}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 w-[45%]">
            <div className="rounded-[32px] overflow-hidden h-1/2">
              <Image
                src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=400&h=400&fit=crop"
                alt="Cozy bedroom"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-[32px] overflow-hidden h-1/2">
              <Image
                src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=400&h=400&fit=crop"
                alt="Modern living room"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="absolute -z-10 w-48 h-48 rounded-full bg-blue-100/50 bottom-12 -right-12" />
        </div>
      </div>
    </div>
  );
}