import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import { usePortfolio } from "../hooks/usePortfolio";

export default function HeroSection() {
  const { profile } = usePortfolio();

  return (
    <section
      id="home"
      className="relative flex h-dvh scroll-mt-20 flex-col overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-15%] h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-20 blur-[130px]"
        style={{
          backgroundImage: "linear-gradient(120deg, #8B5CF6, #D946EF, #F97316)",
        }}
      />

      <div className="relative z-0 flex flex-1 flex-col px-5 sm:px-8 md:px-10">
        <FadeIn delay={0}>
          <Navbar />
        </FadeIn>

        <FadeIn
          delay={0.15}
          y={40}
          className="mt-6 overflow-hidden sm:mt-4 md:-mt-5 pointer-events-none z-20"
        >
          <h1
            className="hero-heading w-full whitespace-nowrap font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 14vw, 14.5rem)" }}
          >
            Hi, I&apos;m {profile.shortName}
          </h1>
        </FadeIn>

        <div className="flex-1" />

        <div className="relative z-20 flex items-end justify-between gap-6 pb-7 sm:pb-8 md:pb-10">
          <FadeIn delay={0.35} y={20}>
            <p
              className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-neutral-300 sm:max-w-[220px] md:max-w-[260px]"
              style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
            >
              {profile.tagline}
            </p>
          </FadeIn>

          <FadeIn
            delay={0.5}
            y={20}
            className="absolute bottom-7 left-1/2 -translate-x-1/2 sm:static sm:translate-x-0"
          >
            <SocialLinks social={profile.social} />
          </FadeIn>
        </div>
      </div>

      {/* Magnet Wrapper */}
      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="absolute left-1/2 z-10 -translate-x-1/2 bottom-0 max-sm:top-[56%] max-sm:-translate-y-1/2"
        innerClassName="h-full flex items-end justify-center"
        style={{
          height: "clamp(350px, 55vh, 600px)",
          maxWidth: "min(90vw, 480px)",
          width: "100%",
        }}
      >
        <FadeIn
          delay={0.6}
          y={30}
          className="h-full w-full flex items-end justify-center"
        >
          {profile.avatarImage ? (
            <img
              src={profile.avatarImage}
              alt={profile.name}
              className="h-full w-auto object-contain scale-110 sm:scale-120 origin-bottom"
              draggable={false}
            />
          ) : (
            <div
              className="h-full w-auto flex items-end justify-center [&>svg]:h-full [&>svg]:w-auto"
              dangerouslySetInnerHTML={{ __html: profile.avatarSvg }}
            />
          )}
        </FadeIn>
      </Magnet>
    </section>
  );
}
