import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

interface CTABannerProps {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABanner({
  heading = "Ready to Get Started?",
  text = "Whether you need reliable uniforms, facility services, or streamlined delivery, Bright Way is here to create a flexible program built around your business.",
  buttonText = "Get a Free Quote",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      {/* Gradient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 container-wide section-padding">
        <AnimateOnScroll variant="fadeUp">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-section text-white mb-5">{heading}</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              {text}
            </p>
            <Link
              href={buttonHref}
              className="btn-primary inline-flex items-center gap-2 !px-8 !py-4 text-base"
            >
              {buttonText}
              <ArrowRight size={18} />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
