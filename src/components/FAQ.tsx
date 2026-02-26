"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

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
        <AnimateOnScroll variant="fadeUp">
          <div className="text-center mb-14">
            <span className="section-tag">FAQ</span>
            <h2 className="heading-section text-navy mt-5">
              Frequently Asked Questions
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <AnimateOnScroll key={i} variant="fadeUp" delay={i * 0.06}>
              <div className="bg-white rounded-xl overflow-hidden shadow-card">
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
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
