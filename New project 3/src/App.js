import { html } from "./lib/runtime.js";
import { useTheme } from "./hooks/useTheme.js";
import { ScrollProgress, Navbar, Footer } from "./components/navigation.js";
import { Hero } from "./sections/Hero.js";
import { Stats } from "./sections/Stats.js";
import { About } from "./sections/About.js";
import { Skills } from "./sections/Skills.js";
import { Projects } from "./sections/Projects.js";
import { Timeline } from "./sections/Timeline.js";
import { Testimonials } from "./sections/Testimonials.js";
import { Resume } from "./sections/Resume.js";
import { SocialLinksSection } from "./sections/SocialLinks.js";
import { Contact } from "./sections/Contact.js";

export function App() {
  const { theme, toggleTheme } = useTheme();

  return html`
    <div className="relative min-h-screen overflow-x-hidden">
      <${ScrollProgress} />
      <div className="content-wrap">
        <${Navbar} theme=${theme} onToggleTheme=${toggleTheme} />
        <main>
          <${Hero} />
          <${Stats} />
          <${About} />
          <${Skills} />
          <${Projects} />
          <${Timeline} />
          <${Testimonials} />
          <${Resume} />
          <${SocialLinksSection} />
          <${Contact} />
        </main>
        <${Footer} />
      </div>
    </div>
  `;
}
