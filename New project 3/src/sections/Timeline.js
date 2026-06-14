import { html, FaCalendarDays, FaGraduationCap, FaTrophy, FaBriefcase, FaCheck } from "../lib/runtime.js";
import { timeline } from "../data/site.js";
import { SectionHeading, GlassCard } from "../components/ui.js";

const timelineIcons = [FaGraduationCap, FaBriefcase, FaTrophy, FaCheck];

export function Timeline() {
  return html`
    <section id="timeline" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <${SectionHeading}
          eyebrow="Timeline"
          title="Education and achievements presented like a clear journey."
          description="This section shows progression over time so recruiters or clients can quickly understand the story behind the portfolio."
        />

        <div className="relative space-y-5">
          <div className="absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-sky-400 via-violet-400 to-transparent md:block" />
          ${timeline.map(
            (item, index) => html`
              <div className="relative md:pl-16">
                <div className="glass-panel relative rounded-3xl p-5 md:p-6">
                  <div className="absolute -left-[9px] top-7 hidden h-4 w-4 rounded-full border-4 border-slate-950 bg-sky-400 shadow-[0_0_0_8px_rgba(56,189,248,0.08)] md:block dark:border-[#050816]"></div>

                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/20 to-violet-400/20 text-sky-200">
                        <${timelineIcons[index]} />
                      </div>
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                          <${FaCalendarDays} className="text-[10px]" />
                          ${item.year}
                        </div>
                        <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">
                          ${item.title}
                        </h3>
                        <p className="max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                          ${item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `
          )}
        </div>
      </div>
    </section>
  `;
}
