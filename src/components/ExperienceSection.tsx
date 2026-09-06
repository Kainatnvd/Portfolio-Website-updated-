import FadeIn from "./FadeIn";
import { usePortfolio } from "../hooks/usePortfolio";

export default function ExperienceSection() {
  const { experience } = usePortfolio();

  return (
    <section
      id="experience"
      className="flex scroll-mt-20 flex-col bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-16 w-full text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="flex w-full flex-col items-center">
        {experience.map((role, i) => {
          const number = String(i + 1).padStart(2, "0");
          const highlights = role.highlights.slice(0, 3);

          return (
            <FadeIn
              key={`${role.company}-${role.period}`}
              delay={i * 0.1}
              y={30}
              className="flex w-full max-w-5xl flex-col items-center"
            >
              {i > 0 && (
                <div className="w-full border-t border-neutral-800/60" />
              )}
              <div className="flex w-full items-start gap-6 py-8 sm:gap-8 sm:py-10 md:gap-10 md:py-12">
                <span
                  className="hero-heading flex-shrink-0 font-black uppercase leading-none"
                  style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                >
                  {number}
                </span>

                <div className="flex flex-col gap-3 pt-1 sm:gap-4 md:gap-5">
                  <div className="flex flex-col gap-2">
                    <span
                      className="font-medium uppercase text-neutral-200"
                      style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                    >
                      {role.company} — {role.role}
                    </span>
                    <span className="w-fit rounded-full border border-neutral-800 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-neutral-500 sm:text-xs">
                      {role.period}
                    </span>
                  </div>

                  <p
                    className="max-w-2xl font-light leading-relaxed text-neutral-400"
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                  >
                    {role.summary}
                  </p>

                  <ul className="flex flex-col gap-2 pl-4 text-neutral-500">
                    {highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="list-disc font-light leading-relaxed"
                        style={{ fontSize: "clamp(0.78rem, 1.2vw, 1rem)" }}
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
