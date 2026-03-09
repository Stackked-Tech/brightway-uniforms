import type { MetadataRoute } from "next";

const BASE_URL = "https://brightwayuniforms.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/services/uniforms", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services/facility", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services/flame-resistant", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/services/restroom-hygiene", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/services/first-aid-safety", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/services/industrial", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services/professional", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services/restaurants", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/decorated-apparel", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/decorated-apparel/screen-printing", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/decorated-apparel/embroidery", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
