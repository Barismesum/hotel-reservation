"use client";

import { Home, Menu } from "lucide-react";

export function MobileHeader() {
  return (
    <div className="md:hidden flex items-center justify-between px-4 py-4 bg-white">
      <div className="flex items-center gap-2 text-purple-700">
        <Home className="w-6 h-6" />
        <span className="font-bold text-xl">Logo</span>
      </div>
      <Menu className="w-6 h-6 text-gray-600" />
    </div>
  );
}