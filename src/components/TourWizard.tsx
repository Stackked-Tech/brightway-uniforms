"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Sparkles, PartyPopper } from "lucide-react";

const STORAGE_KEY = "brightway-tour-seen";
const TOUR_DELAY = 1000; // TODO: restore to 5000 after testing

interface TourStep {
  target: string;
  title: string;
  description: string;
}

const tourSteps: TourStep[] = [
  {
    target: "hero",
    title: "Welcome!",
    description:
      "This is our homepage! Here you'll find our main value proposition and quick links to get started.",
  },
  {
    target: "services",
    title: "Our Services",
    description:
      "We serve three industries — Industrial, Restaurants, and Professional. Click any card to learn more.",
  },
  {
    target: "how-it-works",
    title: "How It Works",
    description:
      "Getting started is easy! Just three simple steps to a better uniform program.",
  },
  {
    target: "why-bright-way",
    title: "Why Bright Way",
    description:
      "Here's what sets us apart — no contracts, weekly billing, and a real person who picks up the phone.",
  },
  {
    target: "testimonials",
    title: "Client Testimonials",
    description:
      "Don't just take our word for it — see what our clients have to say!",
  },
  {
    target: "cta",
    title: "Get Started!",
    description:
      "Ready to get started? Click here to get your custom quote. Welcome to Bright Way!",
  },
];

const bouncySpring = { type: "spring" as const, stiffness: 300, damping: 15 };
const snappySpring = { type: "spring" as const, stiffness: 400, damping: 25 };

// Overlay with spotlight cutout
function SpotlightOverlay({ targetRect }: { targetRect: DOMRect | null }) {
  if (!targetRect) return null;

  const padding = 16;

  return (
    <div
      className="fixed inset-0 z-[60] pointer-events-none"
      style={{
        boxShadow: `0 0 0 9999px rgba(27, 42, 74, 0.5)`,
        clipPath: `polygon(
          0% 0%, 0% 100%, 100% 100%, 100% 0%, 0% 0%,
          ${targetRect.left - padding}px ${targetRect.top - padding}px,
          ${targetRect.left - padding}px ${targetRect.bottom + padding}px,
          ${targetRect.right + padding}px ${targetRect.bottom + padding}px,
          ${targetRect.right + padding}px ${targetRect.top - padding}px,
          ${targetRect.left - padding}px ${targetRect.top - padding}px
        )`,
      }}
    />
  );
}

// Spotlight glow ring
function SpotlightRing({ targetRect }: { targetRect: DOMRect | null }) {
  if (!targetRect) return null;

  const padding = 16;

  return (
    <div
      className="fixed z-[61] pointer-events-none rounded-2xl border-2 border-cyan transition-all duration-500"
      style={{
        top: targetRect.top - padding,
        left: targetRect.left - padding,
        width: targetRect.width + padding * 2,
        height: targetRect.height + padding * 2,
        boxShadow: "0 0 20px rgba(91, 192, 235, 0.3), 0 0 40px rgba(91, 192, 235, 0.15)",
      }}
    />
  );
}

export default function TourWizard() {
  const pathname = usePathname();
  const [showIntro, setShowIntro] = useState(false);
  const [tourActive, setTourActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

  const isHomepage = pathname === "/";

  // Show intro after delay
  useEffect(() => {
    console.log("[TourWizard] pathname:", pathname, "isHomepage:", isHomepage, "seen:", localStorage.getItem(STORAGE_KEY));
    if (!isHomepage) return;
    if (localStorage.getItem(STORAGE_KEY) === "true") return;

    console.log("[TourWizard] scheduling popup in", TOUR_DELAY, "ms");
    const timer = setTimeout(() => {
      console.log("[TourWizard] showing intro");
      setShowIntro(true);
    }, TOUR_DELAY);
    return () => clearTimeout(timer);
  }, [isHomepage, pathname]);

  // Scroll to and highlight current step target
  const highlightStep = useCallback((stepIndex: number) => {
    const step = tourSteps[stepIndex];
    const el = document.querySelector(`[data-tour="${step.target}"]`);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "center" });

    setTimeout(() => {
      setTargetRect(el.getBoundingClientRect());
    }, 600);
  }, []);

  // Update rect on scroll/resize during tour
  useEffect(() => {
    if (!tourActive) return;

    const updateRect = () => {
      const step = tourSteps[currentStep];
      const el = document.querySelector(`[data-tour="${step.target}"]`);
      if (el) setTargetRect(el.getBoundingClientRect());
    };

    window.addEventListener("scroll", updateRect, { passive: true });
    window.addEventListener("resize", updateRect, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateRect);
      window.removeEventListener("resize", updateRect);
    };
  }, [tourActive, currentStep]);

  const startTour = () => {
    setShowIntro(false);
    setTourActive(true);
    setCurrentStep(0);
    highlightStep(0);
  };

  const dismissTour = () => {
    setShowIntro(false);
    setTourActive(false);
    setTargetRect(null);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      const next = currentStep + 1;
      setCurrentStep(next);
      highlightStep(next);
    } else {
      dismissTour();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      const prev = currentStep - 1;
      setCurrentStep(prev);
      highlightStep(prev);
    }
  };

  if (!isHomepage) return null;

  return (
    <>
      {/* ── Intro Modal — Big, Bold, Frankie as the Star ── */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="tour-intro-overlay"
            className="fixed inset-0 z-[60] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-navy/50 backdrop-blur-md" />

            {/* Content container */}
            <div className="relative flex flex-col items-center mx-4 max-w-lg w-full">
              {/* Decorative burst behind Frankie */}
              <motion.div
                className="absolute -top-8 w-72 h-72 sm:w-80 sm:h-80 rounded-full opacity-30"
                style={{
                  background: "radial-gradient(circle, rgba(91, 192, 235, 0.6) 0%, rgba(212, 168, 83, 0.3) 50%, transparent 70%)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0.3 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ ...bouncySpring, delay: 0.1 }}
              />

              {/* Frankie — BIG and bouncing in */}
              <motion.div
                className="relative w-48 h-48 sm:w-60 sm:h-60 z-10 -mb-4"
                initial={{ scale: 0, rotate: -10, y: 80 }}
                animate={{ scale: 1, rotate: 0, y: 0 }}
                exit={{ scale: 0, y: 40 }}
                transition={bouncySpring}
              >
                <Image
                  src="/frankie.webp"
                  alt="Frankie the Fox — Bright Way mascot"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
                {/* Waving sparkle */}
                <motion.div
                  className="absolute -top-2 -right-2 text-amber"
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, ...bouncySpring }}
                >
                  <PartyPopper size={32} />
                </motion.div>
              </motion.div>

              {/* Card with speech bubble tail pointing up to Frankie */}
              <motion.div
                className="relative bg-white rounded-3xl shadow-2xl px-8 pt-10 pb-8 text-center w-full z-10"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ ...snappySpring, delay: 0.15 }}
              >
                {/* Bubble tail */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 rounded-sm"
                  style={{ boxShadow: "-2px -2px 4px rgba(27, 42, 74, 0.05)" }}
                />

                {/* Close */}
                <button
                  onClick={dismissTour}
                  className="absolute top-4 right-4 p-2 rounded-full text-slate hover:text-navy hover:bg-ivory transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>

                {/* Heading */}
                <motion.h2
                  className="font-display text-3xl sm:text-4xl text-navy mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Hey there! I&apos;m Frankie!
                </motion.h2>

                <motion.p
                  className="text-slate text-lg sm:text-xl leading-relaxed mb-8 max-w-sm mx-auto"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Want me to show you around? I&apos;ll walk you through the
                  highlights in under a minute!
                </motion.p>

                {/* Buttons — big and bold */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 justify-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={startTour}
                    className="btn-primary text-lg px-8 py-3.5"
                  >
                    <Sparkles size={20} />
                    Let&apos;s Go!
                  </button>
                  <button
                    onClick={dismissTour}
                    className="px-6 py-3 rounded-xl border-2 border-navy/15 text-navy font-semibold text-base hover:bg-ivory transition-colors"
                  >
                    Maybe Later
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Active Tour — Frankie prominent with speech bubble above ── */}
      <AnimatePresence>
        {tourActive && (
          <>
            {/* Overlay with cutout */}
            <div
              key="tour-overlay"
              className="fixed inset-0 z-[60]"
              onClick={dismissTour}
              style={{
                background: targetRect
                  ? undefined
                  : "rgba(27, 42, 74, 0.5)",
              }}
            >
              {targetRect && <SpotlightOverlay targetRect={targetRect} />}
            </div>

            {targetRect && <SpotlightRing targetRect={targetRect} />}

            {/* Frankie + Speech Bubble — column layout, Frankie on bottom, bubble above */}
            <motion.div
              key={`tour-step-${currentStep}`}
              className="fixed z-[62] bottom-3 right-3 sm:bottom-5 sm:right-5 flex flex-col items-end"
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.9 }}
              transition={bouncySpring}
            >
              {/* Speech bubble with comic tail */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-5 max-w-xs sm:max-w-sm mb-2 mr-6 sm:mr-10">
                {/* Comic bubble tail — points down-right toward Frankie */}
                <div className="absolute -bottom-2.5 right-8 sm:right-12">
                  <div
                    className="w-5 h-5 bg-white rotate-45 rounded-sm"
                    style={{ boxShadow: "2px 2px 4px rgba(27, 42, 74, 0.08)" }}
                  />
                </div>

                {/* Step counter + close */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-cyan uppercase tracking-wider">
                    {currentStep + 1} / {tourSteps.length}
                  </span>
                  <button
                    onClick={dismissTour}
                    className="p-1 rounded-full text-slate hover:text-navy hover:bg-ivory transition-colors"
                    aria-label="Exit tour"
                  >
                    <X size={14} />
                  </button>
                </div>

                <h3 className="font-display text-xl text-navy mb-1">
                  {tourSteps[currentStep].title}
                </h3>
                <p className="text-slate text-sm leading-relaxed mb-3">
                  {tourSteps[currentStep].description}
                </p>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={dismissTour}
                    className="text-xs text-slate/70 hover:text-navy transition-colors"
                  >
                    Exit Tour
                  </button>
                  <div className="flex gap-2">
                    {currentStep > 0 && (
                      <button
                        onClick={prevStep}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-navy/15 text-navy text-sm font-medium hover:bg-ivory transition-colors"
                      >
                        <ArrowLeft size={14} />
                        Back
                      </button>
                    )}
                    <button
                      onClick={nextStep}
                      className="flex items-center gap-1 px-4 py-1.5 rounded-lg bg-cyan text-white text-sm font-bold hover:bg-cyan-dark transition-colors shadow-md"
                    >
                      {currentStep < tourSteps.length - 1 ? (
                        <>
                          Next
                          <ArrowRight size={14} />
                        </>
                      ) : (
                        "Finish!"
                      )}
                    </button>
                  </div>
                </div>

                {/* Step dots */}
                <div className="flex justify-center gap-1.5 mt-3">
                  {tourSteps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentStep
                          ? "bg-cyan w-4"
                          : i < currentStep
                            ? "bg-cyan/40 w-1.5"
                            : "bg-navy/15 w-1.5"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Frankie — big and prominent */}
              <motion.div
                className="relative w-28 h-28 sm:w-36 sm:h-36 flex-shrink-0"
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
                }}
              >
                <Image
                  src="/frankie.webp"
                  alt="Frankie the Fox"
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
