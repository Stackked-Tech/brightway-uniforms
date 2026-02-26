"use client";

import { motion } from "framer-motion";

const clients = [
  "Röchling Group",
  "Mecklenburg County",
  "Charlotte Manufacturing",
  "Carolina Industrial",
  "Queen City Hotels",
  "Metro Hospitality",
  "Piedmont Services",
  "Crown Automotive",
];

export default function ClientLogos() {
  return (
    <section className="py-10 md:py-12 bg-ivory overflow-hidden border-b border-navy/[0.04]">
      <div className="container-wide">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-slate/60 text-xs font-semibold uppercase tracking-[0.15em] mb-8"
        >
          Trusted by businesses across the Carolinas
        </motion.p>
      </div>

      {/* Infinite scrolling logo row */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-ivory to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ivory to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-x">
          {/* Double the items for seamless loop */}
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex-shrink-0 mx-8 md:mx-12"
            >
              <span className="text-navy/20 font-display text-lg md:text-xl whitespace-nowrap select-none">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
