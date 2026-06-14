import { html, FaEnvelope, FaLinkedinIn, FaGithub, FaXTwitter, FaPaperPlane, FaCheck } from "../lib/runtime.js";
import { React } from "../lib/runtime.js";
import { personal, contactDetails } from "../data/site.js";
import { SectionHeading, GlassCard, ActionLink, Chip } from "../components/ui.js";
import { socialLinks } from "../data/site.js";

const { useState } = React;

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

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState("");

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}\n`
    );

    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setStatus("Your email app should open now. Replace the placeholder email address in the data file when you are ready.");
  };

  return html`
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <${SectionHeading}
          eyebrow="Contact Form"
          title="Make it easy to start a conversation."
          description="This form opens the user's email app so it works without a backend. You can later wire it to Formspree, EmailJS, or a server action."
        />

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <${GlassCard} className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Reach out</p>
              <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white">Let us build something sharp.</h3>
            </div>

            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
              Open to internships, freelance landing pages, AI experiments, and product-focused frontend work.
            </p>

            <div className="space-y-3">
              ${contactDetails.map(
                (item) => html`
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-sm text-slate-400">${item.label}</span>
                    <span className="text-sm font-semibold text-white">${item.value}</span>
                  </div>
                `
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <${Chip}>Internships</${Chip}>
              <${Chip}>Freelance Work</${Chip}>
              <${Chip}>Project Consults</${Chip}>
            </div>

            <div className="space-y-3">
              ${socialLinks.map(
                (social) => html`
                  <a
                    href=${social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-400/10 text-sky-200">
                        ${socialIcon(social.label)}
                      </span>
                      ${social.label}
                    </span>
                    <span className="text-xs uppercase tracking-[0.25em] text-slate-500">Open</span>
                  </a>
                `
              )}
            </div>
          </${GlassCard}>

          <${GlassCard}>
            <form className="space-y-5" onSubmit=${handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-slate-200">
                  <span>Name</span>
                  <input
                    type="text"
                    value=${form.name}
                    onInput=${updateField("name")}
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400/40 focus:ring-2 focus:ring-sky-400/20"
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-slate-200">
                  <span>Email</span>
                  <input
                    type="email"
                    value=${form.email}
                    onInput=${updateField("email")}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400/40 focus:ring-2 focus:ring-sky-400/20"
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm font-medium text-slate-200">
                <span>Message</span>
                <textarea
                  rows="7"
                  value=${form.message}
                  onInput=${updateField("message")}
                  placeholder="Tell me about your idea, internship opportunity, or freelance project..."
                  className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400/40 focus:ring-2 focus:ring-sky-400/20"
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                >
                  <${FaPaperPlane} className="text-xs" />
                  Send Message
                </button>
                <${ActionLink} href=${personal.resumeUrl} download variant="secondary" icon=${html`<${FaEnvelope} />`}>
                  Download Resume
                </${ActionLink}>
              </div>

              ${sent
                ? html`
                    <div className="flex items-start gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                      <span className="mt-0.5 text-emerald-300"><${FaCheck} /></span>
                      <span>${status}</span>
                    </div>
                  `
                : null}

              <p className="text-xs leading-6 text-slate-500 dark:text-slate-400">
                Tip: replace the placeholder email in <code>src/data/site.js</code> with your real inbox before
                deploying.
              </p>
            </form>
          </${GlassCard}>
        </div>
      </div>
    </section>
  `;
}
