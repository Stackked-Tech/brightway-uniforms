import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  index?: number;
}

export default function ServiceCard({
  image,
  title,
  description,
  linkText,
  linkHref,
  index = 0,
}: ServiceCardProps) {
  return (
    <AnimateOnScroll variant="fadeUp" delay={index * 0.12}>
      <Link href={linkHref} className="card group block h-full">
        {/* Image */}
        <div className="relative h-56 md:h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="heading-card text-navy mb-3">{title}</h3>
          <p className="text-slate text-[0.9375rem] leading-relaxed mb-5">
            {description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-cyan font-semibold text-sm group-hover:gap-2.5 transition-all duration-300">
            {linkText}
          </span>
        </div>
      </Link>
    </AnimateOnScroll>
  );
}
