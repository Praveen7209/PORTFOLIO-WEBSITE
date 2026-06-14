import { html, useInView } from "../lib/runtime.js";
import { stats } from "../data/site.js";
import { React } from "../lib/runtime.js";
import { SectionHeading, GlassCard } from "../components/ui.js";
import { useCountUp } from "../hooks/useCountUp.js";

const { useRef } = React;

function StatCard({ stat, active }) {
  const value = useCountUp(stat.value, active);

  return html`
    <${GlassCard} className="text-center">
      <p className="font-display text-4xl font-bold text-slate-950 dark:text-white sm:text-5xl">
        ${value}${stat.suffix}
      </p>
      <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">${stat.label}</p>
    </${GlassCard}>
  `;
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return html`
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl" ref=${ref}>
        <${SectionHeading}
          eyebrow="Highlights"
          title="Animated stats that summarize the portfolio story."
          description="These are not inflated vanity numbers. They are the clearest way to tell the story of a focused student who is building momentum across projects, skills, and career goals."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          ${stats.map((stat) => html`<${StatCard} stat=${stat} active=${inView} />`)}
        </div>
      </div>
    </section>
  `;
}
