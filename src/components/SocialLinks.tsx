import { Github, Instagram, Linkedin, Mail, Globe, type LucideIcon } from "lucide-react";
import type { SocialLinksData } from "../types/portfolio";

interface SocialLinksProps {
  social: SocialLinksData;
  className?: string;
  iconClassName?: string;
  showLabels?: boolean;
}

interface SocialEntry {
  key: string;
  label: string;
  href: string;
  Icon: LucideIcon;
}

function buildEntries(social: SocialLinksData): SocialEntry[] {
  const entries: SocialEntry[] = [
    { key: "linkedin", label: "LinkedIn", href: social.linkedin ?? "", Icon: Linkedin },
    { key: "github", label: "GitHub", href: social.github ?? "", Icon: Github },
    { key: "instagram", label: "Instagram", href: social.instagram ?? "", Icon: Instagram },
    {
      key: "email",
      label: "Email",
      href: social.email ? `mailto:${social.email}` : "",
      Icon: Mail,
    },
    { key: "website", label: "Website", href: social.website ?? "", Icon: Globe },
  ];

  return entries.filter((entry) => entry.href.trim().length > 0);
}

export default function SocialLinks({
  social,
  className = "",
  iconClassName = "h-3.5 w-3.5 sm:h-4 sm:w-4",
  showLabels = false,
}: SocialLinksProps) {
  const entries = buildEntries(social);

  if (entries.length === 0) return null;

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {entries.map(({ key, label, href, Icon }) => (
        <a
          key={key}
          href={href}
          aria-label={label}
          title={label}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
          className="pill-gradient inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-2 text-white transition duration-200 hover:scale-105 hover:shadow-[0_0_18px_rgba(182,0,168,0.45)] active:scale-100 sm:px-4 sm:py-2.5"
        >
          <Icon className={iconClassName} strokeWidth={2} />
          {showLabels ? (
            <span className="text-[0.65rem] font-medium uppercase tracking-widest sm:text-xs">
              {label}
            </span>
          ) : null}
        </a>
      ))}
    </div>
  );
}
