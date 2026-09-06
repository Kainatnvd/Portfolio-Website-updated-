import FadeIn from "./FadeIn";
import { usePortfolio } from "../hooks/usePortfolio";

export default function ServicesSection() {
  const { services = [] } = usePortfolio();

  return (
    <section className="flex scroll-mt-20 flex-col rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2
          className="mb-16 w-full text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="flex w-full flex-col items-center">
        {services.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            y={30}
            className="flex w-full max-w-5xl flex-col items-center"
          >
            {i > 0 && <div className="w-full border-t border-black/10" />}
            <div className="flex w-full items-start gap-6 py-8 sm:gap-8 sm:py-10 md:gap-10 md:py-12">
              <span
                className="flex-shrink-0 font-black uppercase leading-none text-[#0C0C0C]"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {service.number}
              </span>

              <div className="flex flex-col gap-2 pt-1 sm:gap-4 md:gap-5">
                <span
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {service.name}
                </span>
                <span
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]/60"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {service.description}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
