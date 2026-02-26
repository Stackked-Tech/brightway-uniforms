import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

interface ServiceBlockProps {
  title: string;
  description: string;
  image: string;
  reversed?: boolean;
  index?: number;
}

export default function ServiceBlock({
  title,
  description,
  image,
  reversed = false,
  index = 0,
}: ServiceBlockProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
      reversed ? "lg:direction-rtl" : ""
    }`}>
      {/* Image */}
      <AnimateOnScroll
        variant={reversed ? "fadeRight" : "fadeLeft"}
        delay={index * 0.05}
        className={reversed ? "lg:order-2" : ""}
      >
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle overlay on bottom for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent" />
        </div>
      </AnimateOnScroll>

      {/* Text */}
      <AnimateOnScroll
        variant={reversed ? "fadeLeft" : "fadeRight"}
        delay={index * 0.05 + 0.1}
        className={reversed ? "lg:order-1" : ""}
      >
        <div className={reversed ? "lg:text-right" : ""}>
          <h3 className="font-display text-2xl md:text-3xl text-navy mb-4 leading-snug">
            {title}
          </h3>
          <p className="text-slate text-[0.9375rem] md:text-base leading-relaxed max-w-lg">
            {description}
          </p>
          {/* Accent bar */}
          <div className={`w-16 h-1 bg-cyan/40 rounded-full mt-6 ${reversed ? "lg:ml-auto" : ""}`} />
        </div>
      </AnimateOnScroll>
    </div>
  );
}
