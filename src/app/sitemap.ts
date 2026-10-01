import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: "https://www.sinan.ro/", ro: "https://www.sinan.ro/ro" };
  return [
    { url: languages.en, lastModified: new Date(), changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: languages.ro, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8, alternates: { languages } },
  ];
}
