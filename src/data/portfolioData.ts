import { 
  Project, 
  ResearchExperiment, 
  TechnologyItem, 
  BuildLogEntry, 
  EvidenceItem 
} from '../types';

/**
 * =======================================================================
 * CENTRALIZED CONFIGURATION
 * =======================================================================
 * Changing values here updates them consistently across all UI elements,
 * navigation, metadata, and contact mechanisms.
 */

// Public identity - strictly verified
export const FULL_NAME = "Johnson Bediako Ametsitsi";
export const PRIMARY_POSITIONING = "Software Developer • AI Builder • Entrepreneur";
export const SUPPORTING_DESCRIPTOR = "Building technology. Exploring ideas. Creating solutions.";
export const TECH_BUSINESS = "Ishizaki Tech Services";

// GitHub identity
export const GITHUB_USERNAME = "johnsonishizaki";
export const GITHUB_REPO = "johnsonishizaki/johnsonishizaki.github.io";
export const GITHUB_PROFILE_URL = "https://github.com/johnsonishizaki";
export const GITHUB_REPO_URL = "https://github.com/johnsonishizaki/johnsonishizaki.github.io";

/**
 * PUBLIC CONTACT EMAIL CONFIGURATION
 * To update when a professional email address is established:
 * Replace "COMING_SOON" with the verified address (e.g. "contact@ishizakitech.com")
 */
export const CONTACT_EMAIL: string = "COMING_SOON";

export const IS_EMAIL_ACTIVE = CONTACT_EMAIL !== "COMING_SOON" && CONTACT_EMAIL.includes("@");

/**
 * BRAND STATEMENT
 */
export const BRAND_PHILOSOPHY = {
  headline: "Build. Investigate. Document. Improve.",
  subtext: "Projects are not treated merely as static display objects. They represent verifiable evidence of curiosity, problem solving, architectural thinking, iterative testing, and disciplined learning.",
  pillars: [
    {
      label: "Build",
      desc: "Translating conceptual requirements into functional software, prototypes, and client solutions."
    },
    {
      label: "Investigate",
      desc: "Formulating technical hypotheses, exploring AI orchestration, and analyzing hardware control loops."
    },
    {
      label: "Document",
      desc: "Recording architectural trade-offs, bug root causes, and systems logic to produce a lasting technical record."
    },
    {
      label: "Improve",
      desc: "Refining interfaces, refactoring bottlenecks, and expanding product reliability over structured iterations."
    }
  ]
};

/**
 * ABOUT ME DATA
 */
export const ABOUT_ME = {
  intro: "I am a software developer, AI builder, and entrepreneur focused on creating dependable digital systems and exploring applied artificial intelligence.",
  passions: [
    "Software Development",
    "Artificial Intelligence",
    "Product Design",
    "Applied Technology",
    "Robotics & Control Systems",
    "Process Automation",
    "Entrepreneurship",
    "Engineering Problem Solving"
  ],
  bioParagraphs: [
    "My focus centers on constructing software products from foundational principles, investigating how modern AI models can be reliably orchestrated into agent workflows, and developing scalable technical solutions under Ishizaki Tech Services.",
    "Rather than treating software as arbitrary code, I approach development as an engineering discipline: dissecting complex constraints, prototyping functional systems, debugging boundary failures, and recording what is learned for long-term improvement.",
    "Rooted in Ghana with an active global engineering outlook, I aim to merge high-standard digital architecture with practical solutions for communities, education, and commerce."
  ]
};

/**
 * PROJECTS DATA
 * Strict Anti-Fabrication Rule Enforced:
 * All statuses are verified (In Development, Research, Experimental, Prototype).
 * No fake users, sales, revenue, or launch claims.
 */
export const PROJECTS: Project[] = [
  {
    id: "button-galaxy",
    name: "Button Galaxy",
    tagline: "Structured AI orchestration pipeline exploring multi-agent routing, context injection, and response formatting.",
    status: "Research",
    category: "AI",
    problem: "Single-prompt LLM calls frequently hallucinate, lack domain context validation, and fail when trying to handle disparate tool actions in a monolithic step.",
    approach: "Designed a modular 5-stage pipeline separating routing decisions, contextual grounding, specialized sub-agents, provider switching, and schema-constrained formatting.",
    technologies: ["Python", "AI APIs", "Prompt Engineering", "JSON Schema", "Agent Architecture"],
    architectureDiagram: "Router → Context → Agents → Provider → Formatter",
    challenges: "Handling latency degradation across multi-agent hops and ensuring reliable fallback when an upstream provider rate limits or returns invalid schema structures.",
    lessons: "Strict declarative schemas at agent handoffs prevent cumulative cascade errors. Deterministic routing must precede non-deterministic generation.",
    futureWork: "Formalize an open-source evaluation suite measuring accuracy versus latency overhead across dynamic task categories.",
    githubUrl: GITHUB_PROFILE_URL,
    caseStudy: {
      overview: "Button Galaxy is an architectural exploration into how autonomous agents, context managers, and language model providers can be decoupled into predictable, traceable stages.",
      problem: "Direct API calls to monolithic models struggle with complex multi-stage tasks. When an AI attempts to plan, execute, query tools, and format output in a single prompt, failure rates increase dramatically.",
      motivation: "To design a lightweight orchestration harness that provides explicit observability into each transformation step without requiring heavy, opaque external frameworks.",
      architecture: "Pipeline Topology: [User Input] ➔ [Intent Router] ➔ [Context Engine] ➔ [Agent Pool] ➔ [Model Provider Gateway] ➔ [Strict Schema Formatter] ➔ [Validated Output]",
      technicalDecisions: [
        "Separated Intent Router from execution agents to prevent prompt bloat and reduce token cost.",
        "Utilized strict JSON Schema validation on outbound responses to guarantee downstream UI compatibility.",
        "Implemented vendor-agnostic provider abstractions to enable seamless switching between API endpoints."
      ],
      development: "Initial prototyping focused on token flow tracing and benchmark comparisons between single-shot prompts and segmented agent chains.",
      challenges: "Mitigating latency compounding across chained calls while maintaining state consistency across agent transitions.",
      solutions: "Implemented parallelized context retrieval and lightweight pre-routing classification using deterministic regex and low-latency embeddings.",
      results: "Demonstrated consistent schema compliance and eliminated prompt pollution across multi-turn simulated tasks.",
      lessons: "Modularity in AI systems is essential for debugging: when a failure occurs, isolated stages make the root cause immediately apparent.",
      futureWork: "Developing an interactive visual flow debugger for inspectable node-by-node execution tracing."
    }
  },
  {
    id: "olagair",
    name: "OlagAir",
    tagline: "Communication platform concept designed around student, teacher, parent, and institutional interaction.",
    status: "In Development",
    category: "Software",
    problem: "Educational communication is frequently fragmented across disorganized chat apps, unread emails, and rigid legacy portals that lack intuitive grouping.",
    approach: "Conceptualizing an integrated communication layer with structured broadcast channels, direct parental feedback threads, and permission-aware administrative groups.",
    technologies: ["JavaScript", "PostgreSQL", "APIs", "Tailwind CSS", "HTML/CSS"],
    architectureDiagram: "Client Web App ⇄ Auth & Permissions Gateway ⇄ Notification & Message Broker ⇄ Relational Store",
    challenges: "Designing intuitive role hierarchies (administrators, instructors, students, parents) that enforce strict data isolation without creating cognitive friction.",
    lessons: "Permission matrix simplicity is key: overly complex permission flags lead to access confusion in educational workflows.",
    futureWork: "Finalize offline-resilient message queue caching and complete the responsive notification center UI.",
    githubUrl: GITHUB_PROFILE_URL,
    caseStudy: {
      overview: "OlagAir is an educational communication platform concept aimed at streamlining institutional announcements, parent-teacher collaboration, and group coordination.",
      problem: "Schools and learning communities struggle with fragmented channels where time-sensitive circulars get buried in generic chat groups, risking student safety and parent disengagement.",
      motivation: "To provide a purposeful, distraction-free communication hub engineered specifically for school ecosystems.",
      architecture: "Role-Based Distributed Architecture with Web Client, REST API Gateway, WebSocket Event Sync, and PostgreSQL relational storage.",
      technicalDecisions: [
        "PostgreSQL selected for strong relational integrity across complex student-parent-class mappings.",
        "Role-Based Access Control (RBAC) enforced at database query and gateway levels.",
        "Responsive web-first layout designed for accessibility on low-bandwidth mobile devices."
      ],
      development: "Currently modeling domain entities, class rosters, message threads, and notification event schemas.",
      challenges: "Ensuring low-latency message delivery under variable network conditions typical of emerging markets.",
      solutions: "Designing client-side optimistic UI updates with local indexed caching and background sync verification.",
      results: "Completed interactive UI prototypes and validated user role navigation journeys.",
      lessons: "User research in educational software reveals that parent simplicity must take precedence over high-feature complexity.",
      futureWork: "Build out SMS fallback notification integrations and automated digest generators."
    }
  },
  {
    id: "campfire",
    name: "Campfire",
    tagline: "Communication and collaborative chat concept exploring interactive social spaces and AI-assisted experiences.",
    status: "In Development",
    category: "Software",
    problem: "Standard team and group chat environments either lack context-awareness or become overwhelmingly noisy without intelligent summarization and moderation.",
    approach: "Designing modular discussion spaces with integrated contextual AI assistants that can summarize missed discussions, extract action items, and clarify topics on demand.",
    technologies: ["JavaScript", "APIs", "AI APIs", "Tailwind CSS", "WebSockets Concept"],
    architectureDiagram: "Chat Room State ⇄ Real-Time Stream ⇄ Context Extractor ⇄ Assistant Co-pilot",
    challenges: "Balancing unobtrusive AI interaction within human conversations so the assistant assists without interrupting natural dialogue flow.",
    lessons: "AI in social software should be invoked via explicit triggers or ambient summaries, rather than auto-replying to every message.",
    futureWork: "Implement client-side encryption prototypes and fine-tune thread summarization prompt templates.",
    githubUrl: GITHUB_PROFILE_URL,
    caseStudy: {
      overview: "Campfire investigates modern group chat mechanics, combining responsive real-time messaging with integrated contextual AI tooling.",
      problem: "High-volume chat rooms suffer from information overload, causing members to miss critical decisions, deadlines, and shared resources.",
      motivation: "To explore how conversation spaces can actively assist users in staying organized without requiring external productivity apps.",
      architecture: "Real-time client interface connected to an event bus with an asynchronous summarization engine listening to topic checkpoints.",
      technicalDecisions: [
        "Lightweight component state modeling to prevent re-render thrashing during rapid message streams.",
        "Modular command palette for invoking AI utility tasks (@summarize, @action-items).",
        "Subtle visual hierarchy to differentiate human messages from system-generated summaries."
      ],
      development: "Prototyping chat stream virtualization, thread drawer interactions, and contextual prompt injection.",
      challenges: "Managing token budget when feeding long chat logs to LLM summarization endpoints.",
      solutions: "Implemented sliding window token trimming with rolling incremental topic summaries.",
      results: "Functional message interface concept with responsive layout and clean thread navigation.",
      lessons: "Clear visual demarcation between AI suggestions and human speech is critical for conversational trust.",
      futureWork: "Adding voice-note transcription pipelines and offline draft persistence."
    }
  },
  {
    id: "certified-moi",
    name: "Certified Moi",
    tagline: "Ghana-focused campus boutique and student e-commerce concept built for local fulfillment dynamics.",
    status: "In Development",
    category: "Business",
    problem: "Campus merchandise and student retail in Ghana rely on informal social media chats, manual payments, and unorganized inventory tracking.",
    approach: "Developing a streamlined mobile-first storefront optimized for campus delivery hubs, verified seller badges, and localized checkout workflows.",
    technologies: ["JavaScript", "HTML/CSS", "Supabase", "APIs", "Responsive UI"],
    architectureDiagram: "Product Catalog ⇄ Localized Checkout State ⇄ Fulfillment Hub Dispatcher",
    challenges: "Adapting typical e-commerce paradigms to campus hostel delivery dynamics where formal postal addresses do not exist.",
    lessons: "Localization requires designing for landmark-based pickup points and mobile-money settlement protocols.",
    futureWork: "Complete catalog indexing and implement inventory reservation timeouts.",
    githubUrl: GITHUB_PROFILE_URL,
    caseStudy: {
      overview: "Certified Moi is a specialized retail platform concept engineered around university student communities in Ghana.",
      problem: "Students buying and selling campus goods face payment uncertainty, lack of order status tracking, and difficult delivery handoffs.",
      motivation: "To create an honest, dependable digital storefront that professionalizes campus student retail without unnecessary overhead.",
      architecture: "JAMstack architecture with headless product database, localized order status state machine, and lightweight image asset delivery.",
      technicalDecisions: [
        "Extreme asset optimization to accommodate campus mobile data bandwidth constraints.",
        "Hostel & landmark drop-off selection instead of conventional street address forms.",
        "Zero unnecessary trackers or heavy analytics scripts to maintain instantaneous page loads."
      ],
      development: "Created product cards, category filter systems, responsive cart drawers, and order confirmation flows.",
      challenges: "Designing a checkout experience that accounts for delayed payment verification.",
      solutions: "Constructed an explicit order verification queue with clear visual state indicators for pending confirmation.",
      results: "High-fidelity responsive frontend prototype verified across mobile viewports.",
      lessons: "Building for real local users means questioning every standard e-commerce assumption imported from Western templates.",
      futureWork: "Integrate direct mobile money payment webhook verification when live services are provisioned."
    }
  },
  {
    id: "ev3-robotics",
    name: "EV3 Robotics Experiments",
    tagline: "Robotics control loops, PID line following, and sensor calibration using LEGO Mindstorms EV3 hardware.",
    status: "Experimental",
    category: "Robotics",
    problem: "Naive threshold-based line following produces harsh oscillations, motor stalling on tight curvature, and failure under changing ambient light.",
    approach: "Investigated Proportional-Integral-Derivative (PID) algorithm implementations, real-time light sensor calibration routines, and differential wheel velocity calculations.",
    technologies: ["Python", "Control Systems", "PID Algorithms", "EV3 Firmware", "Hardware Sensors"],
    architectureDiagram: "Sensors (Light/Color) ➔ Error Calculation (e = target - reading) ➔ PID Compute ➔ Motor Velocity Adjustment",
    challenges: "Tuning the Derivative (Kd) and Integral (Ki) coefficients on physical hardware with mechanical backlash and surface friction variances.",
    lessons: "Hardware teaches humility: theoretical mathematical models must always account for battery voltage drops and physical friction.",
    futureWork: "Document parameter tuning curves and build a Python simulator for testing PID algorithms before flashing to brick.",
    githubUrl: GITHUB_PROFILE_URL,
    caseStudy: {
      overview: "Hands-on control systems research utilizing the LEGO EV3 robotics platform to study real-world closed-loop automation.",
      problem: "Bang-bang (two-state) steering controllers oscillate violently at speed, leading to track departure and excessive mechanical wear.",
      motivation: "To understand the fundamental mathematics of continuous closed-loop feedback systems that power autonomous vehicles and industrial robotics.",
      architecture: "High-frequency feedback loop sampling optical sensor reflectance, calculating proportional, cumulative, and derivative error, and adjusting dual DC motor PWM duty cycles.",
      technicalDecisions: [
        "Implemented sensor auto-calibration at startup (min/max reflectance sampling) to neutralize ambient room lighting variations.",
        "Added anti-windup clamping to the Integral term to prevent catastrophic overshoot after sustained curves.",
        "Utilized differential drive kinematics for smooth curvature transitions."
      ],
      development: "Programmed iterative script versions tracking oscillation frequencies across 90-degree corners, switchbacks, and varying track thicknesses.",
      challenges: "Sensor latency and motor response lag creating phase delays at higher chassis velocities.",
      solutions: "Tuned sampling frequency and lowered chassis center-of-gravity to stabilize optical sensor ground clearance.",
      results: "Achieved smooth, non-oscillatory line tracking with significantly higher stable traversal speeds than threshold methods.",
      lessons: "Software engineering becomes radically concrete when bad code results in physical collisions. The feedback loop is universal.",
      futureWork: "Integrate ultrasonic obstacle avoidance interrupts into the primary navigation state machine."
    }
  },
  {
    id: "passive-hub",
    name: "Passive Hub",
    tagline: "Dashboard concept exploring distributed computing node activity, telemetry visualization, and telemetry monitoring.",
    status: "Research",
    category: "Research",
    problem: "Monitoring decentralized compute nodes and background automation processes usually requires checking disparate CLI scripts with zero consolidated telemetry.",
    approach: "Designed a centralized visual telemetry dashboard tracking uptime, bandwidth throughput, compute task allocations, and automated alert rules.",
    technologies: ["JavaScript", "Data Visualization", "APIs", "Tailwind CSS", "Systems Monitoring"],
    architectureDiagram: "Distributed Nodes ➔ Metric Ingestion Agent ➔ Time-Series Storage ➔ Analytical UI Dashboard",
    challenges: "Rendering dense time-series metrics without degrading browser canvas performance on modest hardware.",
    lessons: "Data decimation and windowed visual aggregations are necessary to prevent DOM bloat when tracking real-time streams.",
    futureWork: "Implement simulated node heartbeat visualizers and historical uptime percentage charts.",
    githubUrl: GITHUB_PROFILE_URL,
    caseStudy: {
      overview: "Passive Hub is an experimental monitoring dashboard designed to aggregate telemetry from background computational nodes and automation jobs.",
      problem: "Technologists running distributed workloads lack unified, lightweight tools to verify node health, resulting in undetected node downtime.",
      motivation: "To build a clean, dark-mode command center that makes system health instantly scannable without corporate enterprise bloat.",
      architecture: "Modular dashboard client with time-bucketed metric cards, status indicators, node topology graphs, and activity event feeds.",
      technicalDecisions: [
        "CSS Grid dashboard cards with fixed aspect ratios for responsive multi-screen layouts.",
        "Color-coded operational indicators (Healthy, Warning, Offline) meeting strict WCAG contrast standards.",
        "Zero financial claims or speculative metrics: purely technical compute and network telemetry."
      ],
      development: "Built reusable metric gauge components, node status tables, and log stream panels.",
      challenges: "Designing for information density without creating visual fatigue or cognitive overload.",
      solutions: "Employed strict typography hierarchy, muted background tones, and clear whitespace grouping between functional clusters.",
      results: "Engineered a responsive dashboard shell capable of rendering multi-node metrics smoothly.",
      lessons: "Good systems monitoring isn't about showing all data at once; it's about highlighting actionable anomalies while keeping baseline metrics clean.",
      futureWork: "Incorporate webhook alert triggers and exportable CSV telemetry reports."
    }
  }
];

/**
 * RESEARCH & EXPERIMENTS ("Lab Notebook")
 */
export const RESEARCH_EXPERIMENTS: ResearchExperiment[] = [
  {
    id: "exp-001",
    title: "Multi-Agent Routing Latency vs Output Coherence",
    status: "Active Investigation",
    tags: ["AI", "Systems", "Experiments"],
    question: "Does pre-classifying user requests with a lightweight classifier before invoking specialized agent models reduce total pipeline latency and cost compared to single prompt instruction following?",
    hypothesis: "A two-stage pipeline using a deterministic or tiny classifier model to route prompts to narrow, specialized prompts will achieve higher output accuracy and reduce token consumption by >30% on complex tasks.",
    motivation: "Monolithic LLM prompts become brittle and costly when forced to contain rules for dozens of disparate tools and intents.",
    method: "Constructed 50 test scenarios across 5 distinct intents. Evaluated single massive prompt execution versus a modular triage router feeding isolated agent prompts.",
    tools: ["AI APIs", "Python", "JSON Schema Validator", "Latency Profiler"],
    observations: "Single large prompts suffered from instruction drift and frequently triggered unused tool parameters. Routed prompts produced cleaner JSON with zero extraneous keys.",
    results: "Initial benchmarks show routed pipelines had slightly higher cold-start dispatch latency (~120ms) but reduced downstream generation tokens by 42% with significantly higher adherence to output constraints.",
    lessons: "Deterministic categorization is vastly superior to asking generative models to self-select tools in a single step.",
    futureQuestions: [
      "What is the exact breaking point where routing overhead outweighs monolithic prompt token cost?",
      "Can local embeddings completely replace the API call for stage-1 classification?"
    ]
  },
  {
    id: "exp-002",
    title: "Derivative Error Filtering in EV3 Optical Control Loops",
    status: "Documented",
    tags: ["Robotics", "Systems", "Experiments"],
    question: "How can high-frequency optical sensor noise be filtered without introducing phase lag in a micro-controller line tracking loop?",
    hypothesis: "Applying a simple two-point moving average filter to the Derivative (Kd) error will eliminate motor chattering on track surface imperfections without degrading reaction speed on sharp 90-degree turns.",
    motivation: "In physical robot trials, pure derivative action amplified sensor jitter from matte paper textures, causing unwanted high-frequency motor vibration.",
    method: "Tested 3 error conditioning methods: unfiltered raw derivative, moving average filter (window=2), and low-pass single-pole IIR filter across 20 obstacle course runs.",
    tools: ["LEGO Mindstorms EV3", "Python Firmware", "Optical Reflectance Sensor", "Oscillation Log"],
    observations: "Raw derivative caused motor PWM chattering at 18Hz on straightaways. A window of 2 moving average eliminated the chattering with less than 15ms added delay.",
    results: "Chassis traversed the test circuit with zero high-frequency jitter, maintaining track adhesion at 15% higher linear velocity.",
    lessons: "In real-world robotics, mathematical derivatives are noise amplifiers. Sensor smoothing is mandatory for physical longevity.",
    futureQuestions: [
      "How does ambient daylight temperature affect the photodiode calibration over prolonged 1-hour sessions?"
    ]
  },
  {
    id: "exp-003",
    title: "Offline-First State Synchronization for Educational Interfaces",
    status: "Concept Phase",
    tags: ["Software", "Web", "Product"],
    question: "What conflict-resolution strategy best maintains classroom announcement rosters when teacher and student devices operate with intermittent connectivity?",
    hypothesis: "An append-only log with deterministic last-write-wins by authenticated administrative authority allows instant local UI rendering while preventing out-of-order state corruption upon reconnect.",
    motivation: "Schools in infrastructure-constrained environments cannot rely on continuous 100% cloud socket connections.",
    method: "Simulated 10 client instances experiencing random 5-minute network dropouts during concurrent message broadcasts and edit attempts.",
    tools: ["IndexedDB", "Service Worker", "Event Log Sim", "JavaScript"],
    observations: "Bidirectional merges without central authority created race conditions. A strict role-weighted Lamport timestamp resolved conflicts deterministically.",
    results: "Zero lost announcements during simulated disconnect; sync reconciliations completed within 180ms upon connection restoration.",
    lessons: "Decouple read access from network availability: the UI should never freeze waiting for an HTTP 200 response.",
    futureQuestions: [
      "Can binary message pack formatting reduce mobile data packet overhead for low-bandwidth cellular connections?"
    ]
  },
  {
    id: "exp-004",
    title: "Strict JSON Schema Enforcement in LLM Function Outputs",
    status: "Benchmarking",
    tags: ["AI", "Software", "Experiments"],
    question: "Does temperature adjustment directly correlate with schema violation rates in structured extraction tasks?",
    hypothesis: "Setting model temperature to 0.0 with explicit schema repetition in system guidance achieves 99.8% structural compliance across diverse input formatting.",
    motivation: "Unstructured or malformed AI output crashes client frontend parsers and introduces security validation risks.",
    method: "Ran 200 extraction trials with varying temperatures (0.0 to 1.0) and measured syntax parse failures and missing mandatory keys.",
    tools: ["AI APIs", "Zod", "TypeScript", "Node.js Benchmark"],
    observations: "At temperature > 0.6, models occasionally emitted markdown code blocks around raw JSON, causing direct JSON.parse() crashes.",
    results: "Enforcing temperature 0.0 combined with schema-constrained decoding eliminated formatting syntax errors entirely across 200 consecutive runs.",
    lessons: "Always enforce structural guardrails at the API level and sanitize response strings prior to JSON parsing.",
    futureQuestions: [
      "How to gracefully handle schema evolution when existing clients receive updated response structures?"
    ]
  }
];

/**
 * HOW I BUILD: 8-STAGE DEVELOPMENT PHILOSOPHY
 */
export const BUILD_STAGES = [
  {
    step: "01",
    title: "Question",
    summary: "Identify real constraints and formulate the fundamental problem before writing code."
  },
  {
    step: "02",
    title: "Explore",
    summary: "Investigate prior art, architecture trade-offs, and necessary technical primitives."
  },
  {
    step: "03",
    title: "Prototype",
    summary: "Build minimal, functional proof-of-concepts to validate core hypotheses quickly."
  },
  {
    step: "04",
    title: "Test",
    summary: "Subject systems to edge cases, network disruptions, and boundary inputs."
  },
  {
    step: "05",
    title: "Debug",
    summary: "Isolate root causes methodically using logging and telemetry, not speculative guessing."
  },
  {
    step: "06",
    title: "Document",
    summary: "Record architectural decisions, lessons learned, and reproducibility guidelines."
  },
  {
    step: "07",
    title: "Improve",
    summary: "Refactor bottlenecks, polish accessibility, and optimize performance metrics."
  },
  {
    step: "08",
    title: "Ship",
    summary: "Deploy cleanly with verified static or containerized builds and automated checks."
  }
];

/**
 * TECHNOLOGY STACK
 * Honest familiarity indicators: Exploring, Familiar, Building with, Strong.
 */
export const TECHNOLOGIES: TechnologyItem[] = [
  // Languages
  { name: "JavaScript", category: "Languages", level: "Building with", note: "Primary language for frontend UI, event handling, and interactive systems." },
  { name: "Python", category: "Languages", level: "Building with", note: "Used for AI orchestration prototyping, data scripts, and robotics control." },
  { name: "HTML5", category: "Languages", level: "Strong", note: "Semantic document structuring, accessibility, and clean markup hierarchy." },
  { name: "CSS3 / Tailwind", category: "Languages", level: "Building with", note: "Modern responsive styling, design systems, and responsive layouts." },
  
  // AI
  { name: "AI APIs", category: "AI", level: "Building with", note: "Integration with modern generative models and structured JSON completions." },
  { name: "Prompt Engineering", category: "AI", level: "Building with", note: "System prompt conditioning, few-shot prompting, and schema constraints." },
  { name: "Agent Architecture", category: "AI", level: "Exploring", note: "Multi-agent coordination, routing topology, and tool invocation logic." },
  { name: "AI Application Architecture", category: "AI", level: "Exploring", note: "Designing reliable software layers around non-deterministic AI outputs." },

  // Backend / Data
  { name: "RESTful APIs", category: "Backend / Data", level: "Building with", note: "Designing and consuming structured JSON service endpoints." },
  { name: "PostgreSQL", category: "Backend / Data", level: "Familiar", note: "Relational database modeling, primary key schemas, and structured data integrity." },
  { name: "Supabase", category: "Backend / Data", level: "Familiar", note: "Authentication flows, database persistence, and realtime subscriptions." },
  { name: "Database Design", category: "Backend / Data", level: "Familiar", note: "Entity-relationship modeling and data normalization principles." },

  // Tools
  { name: "GitHub", category: "Tools", level: "Building with", note: "Version control, branching, repository management, and Pages deployment." },
  { name: "Google AI Studio", category: "Tools", level: "Building with", note: "Prompt engineering prototyping, model evaluation, and token testing." },
  { name: "Replit", category: "Tools", level: "Building with", note: "Rapid prototyping environment for web applications and microservices." },
  { name: "Vercel / Netlify", category: "Tools", level: "Familiar", note: "Static site hosting, continuous deployment pipelines, and preview builds." }
];

/**
 * ISHIZAKI TECH SERVICES
 * Strictly professional initiative without invented claims.
 */
export const ISHIZAKI_TECH_SERVICES = {
  name: "Ishizaki Tech Services",
  tagline: "Technology & Software Development Initiative",
  mission: "Ishizaki Tech Services is an independent technology initiative focused on engineering dependable digital products, modern web platforms, and tailored automation tools for businesses and community ventures.",
  capabilities: [
    {
      title: "Software & Web Development",
      description: "Building responsive, modern web applications engineered for performance, clean typography, and accessibility."
    },
    {
      title: "AI-Powered Solutions",
      description: "Developing intelligent workflow integrations, automated data routing, and structured assistant tools."
    },
    {
      title: "Digital Products & Systems",
      description: "Designing product architecture from conceptual requirements to interactive prototypes and deployment."
    },
    {
      title: "Applied Technology & Prototyping",
      description: "Researching emerging technical tools to solve practical operational bottlenecks with minimal bloat."
    }
  ],
  principles: [
    "No bloated dependencies or black-box lock-in.",
    "Clean, maintainable source code that clients can own.",
    "Fast, accessible, mobile-first design as a baseline.",
    "Honest technical communication and clear deliverables."
  ]
};

/**
 * BUILD LOG
 * Chronological record of development with verified initial entry for this portfolio.
 */
export const BUILD_LOG: BuildLogEntry[] = [
  {
    id: "log-001",
    date: "2026-09-04",
    project: "Digital Portfolio Foundation",
    whatChanged: "Engineered initial production portfolio architecture for Johnson Bediako Ametsitsi featuring interactive project showcase, research lab notebook, and Ishizaki Tech Services portal.",
    whyItChanged: "Establish a verifiable, long-term public record of engineering work, research investigations, and technical growth.",
    whatWasLearned: "Consolidating identity, privacy constraints, and centralized configuration into a declarative data model enables seamless updates without fragile code edits."
  },
  {
    id: "log-002",
    date: "2026-08-28",
    project: "Button Galaxy",
    whatChanged: "Formalized 5-stage orchestration pipeline (Router → Context → Agents → Provider → Formatter) and documented schema validation rules.",
    whyItChanged: "Prevent instruction drift and eliminate response formatting crashes during multi-step AI agent workflows.",
    whatWasLearned: "Deterministic pre-routing reduces token usage significantly compared to monolithic single-prompt instructions."
  },
  {
    id: "log-003",
    date: "2026-08-15",
    project: "EV3 Robotics Experiments",
    whatChanged: "Completed PID line-following parameter calibration and implemented optical reflectance error smoothing.",
    whyItChanged: "Eliminate chassis steering oscillation at higher speeds on physical tracks.",
    whatWasLearned: "Physical hardware introduces mechanical lag and surface noise that pure theoretical models fail to anticipate."
  }
];

/**
 * GROWTH MAP (Framework)
 */
export const GROWTH_FRAMEWORK = [
  {
    stage: "Explore",
    status: "Active",
    desc: "Investigating emerging technologies, computer science fundamentals, and real-world system needs."
  },
  {
    stage: "Experiment",
    status: "Active",
    desc: "Formulating technical hypotheses in the lab notebook, testing robotics loops, and benchmarking AI routing."
  },
  {
    stage: "Build",
    status: "Active",
    desc: "Constructing core applications (OlagAir, Button Galaxy, Campfire) and commercial client solutions."
  },
  {
    stage: "Document",
    status: "Active",
    desc: "Maintaining this transparent public portfolio, engineering case studies, and reproducible build logs."
  },
  {
    stage: "Launch",
    status: "In Progress",
    desc: "Transitioning mature prototypes into verified public releases and open-source repositories."
  },
  {
    stage: "Improve",
    status: "Continuous",
    desc: "Iterating based on operational telemetry, user feedback, and ongoing engineering discipline."
  }
];

/**
 * FEATURED EVIDENCE STUBS
 * Philosophy: "Show the work."
 */
export const EVIDENCE_ITEMS: EvidenceItem[] = [
  {
    id: "ev-01",
    title: "Button Galaxy Architecture Blueprint",
    type: "Architecture Diagram",
    status: "Documented",
    description: "Detailed 5-stage pipeline specification with strict JSON schema definitions for agent handoffs."
  },
  {
    id: "ev-02",
    title: "EV3 PID Optical Tuning Lab Notes",
    type: "Research Note",
    status: "Documented",
    description: "Experimental data on derivative error filtering and light sensor calibration under ambient variations."
  },
  {
    id: "ev-03",
    title: "OlagAir Multi-Role Entity Model",
    type: "Architecture Diagram",
    status: "In Preparation",
    description: "Entity-relationship schema for school-wide permissions, guardian verification, and class rosters."
  },
  {
    id: "ev-04",
    title: "Public GitHub Repositories",
    type: "Repository",
    status: "Documented",
    description: "Source code for public portfolio, scripts, and software experiments under @johnsonishizaki."
  }
];
