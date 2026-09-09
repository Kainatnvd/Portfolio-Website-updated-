# Kainat's Developer Portfolio

My personal software engineering portfolio built with React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React. 

Designed and engineered with a dark aesthetic featuring vibrant purple/magenta accent glows, chrome-gradient display headlines, interactive micro-animations, a cursor-magnet avatar, scroll-stacked project cards, and a continuous marquee ticker.

---

## Live Demo

- **Live Site:** [kainat-naveedportfolio.vercel.app](https://kainat-naveedportfolio.vercel.app/)

---

## Tech Stack & Architecture

- **Core:** React 18 / Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS, Custom CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Kanit & JetBrains Mono

---

## Key Features & Design Highlights

- **Interactive Magnet Hero:** Custom 3D-style avatar engineered with physics-based cursor attraction.
- **Scroll-Stacked Project Showcase:** Cards layer and scale dynamically using Framer Motion scroll hooks (`useScroll`, `useTransform`) as you navigate down the page.
- **Full Responsiveness:** Tailored layout physics, custom viewports, and mobile-specific SVG/CSS optimizations.
- **Accessibility Integration:** Respects system-level accessibility settings like `prefers-reduced-motion` across all animation modules.

---

## Project Structure


```

src/
├── components/
│   ├── Navbar.tsx             # Navigation bar with smooth scroll anchors
│   ├── SocialLinks.tsx        # Dynamic gradient pill links for social channels
│   ├── HeroSection.tsx        # Hero headline & cursor-magnet avatar
│   ├── AboutSection.tsx       # Bio & core technical competencies grid
│   ├── MarqueeSection.tsx     # Continuous animated skills ticker
│   ├── ExperienceSection.tsx  # Work history & engineering impact timeline
│   ├── ServicesSection.tsx    # Technical offerings & domain specializations
│   ├── ProjectsSection.tsx    # Scroll-scaling sticky project container
│   ├── ProjectCard.tsx        # Individual project card architecture
│   ├── ResumeSection.tsx      # Interactive resume section & PDF download CTA
│   ├── TestimonialsSection.tsx # Continuous recommendation marquee
│   ├── Footer.tsx             # Multi-column footer & contact details
│   ├── FadeIn.tsx             # Shared scroll-entrance animation wrapper
│   ├── Magnet.tsx             # Interactive cursor-magnet logic
│   ├── AnimatedText.tsx       # Letter-by-letter scroll reveal component
│   ├── ContactButton.tsx      # Primary gradient action button
│   └── LiveProjectButton.tsx  # Outlined external project link button
├── data/
│   └── portfolio.json         # Data source for all profile content & projects
├── hooks/
│   └── usePortfolio.ts        # Typed accessor hook
├── types/
│   └── portfolio.ts           # TypeScript interfaces
├── App.tsx                    # Main app composition
├── index.css                  # Custom CSS variables, Tailwind directives, & keyframes
└── main.tsx                   # Application entry point

```

---

## Contact & Links

**Kainat Naveed**
- **Portfolio:** [kainat-naveedportfolio.vercel.app](https://kainat-naveedportfolio.vercel.app/)
- **LinkedIn:** [linkedin.com/in/kainat-naveed-170850190](https://linkedin.com/in/kainat-naveed-170850190)
- **GitHub:** [@Kainatnvd](https://github.com/Kainatnvd)
- **Email:** [kainat22nvd@gmail.com](mailto:kainat22nvd@gmail.com)
