"use client";

import Image from "next/image";
import { Sparkles, Heart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeLeft, fadeRight } from "@/lib/animations";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ValueProps from "@/components/ValueProps";
import CTABanner from "@/components/CTABanner";

const values = [
  {
    icon: Sparkles,
    title: "Service Excellence",
    description:
      "We don't just meet expectations — we exceed them. Every interaction is a chance to prove our commitment to your success.",
  },
  {
    icon: Heart,
    title: "Be the Difference",
    description:
      "We give back through charitable initiatives, investing in the communities we serve and the people who make them great.",
  },
  {
    icon: TrendingUp,
    title: "Innovation & Growth",
    description:
      "From a sign shop to a full-service uniform partner, we never stop evolving to better serve our clients.",
  },
];

const industries = [
  {
    image:
      "https://www.serviceuniform.com/wp-content/uploads/2022/10/manufacturing-uniforms-colorado-scaled.jpg",
    title: "Industrial",
    description:
      "Durable uniforms for manufacturing, automotive, HVAC, and other demanding industries. Built for safety and performance.",
    linkText: "Explore Industrial →",
    linkHref: "/services/industrial",
  },
  {
    image:
      "https://images.ctfassets.net/9hll0m1ctx1b/4aaLhZoUpPeT9WkRDNxebo/14da3b42a593c82d82768a7c699cdf3d/Chef.jpg?w=1000&h=666&fl=progressive&q=80&fm=jpg",
    title: "Restaurants",
    description:
      "Crisp chef coats, aprons, server attire, and quality linens to enhance your establishment's image.",
    linkText: "Explore Restaurants →",
    linkHref: "/services/restaurants",
  },
  {
    image:
      "https://images.squarespace-cdn.com/content/5b0ba6af36099bd6c699181b/1752570110820-ZYZFXRFHVXFMQR090K2W/corporate-uniforms-guide-Professional-business-attire-team-banner.jpg",
    title: "Professional",
    description:
      "Smart and comfortable uniforms for front office, municipalities, healthcare (non-clinical), and other professional environments.",
    linkText: "Explore Professional →",
    linkHref: "/services/professional",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        tag="ABOUT BRIGHT WAY"
        heading="Gear Up. Stand Apart."
        subtext="Safety gear, rental uniforms, bar towels, and custom apparel — tailored to your team, delivered like clockwork — so you stay safe, look sharp, and keep moving forward."
        backgroundImage="https://theleegroup.com/wp-content/uploads/2024/04/AdobeStock_639682764-min-1568x1045.jpeg"
      />

      {/* Our Story */}
      <section className="section-padding bg-ivory">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                <Image
                  src="https://familyenterpriseusa.com/wp-content/uploads/2018/09/iStock_000057428986_Double.jpg"
                  alt="Bright Way team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan/8 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-amber/10 rounded-xl -z-10" />
            </motion.div>

            {/* Text */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="section-tag">OUR JOURNEY</span>
              <h2 className="heading-section text-navy mt-5 mb-8">Our Story</h2>

              <div className="space-y-5 text-slate text-[0.9375rem] md:text-base leading-relaxed">
                <p>
                  In 2011, Bright Way began its journey as Metro Print, when the Kemp
                  family acquired a humble sign shop. Listening closely to our
                  customers&apos; evolving needs, we expanded into decorated apparel by
                  2015. Our dedication to quality and service fueled consistent growth,
                  particularly among our valued clients in the industrial, hospitality,
                  and professional sectors.
                </p>
                <p>
                  In 2024, we identified an exciting new opportunity — offering uniform
                  rental, leasing, and direct sales. This strategic move quickly
                  transformed into our largest business segment, signaling an evolution
                  worthy of a new identity: Bright Way. The new name captures our broader
                  capabilities, innovative spirit, and commitment to guiding businesses
                  toward a brighter future.
                </p>
                <p>
                  Today, Bright Way proudly remains family-owned and operated, driven by
                  deep industry expertise, state-of-the-art in-house decoration
                  capabilities, and an unwavering dedication to exceptional customer
                  service.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-ivory-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan/[0.02] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="section-tag">OUR PURPOSE</span>
            <h2 className="heading-section text-navy mt-5 mb-6">Our Mission</h2>
            <p className="text-slate text-lg leading-relaxed">
              At Bright Way, we are committed to going beyond the transaction. Our goal
              is to forge enduring partnerships by delivering exceptional service,
              innovative solutions, and top-quality products. Our guiding principle is
              simple yet powerful: while products and clothing might be available
              anywhere, it&apos;s our unmatched service that truly sets us apart.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="section-padding bg-ivory">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="text-center mb-16"
          >
            <span className="section-tag">OUR VALUES</span>
            <h2 className="heading-section text-navy mt-5">What Drives Us</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="bg-white rounded-2xl p-8 md:p-10 h-full shadow-card hover:shadow-card-hover transition-shadow duration-400 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan/10 to-cyan/5 flex items-center justify-center mx-auto mb-6">
                  <value.icon size={26} className="text-cyan" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-slate text-[0.9375rem] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <ServicesGrid
        services={industries}
        tag="INDUSTRIES"
        heading="Industries We Serve"
        subheading="From factory floors to front offices, we outfit teams across every sector."
      />

      {/* Value Props */}
      <ValueProps />

      {/* Bottom CTA */}
      <CTABanner />
    </>
  );
}
