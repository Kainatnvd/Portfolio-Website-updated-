# Portfolio

A personal portfolio site for a senior software engineer, built with React 18 (React 19 runtime via the latest Vite template), TypeScript, Vite, Tailwind CSS, Framer Motion, and lucide-react.

Dark, chrome-gradient headlines, a purple → magenta → orange accent, numbered experience/services/project rows, sticky-stacked project cards, and a CSS-driven marquee for testimonials.

## Install

```bash
npm install
```

## Scripts

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Start the local dev server with hot reload     |
| `npm run build`   | Type-check (`tsc -b`) and build for production |
| `npm run preview` | Preview the production build locally           |
| `npm run lint`    | Run oxlint over the source                     |

The production build outputs to `dist/`.

## Project structure

```
src/
├── components/
│   ├── Navbar.tsx              # In-hero nav row, smooth-scroll links
│   ├── SocialLinks.tsx         # Gradient pill icon links; hides empty ones
│   ├── HeroSection.tsx         # Giant headline + cursor-magnet avatar
│   ├── AboutSection.tsx        # Scroll-revealed bio + skills grid
│   ├── MarqueeSection.tsx      # Scroll-linked dual-row skills band
│   ├── ExperienceSection.tsx   # Giant-numeral work history rows
│   ├── ServicesSection.tsx     # White "flip" section (hardcoded, see TODO)
│   ├── ProjectsSection.tsx     # Scroll-scaling sticky project cards
│   ├── ProjectCard.tsx         # A single scaling project card
│   ├── TestimonialsSection.tsx # Emoji-decorated infinite marquee
│   ├── Footer.tsx              # 3-column footer + contact info
│   ├── FadeIn.tsx              # Shared scroll/entrance fade animation
│   ├── Magnet.tsx              # Cursor-magnet wrapper (used by the avatar)
│   ├── AnimatedText.tsx        # Letter-by-letter scroll-reveal text
│   ├── ContactButton.tsx       # Gradient pill CTA
│   └── LiveProjectButton.tsx   # Outlined pill link
├── data/
│   └── portfolio.json          # ALL editable content lives here
├── hooks/
│   └── usePortfolio.ts         # Typed accessor for portfolio.json
├── types/
│   └── portfolio.ts            # TypeScript types for the content shape
├── App.tsx                     # Composes the page from the sections above
├── index.css                   # Tailwind import, theme tokens, custom CSS
└── main.tsx                    # React entry point
```

No component hardcodes profile, experience, project, or testimonial copy — everything comes from `usePortfolio()`, which reads `src/data/portfolio.json`. The one exception is `ServicesSection.tsx`, which currently ships with 4 hardcoded rows (Backend, AI/LLM, Frontend, Cloud) — see the `TODO` comment at the top of that file for how to move it into the JSON data once a `services[]` shape is settled.

**Note on navigation:** the nav row lives inside `HeroSection`/`Navbar.tsx` rather than as a page-wide fixed header, matching the reference design. That means the nav links are only visible while you're near the top of the page — there's no persistent way to jump between sections once you've scrolled past the hero. If you'd like a sticky header back, say the word and I can add one back in this same visual style.

## Editing content

Everything on the site — your name, bio, skills, work history, projects, education, and testimonials — lives in one file:

```
src/data/portfolio.json
```

Open it and edit the values directly; no component code needs to change. A few notes:

- **Social links** (`profile.social`): leave any field (`github`, `instagram`, `linkedin`, `email`, `phone`, `website`) as an empty string `""` to hide that link everywhere it appears (hero, footer). Don't delete the key — just empty the value.
- **`profile.avatarSvg`**: a raw SVG string rendered in the hero. Keep it a single-line, self-contained `<svg>...</svg>` string (no external references).
- **`experience[]` / `projects[]`**: order in the JSON array is the display order, except projects are re-sorted so any project with `"highlight": true` appears first.
- **`projects[].link`**: leave empty (`""`) to hide the "Live project" button on that card.
- **`projects[].image`**: leave empty (`""`) to fall back to a dark placeholder card with the project title overlaid — you don't need a real image for every project.
- **`experience[].highlights`**: only the first 3 items are shown per role, so put the most important bullets first.
- **`testimonials[].avatarColor`**: any valid CSS color (hex works well); used as the background of the initial-letter avatar.

After editing the JSON, TypeScript will flag any structural mistakes (missing fields, wrong types) the next time you run `npm run dev` or `npm run build`, since the file is typed against `src/types/portfolio.ts`.

## Design notes

- Background `#0C0C0C`, cards on `#131313`/`#0a0a0a` with `neutral-800/900` borders.
- Chrome/silver headline treatment: `.hero-heading` in `src/index.css` (linear gradient text clip).
- Gradient CTA/social pills: `.pill-gradient` in `src/index.css`.
- Font: [Kanit](https://fonts.google.com/specimen/Kanit) for all text (including `font-black`/900-weight display headlines), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) for small monospace labels, both loaded in `index.html`.
- Testimonial marquee runs via a CSS keyframe animation on a duplicated list (`.testimonial-track`, `@keyframes testimonial-marquee`), pauses on hover, and switches to a manual horizontal scroll-snap list under `prefers-reduced-motion: reduce`.
- The hero avatar uses `Magnet.tsx` to drift toward the cursor when it's nearby, and does nothing under `prefers-reduced-motion: reduce`.
- The project cards in `ProjectsSection`/`ProjectCard` use Framer Motion's `useScroll`/`useTransform` to scale each sticky card down slightly as the next one arrives, creating a stacked-deck effect while scrolling.
- All sections use `scroll-mt-20` so the browser doesn't cover the section heading when jumping via anchor links (though note the nav itself isn't persistent — see the note above).
