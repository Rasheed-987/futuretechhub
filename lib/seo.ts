import type { Metadata } from "next";

const FALLBACK_SITE_URL = "https://futuretechskillshub.com";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  process.env.SITE_URL?.trim() ||
  FALLBACK_SITE_URL;

const ensureProtocol = (value: string): string =>
  /^https?:\/\//i.test(value) ? value : `https://${value}`;

const trimTrailingSlash = (value: string): string =>
  value.endsWith("/") ? value.slice(0, -1) : value;

const canonicalizePath = (path: string): string => {
  if (!path || path === "/") {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
};

export const siteUrl = trimTrailingSlash(ensureProtocol(rawSiteUrl));
export const siteMetadataBase = new URL(siteUrl);

export const siteName = "FutureTech Institute";
export const defaultTitle = "FutureTech Institute | Industry-led Tech Education";
export const defaultDescription =
  "FutureTech Institute equips learners with practical, industry-led training in graphic design, basic computer skills, and web development.";
export const defaultKeywords = [
  "FutureTech Institute",
  "tech education Pakistan",
  "technology training institute",
  "graphic design course",
  "basic computer course",
  "web development course",
  "industry-led education",
  "career-focused training",
  "Islamabad tech institute",
  "rawalpindi tech training",
  
];
export const defaultOgImage = "/images/heroimage.jpeg";

export const absoluteUrl = (pathOrUrl: string): string => {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return `${siteUrl}${canonicalizePath(pathOrUrl)}`;
};

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

export const buildPageMetadata = ({
  title,
  description,
  path,
  keywords,
  image,
  type = "website",
  noindex = false,
}: BuildPageMetadataInput): Metadata => {
  const canonicalPath = canonicalizePath(path);
  const imageUrl = absoluteUrl(image || defaultOgImage);

  return {
    title,
    description,
    keywords: keywords || defaultKeywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type,
      locale: "en_US",
      url: canonicalPath,
      siteName,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : undefined,
  };
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteName,
  url: siteUrl,
  logo: absoluteUrl("/icon.png"),
  description: defaultDescription,
};
