"use client";

import { ArrowRight, Linkedin, Facebook, Instagram } from "lucide-react";

export function NewsletterForm() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-bottomBlack">Subscribe to our Newsletter!</h3>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Email Address"
          className="flex-1 px-4 py-2 rounded-lg border border-white/10 bg-white text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
        />
        <button className="bg-white text-circle p-2 rounded-lg hover:bg-white/90 transition-colors">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-2">
        <p className="font-semibold text-bottomBlack">Follow Us on</p>
        <div className="flex gap-4">
          <a href="#" className="text-icon hover:text-white">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-icon hover:text-white">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-icon hover:text-white">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}