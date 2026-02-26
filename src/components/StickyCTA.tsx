"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 1 viewport height)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-navy/8 px-4 py-3 safe-area-bottom">
            <div className="flex gap-3">
              <a
                href="tel:7048271868"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border-1.5 border-navy/15 text-navy font-semibold text-sm transition-all duration-200 active:scale-[0.97]"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href="/contact"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-cyan text-white font-semibold text-sm shadow-button transition-all duration-200 active:scale-[0.97] hover:bg-cyan-dark"
              >
                Get A Quote
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
