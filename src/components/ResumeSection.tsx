import { Download } from "lucide-react";
import FadeIn from "./FadeIn";
import { usePortfolio } from "../hooks/usePortfolio";

export default function ResumeSection() {
  const { profile } = usePortfolio();
  const hasResume = Boolean(profile.resumeUrl?.trim());

  if (!hasResume) return null;

  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-[#0C0C0C] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[120px]"
        style={{
          backgroundImage: "linear-gradient(120deg, #8B5CF6, #D946EF, #F97316)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        {/* Heading with Floating Emojis */}
        <FadeIn delay={0.1} y={30}>
          <div className="relative inline-block px-6 sm:px-12">
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 9vw, 120px)" }}
            >
              My Resume
            </h2>

            {/* Resume Emoji (Top Left) */}
            <span className="testimonial-emoji absolute -left-2 -top-6 rotate-[-14deg] text-2xl sm:-left-8 sm:-top-10 sm:text-5xl">
              📄
            </span>

            {/* Sparkles (Top Right) */}
            <span className="testimonial-emoji testimonial-emoji-delay absolute -right-2 -top-5 rotate-[10deg] text-xl sm:-right-6 sm:-top-8 sm:text-4xl">
              ✨
            </span>

            {/* Rocket (Bottom Right) */}
            <span className="testimonial-emoji absolute -bottom-6 -right-4 rotate-[-8deg] text-2xl sm:-bottom-8 sm:-right-10 sm:text-5xl">
              🚀
            </span>
          </div>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.2} y={20}>
          <p
            className="max-w-xl font-light leading-relaxed text-neutral-400"
            style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.15rem)" }}
          >
            Want the full breakdown of my experience, skills, and education in
            one place? Grab a copy of my resume as a PDF.
          </p>
        </FadeIn>

        {/* Download Button */}
        <FadeIn delay={0.3} y={20}>
          <a
            href={profile.resumeUrl}
            download
            className="pill-gradient inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-opacity duration-200 hover:opacity-90 active:opacity-75 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
          >
            <Download className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
            Download Resume
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
