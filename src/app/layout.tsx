import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brightwayuniforms.com"),
  title: {
    default: "Bright Way | Charlotte's Premier Uniform Partner",
    template: "%s | Bright Way",
  },
  description:
    "No long-term contracts. No surprise fees. Just fast installs, fair pricing, and real people who answer the phone. Industrial, restaurant, and professional uniform services in Charlotte, NC.",
  keywords: [
    "uniform services",
    "Charlotte NC uniforms",
    "industrial uniforms",
    "restaurant uniforms",
    "professional uniforms",
    "uniform rental",
    "Bright Way",
  ],
  openGraph: {
    title: "Bright Way | Charlotte's Premier Uniform Partner",
    description:
      "No long-term contracts. No surprise fees. Just fast installs, fair pricing, and real people who answer the phone.",
    type: "website",
    siteName: "Bright Way Uniforms",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Way | Charlotte's Premier Uniform Partner",
    description:
      "No long-term contracts. No surprise fees. Just fast installs, fair pricing, and real people who answer the phone.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${plusJakarta.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Bright Way Uniforms",
                url: "https://brightwayuniforms.com",
                telephone: "+1-704-827-1868",
                email: "info@brightwayuniforms.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "1196 Noles Drive",
                  addressLocality: "Mount Holly",
                  addressRegion: "NC",
                  postalCode: "28120",
                  addressCountry: "US",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 35.2988,
                  longitude: -81.0157,
                },
                areaServed: {
                  "@type": "GeoCircle",
                  geoMidpoint: { "@type": "GeoCoordinates", latitude: 35.2271, longitude: -80.8431 },
                  geoRadius: "80467",
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "17:00",
                },
                priceRange: "$$",
                image: "https://brightwayuniforms.com/logo.png",
                description:
                  "Charlotte's premier uniform partner. Industrial, restaurant, and professional uniform services with no long-term contracts.",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5.0",
                  reviewCount: "6",
                  bestRating: "5",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How are you able to offer services without long-term contracts?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We earn your business week-to-week through responsive service, reliable deliveries, and transparent pricing. If we ever stop delivering on that promise, you're free to walk—no strings attached.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do you keep your weekly billing consistent?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Every garment is scanned, every rate is pre-agreed, and every invoice follows the same clear format. No surprises, no nonsense—just transparent, high-quality performance.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What other services do you offer?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Beyond uniforms, we stock safety gear, bar towels, shop rags, floor mats, and custom-decorated apparel—so you can swap a handful of vendors for one reliable partner.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How quickly can you outfit a new hire?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Fast—really fast. Our deep local supplier network and relentless client-first mindset mean this moves quickly. Even specialty requests move at Bright Way speed.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I request a quote or on-site assessment?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Use our contact form, call us directly, or email info@brightwayuniforms.com. A service specialist will schedule a quick walkthrough, then send a detailed proposal—usually within 24 hours.",
                    },
                  },
                ],
              },
            ]),
          }}
        />
        <ClientLayout>{children}</ClientLayout>
        <noscript>
          <style>{`.scroll-reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  if(!('IntersectionObserver' in window)) {
    document.querySelectorAll('.scroll-reveal').forEach(function(el){el.classList.add('revealed')});
    return;
  }
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.15,rootMargin:'0px 0px -40px 0px'});
  function observe(){
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(function(el){observer.observe(el)});
  }
  observe();
  var mo = new MutationObserver(observe);
  mo.observe(document.body,{childList:true,subtree:true});
})();
`,
          }}
        />
      </body>
    </html>
  );
}
