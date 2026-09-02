import { useState } from "react";
import { Check, Copy, Phone } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";
import SocialLinks from "./SocialLinks";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const { profile } = usePortfolio();
  const [copied, setCopied] = useState(false);

  const handleScroll = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCopyEmail = async () => {
    if (!profile.social.email) return;
    try {
      await navigator.clipboard.writeText(profile.social.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — fail silently, the email is still visible.
    }
  };

  return (
    <footer id="contact" className="border-t border-neutral-900 bg-[#0c0c0c] px-6 pt-20 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 pb-16 md:grid-cols-3 md:gap-8">
        <div>
          <h3 className="hero-heading text-2xl font-semibold">{profile.name}</h3>
          <p className="mt-3 max-w-xs text-sm text-neutral-500">
            {profile.specialization}
          </p>
          <p className="mt-1 text-sm text-neutral-500">{profile.location}</p>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
            Navigate
          </h4>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleScroll(link.href)}
                  className="text-sm text-neutral-400 transition-colors hover:text-neutral-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
            Reach out
          </h4>

          <div className="mt-5 space-y-4">
            {profile.social.email && (
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${profile.social.email}`}
                  className="text-sm text-neutral-400 transition-colors hover:text-neutral-100"
                >
                  {profile.social.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="flex h-6 w-6 items-center justify-center rounded-full text-neutral-500 transition-colors hover:text-neutral-200"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                </button>
              </div>
            )}

            {profile.social.phone && (
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <Phone size={13} className="text-neutral-500" />
                <span>{profile.social.phone}</span>
              </div>
            )}

            <SocialLinks social={profile.social} variant="plain" className="pt-1" />
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 border-t border-neutral-900 py-8 text-xs text-neutral-600 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with React, TypeScript &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
