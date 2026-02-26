"use client";

import { FileX, CalendarCheck, Zap, Award, Clock, UserCheck, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
}

const valueProps: ValueProp[] = [
  {
    icon: FileX,
    title: "No Long-Term Contracts",
    description:
      "Month-to-month flexibility. If we don't deliver, you walk — no strings attached.",
    accent: "from-cyan/10 to-cyan/5",
  },
  {
    icon: CalendarCheck,
    title: "Weekly Billing",
    description:
      "Predictable costs with clear, consistent weekly invoices. No surprises, ever.",
    accent: "from-amber/10 to-amber/5",
  },
  {
    icon: Zap,
    title: "Quick Installs",
    description:
      "New hire? We'll have them outfitted fast — even specialty requests move at Bright Way speed.",
    accent: "from-cyan/10 to-cyan/5",
  },
  {
    icon: Award,
    title: "Female-Owned HUB Certified",
    description:
      "Proudly certified female-owned, bringing dedication and a fresh perspective to every partnership.",
    accent: "from-amber/10 to-amber/5",
  },
  {
    icon: Clock,
    title: "Timely Responses",
    description:
      "Call us and a real person answers. Questions handled same-day, guaranteed.",
    accent: "from-cyan/10 to-cyan/5",
  },
  {
    icon: UserCheck,
    title: "Direct Owner Access",
    description:
      "Need to talk to the boss? You can. Personalized attention and a direct line to decision-makers.",
    accent: "from-amber/10 to-amber/5",
  },
];

export default function ValueProps() {
  return (
    <section className="section-padding bg-ivory-dark relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan/[0.02] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-amber/[0.03] rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="text-center mb-16"
        >
          <span className="section-tag">WHY BRIGHT WAY</span>
          <h2 className="heading-section text-navy mt-5 mb-4">
            Built Different. On Purpose.
          </h2>
          <p className="text-slate text-lg max-w-xl mx-auto">
            Six reasons Charlotte businesses choose us over the big guys.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {valueProps.map((prop) => (
            <motion.div
              key={prop.title}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="bg-white rounded-2xl p-7 md:p-8 h-full shadow-card hover:shadow-card-hover transition-shadow duration-400 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${prop.accent} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                <prop.icon size={22} className="text-cyan" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-lg text-navy mb-3">{prop.title}</h3>
              <p className="text-slate text-[0.9375rem] leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
