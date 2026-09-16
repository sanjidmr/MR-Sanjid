export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured: boolean;
  accentColor: string;
  thumbnailSvg: string;
  caseStudy: CaseStudy;
}

export interface CaseStudy {
  overview: string;
  theChallenge: string;
  theApproach: string;
  designHighlights: string[];
  developmentHighlights: string[];
  technologies: { name: string; purpose: string }[];
  keyFeatures: { title: string; description: string }[];
  outcome: string;
  whatILearned: string;
  architectureDiagram?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Core' | 'Advanced' | 'Proficient' | 'Workflow';
    highlight?: string;
  }[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  technologies: string[];
}

export interface TimelineItem {
  year: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
  isCurrent?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  projectType: string;
  isPlaceholder?: boolean;
}

export interface PersonalInfo {
  name: string;
  fullName: string;
  handle: string;
  role: string;
  title: string;
  company: string;
  companyTagline: string;
  companyUrl: string;
  email: string;
  whatsapp: string;
  location: string;
  timezone: string;
  availability: {
    status: 'available' | 'limited' | 'booked';
    text: string;
  };
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    facebook?: string;
    whatsapp: string;
  };
  stats: {
    label: string;
    value: string;
    detail: string;
  }[];
}
