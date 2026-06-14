import { html, FaGithub, FaLinkedinIn, FaXTwitter, FaEnvelope, FaArrowUpRightFromSquare } from "../lib/runtime.js";
import { socialLinks } from "../data/site.js";
import { SectionHeading, GlassCard } from "../components/ui.js";

function iconFor(label) {
  switch (label) {
    case "GitHub":
      return html`<${FaGithub} />`;
    case "LinkedIn":
      return html`<${FaLinkedinIn} />`;
    case "X / Twitter":
      return html`<${FaXTwitter} />`;
    default:
      return html`<${FaEnvelope} />`;
  }
}

export function SocialLinksSection() {
  return html`
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <${SectionHeading}
          eyebrow="Social Links"
          title="Clear routes to connect across the platforms that matter."
          description="Use these as the public identity layer for recruiters, clients, or anyone who wants to learn more about your work."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          ${socialLinks.map(
            (social) => html`
              <${GlassCard} className="group h-full">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-sky-200 transition group-hover:scale-110">
                    ${iconFor(social.label)}
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Connect</span>
                </div>
                <p className="mt-5 font-display text-xl font-semibold text-slate-950 dark:text-white">
                  ${social.label}
                </p>
                <a
                  href=${social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-200 transition hover:text-white"
                >
                  Visit profile
                  <${FaArrowUpRightFromSquare} className="text-xs" />
                </a>
              </${GlassCard}>
            `
          )}
        </div>
      </div>
    </section>
  `;
}
