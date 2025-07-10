"use client";
import { featuresContent } from "@/content/home";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section
      id="features"
      className="relative mx-auto max-w-7xl px-6 py-20 text-center"
    >
      {/* Section Title */}
      <h2 className="mb-4 text-4xl font-bold text-white">
        {featuresContent.title}
      </h2>
      <p className="mb-12 max-w-3xl mx-auto text-lg text-gray-300">
        {featuresContent.subtitle}
      </p>

      {/* Bento Grid with Wobble Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {featuresContent.items.map(({ title, description, icon }, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, rotate: 2 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-xl bg-gray-900 p-6 shadow-lg"
          >
            <div className="mb-4 text-5xl">{icon}</div>
            <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
