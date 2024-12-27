"use client";

export function BottomFooter() {
  return (
    <div className="bg-bottomBlack">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="md:hidden text-center">
          <p className="text-white/80 text-sm">
            © Company - All rights reserved
          </p>
        </div>

        <div className="hidden md:flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/80 text-sm">
            © Company - All rights reserved
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
              Terms and Conditions
            </a>
            <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}