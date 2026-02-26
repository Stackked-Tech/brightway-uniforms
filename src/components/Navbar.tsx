"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const services = [
  { name: "All Services", href: "/services" },
  { name: "Industrial", href: "/services/industrial" },
  { name: "Restaurants", href: "/services/restaurants" },
  { name: "Professional", href: "/services/professional" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 anim-slide-down transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-nav"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between h-18 lg:h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Bright Way"
                width={160}
                height={40}
                className="h-9 lg:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive(link.href)
                      ? scrolled ? "text-cyan" : "text-white"
                      : scrolled
                        ? "text-navy/70 hover:text-navy"
                        : "text-white/70 hover:text-white"
                  } ${isActive(link.href) ? "active" : ""}`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`nav-link flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive("/services")
                      ? scrolled ? "text-cyan" : "text-white"
                      : scrolled
                        ? "text-navy/70 hover:text-navy"
                        : "text-white/70 hover:text-white"
                  } ${isActive("/services") ? "active" : ""}`}
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div className={`absolute top-full left-0 pt-2 nav-dropdown ${servicesOpen ? "open" : ""}`}>
                  <div className="bg-white rounded-xl shadow-card-hover p-2 min-w-[220px] border border-navy/5">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`block px-4 py-2.5 text-sm rounded-lg transition-all duration-200 ${
                          pathname === service.href
                            ? "bg-cyan/8 text-cyan font-medium"
                            : "text-navy/70 hover:bg-ivory hover:text-navy"
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:7048271868"
                className={`btn-outlined-dark flex items-center gap-2 !py-2.5 !px-4 !text-sm ${
                  scrolled
                    ? "!border-navy/15 !text-navy/70 hover:!text-navy hover:!border-navy/30"
                    : "!border-white/30 !text-white/80 hover:!text-white hover:!border-white/60 hover:!bg-white/5"
                }`}
              >
                <Phone size={14} />
                Call Now
              </a>
              <Link href="/contact" className="btn-primary !py-2.5 !px-5 !text-sm">
                Get A Quote
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden relative z-10 p-2 rounded-lg transition-colors ${
                mobileOpen
                  ? "text-navy"
                  : scrolled
                    ? "text-navy"
                    : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-navy/30 backdrop-blur-sm z-40 lg:hidden mobile-overlay ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[380px] bg-white z-40 lg:hidden overflow-y-auto mobile-drawer ${mobileOpen ? "open" : ""}`}
      >
        <div className="pt-24 pb-8 px-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "bg-cyan/8 text-cyan"
                    : "text-navy/70 hover:text-navy hover:bg-ivory"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Services Accordion */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                isActive("/services")
                  ? "text-cyan"
                  : "text-navy/70"
              }`}
            >
              Services
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div className={`accordion-content ${mobileServicesOpen ? "open" : ""}`}>
              <div>
                <div className="pl-4 pb-2 flex flex-col gap-0.5">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block px-4 py-2.5 text-sm rounded-lg transition-colors ${
                        pathname === service.href
                          ? "bg-cyan/8 text-cyan font-medium"
                          : "text-navy/60 hover:text-navy hover:bg-ivory"
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-navy/8 flex flex-col gap-3">
            <a
              href="tel:7048271868"
              className="btn-outlined-dark justify-center"
            >
              <Phone size={16} />
              Call 704-827-1868
            </a>
            <Link href="/contact" className="btn-primary justify-center">
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
