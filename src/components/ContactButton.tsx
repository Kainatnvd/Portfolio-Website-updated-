interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function ContactButton({
  label = "Contact Me",
  onClick,
  href,
  className = "",
}: ContactButtonProps) {
  const baseClass = `inline-flex items-center justify-center rounded-full overflow-hidden
    px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
    text-white font-medium uppercase tracking-widest
    text-xs sm:text-sm md:text-base
    transition-opacity duration-200 hover:opacity-90 active:opacity-75
    whitespace-nowrap ${className}`;

  if (href) {
    return (
      <a href={href} className={`pill-gradient ${baseClass}`}>
        {label}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`pill-gradient ${baseClass}`}>
      {label}
    </button>
  );
}
