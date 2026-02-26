import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  { icon: Mail, text: "info@brightwayuniforms.com", href: "mailto:info@brightwayuniforms.com" },
  { icon: Phone, text: "704-827-1868", href: "tel:7048271868" },
  { icon: MapPin, text: "1196 Noles Drive, Mount Holly, NC 28120", href: "https://maps.google.com/?q=1196+Noles+Drive+Mount+Holly+NC+28120" },
];

const serviceLinks = [
  { name: "Industrial", href: "/services/industrial" },
  { name: "Restaurants", href: "/services/restaurants" },
  { name: "Professional", href: "/services/professional" },
  { name: "Custom Apparel", href: "https://metroprint.ink", external: true },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-wide section-padding-sm">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Bright Way"
                width={150}
                height={38}
                className="h-9 w-auto opacity-90"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Charlotte&apos;s premier uniform partner. No long-term contracts, no surprise fees — just exceptional service.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">
              Contact
            </h4>
            <ul className="space-y-3.5">
              {contactInfo.map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("https") ? "_blank" : undefined}
                    rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3 text-white/60 hover:text-white transition-colors duration-300 text-sm group"
                  >
                    <item.icon size={16} className="mt-0.5 flex-shrink-0 text-cyan/60 group-hover:text-cyan transition-colors duration-300" />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-sm">
            &copy; 2026 Bright Way. All rights reserved.
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=61577844994593"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/35 hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
