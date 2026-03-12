import type { MetadataRoute } from "next";

const BASE_URL = "https://fastpercentage.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/percentage-increase",
    "/percentage-decrease",
    "/discount-calculator",
    "/about",
    "/privacy",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date("2026-03-12"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
