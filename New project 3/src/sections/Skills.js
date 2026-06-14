import { html, FaCode, FaLaptopCode, FaRobot, FaChartLine, FaShieldHeart, FaBolt, FaJava, FaPython } from "../lib/runtime.js";
import { skillGroups } from "../data/site.js";
import { SectionHeading, GlassCard, Chip } from "../components/ui.js";

const icons = {
  programming: FaCode,
  laptop: FaLaptopCode,
  spark: FaBolt,
  growth: FaChartLine
};

const accentClasses = [
  "from-sky-400/20 to-cyan-400/10",
  "from-violet-400/20 to-fuchsia-400/10",
  "from-emerald-400/20 to-teal-400/10",
  "from-amber-400/20 to-orange-400/10"
];

const accentText = ["text-sky-200", "text-violet-200", "text-emerald-200", "text-amber-200"];

function skillIcon(title, iconKey) {
  const Component = icons[iconKey] || FaShieldHeart;
  return html`<${Component} />`;
}

export function Skills() {
  return html`
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <${SectionHeading}
          eyebrow="Skills"
          title="A focused stack shaped for building and learning fast."
          description="The goal is to present a candidate who is technically grounded, visually polished, and ready to grow inside an internship or freelance engagement."
        />

        <div className="grid gap-6 md:grid-cols-2">
          ${skillGroups.map(
            (group, index) => html`
              <${GlassCard} className="h-full">
                <div className="flex items-center gap-4">
                  <div className=${`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accentClasses[index]} ${accentText[index]}`}>
                    ${skillIcon(group.title, group.icon)}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Category</p>
                    <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white">${group.title}</h3>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  ${group.items.map((item) => html`<${Chip}>${item}</${Chip}>`)}
                </div>
              </${GlassCard}>
            `
          )}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="glass-panel rounded-3xl p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Core Languages</p>
            <p className="mt-3 text-lg font-semibold text-white">Python, Java, JavaScript</p>
          </div>
          <div className="glass-panel rounded-3xl p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Frontend Style</p>
            <p className="mt-3 text-lg font-semibold text-white">Tailwind-first, motion-aware UI</p>
          </div>
          <div className="glass-panel rounded-3xl p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Mindset</p>
            <p className="mt-3 text-lg font-semibold text-white">Practical, consistent, and growth-focused</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
