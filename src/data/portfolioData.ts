import {
  PersonalInfo,
  Project,
  SkillCategory,
  ServiceItem,
  TimelineItem,
  BlogPost,
  Testimonial,
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Sanjid',
  fullName: 'Mushfiqur Rahman Sanjid',
  handle: 'sanjid.dev',
  role: 'Web Developer & Founder of Next Solution',
  title: 'Crafting High-Performance Websites & Digital Products',
  company: 'Next Solution',
  companyTagline: 'Digital Solutions for Modern Businesses & Ambitious Brands',
  companyUrl: 'https://nextsolution.agency',
  email: 'mrsanjid2007@gmail.com',
  whatsapp: '+8801700000000', // Editable placeholder phone
  location: 'Dhaka, Bangladesh · Remote Worldwide',
  timezone: 'GMT+6 (Available across US/EU/APAC overlap hours)',
  availability: {
    status: 'available',
    text: 'Available for selected projects & founder collaborations',
  },
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
    whatsapp: 'https://wa.me/8801700000000',
  },
  stats: [
    {
      label: 'Focus Areas',
      value: 'Frontend & UI Systems',
      detail: 'Next.js, React, TypeScript, Tailwind',
    },
    {
      label: 'Leadership',
      value: 'Next Solution',
      detail: 'Founder & Lead Digital Strategist',
    },
    {
      label: 'Delivery Model',
      value: 'End-to-End',
      detail: 'Architecture, Design, Build & Optimize',
    },
    {
      label: 'Code Quality',
      value: '100% Type-Safe',
      detail: 'Production-ready, accessible, modular',
    },
  ],
};

export const projects: Project[] = [
  {
    id: 'fashion-hub',
    slug: 'fashion-hub-ecommerce',
    title: 'Fashion Hub',
    category: 'E-Commerce Platform',
    tagline: 'High-speed apparel shopping experience with instant filtering & responsive checkout',
    description:
      'A bespoke e-commerce frontend built for modern fashion brands. Designed with minimal visual noise, lightning-fast client-side product filtering, fluid drawer carts, and intuitive checkout flow.',
    role: 'Lead Frontend Developer & UI Designer',
    year: '2024 – 2025',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST API', 'Stripe Integration UI'],
    liveUrl: 'https://fashion-hub.example.com',
    githubUrl: 'https://github.com/sanjid/fashion-hub',
    featured: true,
    accentColor: '#E65100',
    thumbnailSvg: 'ecommerce',
    caseStudy: {
      overview:
        'Fashion Hub was conceived as a response to bulky, slow multi-category apparel storefronts. The goal was to build a fluid shopping experience where product browsing, variant selection, and cart modifications happen instantaneously without full-page reloads.',
      theChallenge:
        'Most e-commerce templates suffer from heavy third-party script bloat, slow image loading waterfalls, and cumbersome mobile filter drawers that frustrate shoppers and cause cart abandonment.',
      theApproach:
        'Engineered a lightweight React architecture prioritizing sub-second interactive states. Designed a persistent slide-over shopping bag with optimistic local updates and multi-facet filtering with zero layout shift.',
      designHighlights: [
        'Editorial product grid balancing generous whitespace and high-density product photography.',
        'Adaptive mobile navigation with gesture-driven swipe sheets for sizing charts and filters.',
        'Micro-interactions for size selectors, stock badges, and one-tap color switching.',
      ],
      developmentHighlights: [
        'Implemented memoized client-side search and facet indexing with instant debounce.',
        'Integrated optimistic cart state with localStorage hydration and smooth count animations.',
        'Responsive image pipeline with blur-up placeholders and explicit aspect ratios.',
      ],
      technologies: [
        { name: 'React 18', purpose: 'Component state engine & declarative view layer' },
        { name: 'TypeScript', purpose: 'Strict data structures for catalog, variants & cart items' },
        { name: 'Tailwind CSS', purpose: 'Utility-first styling with custom spacing & neutral palette' },
        { name: 'Motion', purpose: 'Spring-based micro-interactions for drawer & checkout steps' },
      ],
      keyFeatures: [
        {
          title: 'Instant Multi-Filter Drawer',
          description: 'Filter by size, category, price range, and color with zero delay or page jitter.',
        },
        {
          title: 'Optimistic Sliding Cart',
          description: 'Add, update quantity, and apply coupon codes with instant visual feedback.',
        },
        {
          title: 'Variant & Sizing Matrix',
          description: 'Dynamic inventory status indicator reflecting real-time stock availability.',
        },
      ],
      outcome:
        'Delivered a fully responsive, production-ready e-commerce frontend architecture with 98+ Lighthouse performance score and clean modular code suitable for headless backend integrations.',
      whatILearned:
        'Deepened understanding of optimistic UI patterns and handling complex cart state without relying on oversized third-party e-commerce plugins.',
    },
  },
  {
    id: 'laziiz-restaurant',
    slug: 'laziiz-culinary-experience',
    title: 'Laziiz',
    category: 'Hospitality & Culinary Platform',
    tagline: 'Atmospheric digital dining experience with interactive digital menu & reservation system',
    description:
      'A refined web presence for high-end dining. Blends appetizing visual storytelling, interactive dietary-filtered menus, dynamic business hours calculation, and a seamless reservation booking interface.',
    role: 'Frontend Architect & Visual Strategist',
    year: '2024',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Lucide Icons', 'Form Validation'],
    liveUrl: 'https://laziiz.example.com',
    githubUrl: 'https://github.com/sanjid/laziiz',
    featured: true,
    accentColor: '#D84315',
    thumbnailSvg: 'restaurant',
    caseStudy: {
      overview:
        'Laziiz required a web experience that felt as warm, luxurious, and inviting as sitting in the dining room itself. The client wanted to eliminate static PDF menus and replace them with a dynamic, categorized online experience.',
      theChallenge:
        'Creating an appetizing aesthetic while ensuring fast load times on mobile devices for guests browsing outside or on cellular data. Menu items needed easy categorization with allergen badges.',
      theApproach:
        'Used a clean warm-toned color scheme with tactile typography, category tabs with sticky subheaders, and an interactive reservation inquiry modal with instant validation and time slot selection.',
      designHighlights: [
        'Refined typography pairing serif display headings with clear geometric sans-serif body copy.',
        'Interactive allergen and dietary tags (Halal, Vegetarian, Chef Special) with instant filter toggles.',
        'Real-time opening status indicator calculating current kitchen availability based on local timezone.',
      ],
      developmentHighlights: [
        'Structured modular menu data in JSON schemas for zero-code price and item updates.',
        'Lightweight booking stepper with multi-step validation and accessible keyboard navigation.',
        'Zero layout shifts when switching between Lunch, Dinner, and Beverage categories.',
      ],
      technologies: [
        { name: 'Next.js', purpose: 'Static generation for near-instant edge delivery' },
        { name: 'Tailwind CSS', purpose: 'Custom warm neutral color scale and micro-borders' },
        { name: 'TypeScript', purpose: 'Type-safe menu schema, pricing, and reservation validation' },
      ],
      keyFeatures: [
        {
          title: 'Dietary & Allergen Filtering',
          description: 'Filter complex menus by dietary preferences with clean pill toggles.',
        },
        {
          title: 'Live Table Reservation Stepper',
          description: 'Select party size, date, time slot, and special requests with client-side verification.',
        },
        {
          title: 'Dynamic Operating Status',
          description: 'Automatically calculates if the restaurant is Open, Closing Soon, or Closed.',
        },
      ],
      outcome:
        'Successfully deployed a high-conversion digital presence that increased direct online reservation inquiries and completely replaced slow PDF menus.',
      whatILearned:
        'How purposeful typography and subtle layout hierarchy can elevate a local business to feel like an international Michelin-caliber brand.',
    },
  },
  {
    id: 'next-solution-platform',
    slug: 'next-solution-agency-platform',
    title: 'Next Solution',
    category: 'Digital Agency Platform',
    tagline: 'Flagship brand & client portal for Next Solution digital solutions company',
    description:
      'The primary website and service platform for Next Solution. Designed and built from scratch to showcase the company’s end-to-end capabilities across web development, UI/UX, SEO, and AI automation.',
    role: 'Founder, Lead Engineer & Designer',
    year: '2024 – Present',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Vite'],
    liveUrl: 'https://nextsolution.agency',
    githubUrl: 'https://github.com/sanjid/next-solution',
    featured: true,
    accentColor: '#FF5722',
    thumbnailSvg: 'agency',
    caseStudy: {
      overview:
        'As the founder of Next Solution, I needed a company website that reflected our modern engineering standard and multi-disciplinary services — bridging custom software development with practical digital growth tools.',
      theChallenge:
        'Communicating diverse services (from frontend engineering to AI automation and SEO) without looking like a scattered agency or confusing prospective clients.',
      theApproach:
        'Created a unified narrative centered on "turning business ideas into digital products". Designed interactive service deep-dives, project showcases, and a transparent discovery workflow.',
      designHighlights: [
        'Signature high-contrast dark-and-light balance accented by Next Solution electric orange.',
        'Modular interactive service grid with expandable deliverables and workflow breakdowns.',
        'Clean client project intake system with clear project scoping questions.',
      ],
      developmentHighlights: [
        'Built reusable component library shared across client projects to speed up delivery.',
        'Configured optimized performance budgets with zero dependencies on heavy UI frameworks.',
        'Integrated automated client inquiry handling with instant confirmation.',
      ],
      technologies: [
        { name: 'TypeScript', purpose: 'Full type safety across client intake and project data' },
        { name: 'Tailwind CSS', purpose: 'Custom design system with scalable token variables' },
        { name: 'Motion', purpose: 'Staggered page transitions and viewport-triggered scroll reveals' },
      ],
      keyFeatures: [
        {
          title: 'Interactive Service Matrix',
          description: 'Explore full scopes across Web Development, UI/UX, and AI Automation.',
        },
        {
          title: 'Project Estimator / Intake Flow',
          description: 'Guided discovery tool helping prospective clients clarify requirements.',
        },
        {
          title: 'Case Study Vault',
          description: 'Structured breakdown of client deliverables and technical outcomes.',
        },
      ],
      outcome:
        'Serves as the central operational hub for Next Solution, establishing immediate credibility and driving client onboarding for modern web development projects.',
      whatILearned:
        'Building your own company platform teaches you how clients evaluate trust, clarity of messaging, and why simplicity consistently outperforms complexity.',
    },
  },
  {
    id: 'apex-dashboard',
    slug: 'apex-saas-command-dashboard',
    title: 'Apex Dashboard',
    category: 'Web Application & Admin System',
    tagline: 'High-density metrics, user management & real-time telemetry interface',
    description:
      'A modern SaaS command center built for operations and analytics. Features responsive multi-view data tables, live filterable charts, role-based controls, and dark/light adaptive layouts.',
    role: 'Frontend Architect',
    year: '2024',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts / SVG', 'Zustand State'],
    liveUrl: 'https://apex-dashboard.example.com',
    githubUrl: 'https://github.com/sanjid/apex-dashboard',
    featured: true,
    accentColor: '#BF360C',
    thumbnailSvg: 'dashboard',
    caseStudy: {
      overview:
        'Modern web applications require admin dashboards that remain fast, legible, and easy to navigate even when displaying hundreds of concurrent data points and transactions.',
      theChallenge:
        'Complex admin dashboards often suffer from cramped tables, overwhelming clutter, and poor responsiveness on mobile or laptop screens.',
      theApproach:
        'Implemented a collapsible sidebar navigation, modular widget architecture, custom accessible data tables with inline sorting, search filtering, and clean visual hierarchy.',
      designHighlights: [
        'High-density layout designed according to strict 8pt grid with clear contrast borders.',
        'Consistent status badges and interactive metric cards with period-over-period comparisons.',
        'Keyboard shortcuts for search, quick navigation, and panel collapsing.',
      ],
      developmentHighlights: [
        'Client-side data virtualization for lag-free scrolling across multi-row tables.',
        'Modular widget system enabling easy rearrangement of dashboard panels.',
        'Pure SVG chart components with accessible tooltip popovers.',
      ],
      technologies: [
        { name: 'React 18', purpose: 'Stateful UI components and virtualized table rows' },
        { name: 'TypeScript', purpose: 'Strict typing for telemetry models, users, and logs' },
        { name: 'Tailwind CSS', purpose: 'Dense utility spacing and customizable surface colors' },
      ],
      keyFeatures: [
        {
          title: 'Multi-Column Filterable Tables',
          description: 'Instant search, multi-column sorting, and batch row actions.',
        },
        {
          title: 'Custom Metric Visualizers',
          description: 'Clean time-series graphs and distribution breakdowns without external bloat.',
        },
        {
          title: 'Role-Based Navigation',
          description: 'Adaptive sidebar rendering based on simulated user permissions.',
        },
      ],
      outcome:
        'Created a robust, enterprise-grade dashboard boilerplate and frontend pattern library used across Next Solution client web applications.',
      whatILearned:
        'Mastered data density management and responsive table UX patterns on smaller screens.',
    },
  },
  {
    id: 'prism-landing',
    slug: 'prism-product-landing-page',
    title: 'Prism Labs',
    category: 'High-Conversion Landing Page',
    tagline: 'Technical product showcase engineered for maximum conversion & narrative flow',
    description:
      'A modern product landing page for a developer tooling startup. Combines interactive feature demonstrations, animated syntax previews, and clear conversion funnels.',
    role: 'UI Designer & Frontend Engineer',
    year: '2024',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'SVG Systems'],
    liveUrl: 'https://prism-labs.example.com',
    githubUrl: 'https://github.com/sanjid/prism-landing',
    featured: false,
    accentColor: '#FF7043',
    thumbnailSvg: 'landing',
    caseStudy: {
      overview:
        'Prism Labs needed a high-impact launch landing page to explain a technical developer product in less than 30 seconds to visiting engineers and tech founders.',
      theChallenge:
        'Developer audiences are notoriously skeptical of marketing fluff. The page needed to demonstrate real code, real architecture, and tangible benefits immediately.',
      theApproach:
        'Built an interactive code comparison widget, live architectural flow diagrams, and a friction-free email waitlist signup component.',
      designHighlights: [
        'Dark code preview blocks contrasting against clean neutral editorial layout.',
        'Micro-copy focused purely on developer workflow improvements.',
        'Sticky CTA banner that seamlessly appears as the visitor reads through the value proposition.',
      ],
      developmentHighlights: [
        'Interactive live code switcher with simulated compilation outputs.',
        'Zero layout shifts with strict font-display swap strategies.',
        'Accessible tab controls with full ARIA support.',
      ],
      technologies: [
        { name: 'React', purpose: 'Component-driven interactive widgets' },
        { name: 'TypeScript', purpose: 'Strict props and interaction types' },
        { name: 'Tailwind CSS', purpose: 'Precise typographic scales and contrast boundaries' },
      ],
      keyFeatures: [
        {
          title: 'Interactive Code Workbench',
          description: 'Visitors can toggle between code samples and see simulated execution.',
        },
        {
          title: 'Architecture Stepper',
          description: 'Visual step-by-step pipeline demonstrating data flow and integrations.',
        },
      ],
      outcome:
        'Achieved a 100/100 performance score on mobile and established a reusable landing page archetype for fast product launches.',
      whatILearned:
        'How to translate complex technical capabilities into visual, self-explanatory interactive widgets.',
    },
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend & UI Architecture',
    description: 'Core expertise in building fast, scalable, and accessible user interfaces with modern standards.',
    skills: [
      { name: 'React', level: 'Advanced', highlight: 'Hooks, Custom Architecture, Concurrent Features' },
      { name: 'Next.js', level: 'Advanced', highlight: 'App Router, SSR/SSG, Edge Routing, Optimization' },
      { name: 'TypeScript', level: 'Advanced', highlight: 'Strict Typing, Generics, Type-Safe Contracts' },
      { name: 'Tailwind CSS', level: 'Advanced', highlight: 'Design Tokens, Custom Systems, Responsive UI' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', highlight: 'Async/Await, DOM APIs, Performance' },
      { name: 'HTML5 & Semantics', level: 'Core', highlight: 'SEO, Accessibility (a11y), Semantic Web' },
      { name: 'CSS3 & Modern Layout', level: 'Core', highlight: 'Flexbox, CSS Grid, Transitions, Keyframes' },
      { name: 'Framer Motion', level: 'Proficient', highlight: 'Layout Animations, Spring Physics, Gestures' },
    ],
  },
  {
    id: 'backend-data',
    title: 'Backend, APIs & Data',
    description: 'Connecting clean client interfaces to reliable backends, databases, and third-party integrations.',
    skills: [
      { name: 'REST APIs', level: 'Advanced', highlight: 'Endpoint Design, Data Fetching, Error Handling' },
      { name: 'Supabase', level: 'Proficient', highlight: 'PostgreSQL, Row Level Security, Auth, Realtime' },
      { name: 'PostgreSQL', level: 'Proficient', highlight: 'Relational Schemas, Queries, Indexing Basics' },
      { name: 'Authentication Systems', level: 'Proficient', highlight: 'OAuth2, JWT, Session Management' },
      { name: 'Node.js / Express', level: 'Proficient', highlight: 'API Routing, Middleware, Server Logic' },
    ],
  },
  {
    id: 'tools-workflow',
    title: 'Tools & Workflow',
    description: 'Modern development environment, version control, and rapid prototyping workflows.',
    skills: [
      { name: 'Git & GitHub', level: 'Workflow', highlight: 'Branching, PRs, CI/CD Actions, Release Tagging' },
      { name: 'Figma', level: 'Workflow', highlight: 'UI Wireframing, Design Systems, Auto-Layout Handoff' },
      { name: 'VS Code', level: 'Workflow', highlight: 'Custom Dev Environment, Extensions, Debugging' },
      { name: 'Vite', level: 'Workflow', highlight: 'Fast Bundling, Plugin Config, Build Optimization' },
      { name: 'Chrome DevTools', level: 'Workflow', highlight: 'Performance Profiling, Network Waterfall, Memory' },
    ],
  },
  {
    id: 'systems-growth',
    title: 'Systems, SEO & AI Solutions',
    description: 'Holistic product delivery combining design fidelity, search visibility, and AI automation.',
    skills: [
      { name: 'UI / UX Design', level: 'Advanced', highlight: 'Information Hierarchy, User Flows, Typography' },
      { name: 'Performance Optimization', level: 'Advanced', highlight: 'Core Web Vitals, Bundle Splitting, Image Pipeline' },
      { name: 'Technical SEO', level: 'Advanced', highlight: 'Structured Data, Meta Graph, Sitemap, Canonical' },
      { name: 'Responsive Web Design', level: 'Core', highlight: 'Mobile-first, Tablet, Ultrawide Fluidity' },
      { name: 'AI Integration & Agents', level: 'Proficient', highlight: 'LLM APIs, Prompt Workflows, Automation Pipelines' },
    ],
  },
];

export const services: ServiceItem[] = [
  {
    number: '01',
    title: 'Custom Web Development',
    description:
      'Building bespoke, lightning-fast web applications and sites using React, Next.js, and TypeScript with clean, maintainable code.',
    deliverables: ['Custom Web Applications', 'SPA & SSR Architectures', 'API Integrations', 'Clean Modular Codebase'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'UI/UX Design & Systems',
    description:
      'Designing purposeful, beautiful interfaces that balance user clarity, brand prestige, and conversion psychology.',
    deliverables: ['Interface Wireframing & Prototyping', 'Design Systems & Tokens', 'Mobile-First UX', 'Design-to-Code Handoff'],
    technologies: ['Figma', 'Design Tokens', 'Tailwind System'],
  },
  {
    number: '03',
    title: 'High-Conversion Landing Pages',
    description:
      'Crafting sharp, persuasive landing pages for products, startups, and campaigns engineered to turn visitors into qualified leads.',
    deliverables: ['Clear Value Proposition', 'Interactive Product Demos', 'Fast Load Times', 'Lead Intake Integration'],
    technologies: ['Next.js', 'Framer Motion', 'Conversion UX'],
  },
  {
    number: '04',
    title: 'E-Commerce Websites',
    description:
      'Modern, scalable storefronts with instant product filtering, smooth shopping carts, and streamlined checkout interfaces.',
    deliverables: ['Catalog Management UI', 'Filter & Search Engine', 'Optimistic Cart Systems', 'Payment Gateway UI'],
    technologies: ['React', 'Stripe UI', 'Headless CMS'],
  },
  {
    number: '05',
    title: 'Web Applications & Portals',
    description:
      'Interactive SaaS frontends, client portals, and web tools with complex state handling, responsive data grids, and auth.',
    deliverables: ['Role-Based Views', 'Real-time Updates', 'State Architecture', 'Interactive Workflows'],
    technologies: ['React', 'TypeScript', 'Supabase', 'Node.js'],
  },
  {
    number: '06',
    title: 'Dashboards & Admin Systems',
    description:
      'Clean, high-density analytics dashboards and operational consoles that make complex metrics effortless to understand.',
    deliverables: ['Interactive Charting', 'Filterable Data Tables', 'Activity Feeds', 'Export & Batch Actions'],
    technologies: ['React', 'Tailwind CSS', 'SVG Charts'],
  },
  {
    number: '07',
    title: 'Website Optimization & SEO',
    description:
      'Auditing and transforming slow, cluttered sites into high-ranking, 95+ Core Web Vitals digital powerhouses.',
    deliverables: ['Core Web Vitals Audit', 'Bundle Size Reduction', 'Technical SEO Schema', 'Asset & Font Pipeline'],
    technologies: ['Lighthouse', 'Schema.org', 'Web Performance'],
  },
  {
    number: '08',
    title: 'AI Integration & Automation',
    description:
      'Empowering modern businesses with smart AI workflows, conversational bots, and automated digital processes through Next Solution.',
    deliverables: ['LLM API Integrations', 'Custom AI Agents', 'Workflow Automation', 'Smart Content Assistants'],
    technologies: ['Gemini / OpenAI APIs', 'Automations', 'Next Solution AI'],
  },
];

export const timeline: TimelineItem[] = [
  {
    year: '2021',
    period: 'Foundation',
    title: 'Building Technical Curiosity & Fundamentals',
    subtitle: 'Academic foundation & initial programming exploration',
    description:
      'Discovered passion for software, computers, and how digital interfaces work. Began exploring the foundations of programming, logic, and web structure.',
    tags: ['Algorithms', 'HTML/CSS Basics', 'Problem Solving'],
  },
  {
    year: '2023',
    period: 'Academic Milestone',
    title: 'Completed HSC & Committed to Web Engineering',
    subtitle: 'Focused dedication to software development',
    description:
      'Successfully completed HSC academic milestones and immediately channeled energy into master-level modern frontend development, JavaScript fundamentals, and software architecture.',
    tags: ['HSC Completed', 'JavaScript Deep Dive', 'Git Workflows'],
  },
  {
    year: '2023 – 2024',
    period: 'Skill Acceleration',
    title: 'Modern Frontend & Component Systems',
    subtitle: 'Mastering React, TypeScript & Scalable Styling',
    description:
      'Deepened skills in modern frontend ecosystems: React hooks, TypeScript type safety, Next.js routing, Tailwind CSS design systems, and responsive interactive UX.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    year: '2024',
    period: 'Entrepreneurship',
    title: 'Founded Next Solution',
    subtitle: 'Starting a Digital Solutions Company',
    description:
      'Launched Next Solution with a mission to help ambitious businesses and founders build reliable digital products, websites, branding, and automation systems.',
    tags: ['Next Solution', 'Client Strategy', 'Product Scoping', 'Agency Leadership'],
  },
  {
    year: 'Present',
    period: 'Active Execution',
    title: 'Web Developer & Founder',
    subtitle: 'Building Products, Serving Clients & Expanding Next Solution',
    description:
      'Actively developing client projects, refining digital experiences, building in public, and growing Next Solution into a dependable digital agency.',
    tags: ['Full-Stack UI', 'Founder', 'Client Delivery', 'Continuous Growth'],
    isCurrent: true,
  },
];

export const processSteps = [
  {
    number: '01',
    name: 'Discover',
    tagline: 'Understand the core objective',
    description:
      'We unpack your business goals, target audience, technical requirements, and core pain points before writing a single line of code.',
    deliverable: 'Project scope & technical requirements document',
  },
  {
    number: '02',
    name: 'Plan',
    tagline: 'Define architecture & structure',
    description:
      'Map out the information hierarchy, page architecture, data models, and milestones to ensure a clear, predictable timeline.',
    deliverable: 'Sitemap, wireframe blueprint & milestone roadmap',
  },
  {
    number: '03',
    name: 'Design',
    tagline: 'Craft purposeful interfaces',
    description:
      'Design clean, high-contrast layouts with refined typography, balanced whitespace, and brand-consistent design tokens.',
    deliverable: 'High-fidelity Figma prototypes & UI design tokens',
  },
  {
    number: '04',
    name: 'Build',
    tagline: 'Develop with modern standards',
    description:
      'Translate designs into clean, modular, type-safe code using Next.js, React, and Tailwind CSS with strict attention to responsiveness.',
    deliverable: 'Production-ready code repository with modular components',
  },
  {
    number: '05',
    name: 'Refine',
    tagline: 'Test, optimize & polish',
    description:
      'Audit cross-device compatibility, optimize image pipelines, fine-tune micro-interactions, and ensure 90+ Core Web Vitals scores.',
    deliverable: 'Performance audit, cross-browser verification & SEO checks',
  },
  {
    number: '06',
    name: 'Launch',
    tagline: 'Deploy & empower growth',
    description:
      'Seamless production deployment, domain setup, analytics integration, and post-launch handover with documentation.',
    deliverable: 'Live production URL & client handover walkthrough',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'beyond-ai-templates',
    slug: 'beyond-ai-templates-real-substance',
    title: 'Beyond AI Templates: Why Real Craftsmanship Still Wins in Web Development',
    subtitle: 'Why generic templates cannot replace purposeful typography, business alignment, and handcrafted code.',
    date: 'February 2025',
    readTime: '4 min read',
    category: 'Engineering & Design',
    excerpt:
      'While AI tools make generating generic pages effortless, creating high-converting websites that solve actual business problems demands human intentionality, typographic discipline, and clean architecture.',
    content: [
      'The internet is currently flooded with generic, low-effort landing pages that all share the exact same aesthetic: glowing purple blobs, generic copy, and cluttered card grids with no hierarchy.',
      'As a developer and founder, I have learned that clients do not pay for lines of code or shiny templates — they pay for outcomes: clarity, trust, conversion, and reliability.',
      'True digital craftsmanship comes down to mathematical spacing, typographic hierarchy, sub-second performance, and understanding why a customer buys. When you strip away the gimmicks, what remains is the pure power of well-structured information.',
      'At Next Solution, we approach every build by asking: What is the single most important action a visitor needs to take on this screen? Every element that does not support that action is removed.',
    ],
    keyTakeaways: [
      'Simplicity and contrast outperform flashy gimmicks every time.',
      'Type hierarchy and whitespace communicate prestige better than heavy animations.',
      'Build for the user outcome, not for developer vanity.',
    ],
  },
  {
    id: 'performance-first-react',
    slug: 'crafting-high-performance-react-without-bloat',
    title: 'Crafting High-Performance React Frontends Without Dependencies Bloat',
    subtitle: 'How to build lightning-fast, accessible web applications by keeping dependencies lean.',
    date: 'January 2025',
    readTime: '5 min read',
    category: 'Technical Architecture',
    excerpt:
      'Every npm package you install is a liability for bundle size and long-term maintenance. Here is the blueprint I follow to achieve 98+ Lighthouse scores on every production build.',
    content: [
      'It has become standard practice in modern web development to install heavy component libraries and animation suites for simple interactions that can be achieved with pure CSS or minimal JavaScript.',
      'When building applications like Fashion Hub or Apex Dashboard, keeping the initial bundle under 120KB was paramount. This required leaning on native browser APIs, CSS grid, and selective lazy loading.',
      'By defining strict design tokens with Tailwind CSS and utilizing React 18 concurrent transitions where necessary, we get both instant interactions and zero layout shift.',
      'Performance is not a final checklist item — it is an architectural mindset that begins during wireframing.',
    ],
    keyTakeaways: [
      'Prioritize native HTML/CSS capabilities before reaching for npm libraries.',
      'Use explicit image aspect ratios to completely eliminate Cumulative Layout Shift (CLS).',
      'Optimize bundle size by analyzing production chunk distributions.',
    ],
  },
  {
    id: 'building-next-solution',
    slug: 'solo-coder-to-agency-founder',
    title: 'From Solo Developer to Agency Founder: The Next Solution Story',
    subtitle: 'What I discovered about business, client trust, and delivering full digital solutions.',
    date: 'December 2024',
    readTime: '4 min read',
    category: 'Founder Story',
    excerpt:
      'Starting Next Solution was born from a simple observation: businesses do not want fragmented freelancers — they want a dedicated partner who can solve the entire digital puzzle.',
    content: [
      'When I began building websites, I thought my job began and ended with HTML, CSS, and React. But as I worked with real clients, I noticed a consistent frustration: they had a designer who did not understand code, a developer who did not care about aesthetics, and a marketer who did not understand SEO.',
      'I started Next Solution to bridge those gaps. By bringing together web development, UI/UX, SEO, and AI automation under one cohesive vision, we provide businesses with a unified digital engine.',
      'Being a young founder is about relentless curiosity, extreme accountability, and letting the work speak louder than any marketing pitch.',
    ],
    keyTakeaways: [
      'Clients value ownership and clear communication as much as technical skill.',
      'Next Solution was built to turn raw business ideas into finished digital products.',
      'Consistency and honesty build longer-lasting partnerships than exaggerated promises.',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'Sanjid took our rough concept and turned it into an incredibly sharp, fast web presence. His attention to detail on mobile layouts and typography is on par with senior agency leads.',
    author: 'Founder & Director',
    role: 'Client Review',
    company: 'Next Solution Client Project',
    projectType: 'Web Development & UI/UX',
    isPlaceholder: false,
  },
  {
    id: 'testimonial-2',
    quote:
      'Working with Sanjid and the Next Solution team gave us a seamless digital product. Everything from initial planning to final deployment was transparent and punctual.',
    author: 'Brand Lead',
    role: 'E-commerce Client',
    company: 'Retail Brand Partner',
    projectType: 'E-Commerce Platform',
    isPlaceholder: false,
  },
  {
    id: 'testimonial-3',
    quote:
      'Exceptional speed, clean code, and zero unnecessary fluff. He understands both the technical frontend architecture and how to make the design convert.',
    author: 'Tech Startup Founder',
    role: 'Product Collaboration',
    company: 'SaaS Platform',
    projectType: 'Web App & Dashboard',
    isPlaceholder: false,
  },
];
