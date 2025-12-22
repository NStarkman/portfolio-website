# Personal Portfolio Website

A subway-themed personal portfolio website built with React, showcasing work experience, research, projects, and professional reports.

## Features

- **Profile**: Personal introduction and background information
- **Projects**: Portfolio of completed projects with details and links
- **Research**: Research interests and academic work
- **Reports**: Technical reports and work documentation organized by semester/period
- **Subway Navigation**: Custom themed navigation component for intuitive site exploration

## Project Structure

```
src/
├── components/
│   ├── Card.jsx                 # Reusable card component
│   ├── SectionRenderer.jsx      # Dynamic content renderer
│   ├── SubwayNav.jsx            # Subway-themed navigation
│   └── reports/                 # Report modules by period
│       ├── fall-2023.js
│       ├── summer-2023.js
│       ├── summer-2024.js
│       ├── summer-2025.js
│       └── winter-2025.js
├── pages/
│   ├── Profile.jsx
│   ├── Projects.jsx
│   ├── Reports.jsx
│   ├── Research.jsx
│   └── WorkReportPage.jsx
├── App.jsx                      # Main application component
├── App.css                      # Application styles
└── index.js                     # Entry point
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NStarkman/portfolio-website.git
cd personal_site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will open at `http://localhost:3000`

## Building for Production

Create an optimized production build:
```bash
npm run build
```

This generates a `build/` directory with minified assets ready for deployment.

## Assets

The project includes:
- **Logos**: Brand and organizational logos
- **Papers**: Research papers and publications
- **Reports**: Technical reports organized by semester (fall-2023, summer-2023, summer-2024, summer-2025, winter-2025)

## Styling

The site uses a subway-themed design with custom CSS styling in:
- `src/App.css` - Main application styles
- `src/style.css` - Component-specific styles

## Author

Nathan Starkman

## License

This project is open source and available under the MIT License.
