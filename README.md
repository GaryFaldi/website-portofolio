# Kadek Gary Faldi — Portfolio

Personal portfolio website built with React + Vite + Tailwind CSS v4.

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
```

The build output is located in the `dist/` directory — ready to be deployed to Vercel, Netlify, GitHub Pages, etc.

## Project Structure

```
src/
├── components/       # UI components grouped by section
├── data/              # ALL portfolio content (edit profiles, projects here)
│   ├── profile.js      # Name, headline, bio
│   ├── skills.js        # Skills grouped by category
│   ├── projects.js      # Project list (add new project = add object here)
│   ├── experience.js    # Organizational experience
│   ├── education.js     # Education + bootcamps
│   ├── certifications.js
│   └── social.js
└── styles/
    └── theme.css       # Theme color variables
```

## How to Edit Content (Without touching components)

- **Add/remove/update projects** → edit `src/data/projects.js`. Set `featured: true` to display in the Featured Projects grid.
- **Change bio / headline** → edit `src/data/profile.js`.
- **Add skills** → edit `src/data/skills.js`.
- **Add organizational experience** → edit `src/data/experience.js`.
- **Add certifications** → edit `src/data/certifications.js`.
- **Change the color palette** → edit `src/styles/theme.css`. All components use CSS variables defined in this file.

## Things to Complete

- Replace `public/resume-kadek-gary-faldi.pdf` with your actual CV PDF (the "Download CV" button in the Hero section points to this path).
- Fill in the `github` and `demo` fields in `src/data/projects.js` for each project if the repositories are public.
- Update `og:url` in `index.html` once deployed to your actual domain.
