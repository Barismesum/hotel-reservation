"use client";

interface FooterLinksProps {
  title: string;
  links: string[];
}

export function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}