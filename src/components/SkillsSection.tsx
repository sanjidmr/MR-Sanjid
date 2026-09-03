import React, { useState } from 'react';
import { Terminal, CheckCircle2, Code2, Database, Wrench, Sparkles, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  const [inspectedSkill, setInspectedSkill] = useState<string | null>(null);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return Code2;
      case 'backend-data':
        return Database;
      case 'tools-workflow':
        return Wrench;
      default:
        return Sparkles;
    }
  };

  const selectedGroup =
    skillCategories.find((cat) => cat.id === activeCategory) || skillCategories[0];

  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-[#E8E6E1] bg-[#FAF9F6] relative">
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
              <span>/ 04 · TECHNICAL ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-display tracking-tight leading-tight">
              Tools & Technologies. <br />
              <span className="text-[#666666]">Tested in production.</span>
            </h2>
          </div>
          <div className="max-w-md text-sm text-[#555555] leading-relaxed">
            No fake skill percentage bars. Just a modern, production-hardened toolchain chosen for speed, reliability, and developer experience.
          </div>
        </motion.div>

        {/* Category Tabs & Interactive Cluster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-6 sm:pt-10">
          {/* Left Category Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="lg:col-span-4 space-y-2"
          >
            <div className="text-xs font-mono-code uppercase text-[#777777] tracking-wider mb-2 font-semibold">
              Ecosystem Groups
            </div>

            {skillCategories.map((cat) => {
              const Icon = getCategoryIcon(cat.id);
              const isActive = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setInspectedSkill(null);
                  }}
                  id={`skill-category-btn-${cat.id}`}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3.5 min-h-[48px] ${
                    isActive
                      ? 'bg-white border-[#111111] shadow-xs'
                      : 'bg-white/60 border-[#E8E6E1] hover:border-[#CCCCCC] hover:bg-white text-[#555555]'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg shrink-0 ${
                      isActive
                        ? 'bg-[#111111] text-[#FF5722]'
                        : 'bg-[#FAF9F6] text-[#777777]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div
                      className={`text-sm font-bold ${
                        isActive ? 'text-[#111111]' : 'text-[#444444]'
                      }`}
                    >
                      {cat.title}
                    </div>
                    <div className="text-[11px] text-[#777777] line-clamp-1 mt-0.5">
                      {cat.skills.length} core technologies
                    </div>
                  </div>
                </motion.button>
              );
            })}

            {/* Architecture philosophy box */}
            <div className="p-4 bg-[#FAF9F6] border border-[#E8E6E1] rounded-xl text-xs space-y-1.5 mt-4">
              <div className="font-mono-code text-[#FF5722] font-semibold text-[10px] uppercase">
                // Strict Engineering Rule
              </div>
              <p className="text-[#555555] leading-relaxed">
                Zero bloated libraries. Every package in the dependency tree must justify its bundle weight against runtime performance.
              </p>
            </div>
          </motion.div>

          {/* Right Skills Grid & Inspection Deck */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-8 bg-white border border-[#E8E6E1] rounded-2xl p-4 sm:p-8 shadow-xs space-y-5 sm:space-y-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedGroup.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#111111]">
                      {selectedGroup.title}
                    </h3>
                    <span className="font-mono-code text-xs px-2.5 py-0.5 bg-[#FAF9F6] border border-[#E8E6E1] rounded text-[#FF5722] font-semibold">
                      Verified Stack
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#666666]">
                    {selectedGroup.description}
                  </p>
                </div>

                {/* Skills Badges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {selectedGroup.skills.map((skill, idx) => {
                    const isInspected = inspectedSkill === skill.name;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: idx * 0.04 }}
                        whileHover={{ y: -2 }}
                        onClick={() =>
                          setInspectedSkill(isInspected ? null : skill.name)
                        }
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          isInspected
                            ? 'border-[#FF5722] bg-[#FFF9F6] shadow-2xs'
                            : 'border-[#E8E6E1] hover:border-[#D1CEC7] bg-[#FAF9F6]/80'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-bold text-[#111111]">
                            {skill.name}
                          </span>
                          <span
                            className={`text-[10px] font-mono-code uppercase px-2 py-0.5 rounded font-semibold ${
                              skill.level === 'Advanced'
                                ? 'bg-[#111111] text-white'
                                : skill.level === 'Core'
                                ? 'bg-[#FFF1EC] text-[#FF5722]'
                                : 'bg-white border border-[#E8E6E1] text-[#666666]'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        {skill.highlight && (
                          <p className="text-[11px] text-[#555555] leading-relaxed">
                            {skill.highlight}
                          </p>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Footer Stack Context */}
            <div className="pt-4 border-t border-[#EFECE6] flex flex-wrap items-center justify-between text-xs text-[#777777] font-mono-code gap-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                TypeScript 5.8 Strict Mode Standard
              </span>
              <span>Next.js 15 & React 19 Compatible</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
