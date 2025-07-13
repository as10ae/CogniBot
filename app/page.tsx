import Cta from "@/components/sections/CTA";
import Demo from "@/components/sections/Demo";
import Faq from "@/components/sections/Faq";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import { FloatingNav } from "@/components/sections/Navbar";
import Testimonials from "@/components/sections/Testimonials";
import { navItems } from "@/content/home";

export default function Home() {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <Hero />
      <Features />
      <Demo />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
