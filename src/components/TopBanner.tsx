"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Services & Supplies", href: "/", prefix: "" },
  { name: "Decorated Apparel", href: "/decorated-apparel", prefix: "/decorated-apparel" },
];

export default function TopBanner() {
  const pathname = usePathname();

  const isActive = (tab: (typeof tabs)[number]) => {
    if (tab.prefix === "/decorated-apparel") {
      return pathname.startsWith("/decorated-apparel");
    }
    return !pathname.startsWith("/decorated-apparel");
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[51] hidden lg:block bg-[#101B30] border-b border-white/[0.06]">
      <div className="container-wide">
        <div className="flex items-center h-9 gap-6">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              className={`text-xs font-semibold tracking-wider uppercase transition-colors duration-200 ${
                isActive(tab)
                  ? "text-white"
                  : "text-white/60 hover:text-white/70"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
