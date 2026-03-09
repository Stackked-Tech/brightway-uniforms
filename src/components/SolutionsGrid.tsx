"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface Solution {
  image: string;
  title: string;
  href: string;
}

const solutions: Solution[] = [
  {
    image:
      "https://www.serviceuniform.com/wp-content/uploads/2022/10/manufacturing-uniforms-colorado-scaled.jpg",
    title: "Uniforms & Work Apparel",
    href: "/services/uniforms",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    title: "Facility Services",
    href: "/services/facility",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    title: "Flame Resistant Clothing",
    href: "/services/flame-resistant",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    title: "Restroom & Hygiene Solutions",
    href: "/services/restroom-hygiene",
  },
];

function SolutionCard({ image, title, href }: Solution) {
  return (
    <motion.div variants={staggerItem}>
      <Link
        href={href}
        className="group relative block aspect-[4/3] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-400"
      >
        {/* Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent pointer-events-none" />

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 pointer-events-none">
          <h3 className="font-display text-xl sm:text-2xl text-white leading-tight drop-shadow-md">
            {title}
          </h3>
        </div>

        {/* Cyan accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan group-hover:h-1.5 transition-all duration-300 pointer-events-none" />
      </Link>
    </motion.div>
  );
}

export default function SolutionsGrid() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="text-center mb-12"
        >
          <span className="section-tag">OUR SOLUTIONS</span>
          <h2 className="heading-section text-navy mt-5 mb-4">
            What We Provide
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Comprehensive uniform and facility solutions for businesses of every
            size and industry.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto"
        >
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} {...solution} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
