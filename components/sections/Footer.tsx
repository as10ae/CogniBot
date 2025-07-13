"use client";

import { footerContent } from "@/content/home";
import { Github, Twitter } from "lucide-react";
import { JSX } from "react";

const socialIcons: Record<string, JSX.Element> = {
  github: <Github className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
};

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-black px-6 py-12 text-gray-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
        {/* Logo */}
        <div className="text-lg font-semibold text-white">
          {footerContent.logoText}
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          {footerContent.links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {footerContent.socials.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              {socialIcons[social.icon]}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-xs text-gray-600">
        {footerContent.copyright}
      </div>
    </footer>
  );
}
