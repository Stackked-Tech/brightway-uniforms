import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Facility Services | Bright Way",
  description:
    "Floor mats, janitorial supplies, kitchen supplies, restroom stocking, and industrial cleaning products. Complete facility service programs for Charlotte-area businesses.",
};
import ServiceBlock from "@/components/ServiceBlock";
import CTABanner from "@/components/CTABanner";

const serviceBlocks = [
  {
    title: "Floor Mats & Services",
    description:
      "First impressions start at the door. Our mat programs include entrance mats, anti-fatigue mats, scraper mats, and logo mats — all serviced on a regular schedule to keep your facility clean, safe, and on-brand.",
    image:
      "https://ultimatemats.com/wp-content/uploads/2022/01/MicroLuxx-Commercial-Floor-Mats-in-place-midnight-grey-website.jpg",
  },
  {
    title: "Restroom Supplies & Services",
    description:
      "Nobody notices a well-stocked restroom — but everyone notices an empty one. We handle restroom supplies, cleaning chemicals, hand sanitizer, restroom mats, and routine restocking so you never have to think about it.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  },
  {
    title: "Janitorial Supplies",
    description:
      "Keep every corner of your facility spotless. We supply cleaning chemicals, mop services, microfiber cleaning systems, towel services, trash can liners, and restroom essentials — delivered right to your door.",
    image:
      "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80",
  },
  {
    title: "Kitchen Supplies",
    description:
      "Running a commercial kitchen means staying stocked on the essentials. We provide towel services, aprons, mop services, cleaning chemicals, drain line maintainers, trash can liners, and mat services to keep your kitchen running smoothly.",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
  },
  {
    title: "Industrial Supplies",
    description:
      "Heavy-duty facilities need heavy-duty support. Our industrial supply program covers mat services, towel services, automotive parts cleaners, industrial hand soap, and floor cleaners for shops, plants, and warehouses.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebb6571?w=800&q=80",
  },
];

export default function FacilityServicesPage() {
  return (
    <>
      <Hero
        tag="FACILITY SERVICES"
        heading="Facility Services"
        subtext="Complete facility supply and maintenance programs that keep your workplace clean, stocked, and running without interruption."
        backgroundImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
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
