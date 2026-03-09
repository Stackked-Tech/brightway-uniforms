"use client";

import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface Testimonial {
  quote: string;
  name: string;
  company: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The sales team is very attentive to our needs. Uniforms are always delivered on time and the quality is excellent. We have used different uniform companies in the past but none of them come close to the service we receive through Bright Way. The customer service is absolutely amazing.",
    name: "Melanie Colvin",
    company: "Röchling Group",
    location: "Duncan, SC",
    rating: 5,
  },
  {
    quote:
      "Jim is great to work with. He really goes the extra mile for us, making the experience effortless. Morgan Kemp is also super to work with, keeping us in line with orders and billing. Always willing to go the extra effort. Thank you for your service.",
    name: "Patrick Granson",
    company: "Mecklenburg County",
    location: "Mecklenburg County, NC",
    rating: 5,
  },
  {
    quote:
      "We switched from a national provider and the difference is night and day. Bright Way actually answers the phone, knows our account, and treats us like we matter. Our team loves the new uniforms.",
    name: "David Hernandez",
    company: "Carolina Mechanical",
    location: "Charlotte, NC",
    rating: 5,
  },
  {
    quote:
      "Bright Way made our transition seamless. They had our entire crew outfitted within a week and the weekly service has been flawless ever since. No hidden fees, no surprises — just great service.",
    name: "Ashley Reynolds",
    company: "Queen City Auto Group",
    location: "Charlotte, NC",
    rating: 5,
  },
  {
    quote:
      "As a restaurant owner, I need reliability. Bright Way delivers clean chef coats, aprons, and towels like clockwork every week. They've never missed a delivery in over a year of service.",
    name: "Marcus Chen",
    company: "Ember Kitchen & Bar",
    location: "Gastonia, NC",
    rating: 5,
  },
  {
    quote:
      "The fact that I can call and talk to the owner directly is something I've never experienced with a uniform company. That personal touch makes all the difference when issues come up.",
    name: "Jennifer Tate",
    company: "Piedmont Manufacturing",
    location: "Mount Holly, NC",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "text-amber fill-amber" : "text-navy/10"}
          strokeWidth={0}
          fill={i < rating ? "currentColor" : "none"}
          stroke={i < rating ? "none" : "currentColor"}
        />
      ))}
    </div>
  );
}

function GoogleRatingBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className="flex justify-center mb-14"
    >
      <a
        href="https://www.google.com/search?q=Bright+Way+Uniforms+Mount+Holly+NC"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-card hover:shadow-card-hover transition-shadow duration-300 group"
      >
        {/* Google G logo */}
        <svg width="20" height="20" viewBox="0 0 24 24" className="flex-shrink-0">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <span className="text-navy font-bold text-lg">5.0</span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} className="text-amber fill-amber" strokeWidth={0} />
            ))}
          </div>
        </div>

        <span className="text-slate text-sm group-hover:text-navy transition-colors">
          Read our Google Reviews
        </span>
      </a>
    </motion.div>
  );
}

function TestimonialCard({ testimonial, featured = false }: { testimonial: Testimonial; featured?: boolean }) {
  return (
    <div
      className={`bg-white rounded-2xl h-full shadow-card hover:shadow-card-hover transition-shadow duration-400 relative overflow-hidden ${
        featured ? "p-8 md:p-10" : "p-7 md:p-8"
      }`}
    >
      {/* Decorative quote mark */}
      <span className="quote-mark">&ldquo;</span>

      {/* Accent border top */}
      <div className={`absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan via-cyan-light to-amber/40 ${featured ? "h-1.5" : "h-1"}`} />

      <div className="relative z-10">
        <StarRating rating={testimonial.rating} />

        <p className={`text-navy/80 leading-relaxed mb-6 italic ${featured ? "text-base" : "text-sm"}`}>
          &ldquo;{testimonial.quote}&rdquo;
        </p>

        <div className="flex items-center gap-3">
          {/* Avatar with initials */}
          <div className={`rounded-full bg-gradient-to-br from-cyan/15 to-cyan/5 flex items-center justify-center flex-shrink-0 ${
            featured ? "w-12 h-12" : "w-10 h-10"
          }`}>
            <span className={`text-cyan font-semibold ${featured ? "text-sm" : "text-xs"}`}>
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div>
            <p className={`text-navy font-semibold ${featured ? "text-base" : "text-sm"}`}>
              {testimonial.name}
            </p>
            <p className="text-slate text-xs">
              {testimonial.company} &middot; {testimonial.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(":scope > div")?.offsetWidth ?? 320;
    el.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-ivory relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-amber/[0.03] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="text-center mb-10"
        >
          <span className="section-tag">TESTIMONIALS</span>
          <h2 className="heading-section text-navy mt-5 mb-4">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Google Rating Badge */}
        <GoogleRatingBadge />

        {/* Desktop: grid layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              variants={staggerItem}
              whileHover={{ y: -3, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <TestimonialCard testimonial={testimonial} featured={i === 0} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: horizontal snap-scroll carousel */}
        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-4"
          >
            {testimonials.map((testimonial, i) => (
              <div
                key={testimonial.name}
                className="flex-shrink-0 w-[85vw] max-w-[340px] snap-start"
              >
                <TestimonialCard testimonial={testimonial} featured={i === 0} />
              </div>
            ))}
          </div>

          {/* Scroll buttons */}
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-9 h-9 rounded-full bg-white shadow-card flex items-center justify-center text-navy/70 disabled:opacity-30 transition-opacity"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-9 h-9 rounded-full bg-white shadow-card flex items-center justify-center text-navy/70 disabled:opacity-30 transition-opacity"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
