"use client";

import { testimonialsContent } from "@/content/home";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative mx-auto max-w-7xl px-6 py-20 text-center"
    >
      {/* Section Title */}
      <h2 className="mb-4 text-4xl font-bold text-white">
        {testimonialsContent.title}
      </h2>
      <p className="mb-12 max-w-2xl mx-auto text-lg text-gray-300">
        {testimonialsContent.subtitle}
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonialsContent.testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-xl bg-gray-900 p-6 text-left shadow-lg"
          >
            <div className="mb-4 flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-md font-semibold text-white">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-400">{item.role}</p>
              </div>
            </div>
            <p className="text-gray-300">“{item.message}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
