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
  title: "Bright Way | Charlotte's Premier Uniform Partner",
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
