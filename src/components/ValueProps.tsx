import { FileX, CalendarCheck, Zap, Award, Clock, UserCheck, LucideIcon } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
}

const valueProps: ValueProp[] = [
  {
    icon: FileX,
    title: "No Long-Term Contracts",
    description:
      "Enjoy the freedom and flexibility of working with us without being tied down by lengthy commitments, giving you the peace of mind to adjust your plans as needed.",
  },
  {
    icon: CalendarCheck,
    title: "Weekly Billing",
    description:
      "Experience the convenience of predictable costs with our regular weekly billing cycles, making it easier to manage your budget and finances effectively.",
  },
  {
    icon: Zap,
    title: "Quick Installs",
    description:
      "Benefit from our efficient and rapid installation services, ensuring you can start using our solutions with minimal downtime and maximum convenience.",
  },
  {
    icon: Award,
    title: "Female-Owned HUB Certified",
    description:
      "Proudly operated by a certified, female-owned business, bringing a unique perspective and dedication to excellence in every project we undertake.",
  },
  {
    icon: Clock,
    title: "Timely Responses",
    description:
      "Rest assured that all your inquiries will be met with prompt and attentive responses, providing you with the support you need exactly when you need it.",
  },
  {
    icon: UserCheck,
    title: "Direct Owner Access",
    description:
      "Have the unique opportunity to connect directly with the owner whenever necessary, ensuring personalized attention and a direct line to decision-makers.",
  },
];

export default function ValueProps() {
  return (
    <section className="section-padding bg-ivory-dark">
      <div className="container-wide">
        <AnimateOnScroll variant="fadeUp">
          <div className="text-center mb-16">
            <span className="section-tag">WHY BRIGHT WAY</span>
            <h2 className="heading-section text-navy mt-5 mb-4">
              Built Different. On Purpose.
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {valueProps.map((prop, i) => (
            <AnimateOnScroll key={prop.title} variant="fadeUp" delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-7 md:p-8 h-full shadow-card hover:shadow-card-hover transition-all duration-400 group">
                <div className="w-12 h-12 rounded-xl bg-cyan/8 flex items-center justify-center mb-5 group-hover:bg-cyan/12 transition-colors duration-300">
                  <prop.icon size={22} className="text-cyan" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg text-navy mb-3">{prop.title}</h3>
                <p className="text-slate text-[0.9375rem] leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
