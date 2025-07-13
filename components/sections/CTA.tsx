"use client";

import { ctaContent } from "@/content/home";
import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section className="relative mx-auto max-w-4xl px-6 py-24 text-center">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 p-10 text-white shadow-xl"
      >
        <h2 className="mb-4 text-3xl font-bold">{ctaContent.title}</h2>
        <p className="mb-8 text-lg">{ctaContent.subtitle}</p>
        <a
          href={ctaContent.button.href}
          className="inline-block rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow-lg transition hover:bg-blue-100"
        >
          {ctaContent.button.label}
        </a>
      </motion.div>
    </section>
  );
}
