import AnimateOnScroll from "./AnimateOnScroll";

interface Testimonial {
  quote: string;
  name: string;
  company: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The sales team is very attentive to our needs. Uniforms are always delivered on time and the quality is excellent. We have used different uniform companies in the past but none of them come close to the service we receive through Bright Way. The customer service is absolutely amazing. Needless to say, we are extremely happy with Bright Way.",
    name: "Melanie Colvin",
    company: "Röchling Group",
    location: "Duncan, SC",
  },
  {
    quote:
      "Jim is great to work with. He really goes the extra mile for us, making the experience effortless. Morgan Kemp is also super to work with, keeping us in line with orders and billing. Always willing to go the extra effort. Thank you for your service.",
    name: "Patrick Granson",
    company: "Mecklenburg County",
    location: "Mecklenburg County, NC",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-wide">
        <AnimateOnScroll variant="fadeUp">
          <div className="text-center mb-16">
            <span className="section-tag">TESTIMONIALS</span>
            <h2 className="heading-section text-navy mt-5">
              What Our Clients Say
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <AnimateOnScroll key={testimonial.name} variant="fadeUp" delay={i * 0.15}>
              <div className="bg-white rounded-2xl p-8 md:p-10 h-full shadow-card relative overflow-hidden">
                {/* Decorative quote mark */}
                <span className="quote-mark">&ldquo;</span>

                <div className="relative z-10">
                  <p className="text-navy/80 text-[0.9375rem] md:text-base leading-relaxed mb-8 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    {/* Avatar placeholder with initials */}
                    <div className="w-11 h-11 rounded-full bg-cyan/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan font-semibold text-sm">
                        {testimonial.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-navy font-semibold text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-slate text-xs">
                        {testimonial.company} &middot; {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtle accent border at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan via-cyan-light to-cyan opacity-60" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
