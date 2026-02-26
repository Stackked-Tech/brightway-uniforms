"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CTABannerProps {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABanner({
  heading = "Your Team Deserves Better Uniforms",
  text = "Whether you need reliable uniforms, facility services, or streamlined delivery — Bright Way creates a flexible program built around your business. No contracts, no hassle.",
  buttonText = "Get Your Custom Quote",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />

      <div className="relative z-10 container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="heading-section text-white mb-5">{heading}</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">{text}</p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-block"
          >
            <Link
              href={buttonHref}
              className="btn-primary inline-flex items-center gap-2 !px-8 !py-4 text-base"
            >
              {buttonText}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
