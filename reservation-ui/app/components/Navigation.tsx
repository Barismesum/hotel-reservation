"use client";

import { CircleUserRound, Home, Menu } from "lucide-react";

export function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="md:hidden flex items-center justify-between w-full">
            <div className="flex items-center gap-2 text-purple-700">
              <Home className="w-6 h-6" />
              <span className="font-bold text-xl">Logo</span>
            </div>
            <Menu className="w-6 h-6 text-gray-600" />
          </div>

          <div className="hidden md:flex w-full items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="#" className="text-purple-700 font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-purple-700">About</a>
              <a href="#" className="text-gray-600 hover:text-purple-700">Listings</a>
              <a href="#" className="text-gray-600 hover:text-purple-700">Services</a>
              <a href="#" className="text-gray-600 hover:text-purple-700">Blogs</a>
            </div>

            <div className="flex items-center gap-2 text-purple-700">
              <Home className="w-6 h-6" />
              <span className="font-bold text-xl">Logo</span>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-purple-700">
                <CircleUserRound  className="w-5 h-5" />
                Login/Register
              </button>
              <button className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition flex items-center gap-2">
                <Home className="w-5 h-5" />
                Add Listing
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}