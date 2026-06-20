import type { Metadata } from "next";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Services",
  description:
    "Explore SherHub's integrated services: digital solutions, creative production, event management, printing, consulting, and corporate communication.",
  path: "/services",
  keywords: [
    "digital marketing services",
    "creative production",
    "event management",
    "branding services",
    "corporate communication",
    "video production Erbil",
  ],
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
