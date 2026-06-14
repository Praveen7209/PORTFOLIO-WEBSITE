import {
  FaArrowRight,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaLocationDot,
  FaLinkedinIn,
  FaXTwitter,
  FaRobot,
  FaDumbbell,
  FaDownload,
  FaCloud,
  FaBolt,
  FaShieldHeart,
  FaBriefcase,
  FaCalendarDays,
  html,
  motion
} from "../lib/runtime.js";
import { personal, heroPhrases, socialLinks } from "../data/site.js";
import { useTypingText } from "../hooks/useTypingText.js";
import { ActionLink, Chip, GlassCard } from "../components/ui.js";
import { ParticleBackground } from "../components/effects.js";
import { React } from "../lib/runtime.js";

const { useMemo } = React;

function socialIcon(label) {
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

export function Hero() {
  const typingText = useTypingText(heroPhrases, {
    typeSpeed: 68,
    deleteSpeed: 34,
    pause: 1400
  });

  const spotlightTags = useMemo(
    () => [
      { label: "AI Focus", icon: html`<${FaRobot} />` },
      { label: "Web Dev", icon: html`<${FaCode} />` },
      { label: "Fitness Mindset", icon: html`<${FaDumbbell} />` },
      { label: "Open for Work", icon: html`<${FaBriefcase} />` }
    ],
    []
  );

  return html`
    <section id="home" className="relative overflow-hidden px-4 pt-6 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <${ParticleBackground} />
      </div>
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div className="content-wrap relative z-10">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <${Chip} className="border-sky-400/20 bg-sky-400/10 text-sky-100">
              Aspiring Software Engineer
            </${Chip}>
            <${Chip} className="border-emerald-400/20 bg-emerald-400/10 text-emerald-100">
              MIT Bengaluru
            </${Chip}>
          </div>

          <h1 className="max-w-4xl font-display text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-7xl">
            Crafting futuristic web experiences for
            <span className="text-gradient"> internships, freelance clients, and product ideas.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            ${personal.name} is a BTech IT student who enjoys turning strong fundamentals in Python, Java, web
            development, and problem solving into polished digital experiences that feel modern, fast, and
            purposeful.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <${FaLocationDot} className="text-xs text-sky-300" />
              ${personal.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <${FaCalendarDays} className="text-xs text-violet-300" />
              Internship season ready
            </span>
          </div>

          <div className="mt-8 flex min-h-[72px] items-center rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-lg font-semibold text-slate-100 backdrop-blur-xl sm:text-xl">
            <span className="mr-3 text-slate-400">Currently:</span>
            <span className="text-gradient">${typingText}</span>
            <span className="ml-1 animate-pulse text-sky-300">|</span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <${ActionLink} href="#projects" icon=${html`<${FaArrowRight} />`}>
              View Projects
            </${ActionLink}>
            <${ActionLink}
              href=${personal.resumeUrl}
              download
              variant="secondary"
              icon=${html`<${FaDownload} />`}
            >
              Download Resume
            </${ActionLink}>
            <${ActionLink} href="#contact" variant="secondary" icon=${html`<${FaEnvelope} />`}>
              Contact Me
            </${ActionLink}>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            ${spotlightTags.map(
              (tag) => html`
                <div className="glass-panel flex items-center gap-3 rounded-2xl px-4 py-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-sky-300">
                    ${tag.icon}
                  </span>
                  <span className="text-sm font-medium text-slate-100">${tag.label}</span>
                </div>
              `
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="text-sm text-slate-500 dark:text-slate-400">Social links:</span>
            <div className="flex flex-wrap gap-3">
              ${socialLinks.map(
                (social) => html`
                  <a
                    href=${social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label=${social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                  >
                    ${socialIcon(social.label)}
                  </a>
                `
              )}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="hero-glow absolute inset-10 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="hero-glow absolute inset-0 rounded-full bg-violet-400/10 blur-3xl" />

          <${GlassCard} className="relative overflow-hidden p-4 sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_45%)]" />
            <div className="relative grid gap-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-sky-200/80">Profile</p>
                  <h2 className="mt-2 font-display text-2xl font-bold text-slate-950 dark:text-white">
                    ${personal.name}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">${personal.role}</p>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                  Available
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/50 p-3">
                <img
                  src="./public/profile-placeholder.svg"
                  alt="Professional profile image placeholder"
                  className="aspect-square w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Focus</p>
                  <p className="mt-2 text-sm font-medium text-white">AI, web products, and freelance-ready UX</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Approach</p>
                  <p className="mt-2 text-sm font-medium text-white">Build fast, polish details, ship with intent</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-sky-400/10 p-4 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-200">
                    <${FaRobot} />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-950 dark:text-white">AI Curious</p>
                </div>
                <div className="rounded-2xl bg-violet-400/10 p-4 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/15 text-violet-200">
                    <${FaBolt} />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-950 dark:text-white">Fast Iteration</p>
                </div>
                <div className="rounded-2xl bg-emerald-400/10 p-4 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-200">
                    <${FaShieldHeart} />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-950 dark:text-white">Reliable Delivery</p>
                </div>
              </div>
            </div>
          </${GlassCard}>
        </div>
      </div>
    </section>
  `;
}
