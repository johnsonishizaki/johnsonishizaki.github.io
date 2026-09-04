# Johnson Bediako Ametsitsi — Professional Digital Portfolio

> **Software Developer • AI Builder • Entrepreneur**  
> *Building technology. Exploring ideas. Creating solutions.*  
> **Founder:** Ishizaki Tech Services  
> **Repository:** [johnsonishizaki/johnsonishizaki.github.io](https://github.com/johnsonishizaki/johnsonishizaki.github.io)

---

## 1. About

This website is the official professional portfolio, engineering laboratory notebook, and technical growth record of **Johnson Bediako Ametsitsi**. 

Designed with a high-standard editorial aesthetic, subtle Ghanaian/Kente-inspired geometric motifs, and a command-center dark mode, this platform serves as a transparent public interface for software products, multi-agent AI pipelines, robotics experiments, and technical consulting initiatives under **Ishizaki Tech Services**.

---

## 2. Philosophy: Proof of Work

> «Build. Investigate. Document. Improve.»

In accordance with strict anti-fabrication standards:
- **No unearned metrics:** No fake revenue, user numbers, testimonials, or inflated claims.
- **Transparent statuses:** Every project is explicitly marked with its real-world stage (`In Development`, `Research`, `Experimental`, `Prototype`, `Live`, or `Archived`).
- **Open lab notebook:** Empirical investigations document actual observations, failures, parameter tuning, and lessons learned.
- **Privacy as a baseline:** Academic records, student identifications, and private personal details are guarded and omitted.

---

## 3. Technology Stack

- **Core Framework:** React 19, TypeScript, Vite 6
- **Styling & Design System:** Tailwind CSS v4, custom Ghanaian Kente geometric weave dividers, dark ambient canvas
- **Animations:** Motion (`motion/react`) with graceful reduced-motion support
- **Icons & Visuals:** `lucide-react`, custom reactive SVG ecosystem topology
- **Build & CI/CD:** Vite static build engine, GitHub Actions Pages workflow (`.github/workflows/deploy.yml`)

---

## 4. Repository Structure

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── projects/
│   └── README.md               # Architecture documentation index
├── research/
│   └── README.md               # Lab notebook overview
├── src/
│   ├── components/
│   │   ├── About.tsx           # Engineering mindset & focus domains
│   │   ├── BrandStatement.tsx  # Core 4-pillar philosophy
│   │   ├── BuildLog.tsx        # Chronological development ledger & growth map
│   │   ├── ContactModal.tsx    # Communication modal with email state handling
│   │   ├── ContactSection.tsx  # "Let's Build Something" contact block
│   │   ├── EvidenceSection.tsx # Verifiable artifact stubs ("Show the work")
│   │   ├── Footer.tsx          # Copyright & official identity footer
│   │   ├── GitHubSection.tsx   # Verified public repository interface
│   │   ├── Hero.tsx            # Signature hero section
│   │   ├── HeroVisual.tsx      # Dynamic digital ecosystem visual
│   │   ├── HowIBuild.tsx       # 8-stage engineering loop
│   │   ├── IshizakiTechServices.tsx # Business initiative & client services
│   │   ├── KenteDivider.tsx    # Ghanaian geometric accent dividers
│   │   ├── Navbar.tsx          # Header with navigation & quick search
│   │   ├── ProjectCaseStudyModal.tsx # Reusable deep-dive case study modal
│   │   ├── Projects.tsx        # Selected work & category filtering
│   │   ├── ResearchLab.tsx     # Lab notebook experiment cards
│   │   ├── SearchModal.tsx     # Instant client-side search across all records
│   │   └── TechnologyStack.tsx # Categorized tech with honesty indicators
│   ├── data/
│   │   └── portfolioData.ts    # Single source of truth for all content & config
│   ├── types.ts                # TypeScript interfaces & enums
│   ├── App.tsx                 # Root application composition
│   ├── index.css               # Base Tailwind styles & Kente patterns
│   └── main.tsx                # Client DOM entry
├── index.html                  # HTML5 entry with metadata & SEO tags
├── metadata.json               # Platform capabilities & project description
├── package.json                # Project dependencies & build scripts
├── tsconfig.json               # TypeScript compiler config
└── vite.config.ts              # Vite configuration
```

---

## 5. Local Development

To run the portfolio locally on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/johnsonishizaki/johnsonishizaki.github.io.git
cd johnsonishizaki.github.io

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 6. GitHub Pages Deployment

The repository is pre-configured with a GitHub Actions workflow in `.github/workflows/deploy.yml`.

### Deployment Instructions:
1. Push this code to the `main` branch of `johnsonishizaki/johnsonishizaki.github.io`.
2. In your GitHub repository settings:
   - Navigate to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. On every push to `main`, GitHub Actions will automatically install dependencies, run `npm run build`, and deploy the resulting static output to `https://johnsonishizaki.github.io`.

---

## 7. How to Update Content

All content is centrally located in `src/data/portfolioData.ts`. Modifying data here automatically updates all associated cards, filters, search indices, and modals.

### A. Updating Contact Email
In `src/data/portfolioData.ts`, find line 32:

```typescript
export const CONTACT_EMAIL: string = "COMING_SOON";
```

Replace `"COMING_SOON"` with your verified professional email:
```typescript
export const CONTACT_EMAIL: string = "contact@ishizakitech.com";
```
When updated, the site will automatically enable the `mailto:` links, email action buttons, and active status badges throughout the site.

### B. Updating Social Links & Usernames
In `src/data/portfolioData.ts`:
```typescript
export const GITHUB_USERNAME = "johnsonishizaki";
export const GITHUB_PROFILE_URL = "https://github.com/johnsonishizaki";
```

### C. Adding a New Project
In `src/data/portfolioData.ts`, append a new entry to the `PROJECTS` array:
```typescript
{
  id: "my-new-system",
  name: "System Name",
  tagline: "One sentence summary of the architecture.",
  status: "In Development", // 'In Development' | 'Prototype' | 'Research' | 'Experimental' | 'Live' | 'Archived'
  category: "Software",    // 'Software' | 'AI' | 'Research' | 'Robotics' | 'Business' | 'Experimental'
  problem: "What problem does this address?",
  approach: "How was the solution engineered?",
  technologies: ["TypeScript", "APIs"],
  architectureDiagram: "Client ➔ API Gateway ➔ Database",
  challenges: "Key constraint encountered.",
  lessons: "Engineering takeaway.",
  futureWork: "Next iteration goals.",
  caseStudy: {
    overview: "Detailed background...",
    problem: "...",
    motivation: "...",
    architecture: "...",
    technicalDecisions: ["Decision 1", "Decision 2"],
    development: "...",
    challenges: "...",
    solutions: "...",
    results: "...",
    lessons: "...",
    futureWork: "..."
  }
}
```

### D. Adding a Research Experiment
In `src/data/portfolioData.ts`, append an entry to `RESEARCH_EXPERIMENTS`:
```typescript
{
  id: "exp-005",
  title: "Title of Investigation",
  status: "Active Investigation", // 'Active Investigation' | 'Concept Phase' | 'Benchmarking' | 'Documented'
  tags: ["AI", "Systems"],
  question: "What is the technical question?",
  hypothesis: "What was expected?",
  motivation: "Why does it matter?",
  method: "Testing procedure...",
  tools: ["Tool A", "Tool B"],
  observations: "What happened during testing?",
  results: "Empirical findings...",
  lessons: "Core takeaways...",
  futureQuestions: ["Next question to explore..."]
}
```

### E. Adding a Build Log Entry
In `src/data/portfolioData.ts`, prepend or append an entry to `BUILD_LOG`:
```typescript
{
  id: "log-004",
  date: "2026-09-10",
  project: "Project Name",
  whatChanged: "Implemented feature or fixed defect...",
  whyItChanged: "Reasoning and architecture rationale...",
  whatWasLearned: "Technical insight gained from the change..."
}
```

---

## 8. Identity & Naming Rules

In accordance with strict brand guidelines:
- Always use the full personal name: **Johnson Bediako Ametsitsi**
- Never use abbreviations or invented variations such as *JBA*, *Johnson Ishizaki*, *Johnson Bediako Ishizaki*, or *Johnson Ishizaki Ametsitsi*.
- GitHub username remains `johnsonishizaki`.
- Business identity is **Ishizaki Tech Services**.

---

© 2026 Johnson Bediako Ametsitsi. Built and documented over time.
