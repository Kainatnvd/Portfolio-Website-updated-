const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 pt-6 md:px-10 md:pt-8">
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={handleClick(link.href)}
          className="text-xs font-medium uppercase tracking-wider text-neutral-200 transition-opacity duration-200 hover:opacity-70 sm:text-sm md:text-lg lg:text-[1.4rem]"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
