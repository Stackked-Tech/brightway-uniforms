"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import ServiceCard from "./ServiceCard";

interface Service {
  image: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  featured?: boolean;
}

interface ServicesGridProps {
  services: Service[];
  heading?: string;
  subheading?: string;
  tag?: string;
}

export default function ServicesGrid({
  services,
  heading = "Services & Solutions",
  subheading = "Outfit your team with dependable uniforms and facility essentials built for every industry.",
  tag = "WHAT WE DO",
}: ServicesGridProps) {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="text-center mb-16"
        >
          <span className="section-tag">{tag}</span>
          <h2 className="heading-section text-navy mt-5 mb-4">{heading}</h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">{subheading}</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
