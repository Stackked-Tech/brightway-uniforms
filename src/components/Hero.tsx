import { ChevronDown } from "lucide-react";

interface HeroProps {
  tag: string;
  heading: string;
  subtext: string;
  backgroundImage: string;
  showScrollIndicator?: boolean;
  children?: React.ReactNode;
}

export default function Hero({
  tag,
  heading,
  subtext,
  backgroundImage,
  showScrollIndicator = false,
  children,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/70 to-navy/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/20" />

      {/* Content */}
      <div className="relative z-10 container-wide w-full pt-32 pb-24">
        <div className="max-w-3xl hero-stagger">
          <div>
            <span className="section-tag section-tag-white">{tag}</span>
          </div>

          <h1 className="heading-display text-white mt-6 mb-6">
            {heading}
          </h1>

          <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl">
            {subtext}
          </p>

          {children && (
            <div className="mt-10">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator-wrapper">
          <div className="scroll-indicator flex flex-col items-center gap-1">
            <span className="text-white/40 text-xs font-medium tracking-wider uppercase">Scroll</span>
            <ChevronDown size={20} className="text-white/40" />
          </div>
        </div>
      )}
    </section>
  );
}
