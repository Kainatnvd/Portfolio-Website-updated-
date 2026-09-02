import { useMemo } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const { projects } = usePortfolio();

  const sorted = useMemo(
    () => [...projects].sort((a, b) => Number(b.highlight) - Number(a.highlight)),
    [projects]
  );

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-28 md:px-10">
      <div className="mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          Projects
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-neutral-100 sm:text-4xl">
          Selected work
        </h2>
      </div>

      <div>
        {sorted.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            stickyOffset={96 + index * 16}
          />
        ))}
      </div>
    </section>
  );
}
