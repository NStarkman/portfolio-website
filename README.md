# Personal Portfolio Website

A Toronto-subway-themed personal portfolio built with React, React Router and Vite, showcasing work experience, research, projects and co-op work term reports.

Live at https://nstarkman.github.io/portfolio-website/

## Features

- **Four lines, four sections:** Profile (Line 1), Code Projects (Line 2), Work Reports (Line 3) and Research (Line 4), each with its own TTC line colour and tiled station-wall header.
- **Arrival board:** an LED-style board that cycles through messages for the current line.
- **Day and night service:** light and dark themes that follow the system setting and remember the visitor's choice.
- **Route map:** work reports are stops on Line 3, with a train that rides the line as you scroll.
- **Strip map:** each report page has a sticky map of its sections; a train tracks your reading position, and clicking a stop jumps to it.
- **Platform posters:** projects are shown as framed posters on the platform wall.
- **Doors, footer and 404:** subway doors slide open between pages, the footer has a system map with "exits", and unknown links get a "Not in Service" page.

## Project structure

```
index.html                 # Vite entry HTML (fonts, theme bootstrap, favicons)
vite.config.js             # Base path, dev port, build output and Vitest config
public/                    # Favicons, logos, papers (PDFs) and report images
src/
├── main.jsx               # Router and routes
├── App.jsx                # Layout: doors, header, page, footer
├── style.css              # All styles, including light/dark theme tokens
├── components/            # ArrivalBoard, StationWall, StripMap, Train, ProjectPoster, …
│   └── reports/           # Work term report content, one file per term
├── data/                  # Line definitions and the list of reports
├── pages/                 # Profile, Projects, Reports, Research, WorkReportPage, NotInService
└── utils/                 # publicUrl (base-path aware asset URLs), heading slugs
```

## Getting started

Requires Node.js 20.19 or newer.

```bash
git clone https://github.com/NStarkman/portfolio-website.git
cd portfolio-website
npm install
npm run dev
```

The dev server prints its URL, normally http://localhost:3000/portfolio-website/.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build the site into `build/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run the tests once with Vitest |
| `npm run test:watch` | Run the tests in watch mode |
| `npm run deploy` | Build and publish `build/` to the `gh-pages` branch |

Files in `public/` are referenced from code through `publicUrl()` so they resolve against the `/portfolio-website/` base path.

## Author

Nathan Starkman

## License

This project is open source and available under the MIT License.
