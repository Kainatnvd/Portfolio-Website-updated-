import { Quote } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";
import type { Testimonial } from "../types/portfolio";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initial = testimonial.name.trim().charAt(0).toUpperCase();

  return (
    <div className="mx-3 flex w-[340px] shrink-0 flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-950 p-7 sm:w-[400px]">
      <Quote
        size={28}
        strokeWidth={1.5}
        className="mb-5 text-neutral-700"
        aria-hidden
      />
      <p className="prose-body flex-1 text-base italic leading-relaxed text-neutral-300">
        “{testimonial.quote}”
      </p>

      <div className="mt-7 flex items-center gap-3 border-t border-neutral-900 pt-5">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-neutral-950"
          style={{ backgroundColor: testimonial.avatarColor }}
          aria-hidden
        >
          {initial}
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-neutral-100">
            {testimonial.name}
          </p>
          <p className="text-xs text-neutral-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const { testimonials } = usePortfolio();
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="border-y border-neutral-900 bg-black py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          Testimonials
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-neutral-100 sm:text-4xl">
          What people say
        </h2>
      </div>

      <div className="marquee-row relative mt-14 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent"
        />

        <div className="marquee-track py-2">
          {loop.map((testimonial, i) => (
            <TestimonialCard key={`${testimonial.id}-${i}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
