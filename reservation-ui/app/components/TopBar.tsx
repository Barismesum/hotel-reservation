import { Mail, Phone } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-purple-700 text-white px-4 py-2 text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="flex items-center gap-2">
          <span>Lorem Ipsum has been the industrys standard dummy</span>
        </p>
        <div className="flex items-center gap-6">
          <a href="tel:+90123456789" className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            +90123 45 67
          </a>
          <a href="mailto:mail@email.com" className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            mail@email.com
          </a>
        </div>
      </div>
    </div>
  );
}