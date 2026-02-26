import Hero from "@/components/Hero";
import ServiceBlock from "@/components/ServiceBlock";
import CTABanner from "@/components/CTABanner";

const serviceBlocks = [
  {
    title: "Uniform Rental & Laundering",
    description:
      "Outfit your crew in durable uniforms that stand up to heat, grease, abrasion, and constant movement—with reliable cleaning services to keep them fresh and compliant.",
    image:
      "https://www.generallinen.com/wp-content/uploads/2021/10/Manufacturing-Industrial-Uniforms-Cover-Image.jpg",
  },
  {
    title: "Industrial-Grade Shop Rags",
    description:
      "From automotive shops to fabrication floors, our absorbent, lint-free shop rags are ready to handle grease, oil, chemicals, and heavy-duty cleanup.",
    image:
      "https://affordablewipers.com/cdn/shop/files/HAS05227_800x.jpg?v=1700808956",
  },
  {
    title: "High-Visibility Safety Apparel",
    description:
      "Help your team stay seen—and stay safe. Our ANSI-compliant hi-vis gear keeps your workers visible in low-light conditions, busy roadways, and active job sites.",
    image:
      "https://www.bluechipuniform.com/wp-content/uploads/2021/04/history-of-uniforms.jpg",
  },
  {
    title: "Protective Gear & Workplace Essentials",
    description:
      "Protect your workforce from head to toe with essential safety and comfort solutions—from gloves and hard hats to first aid supplies and ear protection.",
    image:
      "https://i0.wp.com/allseasonsuniforms.wpcomstaging.com/wp-content/uploads/2023/11/The-Evolution-of-Industrial-Uniforms.jpg?resize=780%2C462&ssl=1",
  },
  {
    title: "Floor Mats & Matting Solutions",
    description:
      "Mats do more than reduce dirt—they reduce accidents, improve traction, and enhance worker comfort. We offer anti-fatigue, scraper, and logo mats for any environment.",
    image:
      "https://ultimatemats.com/wp-content/uploads/2022/01/MicroLuxx-Commercial-Floor-Mats-in-place-midnight-grey-website.jpg",
  },
  {
    title: "Facility Hygiene & Restroom Stocking",
    description:
      "Sanitation is essential in every part of your facility. We provide consistent restroom, breakroom, and common area stocking so your team stays healthy and productive.",
    image:
      "https://cdn.prod.website-files.com/628cf5646895264ad46c66be/633c51a8d6358162a5add761_Vienna-Retail-001.jpg",
  },
];

export default function IndustrialPage() {
  return (
    <>
      <Hero
        tag="INDUSTRIAL"
        heading="Build Your Industrial Solution"
        subtext="From factory floors to job sites, we keep your crew equipped, safe, and looking sharp."
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
