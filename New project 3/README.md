# Praveen Kumar Sharma Portfolio

A modern, responsive personal portfolio built for internships, freelance leads, and project showcases.

## Tech Stack

- React
- Tailwind CSS
- Framer Motion
- React Icons

## Features

- Premium dark-first visual style with light mode toggle
- Animated typing hero
- Particle background
- Scroll progress indicator
- Animated stats
- Projects, timeline, testimonials, resume, contact, and social sections
- Mobile-first responsive layout
- SEO-friendly meta tags and structured data

## Folder Structure

```text
.
├── index.html
├── package.json
├── vite.config.js
├── server.mjs
├── README.md
├── public
│   └── profile-placeholder.svg
└── src
    ├── App.js
    ├── main.js
    ├── styles.css
    ├── data
    │   └── site.js
    ├── hooks
    │   ├── useCountUp.js
    │   ├── useTheme.js
    │   └── useTypingText.js
    ├── lib
    │   └── runtime.js
    ├── components
    │   ├── effects.js
    │   ├── navigation.js
    │   └── ui.js
    └── sections
        ├── About.js
        ├── Contact.js
        ├── Hero.js
        ├── Projects.js
        ├── Resume.js
        ├── SocialLinks.js
        ├── Skills.js
        ├── Stats.js
        ├── Testimonials.js
        └── Timeline.js
```

## Local Setup

This project is written so it can run as a browser-based React app without a bundler step. You can:

1. Open `index.html` directly in a browser.
2. Run `node server.mjs` to preview it locally without installing packages.
3. Install Node dependencies and run `npm run dev` if you want to use Vite as a dev server.

If you choose the Vite workflow:

```bash
npm install
npm run dev
```

If you want the lightweight static server used for browser verification in this workspace:

```bash
node server.mjs
```

## Customization

- Replace the placeholder email in `src/data/site.js` with your real inbox.
- Replace the placeholder social URLs in `src/data/site.js` with your actual profiles.
- Replace `public/resume.pdf` with your real resume PDF.
- Swap the placeholder profile SVG with a real image whenever you have one.

## Deploying to Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Use the default settings if deploying as a static site.
4. If you enable the Vite workflow, set the build command to `npm run build` and the output directory to `dist`.
5. Add your custom domain and update the SEO meta tags in `index.html` when ready.

## Notes

- The resume and contact email are placeholders so the portfolio can be shipped cleanly even before the final assets are ready.
- Testimonials are clearly marked as sample-style placeholders so they can be replaced with real feedback later.
