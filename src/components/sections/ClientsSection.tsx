'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import LogoLoop from '@/components/ui/LogoLoop';

const ClientsSection = () => {
  // Client logos data with proper containment
  const clientLogos = [
    {
      src: "/clients/EU-LOGO.webp",
      alt: "EU Union",
      title: "EU Union"
    },
    {
      src: "/clients/UNICEF_ForEveryChild_Cyan_Vertical_RGB__144ppiENG.png",
      alt: "UNICEF",
      title: "UNICEF"
    },
    {
      src: "/clients/logo Ridha Alwan AR.png",
      alt: "Ridha Alwan",
      title: "Ridha Alwan"
    },
    {
      src: "/clients/2.-Logo-Orange-Corners-Orange-White---without-tagline.png",
      alt: "Orange Corners",
      title: "Orange Corners"
    },
    {
      src: "/clients/English Logo Organization Horizontal RGB White.png",
      alt: "Arabic Organization",
      title: "Arabic Organization"
    },
    {
      src: "/clients/Grofin 2.png",
      alt: "Grofin",
      title: "Grofin"
    },
    {
      src: "/clients/igfi-1.png",
      alt: "Client Logo",
      title: "Client"
    },
    {
      src: "/clients/New-UNFPA-Iraq-logo_EN-8-2019----White2V2.png",
      alt: "UNFPA Iraq",
      title: "UNFPA Iraq"
    },
    {
      src: "/clients/INWRDAM_logo.png",
      alt: "INWRDAM",
      title: "INWRDAM"
    },
    {
      src: "/clients/blue peace logo PNG-01.png",
      alt: "Blue Peace",
      title: "Blue Peace"
    },
    {
      src: "/clients/IFC.png",
      alt: "IFC",
      title: "IFC"
    },
    {
      src: "/clients/SDC.png",
      alt: "SDC",
      title: "SDC"
    },
    {
      src: "/clients/CHATHAM-HOUSE.png",
      alt: "CHATHAM HOUSE",
      title: "CHATHAM HOUSE"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header with icon and "OUR CLIENTS" */}
          <div className="flex items-center gap-3">
            <Image
              src="/logos/black-orange-symbol.svg"
              alt="SherHub Symbol"
              width={24}
              height={24}
              className="w-10 h-10"
            />
            <span className="text-md md:text-lg font-regular text-white/70">
              OUR CLIENTS
            </span>
          </div>

          {/* Logo Loop Container */}
          <div className="relative">
            <LogoLoop
              logos={clientLogos}
              speed={60}
              direction="left"
              logoHeight={64}
              gap={48}
              pauseOnHover={true}
              fadeOut={true}
              fadeOutColor="#000000"
              scaleOnHover={false}
              ariaLabel="Our trusted clients"
              className="py-8"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
