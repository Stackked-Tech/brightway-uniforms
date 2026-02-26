import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "704-827-1868",
    href: "tel:7048271868",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@brightwayuniforms.com",
    href: "mailto:info@brightwayuniforms.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "1196 Noles Drive, Mount Holly, NC 28120",
    href: "https://maps.google.com/?q=1196+Noles+Drive+Mount+Holly+NC+28120",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Spacer for navbar */}
      <div className="h-24 lg:h-28 bg-navy" />

      <section className="section-padding bg-ivory">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left - Info Panel */}
            <div className="lg:col-span-2">
              <div className="bg-navy rounded-2xl p-8 md:p-10 h-full relative overflow-hidden">
                {/* Decorative accents */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 contact-stagger">
                  <div>
                    <span className="section-tag section-tag-white">GET IN TOUCH</span>
                  </div>

                  <h1 className="font-display text-3xl md:text-4xl text-white mt-5 mb-4">
                    Talk with Bright Way
                  </h1>

                  <p className="text-white/60 text-[0.9375rem] leading-relaxed mb-10">
                    Tell us what you need—uniforms, towels, safety gear—and we&apos;ll
                    jump right on it.
                  </p>

                  {contactItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("https") ? "_blank" : undefined}
                      rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 text-white/70 hover:text-white transition-colors duration-300 group mb-5"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan/20 transition-colors duration-300">
                        <item.icon size={18} className="text-cyan/80 group-hover:text-cyan" />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm">{item.value}</p>
                      </div>
                    </a>
                  ))}

                  <div className="mt-12 pt-8 border-t border-white/8">
                    <div className="flex items-start gap-3 text-white/40 text-xs">
                      <Clock size={14} className="mt-0.5 flex-shrink-0" />
                      <p className="leading-relaxed">
                        We typically respond within 24 hours. Need immediate assistance?
                        Call us directly at{" "}
                        <a href="tel:7048271868" className="text-cyan/80 hover:text-cyan">
                          704-827-1868
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <AnimateOnScroll variant="fadeRight" delay={0.2}>
                <ContactForm />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
