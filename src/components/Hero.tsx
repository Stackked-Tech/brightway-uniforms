"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface HeroProps {
  tag: string;
  heading: string;
  subtext: string;
  backgroundImage: string;
  showScrollIndicator?: boolean;
  children?: React.ReactNode;
}

export default function Hero({
  tag,
  heading,
  subtext,
  backgroundImage,
  showScrollIndicator = false,
  children,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/20" />

      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 right-[15%] w-64 h-64 bg-cyan/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-[25%] w-48 h-48 bg-amber/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container-wide w-full pt-32 pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={staggerItem}>
            <span className="section-tag section-tag-white">{tag}</span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="heading-display text-white mt-6 mb-6"
          >
            {heading}
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            {subtext}
          </motion.p>

          {children && (
            <motion.div variants={staggerItem} className="mt-10">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="scroll-indicator flex flex-col items-center gap-1">
            <span className="text-white/40 text-xs font-medium tracking-wider uppercase">
              Scroll
            </span>
            <ChevronDown size={20} className="text-white/40" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
