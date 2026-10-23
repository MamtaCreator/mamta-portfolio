# Mamta — Portfolio (React + Vite)

## Run locally
```bash
npm install
npm run dev      # opens http://localhost:5173
```

## Build for production
```bash
npm run build    # output in dist/
```
Deploy the `dist/` folder to Vercel, Netlify, GitHub Pages or Azure Static Web Apps.

## Edit content
- **Text, links, projects, jobs, tech stack, articles, WhatsApp:** `src/data.js`
  - In `stack`, a trailing `*` highlights a tool.
- **Photos:** `src/assets/mamta-cutout.webp` (hero cut-out, transparent background) and `src/assets/mamta-event.jpg` (about).
- **Colors & fonts:** CSS variables at the top of `src/styles.css`.

## Structure
```
src/
  App.jsx                  page layout + scroll reveal
  data.js                  all site content
  styles.css               design tokens + styles
  components/
    Hero.jsx               3D portrait in purple ring with orbiting skill chips
    Sections.jsx           Nav, Expertise, Stack, Portfolio, CTA, About, Experience, Articles, Footer, WhatsApp button
    Icons.jsx              SVG icons and project thumbnails
```
