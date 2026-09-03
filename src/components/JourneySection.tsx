import React from 'react';
import { Calendar, CheckCircle, Sparkles, Milestone, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { timeline } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 border-t border-[#E8E6E1] bg-[#FAF9F6] relative">
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
              <span>/ 06 · JOURNEY & MILESTONES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-display tracking-tight leading-tight">
              The Path so far. <br />
              <span className="text-[#666666]">Continuous learning & building.</span>
            </h2>
          </div>
          <div className="max-w-md text-sm text-[#555555] leading-relaxed">
            An authentic, transparent progression of technical growth, academic milestones, and entrepreneurial execution.
          </div>
        </motion.div>

        {/* Timeline representation */}
        <div className="pt-8 sm:pt-12 max-w-4xl mx-auto space-y-6 sm:space-y-8 relative">
          {/* Vertical spine line */}
          <div className="absolute left-3 sm:left-8 top-16 bottom-8 w-[2px] bg-[#E8E6E1]"></div>

          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="relative pl-7 sm:pl-20 group"
            >
              {/* Timeline marker node */}
              <div
                className={`absolute left-1.5 sm:left-6 -translate-x-1/2 top-2.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-3 sm:border-4 transition-colors flex items-center justify-center ${
                  item.isCurrent
                    ? 'bg-[#FF5722] border-[#FFF1EC] ring-4 ring-[#FF5722]/20'
                    : 'bg-white border-[#111111] group-hover:border-[#FF5722]'
                }`}
              ></div>

              {/* Timeline Card */}
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className={`p-4 sm:p-7 rounded-2xl border transition-all ${
                  item.isCurrent
                    ? 'bg-white border-[#FF5722]/50 shadow-sm ring-1 ring-[#FF5722]/10'
                    : 'bg-white border-[#E8E6E1] hover:border-[#D1CEC7] shadow-2xs'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#EFECE6]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono-code text-xs font-bold text-[#FF5722] px-2.5 py-0.5 bg-[#FFF1EC] rounded border border-[#FFCCBC]">
                      {item.year}
                    </span>
                    <span className="font-mono-code text-xs text-[#777777]">
                      [{item.period}]
                    </span>
                  </div>
                  {item.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-code font-semibold text-[#10B981] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                      Present Focus
                    </span>
                  )}
                </div>

                <div className="mt-3 space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#111111]">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#777777] font-mono-code">
                    {item.subtitle}
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {item.description}
                </p>

                {item.tags && (
                  <div className="mt-4 pt-3 border-t border-[#EFECE6] flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono-code px-2 py-0.5 bg-[#FAF9F6] border border-[#E8E6E1] text-[#666666] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
