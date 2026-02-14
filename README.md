# Full Stack Experiment Hub

A production-ready academic platform demonstrating modular architecture and experiment isolation.

## Student Details

**Name:** Harsh Partap Jain  
**UID:** 23BAI70194

## Purpose

This application serves as a centralized dashboard containing 10 isolated experiments (Exp1 to Exp10). Each experiment functions as an independent mini-application within the main system, demonstrating full-stack development concepts without interfering with other experiments in routing, styles, state, or logic.

## Core Architecture Principle

**Strict Modular Isolation** — Each experiment is completely sandboxed with its own:
- Layout configuration
- Page components
- Internal component library
- Scoped CSS Modules
- Independent routing structure

This architecture ensures that adding or modifying one experiment never affects others.

## Tech Stack

- **Framework:** Next.js (Latest Stable, App Router)
- **Language:** TypeScript with strict mode enabled
- **Icons:** Lucide-react
- **Styling:** CSS Modules (scoped styling)
- **Architecture:** Clean, scalable, component-based

## Project Structure

```
exphub/
├── app/
│   ├── layout.tsx              # Root layout with student identity
│   ├── page.tsx                # Dashboard with 10 experiment cards
│   ├── globals.css             # Global monochrome styles
│   ├── not-found.tsx           # Custom 404 page
│   ├── exp1/
│   │   ├── layout.tsx          # Experiment 1 layout
│   │   ├── page.tsx            # Experiment 1 main page
│   │   ├── styles.module.css   # Scoped styles for exp1
│   │   └── components/         # Internal components for exp1
│   ├── exp2/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── styles.module.css
│   │   └── components/
│   ├── exp3/ ... exp10/        # Same structure repeated
│
├── components/
│   ├── ui/
│   │   ├── Card.tsx            # Shared Card component
│   │   ├── Card.module.css
│   │   ├── Button.tsx          # Shared Button component
│   │   └── Button.module.css
│   └── layout/
│       ├── Header.tsx          # Global header with identity
│       ├── Header.module.css
│       ├── Footer.tsx          # Global footer
│       └── Footer.module.css
│
├── lib/
│   └── types/
│       └── index.ts            # TypeScript interfaces
│
├── public/                     # Static assets
├── package.json
├── tsconfig.json               # TypeScript strict config
└── README.md
```

## Isolation Rules

### 1. Independent Structure
Each experiment (exp1 to exp10) must:
- Have its own `layout.tsx` file
- Contain its own `components/` folder
- Use CSS Modules for all styling
- Never import from other experiment folders

### 2. Nested Routing Support
Example of how routes work inside experiments:
```
app/exp5/
  page.tsx          → /exp5
  project/page.tsx  → /exp5/project
  demo/page.tsx     → /exp5/demo
```

Adding pages to exp7 requires zero changes to:
- exp1 through exp6
- exp8 through exp10
- root layout

### 3. State Management
State inside one experiment remains completely isolated within that folder.

### 4. Shared Components
Only components in `components/ui/` are shared across experiments.

## Design System

**Strict Monochrome Palette:**
- Background: White (#ffffff)
- Text: Black (#000000)
- Subtitles: Gray (#737373)
- Borders: Light Gray (#e5e5e5)
- Buttons: Outlined only
- No gradients, no animations, no flashy effects

**Typography:**
- Light font weights (300-400)
- Clean academic appearance
- Responsive sizing

## TypeScript Configuration

Strict mode enabled with:
- No `any` types allowed
- Proper interface usage required
- Clean imports enforced
- Zero unused variables
- No console errors

## Scalability

This system is designed to:
- Add exp11, exp12, etc. easily
- Build complete mini-projects inside any experiment
- Support nested routes safely within experiments
- Add API routes inside experiment folders if needed
- Deploy as a single unified Next.js application

## Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## How to Add a New Experiment

1. Create a new folder in `app/` (e.g., `app/exp11/`)
2. Add the required files:
   ```
   app/exp11/
     layout.tsx
     page.tsx
     styles.module.css
     components/
   ```
3. Update the experiments array in `app/page.tsx` with the new experiment details
4. That's it — no other files need modification

## How to Update Live and GitHub Links

Edit the `experiments` array in [app/page.tsx](app/page.tsx):

```typescript
const experiments: Experiment[] = [
  {
    id: 1,
    title: "Experiment 1",
    description: "Your description here",
    liveLink: "/exp1",              // Change this
    githubLink: "https://github.com", // Change this
  },
  // ... more experiments
];
```

## Metadata and Identity

Student name and UID are embedded at multiple levels:
- Root layout metadata
- Header component (displayed globally)
- Footer component
- Page titles via template in metadata

This ensures proper attribution and ownership throughout the application.

## Production Characteristics

This application demonstrates:
- **Minimal:** Clean, monochrome design without unnecessary elements
- **Structured:** Logical folder hierarchy and clear separation of concerns
- **Professional:** Production-ready code with TypeScript strict mode
- **Academic:** Formal styling appropriate for educational purposes
- **Future-proof:** Easy to extend with new experiments
- **Scalable:** Architecture supports growth without refactoring

## License

Academic project for educational purposes.

---

**Created by Harsh Partap Jain (UID: 23BAI70194)**  
Full Stack Experiment Hub © 2026
