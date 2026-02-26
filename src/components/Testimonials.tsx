"use client";

import { Star } from "lucide-react";
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

export default function Testimonials() {
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
          className="text-center mb-16"
        >
          <span className="section-tag">TESTIMONIALS</span>
          <h2 className="heading-section text-navy mt-5">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={staggerItem}
              whileHover={{ y: -3, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="bg-white rounded-2xl p-8 md:p-10 h-full shadow-card hover:shadow-card-hover transition-shadow duration-400 relative overflow-hidden"
            >
              {/* Decorative quote mark */}
              <span className="quote-mark">&ldquo;</span>

              {/* Accent border top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan via-cyan-light to-amber/40" />

              <div className="relative z-10">
                <StarRating rating={testimonial.rating} />

                <p className="text-navy/80 text-[0.9375rem] md:text-base leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  {/* Avatar with initials */}
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan/15 to-cyan/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan font-semibold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-slate text-xs">
                      {testimonial.company} &middot; {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
