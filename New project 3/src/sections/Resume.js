import { html, FaDownload, FaArrowRight, FaCheck, FaBriefcase, FaCode, FaRobot } from "../lib/runtime.js";
import { personal } from "../data/site.js";
import { SectionHeading, GlassCard, ActionLink, Chip } from "../components/ui.js";

export function Resume() {
  return html`
    <section id="resume" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <${SectionHeading}
          eyebrow="Resume Download"
          title="Make the handoff easy with a clear resume CTA."
          description="The button below points to a downloadable resume placeholder. Replace the file with your actual PDF once it is ready."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <${GlassCard} className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-200">
                <${FaDownload} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Resume File</p>
                <p className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                  ${personal.name} Resume
                </p>
              </div>
            </div>

            <p className="text-sm leading-8 text-slate-600 dark:text-slate-300">
              This call to action gives recruiters and clients a fast path to the technical summary, project highlights,
              and contact information. It is built for clarity and easy replacement with a final PDF.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <${ActionLink} href=${personal.resumeUrl} download icon=${html`<${FaDownload} />`}>
                Download Resume
              </${ActionLink}>
              <${ActionLink} href="#contact" variant="secondary" icon=${html`<${FaArrowRight} />`}>
                Contact Me
              </${ActionLink}>
            </div>
          </${GlassCard}>

          <${GlassCard} className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">What is inside</p>
            <div className="space-y-3">
              ${[
                "Clear technical skills summary",
                "Education and project snapshot",
                "Contact and social links",
                "Internship and freelance readiness"
              ].map(
                (item) => html`
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-200">
                      <${FaCheck} className="text-xs" />
                    </span>
                    <p className="text-sm text-slate-200">${item}</p>
                  </div>
                `
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <${Chip}>Internships</${Chip}>
              <${Chip}>Freelance Clients</${Chip}>
              <${Chip}>Project Showcase</${Chip}>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-sky-400/10 p-4 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/15 text-sky-200">
                  <${FaCode} />
                </div>
                <p className="mt-3 text-sm font-semibold text-white">Technical</p>
              </div>
              <div className="rounded-2xl bg-violet-400/10 p-4 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/15 text-violet-200">
                  <${FaRobot} />
                </div>
                <p className="mt-3 text-sm font-semibold text-white">AI Curious</p>
              </div>
              <div className="rounded-2xl bg-emerald-400/10 p-4 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-200">
                  <${FaBriefcase} />
                </div>
                <p className="mt-3 text-sm font-semibold text-white">Ready to Work</p>
              </div>
            </div>
          </${GlassCard}>
        </div>
      </div>
    </section>
  `;
}
