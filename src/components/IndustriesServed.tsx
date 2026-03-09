"use client";

import {
  Factory,
  Utensils,
  Stethoscope,
  Car,
  HardHat,
  Landmark,
  Building2,
  Wrench,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface Industry {
  icon: LucideIcon;
  name: string;
}

const industries: Industry[] = [
  { icon: Factory, name: "Manufacturing" },
  { icon: Utensils, name: "Restaurants" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Car, name: "Automotive" },
  { icon: HardHat, name: "Construction" },
  { icon: Landmark, name: "Government" },
  { icon: Building2, name: "Professional" },
  { icon: Wrench, name: "Trades & HVAC" },
];

export default function IndustriesServed() {
  return (
    <section className="py-14 md:py-18 bg-ivory-dark">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="text-center mb-10"
        >
          <span className="section-tag">WHO WE SERVE</span>
          <h2 className="font-display text-2xl md:text-3xl text-navy mt-4">
            Trusted Across Industries
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-3"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={staggerItem}
              className="flex flex-col items-center gap-2.5 py-5 px-3 rounded-xl bg-white shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan/8 flex items-center justify-center group-hover:bg-cyan/12 transition-colors duration-300">
                <industry.icon
                  size={20}
                  className="text-cyan"
                  strokeWidth={1.75}
                />
              </div>
              <span className="text-navy text-xs font-semibold text-center leading-tight">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
