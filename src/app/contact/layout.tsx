import type { Metadata } from "next";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact SherHub",
  description:
    "Contact SherHub in Erbil, Kurdistan Region, Iraq. Let's discuss your project and explore how we can collaborate.",
  path: "/contact",
  keywords: [
    "contact SherHub",
    "marketing agency Erbil",
    "digital marketing contact",
    "creative agency Iraq",
    "SherHub email",
  ],
});

export default function ContactLayout({
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
              { name: "Contact", path: "/contact" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
