import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Uniforms & Work Apparel | Bright Way",
  description:
    "Managed uniform rental, work shirts, pants, culinary apparel, scrubs, women's garments, and outerwear. Professional workwear programs for every industry in the Charlotte area.",
};
import ServiceBlock from "@/components/ServiceBlock";
import CTABanner from "@/components/CTABanner";

const serviceBlocks = [
  {
    title: "Uniform Rental",
    description:
      "Skip the upfront costs and the laundry headaches. Our managed rental program delivers clean, professional uniforms to your door on a schedule that works for you — with repairs and replacements built in.",
    image:
      "https://www.serviceuniform.com/wp-content/uploads/2022/10/manufacturing-uniforms-colorado-scaled.jpg",
  },
  {
    title: "Work Shirts",
    description:
      "From polos and button-downs to heavy-duty industrial shirts, we carry options built for comfort and durability across every work environment. Add your logo and put your brand front and center.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
  },
  {
    title: "Work Pants",
    description:
      "Tough enough for the shop floor, comfortable enough for a full shift. Our work pants come in a range of fits, fabrics, and colors — including cargo, flat-front, and double-knee options.",
    image:
      "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800&q=80",
  },
  {
    title: "Culinary Apparel",
    description:
      "Keep your kitchen team sharp with chef coats, aprons, hats, and kitchen wear designed to handle the heat. Professional presentation meets real-world performance.",
    image:
      "https://images.ctfassets.net/9hll0m1ctx1b/4aaLhZoUpPeT9WkRDNxebo/14da3b42a593c82d82768a7c699cdf3d/Chef.jpg?w=800&q=80",
  },
  {
    title: "Food Processing",
    description:
      "Hygiene-first apparel for food manufacturing and processing facilities. Our garments meet strict cleanliness standards while keeping your team comfortable through long production runs.",
    image:
      "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=800&q=80",
  },
  {
    title: "Scrubs",
    description:
      "Comfortable, professional medical scrubs for healthcare workers, veterinary clinics, dental offices, and wellness facilities. Available in a variety of colors and sizes to match your team's needs.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
  },
  {
    title: "Women's Garments",
    description:
      "Workwear that actually fits. Our women's line offers tailored cuts and comfortable fabrics across all categories — because one-size-fits-all never really did.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
  },
  {
    title: "Outerwear",
    description:
      "Layer up for the elements with jackets, vests, and insulated gear built for outdoor work. Branded or unbranded, lightweight or heavy-duty — we've got your crew covered year-round.",
    image:
      "https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800&q=80",
  },
];

export default function UniformsPage() {
  return (
    <>
      <Hero
        tag="UNIFORMS & WORK APPAREL"
        heading="Uniforms & Work Apparel"
        subtext="Professional workwear and managed uniform programs for every industry and every role."
        backgroundImage="https://www.serviceuniform.com/wp-content/uploads/2022/10/manufacturing-uniforms-colorado-scaled.jpg"
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
