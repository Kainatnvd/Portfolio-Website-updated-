import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { profile } = usePortfolio();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-neutral-900 bg-[#0c0c0c]/85 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#home"
          onClick={handleNavClick("#home")}
          className="font-mono text-sm tracking-wide text-neutral-200"
        >
          {profile.shortName}<span className="text-fuchsia-400">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={handleNavClick(item.href)}
                className="text-xs tracking-[0.15em] text-neutral-400 transition-colors hover:text-neutral-50"
              >
                {item.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={handleNavClick("#contact")}
          className="hidden rounded-full px-5 py-2 text-xs font-medium text-neutral-50 gradient-accent md:inline-block"
        >
          Let's talk
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-neutral-200 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-neutral-900 bg-[#0c0c0c] px-6 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick(item.href)}
                  className="text-sm tracking-wide text-neutral-300 hover:text-neutral-50"
                >
                  {item.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
