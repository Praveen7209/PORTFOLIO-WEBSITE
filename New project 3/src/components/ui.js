import { React, html } from "../lib/runtime.js";

export function GlassCard({ children, className = "" }) {
  return html`
    <div
      className=${`glass-panel animated-border rounded-3xl p-5 shadow-glowSoft ${className}`}
    >
      ${children}
    </div>
  `;
}

export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return html`
    <div className=${`mb-10 flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <p className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200 dark:text-sky-300">
        ${eyebrow}
      </p>
      <div className="space-y-3">
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
          ${title}
        </h2>
        ${description
          ? html`<p className="text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">${description}</p>`
          : null}
      </div>
    </div>
  `;
}

export function ActionLink({
  href,
  children,
  icon,
  variant = "primary",
  target,
  download,
  className = ""
}) {
  const styles =
    variant === "secondary"
      ? "border border-slate-200/20 bg-white/5 text-slate-100 hover:bg-white/10 dark:border-slate-700/50 dark:bg-slate-950/20 dark:text-slate-100"
      : "bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-500 text-slate-950 shadow-[0_12px_40px_rgba(56,189,248,0.24)] hover:shadow-[0_16px_52px_rgba(139,92,246,0.3)]";

  return html`
    <a
      href=${href}
      target=${target}
      download=${download}
      className=${`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      ${children}
      ${icon
        ? html`<span className="text-base leading-none">${icon}</span>`
        : null}
    </a>
  `;
}

export function Chip({ children, className = "" }) {
  return html`
    <span
      className=${`inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium tracking-wide text-slate-200 backdrop-blur-xl transition hover:border-sky-300/30 hover:bg-sky-400/10 hover:text-white dark:text-slate-200 ${className}`}
    >
      ${children}
    </span>
  `;
}
