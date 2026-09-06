import { useMemo, useRef } from "react";
import { useScroll } from "framer-motion";
import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";
import { usePortfolio } from "../hooks/usePortfolio";

export default function ProjectsSection() {
  const { projects } = usePortfolio();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const ordered = useMemo(
    () => [...projects].sort((a, b) => Number(b.highlight) - Number(a.highlight)),
    [projects]
  );

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative z-10 -mt-10 scroll-mt-20 rounded-t-[40px] bg-[#0C0C0C] px-5 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <div className="flex flex-col items-center py-20 sm:py-24 md:py-32">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading w-full text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Projects
          </h2>
        </FadeIn>
      </div>

      {ordered.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          totalCards={ordered.length}
          progress={scrollYProgress}
        />
      ))}
    </section>
  );
}
