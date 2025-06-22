# Learn--Forge 🔥

## Project Overview

Learn--Forge is an NX monorepo built to explore and improve frontend development skills with React. Instead of using a micro-frontend approach, this project implements a modular monolith architecture where multiple frontend applications share a common component library.

The project consists of three main applications:

- 🧠 **Log-Craft**: A logic training platform for practicing programming concepts
- 📝 **Blog**: A technical blog for sharing articles about development
- 👤 **Portfolio**: A personal portfolio site showcasing skills and projects

All applications share common components like Layout, Header, and Footer through a shared library, enabling consistent UX/UI across all apps while maintaining independent codebases.

## Repository Structure

```
apps/
├── log-craft/   - Logic training platform
├── blog/        - Technical blogging platform
└── portfolio/   - Portfolio website
libs/
└── common/      - Shared components and utilities
```

## Technologies Used

- 🏗️ **NX** - Monorepo build system
- ⚛️ **React 19** - UI framework
- 📘 **TypeScript** - Type safety and developer experience
- ⚡ **Vite** - Fast, modern build tool and dev server
- 🧰 **pnpm** - Efficient package manager alternative to npm
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧭 **React Router** - Navigation between and within applications
- 🌓 **Dark Mode Support** - System preference detection with manual toggle

## Getting Started

### Prerequisites

- Node.js 16+
- pnpm 7+

### Installation

1. Install dependencies

```bash
pnpm install
```

2. Build the common library

```bash
pnpm nx build common
```

## Running Locally

Each application runs on its own port:

### Log-Craft: http://localhost:4204

```bash
pnpm nx serve log-craft
```

### Blog: http://localhost:4201

```bash
pnpm nx serve blog
```

### Portfolio: http://localhost:4202

```bash
pnpm nx serve portfolio
```

You can navigate between applications using the header navigation links in each app.

## Development Notes

- Changes to the common library require rebuilding: `pnpm nx build common`
- The navigation between apps works via direct URL changes with cross-app links
- Dark mode preferences are saved in localStorage and shared across all apps
- Each app detects which app is currently active based on the URL port

## Author

👨‍💻 **Mateus Acauhi**

- GitHub: [@Acauhi99](https://github.com/Acauhi99)
- LinkedIn: [acauhi](https://www.linkedin.com/in/acauhi/)

## Future Enhancements

- 🔄 Add CI/CD pipeline for automated deployments
- 🧪 Increase test coverage across applications
- 📱 Improve mobile responsiveness
- 🔐 Add authentication to protect certain routes

---

Happy coding! 💻
