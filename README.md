# Lavish Kumar — Portfolio

Built with React, Vite and Motion. The layout takes its cues from cartooneast.in: full-screen snap sections, a cartoon character pinned on the left that changes pose for each section, and the content on the right.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Edit content

All text, projects, timeline, skills and cards live in **`src/data.js`**. Edit that one file and the site updates.

- Resume download: `public/Lavish_Kumar_Resume.pdf` (replace the file to update it)
- Character poses: `src/components/Character.jsx`

## Deploy (Vercel, recommended)

1. Push this folder to a GitHub repo.
2. Go to vercel.com → **Add New Project** → import the repo.
3. Vercel detects Vite automatically (build: `npm run build`, output: `dist`). Click **Deploy**.

Netlify works the same way. For GitHub Pages, set `base: '/<repo-name>/'` in `vite.config.js` first.

## Using your own character videos (optional)

The original site uses filmed puppet videos. To do the same, record or generate your own clips and replace `<Character pose={pose} />` in `src/App.jsx` with a `<video autoPlay muted loop playsInline>` for each section's pose.
