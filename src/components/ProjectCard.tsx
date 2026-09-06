import { motion, useTransform, type MotionValue } from "framer-motion";
import LiveProjectButton from "./LiveProjectButton";
import type { Project } from "../types/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}

export default function ProjectCard({
  project,
  index,
  totalCards,
  progress,
}: ProjectCardProps) {
  const rangeStart = index / totalCards;
  const rangeEnd = 1;
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(
    progress,
    [rangeStart, rangeEnd],
    [1, targetScale],
  );

  const hasLink = project.link.trim().length > 0;
  const hasImage = project.image.trim().length > 0;

  return (
    <div className="sticky top-20 flex min-h-[80vh] items-start justify-center pb-12 sm:top-24 md:top-28">
      <motion.div
        style={{ scale, top: `${index * 20}px`, backgroundColor: "#0C0C0C" }}
        className="relative flex w-full max-w-[1200px] origin-top flex-col gap-4 rounded-[30px] border-2 border-neutral-800 p-5 sm:gap-6 sm:rounded-[40px] sm:p-7 md:gap-8 md:rounded-[50px] md:p-8"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="flex-shrink-0 font-black uppercase leading-none text-neutral-100"
              style={{ fontSize: "clamp(2.5rem, 6vw, 100px)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-1 sm:gap-2">
              <span
                className="font-medium uppercase text-neutral-100"
                style={{ fontSize: "clamp(1rem, 1.8vw, 1.8rem)" }}
              >
                {project.subtitle}
              </span>
              <span
                className="font-light tracking-wide text-neutral-300"
                style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.4rem)" }}
              >
                {project.title}
              </span>
            </div>
          </div>

          {hasLink && <LiveProjectButton href={project.link} />}
        </div>

        <p
          className="max-w-3xl font-light leading-relaxed text-neutral-400"
          style={{ fontSize: "clamp(0.85rem, 1.2vw, 1rem)" }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 font-mono text-xs text-neutral-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {hasImage ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-[20px] object-cover sm:rounded-[30px]"
            style={{ height: "clamp(160px, 20vw, 280px)" }}
          />
        ) : (
          <div
            className="relative flex w-full items-end overflow-hidden rounded-[20px] border border-neutral-800 bg-neutral-950 sm:rounded-[30px]"
            style={{ height: "clamp(160px, 20vw, 280px)" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(182,0,168,0.22),transparent_34%),linear-gradient(135deg,rgba(215,226,234,0.08),rgba(215,226,234,0.02))]" />
            <span className="hero-heading relative p-5 text-xl font-semibold uppercase tracking-widest sm:text-2xl">
              {project.title}
            </span>
          </div>
        )}

        <div className="flex flex-wrap gap-6 font-mono text-xs uppercase tracking-widest text-neutral-500">
          <span>{project.role}</span>
          <span>{project.year}</span>
        </div>
      </motion.div>
    </div>
  );
}
