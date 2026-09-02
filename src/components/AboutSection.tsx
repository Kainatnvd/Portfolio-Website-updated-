import { motion } from "framer-motion";
import { usePortfolio } from "../hooks/usePortfolio";

export default function AboutSection() {
  const { profile, skills } = usePortfolio();

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
            About
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-neutral-100 sm:text-4xl">
            {profile.yearsOfExperience}+ years turning hard problems into
            <span className="gradient-text-accent"> systems that hold.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <p className="prose-body max-w-[62ch] text-base leading-relaxed text-neutral-400 md:text-lg">
            {profile.bio}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-neutral-900 pt-8 sm:grid-cols-3">
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                Role
              </dt>
              <dd className="mt-1 text-sm text-neutral-200">{profile.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                Focus
              </dt>
              <dd className="mt-1 text-sm text-neutral-200">{profile.specialization}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                Based in
              </dt>
              <dd className="mt-1 text-sm text-neutral-200">{profile.location}</dd>
            </div>
          </dl>
        </motion.div>
      </div>

      <div id="skills" className="mt-24 scroll-mt-20">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500"
        >
          Skills
        </motion.span>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.categories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-neutral-900 bg-neutral-950/40 p-6"
            >
              <h3 className="text-sm font-medium text-neutral-200">{category.name}</h3>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
