import { motion } from "framer-motion";

// TODO: move these rows into src/data/portfolio.json as a `services[]`
// array once the data shape is finalized, and read them via usePortfolio()
// instead of hardcoding them here.
const SERVICES = [
  {
    title: "Backend Engineering",
    description:
      "API design, data modeling, and services built to stay correct and fast as traffic and team size grow.",
  },
  {
    title: "AI / LLM Systems",
    description:
      "Retrieval pipelines, evaluation harnesses, and production-grade integrations around large language models.",
  },
  {
    title: "Frontend Engineering",
    description:
      "Interfaces built with React and TypeScript that stay maintainable long after the first release ships.",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Kubernetes, CI/CD, and infrastructure-as-code set up so deploys are boring and rollbacks are fast.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <div className="mb-14">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          Services
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-neutral-100 sm:text-4xl">
          How I can help
        </h2>
      </div>

      <div className="divide-y divide-neutral-900 border-t border-neutral-900">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
            className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[80px_1fr] md:gap-8"
          >
            <span className="font-mono text-sm text-neutral-600">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-xl font-medium text-neutral-100">{service.title}</h3>
              <p className="prose-body mt-2 max-w-[62ch] text-sm leading-relaxed text-neutral-400 md:text-base">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
