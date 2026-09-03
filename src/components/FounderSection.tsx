import React, { useState } from 'react';
import {
  ArrowUpRight,
  Globe,
  Bot,
  Sparkles,
  TrendingUp,
  Layout,
  Video,
  Palette,
  Search,
  CheckCircle2,
  Workflow,
  Shield,
  Layers,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

export const FounderSection: React.FC = () => {
  const [activeCapability, setActiveCapability] = useState<number>(0);

  const agencyCapabilities = [
    {
      title: 'Web Development',
      category: 'Engineering',
      icon: Globe,
      description: 'Modern React, Next.js, and TypeScript web applications engineered for speed, responsiveness, and scale.',
    },
    {
      title: 'UI/UX Design',
      category: 'Experience',
      icon: Layout,
      description: 'Bespoke design systems, wireframes, and high-fidelity prototypes built for intuitive user flow.',
    },
    {
      title: 'AI Automation & Agents',
      category: 'Intelligence',
      icon: Bot,
      description: 'Custom AI workflows, automated client intake, LLM integrations, and process optimization.',
    },
    {
      title: 'SEO & Search Growth',
      category: 'Visibility',
      icon: Search,
      description: 'Technical SEO audits, semantic schema, speed optimization, and on-page search visibility strategies.',
    },
    {
      title: 'Digital Marketing & Strategy',
      category: 'Growth',
      icon: TrendingUp,
      description: 'Conversion rate optimization (CRO), funnel architecture, and targeted digital positioning.',
    },
    {
      title: 'Graphic Design & Branding',
      category: 'Identity',
      icon: Palette,
      description: 'Cohesive visual brand identities, vector assets, typography suites, and marketing collateral.',
    },
    {
      title: 'Video Editing & Motion',
      category: 'Media',
      icon: Video,
      description: 'Engaging product launch videos, micro-animations, social media cuts, and motion graphics.',
    },
    {
      title: 'Custom Digital Solutions',
      category: 'End-to-End',
      icon: Workflow,
      description: 'End-to-end consulting, API integrations, and tailored digital transformations for business needs.',
    },
  ];

  return (
    <section
      id="founder"
      className="py-16 sm:py-24 border-t border-[#E8E6E1] bg-[#FAF9F6] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12 border-b border-[#E8E6E1]"
        >
          <div className="space-y-2">
            <div className="font-mono-code text-xs font-semibold text-[#FF5722] tracking-wider uppercase flex items-center gap-2">
              <span>/ 02 · THE FOUNDER PERSPECTIVE</span>
              <span className="w-2 h-2 rounded-full bg-[#FF5722]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-display tracking-tight leading-tight">
              Building Next Solution. <br />
              <span className="text-[#666666]">Digital solutions for modern businesses.</span>
            </h2>
          </div>
          <div className="max-w-md space-y-2">
            <p className="text-sm text-[#555555] leading-relaxed">
              Why settle for fragmented freelancers when you can partner with a unified digital engine?
            </p>
            <div className="font-mono-code text-xs text-[#FF5722] font-semibold">
              Founded & Led by Sanjid
            </div>
          </div>
        </motion.div>

        {/* Narrative & Visual Relationship Bridge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-8 sm:pt-12 items-center">
          {/* Left Column: Founder Manifesto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-5 sm:space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFF1EC] text-[#FF5722] text-xs font-mono-code rounded-full border border-[#FFCCBC]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Agency Purpose</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111111] leading-snug">
              "I didn't want to build just another agency. I wanted to build a team that could turn business ideas into real digital products."
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[#555555] leading-relaxed">
              <p>
                Too many businesses struggle with the traditional agency runaround: excessive overhead, junior handoffs, and disjointed handshakes between design, code, and marketing.
              </p>
              <p>
                At Next Solution, we operate with a builder-first philosophy. We bring technical execution, brand aesthetics, and modern AI automation under one roof — helping founders and businesses launch with speed and authority.
              </p>
            </div>

            {/* Visual ecosystem bridge */}
            <div className="p-3.5 sm:p-4 bg-white border border-[#E8E6E1] rounded-xl font-mono-code text-xs space-y-2 shadow-2xs">
              <div className="text-[#888888] uppercase tracking-wider text-[10px]">
                // The Operational Bridge
              </div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[#111111]">
                <span className="px-2.5 py-1 bg-[#FAF9F6] border border-[#D1CEC7] rounded-md font-semibold text-[11px] sm:text-xs">
                  Sanjid (Founder)
                </span>
                <span className="text-[#FF5722]">➔</span>
                <span className="px-2.5 py-1 bg-[#111111] text-white rounded-md font-semibold text-[11px] sm:text-xs">
                  Next Solution
                </span>
                <span className="text-[#FF5722]">➔</span>
                <span className="px-2.5 py-1 bg-[#FFF1EC] text-[#FF5722] border border-[#FFCCBC] rounded-md font-semibold text-[11px] sm:text-xs">
                  Digital Products & Growth
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={personalInfo.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="founder-visit-next-solution"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FF5722] hover:bg-[#E64A19] text-white text-sm font-semibold rounded-xl transition-all shadow-xs hover:shadow-sm min-h-[44px]"
              >
                <span>Visit Next Solution</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white border border-[#D1CEC7] text-[#111111] hover:bg-[#F4F3EE] text-sm font-semibold rounded-xl transition-all shadow-2xs min-h-[44px]"
              >
                <span>Hire Sanjid & Team</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Full Spectrum Agency Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            <div className="bg-white border border-[#E8E6E1] rounded-2xl p-4 sm:p-6 shadow-sm space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#EFECE6]">
                <div className="flex items-center gap-2 font-mono-code text-xs text-[#111111] font-semibold uppercase">
                  <Layers className="w-4 h-4 text-[#FF5722]" />
                  <span>Next Solution Service Spectrum</span>
                </div>
                <span className="text-[11px] font-mono-code text-[#777777]">
                  8 Core Capabilities
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {agencyCapabilities.map((cap, idx) => {
                  const Icon = cap.icon;
                  const isSelected = activeCapability === idx;
                  return (
                    <motion.button
                      key={idx}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveCapability(idx)}
                      className={`text-left p-3.5 rounded-xl border transition-all ${
                        isSelected
                          ? 'border-[#FF5722] bg-[#FFF9F6] shadow-2xs'
                          : 'border-[#E8E6E1] hover:border-[#D1CEC7] bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div
                          className={`p-1.5 rounded-md ${
                            isSelected
                              ? 'bg-[#FF5722] text-white'
                              : 'bg-[#FAF9F6] text-[#555555]'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-[#111111]">
                          {cap.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#666666] leading-relaxed line-clamp-2">
                        {cap.description}
                      </p>
                    </motion.button>
                  );
                })}
              </div>

              {/* Detail drawer for active capability with AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 bg-[#FAF9F6] border border-[#E8E6E1] rounded-xl space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#111111]">
                      {agencyCapabilities[activeCapability].title}
                    </span>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 bg-white border border-[#E8E6E1] rounded text-[#FF5722] font-semibold">
                      {agencyCapabilities[activeCapability].category}
                    </span>
                  </div>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {agencyCapabilities[activeCapability].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
