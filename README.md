# Portfolio Dashboard

A Google Workspace-inspired personal portfolio application built with React, Tailwind CSS, and Framer Motion. Features a clean dashboard layout with a collapsible sidebar, smooth page transitions, and a fully responsive design.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white)

## Features

- **Dashboard Layout** — Collapsible sidebar navigation + sticky header
- **Google Workspace Aesthetic** — Clean whites, subtle greys (#F8F9FA), and Google shadow-depths
- **Smooth Page Transitions** — Animated section switching via Framer Motion
- **Responsive Design** — Sidebar collapses to a mobile drawer with hamburger menu
- **Modular Architecture** — Production-ready file structure with separated data, components, pages, and utilities

## Pages

| Section                    | Description                                                                 |
| -------------------------- | --------------------------------------------------------------------------- |
| **Overview**               | Profile hero with bio, social links, quick stats cards, and recent projects |
| **Projects**               | Grid of project cards with descriptions and tech tags                       |
| **Tech Stack**             | Skill cloud of pill badges + proficiency progress bars                      |
| **Experience & Education** | Split timeline with work experience and education history                   |

## Tech Stack

- **React 19** — UI library
- **Vite 8** — Build tool with HMR
- **Tailwind CSS 3** — Utility-first styling with custom Google theme
- **Framer Motion** — Page transition animations
- **Lucide React** — Icon library
- **ESLint** — Code linting

## Project Structure

```
src/
├── data/                   # Static content & constants
│   ├── navItems.js
│   ├── projects.js
│   ├── experience.js
│   ├── skills.js
│   └── index.js
├── utils/
│   ├── getGreeting.js      # Time-based greeting helper
│   └── index.js
├── components/
│   ├── layout/             # App shell (Sidebar, MobileSidebar, Header)
│   └── ui/                 # Reusable components (ProjectCard, TimelineItem)
├── pages/                  # Section-level page components
│   ├── OverviewSection.jsx
│   ├── ProjectsSection.jsx
│   ├── TechStackSection.jsx
│   └── ExperienceSection.jsx
├── App.jsx                 # Thin root shell with AnimatePresence
├── main.jsx
└── index.css               # Tailwind directives
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/sanele23/portfolio-dashboard.git
cd portfolio-dashboard
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

### Linting

```bash
npm run lint
```

## Customisation

- **Content** — Edit files in `src/data/` to update projects, experience, skills, and nav items
- **Theme** — Modify `tailwind.config.js` to adjust Google-style colours and shadows
- **Profile** — Update `src/pages/OverviewSection.jsx` for bio, social links, and profile image

## License

This project is open source and available under the [MIT License](LICENSE).
