import { Github, Instagram, Linkedin, Mail, Globe } from "lucide-react";
import type { SocialLinksData } from "../types/portfolio";

interface SocialLinksProps {
  social: SocialLinksData;
  variant?: "pill" | "plain";
  className?: string;
}

interface SocialEntry {
  key: keyof SocialLinksData;
  href: string;
  label: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
}

function buildEntries(social: SocialLinksData): SocialEntry[] {
  const entries: SocialEntry[] = [
    { key: "github", href: social.github ?? "", label: "GitHub", icon: Github },
    { key: "linkedin", href: social.linkedin ?? "", label: "LinkedIn", icon: Linkedin },
    { key: "instagram", href: social.instagram ?? "", label: "Instagram", icon: Instagram },
    {
      key: "email",
      href: social.email ? `mailto:${social.email}` : "",
      label: "Email",
      icon: Mail,
    },
    { key: "website", href: social.website ?? "", label: "Website", icon: Globe },
  ];

  return entries.filter((entry) => entry.href.trim().length > 0);
}

export default function SocialLinks({ social, variant = "pill", className = "" }: SocialLinksProps) {
  const entries = buildEntries(social);

  if (entries.length === 0) return null;

  if (variant === "plain") {
    return (
      <div className={`flex flex-wrap items-center gap-4 ${className}`}>
        {entries.map(({ key, href, label, icon: Icon }) => (
          <a
            key={key}
            href={href}
            target={key === "email" ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={label}
            className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-neutral-100"
          >
            <Icon size={16} strokeWidth={1.75} />
            <span>{label}</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {entries.map(({ key, href, label, icon: Icon }) => (
        <a
          key={key}
          href={href}
          target={key === "email" ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={label}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950/60 text-neutral-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-fuchsia-500/50 hover:text-neutral-50 hover:shadow-[0_0_20px_-6px_rgba(217,70,239,0.55)]"
        >
          <Icon size={18} strokeWidth={1.75} />
        </a>
      ))}
    </div>
  );
}
