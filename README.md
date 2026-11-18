# Milan Maroevich Portfolio

A personal developer portfolio built with Next.js, React, and TypeScript.

The website presents my projects, technical skills, professional background, and contact information. It supports Hungarian and English and includes interactive project filtering powered by Zustand.

**Live website:** [portfolio.maroevichmilan.hu](https://portfolio.maroevichmilan.hu)

## Features

- Responsive portfolio website
- Hungarian and English localization
- Project overview and individual project detail pages
- Interactive project filtering
- Centralized UI state management with Zustand
- CV page with browser printing support
- Direct links to GitHub repositories and live demos
- Automated end-to-end tests with Playwright
- Docker-based production build

## Tech Stack

| Technology     | Purpose                                 |
| -------------- | --------------------------------------- |
| Next.js 16     | React framework and application routing |
| React 19       | UI development                          |
| TypeScript     | Static typing                           |
| Zustand        | Client-side state management            |
| Tailwind CSS 4 | CSS tooling                             |
| Playwright     | End-to-end browser testing              |
| Docker         | Application containerization            |
| Docker Compose | Container deployment configuration      |

## Project Structure

```text
.
├── docs/
│   └── user-flows.md
├── public/
│   ├── cv/
│   └── images/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── cv/
│   │   │   ├── projects/
│   │   │   │   └── [slug]/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── print-button.tsx
│   │   ├── project-list.tsx
│   │   └── site.tsx
│   ├── lib/
│   │   └── content.ts
│   └── stores/
│       └── project-store.ts
├── tests/
│   ├── contact.spec.ts
│   ├── homepage.spec.ts
│   ├── project-filter.spec.ts
│   └── project-navigation.spec.ts
├── Dockerfile
├── docker-compose.yml
├── playwright.config.ts
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 24 or a compatible recent Node.js release
- npm
- Git

### Installation

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd milan-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The localized pages are available at:

- `/hu` – Hungarian
- `/en` – English

## State Management

Zustand is used to manage the selected project category.

The project store is intentionally small and focused:

- Stores the active category
- Provides an action to update the category
- Allows React components to subscribe to the state they need

The project data remains centralized in `src/lib/content.ts`.

The project list is a client component, while the surrounding homepage can remain server-rendered.

The selected category is stored in memory and resets when the page is refreshed.

## End-to-End Testing

Playwright is used to test real browser interactions.

Install the browser binaries:

```bash
npx playwright install
```

Run the complete test suite:

```bash
npm run test:e2e
```

Run tests with a visible browser:

```bash
npm run test:e2e:headed
```

Open the interactive Playwright UI:

```bash
npm run test:e2e:ui
```

View the HTML test report:

```bash
npm run test:e2e:report
```

### Test Coverage

The automated tests cover:

- Homepage rendering in both languages
- Language navigation
- Project category filtering
- Resetting the project filter
- Projects with multiple categories
- Project detail navigation
- Invalid project routes
- Contact email link

## User Flows

The main visitor journeys and expected application behavior are documented in:

[`docs/user-flows.md`](docs/user-flows.md)

## Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Docker

The project includes a Dockerfile for building and running the production application.

Build the image:

```bash
docker build -t milan-portfolio .
```

Run the container:

```bash
docker run -p 3000:3000 milan-portfolio
```

Docker Compose configuration is also provided for the existing deployment environment.

## Architecture Notes

- Next.js App Router is used for application routing.
- Locale-specific pages are implemented through dynamic route segments.
- Project information is maintained in a centralized content module.
- Zustand manages interactive client-side project filtering.
- Playwright validates key visitor journeys in a real browser.
- The production application is containerized with Docker.

## Future Improvements

Potential future improvements include:

- More detailed project case studies
- Additional accessibility testing
- Expanded mobile browser coverage
- Automated CV printing tests
- Continuous integration with GitHub Actions

## Author

**Milán Maroevich**

Software Developer · Budapest, Hungary

- Website: [portfolio.maroevichmilan.hu](https://portfolio.maroevichmilan.hu)
- GitHub: [github.com/HappyFuneral](https://github.com/HappyFuneral)

---

This project is continuously evolving as I improve my frontend, backend, testing, and infrastructure skills.
