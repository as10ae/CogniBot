"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export function BlobBackground({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "relative w-full bg-zinc-50 dark:bg-zinc-900 text-slate-950 dark:text-white overflow-hidden",
        className
      )}
    >
      {/* Subtle blurred blob for visual flair (like Aurora bottom-left) */}
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 0.15 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 14,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-1/4 bottom-0 h-[70vh] w-[70vw] rounded-full bg-white/5 blur-[100px] z-0"
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
