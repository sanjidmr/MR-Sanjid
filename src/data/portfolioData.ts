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
  role: 'Web Developer & Founder of Next Solution MYM',
  title: 'Crafting High-Performance Websites & Digital Products',
  company: 'Next Solution MYM',
  companyTagline: 'Digital Solutions for Modern Businesses & Ambitious Brands',
  companyUrl: 'https://nextsolutionmym.com',
  email: 'mushfiqurrahmansanjid@gmail.com',
  whatsapp: '+8801955417215',
  location: 'Dhaka, Bangladesh · Remote Worldwide',
  timezone: 'GMT+6 (Available across US/EU/APAC overlap hours)',
  availability: {
    status: 'available',
    text: 'Available for selected projects & founder collaborations',
  },
  socials: {
    github: 'https://github.com/sanjidmr',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    facebook: 'https://www.facebook.com/sa.nj.id.566559',
    whatsapp: 'https://wa.me/8801955417215',
  },
  stats: [
    {
      label: 'Focus Areas',
      value: 'Frontend & UI Systems',
      detail: 'Next.js, React, TypeScript, Tailwind',
    },
    {
      label: 'Leadership',
      value: 'Next Solution MYM',
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
    id: 'aurelia',
    slug: 'aurelia-elegance',
    title: 'Aurelia',
    category: 'Premium Beauty & Care Platform',
    tagline: 'An elegant, conversion-focused brand experience for a premium beauty & care label',
    description:
      'Aurelia is a refined brand website built to feel luxurious while staying lightning-fast. Soft editorial typography, immersive product storytelling, and a friction-free user journey across every device.',
    role: 'Web Development & UI Design',
    year: '2025',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
    liveUrl: 'https://aurealia.netlify.app/',
    image: '/Aurelia.png',
    featured: true,
    accentColor: '#B08D57',
    thumbnailSvg: 'landing',
    caseStudy: {
      overview:
        'Aurelia needed a digital presence that matched the elegance of its brand. The goal was a fast, elegant experience that communicates premium quality and converts visitors with confidence.',
      theChallenge:
        'Balancing a luxurious, image-heavy aesthetic against the need for instant load times and a fully responsive layout on mobile devices.',
      theApproach:
        'Designed a calm, editorial interface with generous whitespace, refined typography, and high-quality imagery — engineered for speed with modern frontend tooling.',
      designHighlights: [
        'Refined serif-forward typography paired with a soft neutral palette.',
        'Immersive product storytelling with smooth scroll reveals.',
        'Mobile-first layouts that preserve elegance on small screens.',
      ],
      developmentHighlights: [
        'Modern React + Vite build with strict type safety.',
        'Optimized image pipeline for fast hero and product sections.',
        'Seamless responsive behaviour across all breakpoints.',
      ],
      technologies: [
        { name: 'React', purpose: 'Component-driven interactive interface' },
        { name: 'TypeScript', purpose: 'Type-safe component and data architecture' },
        { name: 'Tailwind CSS', purpose: 'Custom design tokens and fluid responsive layouts' },
      ],
      keyFeatures: [
        {
          title: 'Editorial Storytelling',
          description: 'A visual narrative flow that immerses visitors in the Aurelia brand.',
        },
        {
          title: 'Premium Product Display',
          description: 'High-fidelity product showcases with elegant presentation.',
        },
        {
          title: 'Fully Responsive UI',
          description: 'Pixel-perfect experience from mobile to ultrawide displays.',
        },
      ],
      outcome:
        'Delivered a premium, production-ready website that positions Aurelia as an elegant, trustworthy brand with a fast and delightful user experience.',
      whatILearned:
        'Refining restraint — how generous whitespace and disciplined typography create perceived luxury without sacrificing performance.',
    },
  },
  {
    id: 'laziiz-restaurant',
    slug: 'laziiz-culinary-experience',
    title: 'Laziiz',
    category: 'Hospitality & Culinary Platform',
    tagline: 'Atmospheric digital dining experience with interactive digital menu & reservation flow',
    description:
      'A refined web presence for high-end dining. Blends appetizing visual storytelling, interactive category menus, dynamic business hours, and a seamless reservation interface.',
    role: 'Web Development & Visual Strategy',
    year: '2025',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://lazziiz.netlify.app/',
    image: '/laziiz.png',
    featured: true,
    accentColor: '#D84315',
    thumbnailSvg: 'restaurant',
    caseStudy: {
      overview:
        'Laziiz required a web experience that felt as warm and inviting as stepping into the dining room. The client wanted to replace static PDF menus with a dynamic, categorized online experience.',
      theChallenge:
        'Creating an appetizing, luxurious aesthetic while keeping load times fast on mobile for guests browsing on cellular data.',
      theApproach:
        'Used a warm-toned color scheme with tactile typography, category navigation, dietary tags, and an interactive reservation flow with instant validation.',
      designHighlights: [
        'Serif display headings paired with clean geometric body copy.',
        'Interactive dietary and allergen tags with instant filter toggles.',
        'Real-time opening status indicator calculated from the local timezone.',
      ],
      developmentHighlights: [
        'Structured modular menu data for zero-code price and item updates.',
        'Multi-step reservation stepper with validation and accessible keyboard navigation.',
        'Zero layout shifts when switching between menu categories.',
      ],
      technologies: [
        { name: 'React', purpose: 'Dynamic category and reservation interfaces' },
        { name: 'TypeScript', purpose: 'Type-safe menu schema and reservation validation' },
        { name: 'Tailwind CSS', purpose: 'Custom warm-neutral color scale and micro-borders' },
      ],
      keyFeatures: [
        {
          title: 'Dietary & Allergen Filtering',
          description: 'Filter complex menus by dietary preferences with clean pill toggles.',
        },
        {
          title: 'Live Table Reservation',
          description: 'Select party size, date, time slot, and requests with client-side verification.',
        },
        {
          title: 'Dynamic Operating Status',
          description: 'Automatically calculates if the restaurant is Open, Closing Soon, or Closed.',
        },
      ],
      outcome:
        'Successfully deployed a high-conversion digital presence that increased direct online reservation inquiries and replaced slow PDF menus.',
      whatILearned:
        'How purposeful typography and subtle layout hierarchy can elevate a local business to feel like an international premium brand.',
    },
  },
  {
    id: 'medora',
    slug: 'medora-health-wellness',
    title: 'Medora',
    category: 'Health & Wellness Platform',
    tagline: 'A clean, trustworthy digital home for healthcare & wellness services',
    description:
      'Medora is a modern health and wellness website designed around clarity, trust, and ease of use. Calming visuals, structured service information, and a clear path for patients to get the care they need.',
    role: 'Web Development & UI Design',
    year: '2025',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://medorahealthh.netlify.app/',
    image: '/Medora.png',
    featured: true,
    accentColor: '#0E7C7B',
    thumbnailSvg: 'landing',
    caseStudy: {
      overview:
        'Medora needed a website that feels calm, professional, and reassuring. The project focused on clear information architecture so visitors instantly understand the services and how to take the next step.',
      theChallenge:
        'Presenting medical and wellness services in a way that feels approachable rather than clinical, while keeping the site fast and fully responsive.',
      theApproach:
        'Built a clean layout with trustworthy typography, soft color accents, structured service cards, and strong, obvious calls to action for appointments.',
      designHighlights: [
        'Calm, health-inspired palette with high contrast and clear hierarchy.',
        'Well-organized service and department sections.',
        'Accessible, mobile-first forms and navigation.',
      ],
      developmentHighlights: [
        'Component-based React architecture with strict typing.',
        'Fast loading and responsive across all device sizes.',
        'Clean, semantic markup for accessibility and SEO.',
      ],
      technologies: [
        { name: 'React', purpose: 'Structured service and content interface' },
        { name: 'TypeScript', purpose: 'Type-safe content and form models' },
        { name: 'Tailwind CSS', purpose: 'Consistent design tokens and responsive utility layouts' },
      ],
      keyFeatures: [
        {
          title: 'Clear Service Structure',
          description: 'Well-organized cards and sections that explain every service at a glance.',
        },
        {
          title: 'Appointment-Focused CTAs',
          description: 'Prominent, friendly calls to action guiding visitors toward booking.',
        },
        {
          title: 'Accessible & Responsive',
          description: 'A smooth, trustworthy experience on every screen size.',
        },
      ],
      outcome:
        'Delivered a polished, trustworthy web presence that helps Medora build confidence and connect patients with the care they need.',
      whatILearned:
        'Empathy-first design — how restrained color, clear structure, and gentle language make healthcare websites feel human and reliable.',
    },
  },
  {
    id: 'nextbuilder',
    slug: 'nextbuilder-construction',
    title: 'NextBuilder',
    category: 'Construction & Building Services',
    tagline: 'A bold, credible digital platform for a modern construction & building company',
    description:
      'NextBuilder is a construction company website engineered to project strength, reliability, and craftsmanship. Structured project showcases, clear service pillars, and a strong lead-generation flow.',
    role: 'Web Development & UI Design',
    year: '2025',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://nextbuilder.netlify.app/',
    image: '/nextbuilder.png',
    featured: true,
    accentColor: '#B45309',
    thumbnailSvg: 'landing',
    caseStudy: {
      overview:
        'NextBuilder needed an online presence that reflects industrial strength and dependability. The site showcases completed work, services, and a clear way for potential clients to request a quote.',
      theChallenge:
        'Making a heavy, content-rich construction website feel fast and modern while keeping the brand bold and grounded.',
      theApproach:
        'Used strong typography, earthy accent colors, structured service cards, and a prominent project showcase with a quoting funnel.',
      designHighlights: [
        'Bold, confident headline treatment with high contrast.',
        'Structured service pillars and project showcase grid.',
        'Consistent motion and hover states that feel physical and sturdy.',
      ],
      developmentHighlights: [
        'Modular React components with strict type safety.',
        'Optimized images and lazy-loaded sections for speed.',
        'Fully responsive layouts from mobile to desktop.',
      ],
      technologies: [
        { name: 'React', purpose: 'Component-driven marketing interface' },
        { name: 'TypeScript', purpose: 'Type-safe project and service data' },
        { name: 'Tailwind CSS', purpose: 'Durable design system with custom tokens' },
      ],
      keyFeatures: [
        {
          title: 'Project Showcase',
          description: 'A visual gallery that lets visitors see real work at a glance.',
        },
        {
          title: 'Clear Service Pillars',
          description: 'Every core service explained with its own dedicated focus.',
        },
        {
          title: 'Quote-Focused CTAs',
          description: 'Strong, repeated pathways that convert visitors into leads.',
        },
      ],
      outcome:
        'Produced a fast, credible website that gives NextBuilder a commanding digital presence and drives qualified inquiry.',
      whatILearned:
        'Designing for trust-heavy industries — how structure, imagery, and tone can project reliability before a single conversation begins.',
    },
  },
  {
    id: 'strangervibe',
    slug: 'strangervibe-lifestyle',
    title: 'StrangerVibe',
    category: 'Lifestyle & Brand Storefront',
    tagline: 'A bold, mood-driven lifestyle brand experience with instant shop & explore flow',
    description:
      'StrangerVibe is a lifestyle brand site with an unmistakable attitude. Dark, expressive visuals, high-energy product showcases, and a shopping experience built for speed and impact.',
    role: 'Web Development & UI Design',
    year: '2025',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://strangervibe.netlify.app/',
    image: '/strangervibe.png',
    featured: true,
    accentColor: '#7C3AED',
    thumbnailSvg: 'ecommerce',
    caseStudy: {
      overview:
        'StrangerVibe needed a digital storefront with serious personality. The mission was to translate a loud, expressive streetwear aesthetic into a fast, functional web experience that excites and converts.',
      theChallenge:
        'Protecting the brand dark, high-energy style while keeping the experience intuitive, accessible, and quick on mobile shopping sessions.',
      theApproach:
        'Built a bold dark-themed interface with neon accents, immersive product grids, and a streamlined browse-to-cart flow tuned for mobile-first shoppers.',
      designHighlights: [
        'High-contrast dark canvas with vibrant signature accents.',
        'Editorial product grids with strong visual rhythm.',
        'Animated micro-interactions that match the brand energy.',
      ],
      developmentHighlights: [
        'Lean React architecture with no heavy UI dependencies.',
        'Explicit image aspect ratios to eliminate layout shift.',
        'Fully responsive product and cart experience.',
      ],
      technologies: [
        { name: 'React', purpose: 'Immersive product and catalog UI' },
        { name: 'TypeScript', purpose: 'Type-safe product and cart models' },
        { name: 'Tailwind CSS', purpose: 'Custom dark theme and design tokens' },
      ],
      keyFeatures: [
        {
          title: 'Immersive Product Grids',
          description: 'High-energy catalog layouts built for visual impact.',
        },
        {
          title: 'Fast Mobile Shopping',
          description: 'Streamlined browse-to-cart flow tuned for small screens.',
        },
        {
          title: 'Bold Brand Attitude',
          description: 'Motion and color systems that broadcast the StrangerVibe identity.',
        },
      ],
      outcome:
        'Shipped a standout lifestyle storefront that matches the fearless StrangerVibe identity while delivering a smooth, fast shopping experience.',
      whatILearned:
        'Channelling raw personality into interfaces — how dark themes, bold color, and confident motion create brand experiences shoppers remember.',
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
    title: 'Systems, SEO & Performance',
    description: 'Holistic web delivery combining design fidelity, search visibility, and speed optimization.',
    skills: [
      { name: 'UI / UX Design', level: 'Advanced', highlight: 'Information Hierarchy, User Flows, Typography' },
      { name: 'Performance Optimization', level: 'Advanced', highlight: 'Core Web Vitals, Bundle Splitting, Image Pipeline' },
      { name: 'Technical SEO', level: 'Advanced', highlight: 'Structured Data, Meta Graph, Sitemap, Canonical' },
      { name: 'Responsive Web Design', level: 'Core', highlight: 'Mobile-first, Tablet, Ultrawide Fluidity' },
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
    title: 'Business & Brand Websites',
    description:
      'Polished, modern websites for businesses and brands — clear messaging, strong visual identity, and fast, responsive experiences.',
    deliverables: ['Brand-Focused Design', 'Service & Product Pages', 'Blog / Content Templates', 'Contact & Lead Flows'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    number: '06',
    title: 'Website Optimization & SEO',
    description:
      'Auditing and transforming slow, cluttered sites into high-ranking, 95+ Core Web Vitals digital powerhouses.',
    deliverables: ['Core Web Vitals Audit', 'Bundle Size Reduction', 'Technical SEO Schema', 'Asset & Font Pipeline'],
    technologies: ['Lighthouse', 'Schema.org', 'Web Performance'],
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
    title: 'Founded Next Solution MYM',
    subtitle: 'Starting a Digital Solutions Company',
    description:
      'Launched Next Solution MYM with a mission to help ambitious businesses and founders build reliable web applications, websites, and digital experiences.',
    tags: ['Next Solution MYM', 'Client Strategy', 'Product Scoping', 'Agency Leadership'],
  },
  {
    year: 'Present',
    period: 'Active Execution',
    title: 'Web Developer & Founder',
    subtitle: 'Building Products, Serving Clients & Growing Next Solution MYM',
    description:
      'Actively developing client projects, refining digital experiences, building in public, and growing Next Solution MYM into a dependable digital agency.',
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
      'At Next Solution MYM, we approach every build by asking: What is the single most important action a visitor needs to take on this screen? Every element that does not support that action is removed.',
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
      'When building applications for clients, keeping the initial bundle small was paramount. This required leaning on native browser APIs, CSS grid, and selective lazy loading.',
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
    title: 'From Solo Developer to Agency Founder: The Next Solution MYM Story',
    subtitle: 'What I discovered about business, client trust, and delivering full digital solutions.',
    date: 'December 2024',
    readTime: '4 min read',
    category: 'Founder Story',
    excerpt:
      'Starting Next Solution MYM was born from a simple observation: businesses do not want fragmented freelancers — they want a dedicated partner who can solve the entire digital puzzle.',
    content: [
      'When I began building websites, I thought my job began and ended with HTML, CSS, and React. But as I worked with real clients, I noticed a consistent frustration: they had a designer who did not understand code, a developer who did not care about aesthetics, and a marketer who did not understand SEO.',
      'I started Next Solution MYM to bridge those gaps. By bringing together web development, UI/UX, and SEO under one cohesive vision, we provide businesses with a unified digital engine.',
      'Being a young founder is about relentless curiosity, extreme accountability, and letting the work speak louder than any marketing pitch.',
    ],
    keyTakeaways: [
      'Clients value ownership and clear communication as much as technical skill.',
      'Next Solution MYM was built to turn raw business ideas into finished digital products.',
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
    company: 'Next Solution MYM Client Project',
    projectType: 'Web Development & UI/UX',
    isPlaceholder: false,
  },
  {
    id: 'testimonial-2',
    quote:
      'Working with Sanjid and the Next Solution MYM team gave us a seamless digital product. Everything from initial planning to final deployment was transparent and punctual.',
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