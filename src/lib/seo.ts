import type { Metadata } from "next";

export const SITE_URL = "https://sherhub.com";
export const SITE_NAME = "SherHub";
export const SITE_DESCRIPTION =
  "Your trusted marketing agency partner. We help businesses grow through innovative digital marketing strategies, creative solutions, and comprehensive services.";
export const OG_IMAGE = "/banner-01.jpg";

export const socialLinks = {
  facebook: "https://www.facebook.com/SherHub0",
  linkedin: "https://www.linkedin.com/company/sherhub/",
  instagram: "https://www.instagram.com/sherhub0",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logos/logo-white-horizantal.svg`,
  email: "info@sherhub.com",
  sameAs: [socialLinks.facebook, socialLinks.linkedin, socialLinks.instagram],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Erbil",
    addressRegion: "Kurdistan Region",
    addressCountry: "IQ",
  },
  description: SITE_DESCRIPTION,
};

export function breadcrumbSchema(
  items: { name: string; path: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function pageMetadata({
  title,
  description,
  path,
  image = OG_IMAGE,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
