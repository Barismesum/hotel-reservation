"use client";

import { Home } from "lucide-react";

export function FooterLogo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="bg-purple-700 p-2 rounded-lg">
          <Home className="w-5 h-5 text-white" />
        </div>
        <span className="font-bold text-xl">Rezilla</span>
      </div>
      <p className="text-gray-600">
        Lorem ipsum has been the industry standard dummy text
      </p>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">+90123 45 67</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">mail@mail.com</span>
        </div>
      </div>
    </div>
  );
}