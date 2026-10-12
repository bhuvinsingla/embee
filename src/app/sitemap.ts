import type { MetadataRoute } from "next";
import { projects, services } from "@/lib/marketing";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const routes = [
    "",
    "/about",
    "/services",
    "/verticals",
    "/work",
    "/insights",
    "/contact",
    ...services.map((item) => item.href),
    ...projects.map((item) => `/work/${item.slug}`),
  ];
  return routes.map((route) => ({ url: `${siteUrl}${route}` }));
}
