"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How are you able to offer services without long-term contracts?",
    answer:
      "We earn your business week-to-week through responsive service, reliable deliveries, and transparent pricing. If we ever stop delivering on that promise, you're free to walk—no strings attached.",
  },
  {
    question: "How do you keep your weekly billing consistent?",
    answer:
      "Simply put—we're organized pros. Every garment is scanned, every rate is pre-agreed, and every invoice follows the same clear format. No surprises, no nonsense—just transparent, high-quality performance delivered with top-tier professionalism.",
  },
  {
    question: "What other services do you offer?",
    answer:
      "Beyond uniforms, we stock safety gear, bar towels, shop rags, floor mats, and custom-decorated apparel—so you can swap a handful of vendors for one reliable partner. Don't see an item on the list? Odds are we already supply it. Just ask, and we'll tailor a solution that fits your business perfectly.",
  },
  {
    question: "How quickly can you outfit a new hire?",
    answer:
      "Fast—really fast. Our deep local supplier network and relentless client-first mindset mean this moves quickly. Even specialty requests move at Bright Way speed with zero excuses. Your time matters to us.",
  },
  {
    question: "How do I request a quote or on-site assessment?",
    answer:
      "Use our contact form, call us directly, or email info@brightwayuniforms.com. A service specialist will schedule a quick walkthrough, then send a detailed proposal—usually within 24 hours.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-ivory-dark">
      <div className="container-wide max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="text-center mb-14"
        >
          <span className="section-tag">FAQ</span>
          <h2 className="heading-section text-navy mt-5">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-3"
        >
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="bg-white rounded-xl overflow-hidden shadow-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 md:px-8 py-5 md:py-6 text-left group"
              >
                <span className="text-navy font-semibold text-[0.9375rem] md:text-base pr-4 leading-snug">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-slate transition-transform duration-400 ${
                    openIndex === i ? "rotate-180 text-cyan" : ""
                  }`}
                />
              </button>

              <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                <div>
                  <div className="px-6 md:px-8 pb-6 md:pb-7">
                    <div className="w-12 h-px bg-cyan/30 mb-4" />
                    <p className="text-slate text-[0.9375rem] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 150, damping: 20 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-card">
            <div className="w-10 h-10 rounded-lg bg-cyan/8 flex items-center justify-center flex-shrink-0">
              <MessageCircle size={18} className="text-cyan" strokeWidth={1.75} />
            </div>
            <div className="text-left">
              <p className="text-navy text-sm font-semibold">Still have questions?</p>
              <p className="text-slate text-xs">
                <Link href="/contact" className="text-cyan hover:text-cyan-dark transition-colors">
                  Contact us
                </Link>{" "}
                or call{" "}
                <a href="tel:7048271868" className="text-cyan hover:text-cyan-dark transition-colors">
                  704-827-1868
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
