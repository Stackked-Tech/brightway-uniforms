import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Flame Resistant Clothing | Bright Way",
  description:
    "Arc-rated and flame resistant workwear: FR shirts, pants, coveralls, outerwear, and hi-vis options. NFPA and ASTM compliant FR programs for the Charlotte area.",
};
import ServiceBlock from "@/components/ServiceBlock";
import CTABanner from "@/components/CTABanner";

const serviceBlocks = [
  {
    title: "FR Work Shirts",
    description:
      "Flame resistant shirts built for long shifts in high-risk environments. Available in a range of styles from button-downs to henleys — all rated to meet NFPA 2112 and ASTM standards without sacrificing comfort.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    title: "FR Work Pants",
    description:
      "Durable, compliant pants designed for welders, electricians, and oil and gas workers. Multiple fits and fabric weights to match your crew's specific hazard exposure and climate conditions.",
    image:
      "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800&q=80",
  },
  {
    title: "FR Coveralls",
    description:
      "Full-body flame protection in a single garment. Our coveralls offer head-to-ankle coverage for flash fire and arc flash environments — available in lightweight and insulated options.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
  },
  {
    title: "FR Outerwear",
    description:
      "Stay protected in every season. Our flame resistant jackets, vests, and insulated layers keep your team warm and compliant when working outdoors or in unheated facilities.",
    image:
      "https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800&q=80",
  },
  {
    title: "Hi-Vis FR Apparel",
    description:
      "Dual-hazard protection for workers who need to be seen and stay safe. Our hi-vis FR garments meet both ANSI visibility and NFPA flame resistance standards in a single compliant solution.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
  },
  {
    title: "FR Managed Rental Program",
    description:
      "Let us handle the inventory, laundering, repairs, and compliance tracking. Our managed FR program ensures your team always has clean, inspected, and up-to-standard garments ready to wear.",
    image:
      "https://www.serviceuniform.com/wp-content/uploads/2022/10/manufacturing-uniforms-colorado-scaled.jpg",
  },
];

export default function FlameResistantPage() {
  return (
    <>
      <Hero
        tag="FLAME RESISTANT CLOTHING"
        heading="Flame Resistant Clothing"
        subtext="Arc-rated and flame resistant workwear that meets the toughest safety standards — without compromising on comfort or fit."
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
      />

      <section className="section-padding bg-ivory">
        <div className="container-wide space-y-20 lg:space-y-28">
          {serviceBlocks.map((block, i) => (
            <ServiceBlock
              key={block.title}
              {...block}
              reversed={i % 2 !== 0}
              index={i}
            />
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
