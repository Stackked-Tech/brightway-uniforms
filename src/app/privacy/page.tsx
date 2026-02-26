import AnimateOnScroll from "@/components/AnimateOnScroll";

const sections = [
  {
    title: "Who We Are",
    content:
      "Bright Way is a family-owned uniform services and facility solutions company based in Mount Holly, North Carolina. We provide uniform rental, laundering, safety gear, floor mats, restroom stocking, and custom-decorated apparel to businesses across the Charlotte metro area and beyond. Our website address is brightwayuniforms.com.",
  },
  {
    title: "What Personal Data We Collect and Why",
    content:
      "When you submit a contact form, request a quote, or communicate with us via email, we may collect your name, email address, phone number, company name, and the content of your message. This information is used solely to respond to your inquiry, provide a quote, and deliver our services. We do not sell, rent, or trade your personal data to third parties for marketing purposes.",
  },
  {
    title: "Cookies",
    content:
      "Our website may use cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us understand how visitors use our site. You can control cookie settings through your browser preferences. Disabling cookies may affect certain website functionality.",
  },
  {
    title: "Embedded Content",
    content:
      "Pages on this site may include embedded content (e.g., videos, images, social media widgets). Embedded content from other websites behaves in the same way as if the visitor had visited the other website. These third-party sites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information we collect to: respond to your inquiries and service requests; provide, operate, and improve our services; communicate with you about orders, deliveries, and account matters; comply with legal obligations; and protect our business interests and the safety of our users.",
  },
  {
    title: "Data Retention",
    content:
      "We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements. Contact form submissions are retained for a reasonable period to ensure we can follow up on inquiries. You may request deletion of your data at any time by contacting us.",
  },
  {
    title: "Contact",
    content:
      "If you have questions about this privacy policy or wish to exercise your data rights, please contact us at info@brightwayuniforms.com or call us at 704-827-1868. You can also write to us at: Bright Way, 1196 Noles Drive, Mount Holly, NC 28120.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Spacer for navbar */}
      <div className="h-24 lg:h-28 bg-navy" />

      <section className="section-padding bg-ivory">
        <div className="container-wide max-w-3xl">
          <div className="anim-fade-up">
            <h1 className="heading-section text-navy mb-3">Privacy Policy</h1>
            <p className="text-slate text-sm mb-12">Last updated: January 2025</p>
          </div>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <AnimateOnScroll key={section.title} variant="fadeUp" delay={i * 0.05}>
                <div>
                  <h2 className="font-display text-xl text-navy mb-3">
                    {section.title}
                  </h2>
                  <p className="text-slate text-[0.9375rem] leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
