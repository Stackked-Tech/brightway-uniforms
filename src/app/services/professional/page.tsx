import Hero from "@/components/Hero";
import ServiceBlock from "@/components/ServiceBlock";
import CTABanner from "@/components/CTABanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const serviceBlocks = [
  {
    title: "Tailored Uniform Programs",
    description:
      "Project a cohesive, elevated image with professionally fitted, branded uniforms for every role on your team.",
    image:
      "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/676beffbde7c69001d0c6405.jpg",
  },
  {
    title: "Professional-Grade Apparel Laundering",
    description:
      "Our laundering services maintain a wrinkle-free, clean, and polished appearance for your professional wear—delivered weekly.",
    image:
      "https://attirecorp.com/wp-content/uploads/2023/06/corporate-uniforms.jpg",
  },
  {
    title: "Facility Hygiene & Restroom Stocking",
    description:
      "A clean facility speaks volumes. Bright Way provides discreet, consistent stocking of essential products for client-facing and employee areas.",
    image:
      "https://www.theuniformedit.com.au/app/uploads/2024/11/26.jpg",
  },
  {
    title: "Custom Branded Apparel & Promotional Gear",
    description:
      "Extend your brand beyond uniforms. We offer logo-ready apparel and promotional gear for events, client gifts, or employee appreciation.",
    image:
      "https://vssurat.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-16-at-6.08.05-PM-1.jpeg",
  },
  {
    title: "Professional Matting Solutions",
    description:
      "Keep your office clean and inviting with professional matting solutions that reinforce your brand and reduce wear on your floors.",
    image:
      "https://cdn.prod.website-files.com/628cf5646895264ad46c66be/633c51a8d6358162a5add761_Vienna-Retail-001.jpg",
  },
  {
    title: "Restroom & Common Area Stocking",
    description:
      "Impress visitors and support employees with well-maintained, fully stocked spaces.",
    image:
      "https://business.landsend.com/outfitters/assets/media/employees-holding-coffee-walking-downstairs-2024-12-31-600w.webp",
  },
];

export default function ProfessionalPage() {
  return (
    <>
      <Hero
        tag="PROFESSIONAL"
        heading="Build Your Professional Image Solution"
        subtext="Your business's image starts the moment someone walks through your door."
        backgroundImage="https://images.squarespace-cdn.com/content/5b0ba6af36099bd6c699181b/1752570110820-ZYZFXRFHVXFMQR090K2W/corporate-uniforms-guide-Professional-business-attire-team-banner.jpg"
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

      {/* Closing statement */}
      <section className="section-padding-sm bg-ivory-dark">
        <div className="container-wide">
          <AnimateOnScroll variant="fadeUp">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-navy text-xl md:text-2xl font-display leading-relaxed">
                Bright Way helps you make that moment count.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
