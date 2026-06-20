import type { Metadata } from "next";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About SherHub",
  description:
    "Learn how SherHub turns ideas into impactful realities for businesses, corporations, and organizations across Kurdistan and beyond.",
  path: "/about",
  keywords: [
    "about SherHub",
    "marketing agency Erbil",
    "Kurdistan creative agency",
    "SherHub team",
    "creative agency Iraq",
  ],
});

export default function AboutLayout({
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
              { name: "About", path: "/about" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
