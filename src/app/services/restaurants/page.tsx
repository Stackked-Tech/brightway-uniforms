import Hero from "@/components/Hero";
import ServiceBlock from "@/components/ServiceBlock";
import CTABanner from "@/components/CTABanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const serviceBlocks = [
  {
    title: "Uniform Rental & Laundering",
    description:
      "From chefs to servers, we provide clean, polished uniforms that match your brand and keep staff comfortable throughout long shifts.",
    image:
      "https://www.dusttexhonolulu.com/wp-content/uploads/2018/06/restaurant-uniform-rental.jpg",
  },
  {
    title: "Bar Towels & Kitchen Linens",
    description:
      "Our highly absorbent towels and linens are made to withstand spills, heat, and daily wear in the busiest kitchen and bar environments.",
    image:
      "https://www.generallinen.com/wp-content/uploads/2021/10/Kitchen-and-restaurant-uniforms-from-General-Linen-1024x1024.jpg",
  },
  {
    title: "Kitchen Safety & Slip-Resistant Gear",
    description:
      "Protect your staff and your operation with essential safety products designed for restaurant environments.",
    image:
      "https://cdn11.bigcommerce.com/s-oausps4qgu/images/stencil/1000x1000/uploaded_images/breaking-down-the-kitchen-kitchen-staff.png?t=1683030711",
  },
  {
    title: "Sanitizing & Cleaning Solutions",
    description:
      "Ensure guests and staff experience a consistently clean, stocked, and pleasant facility.",
    image:
      "https://www.runningrestaurants.com/custom/three-professional-chefs-uniforms-600x400.jpg",
  },
  {
    title: "Floor Mats & Matting Solutions",
    description:
      "Staff spend long hours on their feet—our commercial matting solutions offer support, safety, and aesthetic appeal.",
    image:
      "https://ultimatemats.com/wp-content/uploads/2022/01/MicroLuxx-Commercial-Floor-Mats-Inplace-.jpg",
  },
  {
    title: "Cleaning Agents & Sanitizers",
    description:
      "We provide restaurant-safe cleaning agents and sanitizers that meet regulatory requirements and protect both surfaces and staff.",
    image:
      "https://kaptva.com/cdn/shop/files/Bistro_Mariposa_Chef_Edit_2.4.26_portfolio.jpg?v=1770241813&width=1139",
  },
];

export default function RestaurantsPage() {
  return (
    <>
      <Hero
        tag="RESTAURANTS"
        heading="Build Your Hospitality Solution"
        subtext="From the kitchen to the dining room, we keep your team sharp and your operation spotless."
        backgroundImage="https://images.ctfassets.net/9hll0m1ctx1b/4aaLhZoUpPeT9WkRDNxebo/14da3b42a593c82d82768a7c699cdf3d/Chef.jpg?w=1000&h=666&fl=progressive&q=80&fm=jpg"
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
                Let Bright Way handle the back-of-house essentials—so you can stay
                front-and-center with your guests.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
