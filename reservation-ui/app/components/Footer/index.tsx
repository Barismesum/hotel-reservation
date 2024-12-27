"use client";

import { FooterLogo } from "./FooterLogo";
import { FooterLinks } from "./FooterLinks";
import { NewsletterForm } from "./NewsletterForm";
import { BottomFooter } from "../BottomFooter";

const quickLinks = ["Home", "About", "Listings", "Services", "Blogs", "Become a Agent"];
const discoveryLinks = ["Canada", "United States", "Germany", "Africa", "India"];

export function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-circle/10 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="md:hidden space-y-8">
            <FooterLogo />
            <NewsletterForm />
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <FooterLogo />
            <FooterLinks title="Quick Links" links={quickLinks} />
            <FooterLinks title="Discovery" links={discoveryLinks} />
            <NewsletterForm />
          </div>
        </div>
      </div>
      <BottomFooter />
    </footer>
  );
}