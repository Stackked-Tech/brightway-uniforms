"use client";

import Link from "next/link";
import { ArrowRight, Lock, PhoneOff, EyeOff, Snail } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const painPoints = [
  {
    icon: Lock,
    pain: "Locked into a 3-5 year contract?",
    cure: "We do month-to-month. If we don't deliver, you walk.",
  },
  {
    icon: EyeOff,
    pain: "Surprise fees on every invoice?",
    cure: "Transparent weekly billing. The price we quote is the price you pay.",
  },
  {
    icon: PhoneOff,
    pain: "Can't get anyone on the phone?",
    cure: "Call us and a real person answers — including the owner.",
  },
  {
    icon: Snail,
    pain: "Weeks to onboard a new hire?",
    cure: "We move fast. New employees get outfitted in days, not weeks.",
  },
];

export default function WhySwitch() {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Decorative accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/[0.04] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber/[0.03] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="text-center mb-14"
        >
          <span className="section-tag section-tag-white">SOUND FAMILIAR?</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] text-white mt-5 mb-4 leading-tight">
            Tired of Your Current Uniform Provider?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Most businesses don&apos;t switch because they want to — they switch
            because they&apos;re fed up. Here&apos;s what we hear every week.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto mb-12"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.pain}
              variants={staggerItem}
              className="bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-7 hover:bg-white/[0.09] transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-cyan/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <point.icon size={20} className="text-cyan" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-white/90 font-semibold text-[0.9375rem] mb-1.5">
                    {point.pain}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {point.cure}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 150, damping: 20 }}
          className="text-center"
        >
          <Link href="/contact" className="btn-primary text-base">
            Make the Switch
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
