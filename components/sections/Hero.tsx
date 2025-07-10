import { heroContent } from "@/content/home";
import Typewriter from "@/components/ui/Typewriter";
import AuroraBackground from "@/components/ui/AuroraBackground";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center px-4 text-center text-white">
      <AuroraBackground />

      <div className="z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {heroContent.title}
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-6">
          {heroContent.subtitle}
        </p>

        <div className="text-xl font-mono mb-8">
          <Typewriter words={heroContent.typewriterWords} />
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="#cta"
            className="rounded-md bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition"
          >
            {heroContent.ctaPrimary}
          </a>
          <a
            href="#features"
            className="rounded-md border border-gray-400 px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
          >
            {heroContent.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
