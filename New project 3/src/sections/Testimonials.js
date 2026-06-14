import { html, FaQuoteLeft, FaStar } from "../lib/runtime.js";
import { testimonials } from "../data/site.js";
import { SectionHeading, GlassCard } from "../components/ui.js";

export function Testimonials() {
  return html`
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <${SectionHeading}
          eyebrow="Testimonials"
          title="Sample feedback placeholders that can be swapped for real proof later."
          description="These cards are intentionally labeled as sample-style testimonials so the site stays honest while still looking polished and complete."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          ${testimonials.map(
            (item) => html`
              <${GlassCard} className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-200">
                    <${FaQuoteLeft} />
                  </span>
                  <div className="flex gap-1 text-amber-300">
                    ${Array.from({ length: 5 }, (_, index) => html`<${FaStar} key=${index} className="text-xs" />`)}
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">${item.quote}</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold text-slate-950 dark:text-white">${item.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">${item.role}</p>
                </div>
              </${GlassCard}>
            `
          )}
        </div>
      </div>
    </section>
  `;
}
