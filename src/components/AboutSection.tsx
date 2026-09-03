import React from 'react';
import { ArrowRight, CheckCircle2, Compass, Cpu, Target, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Frontend Rigor & Sub-Second Speed',
      description:
        'I treat frontend development as serious software engineering. Minimal bundles, zero layout shift, semantic HTML, and fluid interactive responsiveness.',
    },
    {
      icon: Compass,
      title: 'Typographic & Spatial Discipline',
      description:
        'Design is not decoration; it is clear thinking made visible. I care deeply about typographic scale, generous negative space, and visual rhythm.',
    },
    {
      icon: Target,
      title: 'Business & Conversion Alignment',
      description:
        'A website must solve real commercial objectives. I build flows that guide visitors naturally from curiosity to confidence and action.',
    },
    {
      icon: HeartHandshake,
      title: 'Radical Accountability & Founder Care',
      description:
        'Whether building as an independent developer or through Next Solution, I take full ownership of timelines, code quality, and client outcomes.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 border-t border-[#E8E6E1] bg-[#FAF9F6] relative">
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
            <div className="font-mono-code text-xs font-semibold text-[#FF5722] tracking-wider uppercase">
              / 01 · ABOUT SANJID
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-display tracking-tight leading-tight">
              More than a developer. <br />
              <span className="text-[#666666]">I'm building what comes next.</span>
            </h2>
          </div>
          <div className="max-w-md text-sm text-[#555555] leading-relaxed">
            A developer who understands design. A designer who writes production code. A founder who understands business reality.
          </div>
        </motion.div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 sm:pt-12 items-start">
          {/* Left: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-[#333333] text-base sm:text-lg leading-relaxed"
          >
            <p>
              I got into web development not to chase trends, but because the web is the single most accessible canvas on earth. The ability to turn a blank text editor into an interactive, functional product used by real people continues to drive everything I do.
            </p>

            <p>
              Along the way, I noticed a persistent divide in the industry: designers who craft interfaces that are impossible to build performantly, and developers who don't care how an interface looks or feels. I chose to live at the intersection — obsessing over the mathematical precision of spacing and typography while writing strict, type-safe code.
            </p>

            <p>
              Starting <strong className="text-[#111111] font-semibold">Next Solution</strong> was the natural evolution of this mindset. I wanted to build a company capable of taking a founder's raw vision and turning it into a complete digital ecosystem — covering web engineering, UI/UX systems, SEO, and AI automation.
            </p>

            {/* Quote block */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-4 sm:p-6 bg-white border-l-4 border-[#FF5722] rounded-r-xl border-y border-r border-[#E8E6E1] my-4 sm:my-6 shadow-2xs"
            >
              <blockquote className="font-serif italic text-base sm:text-xl text-[#111111] leading-snug">
                "Good websites aren't just beautiful. They should be useful, fast, crystal clear, and built to achieve a tangible business result."
              </blockquote>
              <div className="mt-3 text-xs font-mono-code text-[#777777] uppercase tracking-wider">
                — Sanjid / Personal Philosophy
              </div>
            </motion.div>

            <p className="text-sm sm:text-base text-[#555555]">
              Today, I split my time between engineering high-speed frontends for forward-thinking clients and growing Next Solution. I am constantly learning, refining my craft, and collaborating with people who care about quality as much as I do.
            </p>
          </motion.div>

          {/* Right: Pillars of Craftsmanship */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-3.5 sm:space-y-4"
          >
            <div className="text-xs font-mono-code uppercase text-[#777777] tracking-wider mb-2 font-semibold">
              Core Principles
            </div>

            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-4 sm:p-5 bg-white border border-[#E8E6E1] rounded-xl hover:border-[#D1CEC7] transition-all shadow-2xs hover:shadow-xs group"
                >
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="p-2 rounded-lg bg-[#FAF9F6] border border-[#E8E6E1] text-[#111111] group-hover:text-[#FF5722] group-hover:border-[#FF5722]/30 transition-colors shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#111111] group-hover:text-[#FF5722] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#666666] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Quick Action Link to Founder section */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#founder"
              className="inline-flex items-center justify-between w-full p-4 bg-[#111111] hover:bg-[#FF5722] text-white rounded-xl transition-all shadow-xs group min-h-[44px]"
            >
              <span className="text-xs font-semibold">
                Explore the Next Solution Story
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
