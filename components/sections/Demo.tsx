"use client";

import { demoContent } from "@/content/home";
import { motion } from "framer-motion";

export default function Demo() {
  return (
    <section
      id="demo"
      className="relative mx-auto max-w-7xl px-6 py-20 text-center"
    >
      {/* Section Title */}
      <h2 className="mb-4 text-4xl font-bold text-white">
        {demoContent.title}
      </h2>
      <p className="mb-10 max-w-2xl mx-auto text-lg text-gray-300">
        {demoContent.subtitle}
      </p>

      {/* Video Frame */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative mx-auto w-full overflow-hidden rounded-xl shadow-lg"
        style={{ aspectRatio: "16 / 9", maxWidth: "900px" }}
      >
        <iframe
          src={demoContent.videoUrl}
          title="CogniBot Demo"
          className="h-full w-full rounded-xl"
          allowFullScreen
        ></iframe>
      </motion.div>

      {/* CTA Button */}
      <div className="mt-10">
        <a
          href={demoContent.cta.href}
          className="inline-block rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
        >
          {demoContent.cta.label}
        </a>
      </div>
    </section>
  );
}
