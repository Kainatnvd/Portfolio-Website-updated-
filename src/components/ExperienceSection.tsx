import { motion } from "framer-motion";
import { usePortfolio } from "../hooks/usePortfolio";

export default function ExperienceSection() {
  const { experience } = usePortfolio();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <div className="mb-14 flex items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
            Experience
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-neutral-100 sm:text-4xl">
            Where I&apos;ve worked
          </h2>
        </div>
      </div>

      <div className="divide-y divide-neutral-900 border-t border-neutral-900">
        {experience.map((role, index) => (
          <motion.div
            key={`${role.company}-${role.period}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
            className="grid grid-cols-1 gap-4 py-10 md:grid-cols-[80px_1fr_auto] md:gap-8"
          >
            <span className="font-mono text-sm text-neutral-600">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3 className="text-xl font-medium text-neutral-100">
                {role.role} <span className="text-neutral-500">— {role.company}</span>
              </h3>
              <p className="mt-1 text-sm text-neutral-500">{role.location}</p>
              <p className="prose-body mt-4 max-w-[62ch] text-sm leading-relaxed text-neutral-400 md:text-base">
                {role.summary}
              </p>
              <ul className="mt-5 space-y-2">
                {role.highlights.slice(0, 3).map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm text-neutral-400">
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full"
                      style={{
                        backgroundImage:
                          "linear-gradient(100deg, #8B5CF6, #D946EF, #F97316)",
                      }}
                    />
                    <span className="prose-body">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:text-right">
              <span className="inline-block whitespace-nowrap rounded-full border border-neutral-800 px-4 py-1.5 font-mono text-xs text-neutral-400">
                {role.period}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
