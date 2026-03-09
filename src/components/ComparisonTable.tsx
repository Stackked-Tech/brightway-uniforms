"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

interface ComparisonRow {
  feature: string;
  brightway: string;
  bigGuys: string;
  brightWayWins: boolean;
}

const rows: ComparisonRow[] = [
  {
    feature: "Contract Length",
    brightway: "Month-to-month",
    bigGuys: "3-5 year lock-in",
    brightWayWins: true,
  },
  {
    feature: "Hidden Fees",
    brightway: "None — ever",
    bigGuys: "Common (fuel, environmental, admin)",
    brightWayWins: true,
  },
  {
    feature: "Response Time",
    brightway: "Same day",
    bigGuys: "Days to weeks",
    brightWayWins: true,
  },
  {
    feature: "Talk to the Owner",
    brightway: "Anytime",
    bigGuys: "Not a chance",
    brightWayWins: true,
  },
  {
    feature: "New Hire Turnaround",
    brightway: "Days",
    bigGuys: "Weeks",
    brightWayWins: true,
  },
  {
    feature: "Billing",
    brightway: "Simple weekly invoices",
    bigGuys: "Complex monthly billing",
    brightWayWins: true,
  },
  {
    feature: "Account Manager",
    brightway: "Dedicated, local rep",
    bigGuys: "Rotating reps, call centers",
    brightWayWins: true,
  },
];

export default function ComparisonTable() {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan/[0.03] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="text-center mb-12"
        >
          <span className="section-tag section-tag-white">THE DIFFERENCE</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-5 mb-4">
            Bright Way vs. The Big Guys
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            See how a local, family-owned partner stacks up against the national
            uniform corporations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1, type: "spring", stiffness: 150, damping: 20 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-white/[0.08]">
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                Feature
              </div>
              <div className="text-cyan text-xs font-bold uppercase tracking-wider text-center">
                Bright Way
              </div>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider text-center">
                National Providers
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 gap-4 px-6 py-4 items-center ${
                  i < rows.length - 1 ? "border-b border-white/[0.05]" : ""
                } hover:bg-white/[0.03] transition-colors`}
              >
                <div className="text-white/70 text-sm font-medium">
                  {row.feature}
                </div>
                <div className="text-center flex items-center justify-center gap-2">
                  <Check size={16} className="text-cyan flex-shrink-0" />
                  <span className="text-white/90 text-sm">{row.brightway}</span>
                </div>
                <div className="text-center flex items-center justify-center gap-2">
                  <X size={16} className="text-white/25 flex-shrink-0" />
                  <span className="text-white/60 text-sm">{row.bigGuys}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
