import Demo from "@/components/sections/Demo";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import { FloatingNav } from "@/components/sections/Navbar";
import { navItems } from "@/content/home";

export default function Home() {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <Hero />
      <Features />
      <Demo />
    </>
  );
}
