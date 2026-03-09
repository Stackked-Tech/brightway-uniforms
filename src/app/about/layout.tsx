import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Bright Way — Family-Owned Uniform Partner",
  description:
    "Learn about Bright Way's journey from a sign shop to Charlotte's premier uniform and facility solutions provider. Female-owned, HUB certified, and committed to exceptional service.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
