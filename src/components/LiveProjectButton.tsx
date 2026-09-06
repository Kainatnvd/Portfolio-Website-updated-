interface LiveProjectButtonProps {
  href?: string;
  label?: string;
  onClick?: () => void;
  className?: string;
}

export default function LiveProjectButton({
  href,
  label = "Live Project",
  onClick,
  className = "",
}: LiveProjectButtonProps) {
  const baseClass = `inline-flex items-center justify-center rounded-full
    border-2 border-neutral-200
    px-8 py-3 sm:px-10 sm:py-3.5
    text-neutral-200 font-medium uppercase tracking-widest
    text-sm sm:text-base
    transition-colors duration-200 hover:bg-white/10 active:bg-white/20
    whitespace-nowrap ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClass}>
      {label}
    </button>
  );
}
