import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const routes = [
    "",
    "/about",
    "/work",
    "/work/cm-welding",
    "/work/sunbridge",
    "/work/hour-tracker",
    "/work/sow-tracker",
    "/platform",
    "/hour-tracker",
    "/sow-tracker",
    "/contact",
  ];

  return routes.map((route) => ({ url: `${siteUrl}${route}` }));
}
