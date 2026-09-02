import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  const { profile } = usePortfolio();

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{
          backgroundImage: "linear-gradient(120deg, #8B5CF6, #D946EF, #F97316)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mb-8 h-24 w-24 overflow-hidden rounded-full border border-neutral-800 md:h-28 md:w-28"
        dangerouslySetInnerHTML={{ __html: profile.avatarSvg }}
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="relative z-10 mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500"
      >
        {profile.role} · {profile.location}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="hero-heading relative z-10 max-w-4xl text-center text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
      >
        Hi, I&apos;m {profile.shortName}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
        className="relative z-10 mt-6 max-w-xl text-balance text-center text-lg text-neutral-400 md:text-xl"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.38, ease: "easeOut" }}
        className="relative z-10 mt-10"
      >
        <SocialLinks social={profile.social} variant="pill" />
      </motion.div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-neutral-500 transition-colors hover:text-neutral-200"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
