import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";
import AnimatedText from "./AnimatedText";
import { usePortfolio } from "../hooks/usePortfolio";

const BLOB_POSITIONS = [
  { className: "top-[6%] left-[2%] md:left-[5%]", x: -80, delay: 0.1 },
  { className: "bottom-[10%] left-[4%] md:left-[9%]", x: -80, delay: 0.25 },
  { className: "top-[6%] right-[2%] md:right-[5%]", x: 80, delay: 0.15 },
  { className: "bottom-[10%] right-[4%] md:right-[9%]", x: 80, delay: 0.3 },
];

export default function AboutSection() {
  const { profile, skills } = usePortfolio();

  return (
    <section
      id="about"
      className="relative flex min-h-screen scroll-mt-20 flex-col items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10"
    >
      {BLOB_POSITIONS.map((blob, i) => (
        <FadeIn
          key={blob.className}
          delay={blob.delay}
          x={blob.x}
          y={0}
          duration={0.9}
          className={`pointer-events-none absolute z-0 h-[140px] w-[140px] rounded-full opacity-20 blur-3xl sm:h-[180px] sm:w-[180px] md:h-[220px] md:w-[220px] ${blob.className}`}
          style={{
            backgroundImage:
              i % 2 === 0
                ? "linear-gradient(135deg, #8B5CF6, #D946EF)"
                : "linear-gradient(135deg, #D946EF, #F97316)",
          }}
        />
      ))}

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex w-full flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading w-full text-center font-black uppercase leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text={profile.bio}
            className="max-w-[560px] text-center font-medium leading-relaxed text-neutral-200"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.35rem)",
              overflowWrap: "normal",
              wordBreak: "normal",
            }}
          />
        </div>

        <div id="skills" className="w-full scroll-mt-20">
          <FadeIn delay={0.1} y={30}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skills.categories.map((category) => (
                <div
                  key={category.name}
                  className="rounded-2xl border border-neutral-800 bg-neutral-950/50 p-6"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-200">
                    {category.name}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-neutral-800 px-3 py-1 font-mono text-xs text-neutral-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} y={20}>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
}
