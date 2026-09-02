import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
  stickyOffset: number;
}

export default function ProjectCard({ project, index, stickyOffset }: ProjectCardProps) {
  const hasLink = project.link.trim().length > 0;
  const hasImage = project.image.trim().length > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ top: stickyOffset }}
      className="sticky mb-8 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 md:aspect-auto">
          {hasImage ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full min-h-[240px] w-full items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-black">
              <span className="hero-heading px-6 text-center text-2xl font-semibold leading-tight sm:text-3xl">
                {project.title}
              </span>
            </div>
          )}
          <span className="absolute left-5 top-5 font-mono text-xs text-neutral-500">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-col justify-between p-8 md:p-10">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-semibold text-neutral-100">{project.title}</h3>
              {project.highlight && (
                <span className="rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-neutral-950 gradient-accent">
                  Featured
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-neutral-500">{project.subtitle}</p>

            <p className="prose-body mt-5 max-w-[52ch] text-sm leading-relaxed text-neutral-400 md:text-base">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-800 px-3 py-1 font-mono text-xs text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 border-t border-neutral-900 pt-6">
            <div className="flex gap-6 font-mono text-xs text-neutral-500">
              <span>{project.role}</span>
              <span>{project.year}</span>
            </div>

            {hasLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-xs font-medium text-neutral-200 transition-colors hover:border-neutral-400 hover:text-white"
              >
                Live project
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
