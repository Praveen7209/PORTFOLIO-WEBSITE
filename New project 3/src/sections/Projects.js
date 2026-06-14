import { html, FaArrowUpRightFromSquare, FaGithub, FaCode, FaRobot, FaDumbbell, FaCloud } from "../lib/runtime.js";
import { projects } from "../data/site.js";
import { SectionHeading, GlassCard, Chip, ActionLink } from "../components/ui.js";

const accentMap = [FaRobot, FaDumbbell, FaCode, FaCloud];
const gradientMap = [
  "from-sky-400/20 via-cyan-400/10 to-transparent",
  "from-emerald-400/20 via-teal-400/10 to-transparent",
  "from-violet-400/20 via-fuchsia-400/10 to-transparent",
  "from-amber-400/20 via-orange-400/10 to-transparent"
];

export function Projects() {
  return html`
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <${SectionHeading}
          eyebrow="Projects"
          title="Sample projects designed to signal both skill and taste."
          description="Every card shows a product-friendly angle, a modern stack, and a clear path to GitHub and live demos."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          ${projects.map(
            (project, index) => html`
              <${GlassCard} className="group h-full overflow-hidden">
                <div className=${`absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${gradientMap[index]}`} />
                <div className="relative flex h-full flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                        Project 0${index + 1}
                      </div>
                      <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white">
                        ${project.name}
                      </h3>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/8 text-sky-200 transition group-hover:scale-110">
                      ${html`<${accentMap[index]} />`}
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    ${project.summary}
                  </p>

                  <div className="grid gap-3 sm:grid-cols-3">
                    ${project.highlights.map(
                      (item) => html`
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                          ${item}
                        </div>
                      `
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    ${project.stack.map((item) => html`<${Chip}>${item}</${Chip}>`)}
                  </div>

                  <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                    <${ActionLink}
                      href=${project.github}
                      target="_blank"
                      variant="secondary"
                      icon=${html`<${FaGithub} />`}
                      className="w-full sm:w-auto"
                    >
                      GitHub
                    </${ActionLink}>
                    <${ActionLink}
                      href=${project.demo}
                      target="_blank"
                      icon=${html`<${FaArrowUpRightFromSquare} />`}
                      className="w-full sm:w-auto"
                    >
                      Live Demo
                    </${ActionLink}>
                  </div>
                </div>
              </${GlassCard}>
            `
          )}
        </div>
      </div>
    </section>
  `;
}
