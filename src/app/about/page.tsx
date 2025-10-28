'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ClientsSection from '@/components/sections/ClientsSection';
import ReachOut from '@/components/sections/ReachOut';

const AboutPage = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-black">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-12"
          >
            {/* Big Orange Headline */}
            <h1
              className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-medium"
              style={{ color: '#fe4306' }}
            >
              About SherHub
            </h1>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative  mx-auto"
            >
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/img5.png"
                  alt="SherHub Vision - Lion Statue"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-neutral-black">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          >
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <div className="relative aspect-[16/8] md:aspect-[16/9] lg:aspect-[3/2] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/people-about.jpg"
                  alt="SherHub Team at Work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              {/* Our Story Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-8">
                  Our Story
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-lg md:text-2xl text-white leading-tight">
                  SherHub was born from a clear and compelling idea: transforming abstract concepts into tangible achievements that their creators can take pride in, leaving a lasting mark that endures through time. From this vision, SherHub emerged as a creative force, drawing inspiration from the Kurdish word for &ldquo;lion,&rdquo; symbolizing strength, leadership, and courage, qualities that have been deeply ingrained in surrounding societies for millennia.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-lg md:text-2xl text-white leading-tight">
                  We embrace these symbols as we forge our own story. The lion, with its powerful presence, is ever-present in our journey, while our expertise and capabilities bring every detail to life, reviving these symbols and making them a reality.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Text Section */}
      <section className="py-4 md:py-4 lg:py-24 bg-white min-h-auto flex items-center">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="space-y-2 md:space-y-4 lg:space-y-4">

            {/* Row 1: WE CREATE */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between w-full overflow-hidden"
            >
              <div className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-medium text-black leading-none">
                WE
              </div>
              <div
                className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-medium leading-none text-black"
              >
                CREATE
              </div>
            </motion.div>

            {/* Row 2: EXCEPTIONAL (right only) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-end w-full overflow-hidden"
            >
              <div
                className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-medium leading-none"
                style={{ color: '#fe4306' }}
              >
                EXCEPTIONAL
              </div>
            </motion.div>

            {/* Row 3: EXPERIENCE (left only) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center justify-start w-full overflow-hidden"
            >
              <div className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-medium text-black leading-none">
                EXPERIENCE
              </div>
            </motion.div>

            {/* Row 4: THAT NEVER */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-between w-full overflow-hidden"
            >
              <div className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-medium text-black leading-none">
                THAT
              </div>
              <div
                className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-medium leading-none"
                style={{ color: '#fe4306' }}
              >
                NEVER
              </div>
            </motion.div>

            {/* Row 5: CEASE (left only) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between w-full overflow-hidden"
            >
              <div className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-medium text-black leading-none">
                CEASES
              </div>
              <div
                className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-medium leading-none text-black"
              >
                TO
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center w-full overflow-hidden"
            >
              <div
                className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-medium leading-none"
                style={{ color: '#fe4306' }}
              >
                AMAZE
              </div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* Team Description Section */}
      <section className="relative py-16 md:py-24 bg-black overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

            {/* Left Column - Image with Animated Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl h-[500px] lg:h-[800px]"
            >
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src="/crew-long-exposure.png"
                  alt="SherHub Team in Action"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Animated Scrolling Text Overlay */}
              <div className="absolute bottom-8 left-0 right-0 overflow-hidden">
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 15,
                      ease: "linear",
                    },
                  }}
                  className="whitespace-nowrap"
                >
                  <span
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white opacity-80"
                    style={{ fontFamily: 'TomatoGrotesk, sans-serif' }}
                  >
                    MARKETING AGENCY • MARKETING AGENCY • MARKETING AGENCY •
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <div className="space-y-8 lg:pl-8">

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div
                  className="text-sm md:text-base font-medium tracking-wider uppercase mb-6"
                  style={{ color: '#999da6' }}
                >
                  SHERHUB AGENCY
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-white leading-tight mb-8">
                  SherHub&apos;s team caters to the needs of <span style={{ color: '#fe4306' }}>businesses</span>, corporations, and organizations alike, recognizing that each entity has a vision seeking realization.
                </h2>
              </motion.div>

              {/* Two Column Text */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Left Text Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg text-white/90 leading-relaxed">
                    We make that vision a reality, whether by enhancing brand identities, launching successful campaigns, or executing impactful humanitarian projects. Our commitment lies in excellence, global outreach, and maintaining the delicate balance between the unique local essence of each client and the universal execution that sets us apart.
                  </p>
                </motion.div>

                {/* Right Text Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg text-white/90 leading-relaxed">
                    We create exceptional experiences that never cease. Each experience leads to another, as creativity with us knows no limits. We find ourselves in every domain, commercial projects, corporate initiatives, humanitarian efforts, and the meticulous operations of organizations of all kinds.
                  </p>
                </motion.div>

              </div>

              {/* Bottom Call-to-Action Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="pt-8 border-t border-white/10 mt-12"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                  <div className="space-y-1">
                    <p className="text-white text-lg font-medium">
                      Let&apos;s bring your vision to life –
                    </p>
                    <p className="text-white/80 text-lg">
                      Start your creative journey today!
                    </p>
                  </div>
                  <div className="text-left space-y-1">
                    <p className="text-white/60 text-sm">Contact us</p>
                    <p className="text-white/60 text-sm">info@sherhub.com</p>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientsSection />

      {/* ReachOut Section */}
      <ReachOut />
    </div>
  );
};

export default AboutPage;
