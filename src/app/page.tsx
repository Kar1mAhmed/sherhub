import type { Metadata } from "next";
import VideoHero from "@/components/sections/VideoHero";
import LogoAnimated from "@/components/sections/LogoAnimated";
import AboutUs from "@/components/sections/AboutUs";
import ClientsSection from "@/components/sections/ClientsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhySherHub from "@/components/sections/WhySherHub";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "SherHub - Marketing Agency",
  description:
    "Transform your vision into reality with SherHub. We are a full-service marketing agency offering digital marketing, creative production, and comprehensive business solutions.",
  path: "/",
  keywords: [
    "marketing agency",
    "digital marketing",
    "creative agency",
    "branding",
    "Kurdistan marketing",
    "web development",
    "social media",
    "video production",
  ],
});

export default function Home() {
  return (
    <div className="bg-bg-primary">
      <VideoHero />
      <LogoAnimated />
      <AboutUs />
      <ClientsSection />
      <ServicesSection />
      <WhySherHub />
    </div>
  );
}
