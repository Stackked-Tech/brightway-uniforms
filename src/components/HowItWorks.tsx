"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { MessageSquare, ClipboardList, Truck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Quick consultation to understand your team size, industry requirements, and budget. No pressure, no obligations.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "We Design Your Program",
    description:
      "Custom uniform program tailored to your industry — from garment selection to delivery schedule. Quote within 24 hours.",
  },
  {
    icon: Truck,
    number: "03",
    title: "Sit Back, We Handle It",
    description:
      "Weekly pickup, laundering, repairs, and delivery. We manage your uniforms so you can focus on your business.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-ivory relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-navy) 1px, transparent 0)`,
        backgroundSize: '48px 48px',
      }} />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="text-center mb-16"
        >
          <span className="section-tag">HOW IT WORKS</span>
          <h2 className="heading-section text-navy mt-5 mb-4">
            Three Steps to a Better Uniform Program
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            No complicated onboarding. No weeks of waiting. Here&apos;s how simple it is.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="relative group"
            >
              {/* Connector line between steps (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] right-[-40%] h-px bg-gradient-to-r from-cyan/20 to-transparent z-0" />
              )}

              <div className="relative z-10 bg-white rounded-2xl p-8 md:p-9 h-full shadow-card hover:shadow-card-hover transition-all duration-400 group-hover:-translate-y-1">
                {/* Step number + icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan/10 to-cyan/5 flex items-center justify-center flex-shrink-0 group-hover:from-cyan/15 group-hover:to-cyan/8 transition-all duration-300">
                    <step.icon size={26} className="text-cyan" strokeWidth={1.75} />
                  </div>
                  <span className="text-cyan/30 font-display text-4xl leading-none">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-xl text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-slate text-[0.9375rem] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
