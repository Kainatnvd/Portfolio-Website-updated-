import { useEffect, useMemo, useRef } from "react";
import { usePortfolio } from "../hooks/usePortfolio";

export default function MarqueeSection() {
  const { skills } = usePortfolio();
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const allItems = useMemo(
    () => skills.categories.flatMap((category) => category.items),
    [skills.categories]
  );
  const midpoint = Math.ceil(allItems.length / 2);
  const row1 = allItems.slice(0, midpoint);
  const row2 = allItems.slice(midpoint);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const scrolled = window.scrollY - sectionTop + window.innerHeight;
      const offset = scrolled * 0.3;

      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderRow = (items: string[]) =>
    [...items, ...items, ...items].map((item, i) => (
      <span
        key={`${item}-${i}`}
        className="flex-shrink-0 whitespace-nowrap rounded-full border border-neutral-800 bg-neutral-950 px-6 py-4 font-mono text-sm uppercase tracking-widest text-neutral-400 sm:text-base"
      >
        {item}
      </span>
    ));

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        <div className="w-full overflow-hidden">
          <div
            ref={row1Ref}
            className="flex gap-3"
            style={{ willChange: "transform", transform: "translateX(-200px)" }}
          >
            {renderRow(row1)}
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div
            ref={row2Ref}
            className="flex gap-3"
            style={{ willChange: "transform", transform: "translateX(200px)" }}
          >
            {renderRow(row2)}
          </div>
        </div>
      </div>
    </section>
  );
}
