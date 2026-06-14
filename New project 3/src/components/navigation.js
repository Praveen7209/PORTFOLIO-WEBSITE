import {
  AnimatePresence,
  FaBars,
  FaDownload,
  FaMoon,
  FaSun,
  FaXmark,
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
  motion,
  useScroll,
  useSpring,
  html
} from "../lib/runtime.js";
import { navLinks, personal, socialLinks } from "../data/site.js";
import { React } from "../lib/runtime.js";
import { ActionLink } from "./ui.js";

const { useEffect, useState } = React;

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

export function ThemeToggle({ theme, onToggle }) {
  return html`
    <button
      type="button"
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick=${onToggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/10 dark:text-slate-100"
    >
      ${theme === "dark" ? html`<${FaSun} className="text-base" />` : html`<${FaMoon} className="text-base" />`}
    </button>
  `;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return html`
    <${motion.div}
      style=${{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-sky-400 via-cyan-400 to-fuchsia-500"
    />
  `;
}

export function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleNavigate = () => setOpen(false);

  return html`
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 shadow-glowSoft">
        <a href="#home" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/30">
            PKS
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="font-display text-sm font-semibold tracking-wide text-slate-950 dark:text-white">
              ${personal.name}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">${personal.role}</span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          ${navLinks.map(
            (link) => html`
              <a
                href=${link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white/8 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/8 dark:hover:text-white"
              >
                ${link.label}
              </a>
            `
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href=${personal.resumeUrl}
            download
            className="hidden items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-400/15 md:inline-flex"
          >
            <${FaDownload} className="text-xs" />
            Resume
          </a>
          <${ThemeToggle} theme=${theme} onToggle=${onToggleTheme} />
          <button
            type="button"
            aria-label="Open menu"
            onClick=${() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:-translate-y-0.5 hover:bg-white/10 lg:hidden"
          >
            ${open ? html`<${FaXmark} />` : html`<${FaBars} />`}
          </button>
        </div>
      </div>

      <${AnimatePresence}>
        ${open
          ? html`
              <${motion.div}
                key="mobile-menu"
                initial=${{ opacity: 0, y: -18, scale: 0.98 }}
                animate=${{ opacity: 1, y: 0, scale: 1 }}
                exit=${{ opacity: 0, y: -12, scale: 0.98 }}
                transition=${{ duration: 0.2 }}
                className="glass-panel mx-auto mt-3 max-w-7xl rounded-3xl p-4 shadow-glowSoft lg:hidden"
              >
                <div className="grid gap-2">
                  ${navLinks.map(
                    (link) => html`
                      <a
                        href=${link.href}
                        onClick=${handleNavigate}
                        className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
                      >
                        ${link.label}
                      </a>
                    `
                  )}
                </div>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <${ActionLink}
                    href=${personal.resumeUrl}
                    download
                    icon=${html`<${FaDownload} />`}
                    className="w-full sm:w-auto"
                  >
                    Download Resume
                  </${ActionLink}>
                  <${ActionLink}
                    href="#contact"
                    variant="secondary"
                    icon=${html`<${FaArrowRight} />`}
                    className="w-full sm:w-auto"
                  >
                    Contact Me
                  </${ActionLink}>
                </div>
              </${motion.div}>
            `
          : null}
      </${AnimatePresence}>
    </header>
  `;
}

export function Footer() {
  return html`
    <footer className="border-t border-white/10 bg-white/5 px-4 py-10 backdrop-blur-xl dark:border-slate-800/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="font-display text-lg font-semibold text-slate-950 dark:text-white">${personal.name}</p>
          <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            Building internship-ready and client-ready web experiences with a premium visual language, thoughtful
            motion, and a focus on results.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          ${navLinks.map(
            (link) => html`
              <a
                href=${link.href}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                ${link.label}
              </a>
            `
          )}
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Designed for internships, freelance clients, and project showcases.</p>
        <div className="flex flex-wrap items-center gap-3">
          ${socialLinks.map(
            (social) => html`
              <a
                href=${social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                ${iconFor(social.label)}
                <span>${social.label}</span>
              </a>
            `
          )}
        </div>
      </div>
    </footer>
  `;
}
