"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  index?: number;
  featured?: boolean;
}

export default function ServiceCard({
  image,
  title,
  description,
  linkText,
  linkHref,
  featured = false,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    >
      <Link
        href={linkHref}
        className={`block h-full bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-400 group ${
          featured ? "ring-2 ring-cyan/20" : ""
        }`}
      >
        {/* Image */}
        <div className="relative h-56 md:h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Featured badge */}
          {featured && (
            <div className="absolute top-4 right-4 bg-cyan text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              Most Popular
            </div>
          )}
        </div>

        {/* Accent top border */}
        <div className="h-0.5 bg-gradient-to-r from-cyan via-cyan-light to-transparent" />

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="heading-card text-navy mb-3">{title}</h3>
          <p className="text-slate text-[0.9375rem] leading-relaxed mb-5">
            {description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-cyan font-semibold text-sm group-hover:gap-3 transition-all duration-300">
            {linkText}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
