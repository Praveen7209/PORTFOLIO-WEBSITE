import { html, FaBriefcase, FaCode, FaGraduationCap, FaLocationDot, FaRobot, FaDumbbell, FaCloud } from "../lib/runtime.js";
import { personal, aboutHighlights } from "../data/site.js";
import { ActionLink, Chip, GlassCard, SectionHeading } from "../components/ui.js";

const highlightIcons = [FaCode, FaRobot, FaDumbbell, FaCloud];

export function About() {
  return html`
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <${SectionHeading}
          eyebrow="About Me"
          title="A focused student builder with a strong product mindset."
          description="Praveen Kumar Sharma is building the foundations that matter for internships and client work: clean code, practical problem solving, and a sharp eye for presentation."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <${GlassCard} className="space-y-6">
            <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
              I am a BTech IT student at ${personal.college} who enjoys transforming core CS skills into real
              products. My focus is on learning by building, and on shipping interfaces that feel premium without
              sacrificing speed or usability.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              ${aboutHighlights.map(
                (item, index) => html`
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-200">
                      <${highlightIcons[index]} />
                    </span>
                    <p className="text-sm leading-7 text-slate-200">${item}</p>
                  </div>
                `
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <${Chip}>React + Tailwind</${Chip}>
              <${Chip}>Python + Java</${Chip}>
              <${Chip}>DSA + Calculus</${Chip}>
              <${Chip}>AI + Freelancing</${Chip}>
            </div>
          </${GlassCard}>

          <div className="grid gap-6">
            <${GlassCard}>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-200">
                  <${FaGraduationCap} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Education</p>
                  <p className="font-display text-xl font-semibold text-slate-950 dark:text-white">${personal.college}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Building an engineering profile that combines strong fundamentals with a premium presentation layer
                so future internships and freelance clients can immediately see the quality of the work.
              </p>
            </${GlassCard}>

            <${GlassCard}>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-200">
                  <${FaLocationDot} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Location</p>
                  <p className="font-display text-xl font-semibold text-slate-950 dark:text-white">Bengaluru, India</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Built for remote-friendly opportunities, client projects, and collaboration with teams that value
                clarity, consistency, and polished execution.
              </p>
            </${GlassCard}>

            <${GlassCard}>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-200">
                  <${FaBriefcase} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Goal</p>
                  <p className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                    Internships, freelance clients, and showcase projects
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <${ActionLink} href="#contact" icon=${html`<${FaCode} />`}>
                  Let us build
                </${ActionLink}>
              </div>
            </${GlassCard}>
          </div>
        </div>
      </div>
    </section>
  `;
}
