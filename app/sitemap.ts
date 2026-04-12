import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/programmes",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/leadership-model",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.7,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
