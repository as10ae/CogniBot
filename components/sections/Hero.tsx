"use client";

import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { motion } from "framer-motion";
import { heroContent } from "@/content/home";

export default function Hero() {
  return (
    <AuroraBackground>
      <section className="mx-auto max-w-7xl px-6 py-36 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl font-bold sm:text-6xl"
        >
          {heroContent.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
        >
          {heroContent.subtitle}
        </motion.p>
        <motion.a
          href={heroContent.cta.href}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-block rounded-md bg-white px-6 py-3 font-semibold text-black shadow-md transition hover:bg-gray-100"
        >
          {heroContent.cta.label}
        </motion.a>
      </section>
    </AuroraBackground>
  );
}
