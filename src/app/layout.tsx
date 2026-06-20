import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "SherHub - Marketing Agency",
    template: "%s | SherHub",
  },
  description:
    "Your trusted marketing agency partner. We help businesses grow through innovative digital marketing strategies, creative solutions, and comprehensive services.",
  keywords: [
    "marketing agency",
    "digital marketing",
    "creative solutions",
    "branding",
    "web development",
    "SEO",
    "social media marketing",
  ],
  authors: [{ name: "SherHub" }],
  creator: "SherHub",
  publisher: "SherHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sherhub.com"),
  openGraph: {
    title: "SherHub - Marketing Agency",
    description:
      "Your trusted marketing agency partner. We help businesses grow through innovative digital marketing strategies, creative solutions, and comprehensive services.",
    url: "https://sherhub.com",
    siteName: "SherHub",
    images: [
      {
        url: "/banner-01.jpg",
        width: 1200,
        height: 630,
        alt: "SherHub Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SherHub - Marketing Agency",
    description:
      "Your trusted marketing agency partner. We help businesses grow through innovative digital marketing strategies and creative solutions.",
    images: ["/banner-01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#fe4306",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-tomato antialiased">
        {/* Microsoft Clarity tracking code */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "txplm1nm8z");
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
