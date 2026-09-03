import React, { useState } from 'react';
import { processSteps } from '../data/portfolioData';
import { Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-16 sm:py-24 border-t border-[#E8E6E1] bg-[#FAF9F6] relative">
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
              <span>/ 07 · DELIVERY WORKFLOW</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-display tracking-tight leading-tight">
              How I work. <br />
              <span className="text-[#666666]">From raw concept to production.</span>
            </h2>
          </div>
          <div className="max-w-md text-sm text-[#555555] leading-relaxed">
            A structured, transparent 6-phase engineering lifecycle designed to eliminate surprises, protect timelines, and deliver measurable quality.
          </div>
        </motion.div>

        {/* 6-step Grid */}
        <div className="pt-8 sm:pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onMouseEnter={() => setActiveStep(idx)}
              className={`p-5 sm:p-6 bg-white border rounded-2xl transition-all duration-200 flex flex-col justify-between ${
                activeStep === idx
                  ? 'border-[#FF5722] shadow-sm ring-1 ring-[#FF5722]/20'
                  : 'border-[#E8E6E1] hover:border-[#D1CEC7] shadow-2xs'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono-code text-xs font-bold text-[#FF5722] px-2.5 py-1 bg-[#FFF1EC] rounded border border-[#FFCCBC]">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-mono-code text-[#888888] uppercase">
                    Stage {idx + 1}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#111111]">{step.name}</h3>
                  <div className="text-xs font-semibold text-[#FF5722]">
                    {step.tagline}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#EFECE6] space-y-1">
                <div className="text-[10px] font-mono-code uppercase text-[#888888]">
                  Key Deliverable:
                </div>
                <div className="text-xs font-semibold text-[#111111] leading-snug">
                  {step.deliverable}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
