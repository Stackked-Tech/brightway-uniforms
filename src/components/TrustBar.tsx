"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import AnimatedCounter from "./AnimatedCounter";
import { Shield, Calendar, Clock, FileX } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 2011,
    label: "Established",
    prefix: "",
    suffix: "",
    animate: false,
  },
  {
    icon: Shield,
    value: 0,
    label: "HUB Certified",
    prefix: "",
    suffix: "",
    animate: false,
    display: "HUB",
  },
  {
    icon: Clock,
    value: 24,
    label: "Hour Quote Turnaround",
    prefix: "",
    suffix: "hr",
    animate: true,
  },
  {
    icon: FileX,
    value: 0,
    label: "Long-Term Contracts",
    prefix: "",
    suffix: "",
    animate: true,
  },
];

export default function TrustBar() {
  return (
    <section className="relative bg-navy/[0.03] border-y border-navy/[0.06]">
      <div className="container-wide py-8 md:py-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan/8 flex items-center justify-center flex-shrink-0">
                <stat.icon size={18} className="text-cyan" strokeWidth={1.75} />
              </div>
              <div>
                <div className="text-navy font-bold text-xl leading-none tabular-nums">
                  {stat.display ? (
                    <span>{stat.display}</span>
                  ) : stat.animate ? (
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  ) : (
                    <span>
                      {stat.prefix}
                      {stat.value}
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <div className="text-slate text-xs font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
