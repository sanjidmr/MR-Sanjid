import React, { useState } from 'react';
import { ArrowUpRight, Check, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { services } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [expandedService, setExpandedService] = useState<string | null>('01');

  const toggleExpand = (num: string) => {
    setExpandedService(expandedService === num ? null : num);
  };

  return (
    <section id="services" className="py-16 sm:py-24 border-t border-[#E8E6E1] bg-[#FAF9F6] relative">
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
              <span>/ 05 · CAPABILITIES & SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-display tracking-tight leading-tight">
              What I build. <br />
              <span className="text-[#666666]">End-to-end digital solutions.</span>
            </h2>
          </div>
          <div className="max-w-md text-sm text-[#555555] leading-relaxed">
            Every engagement is approached with product-level ownership. From initial architectural planning to final deployment and optimization.
          </div>
        </motion.div>

        {/* Numbered Editorial Services Grid */}
        <div className="pt-6 sm:pt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, idx) => {
            const isExpanded = expandedService === service.number;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -2 }}
                id={`service-card-${service.number}`}
                className={`bg-white border rounded-2xl p-4 sm:p-6 transition-all duration-200 flex flex-col justify-between ${
                  isExpanded
                    ? 'border-[#FF5722]/80 shadow-sm ring-1 ring-[#FF5722]/20'
                    : 'border-[#E8E6E1] hover:border-[#D1CEC7] hover:shadow-2xs'
                }`}
              >
                <div className="space-y-4">
                  {/* Service Number & Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono-code text-xs font-bold text-[#FF5722] px-2.5 py-1 bg-[#FFF1EC] rounded-md border border-[#FFCCBC]">
                      {service.number}
                    </span>
                    <button
                      onClick={() => toggleExpand(service.number)}
                      className="text-xs font-mono-code text-[#777777] hover:text-[#111111] flex items-center gap-1 min-h-[44px] min-w-[44px] justify-end"
                    >
                      <span>{isExpanded ? 'Collapse' : 'Details'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#111111] tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Expandable Deliverables with AnimatePresence */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 border-t border-[#EFECE6] space-y-3">
                          <div className="text-[11px] font-mono-code uppercase text-[#777777] font-semibold">
                            Core Deliverables
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.deliverables.map((deliv, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 text-xs text-[#444444]"
                              >
                                <Check className="w-3.5 h-3.5 text-[#10B981] mt-0.5 shrink-0" />
                                <span>{deliv}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tech stack pills */}
                          <div className="pt-2 flex flex-wrap gap-1.5">
                            {service.technologies.map((t) => (
                              <span
                                key={t}
                                className="text-[10px] font-mono-code px-2 py-0.5 bg-[#FAF9F6] border border-[#E8E6E1] text-[#666666] rounded"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Action */}
                <div className="pt-4 sm:pt-5 mt-4 border-t border-[#EFECE6] flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-mono-code text-[#888888]">
                    Available for Q3/Q4
                  </span>
                  <a
                    href="#contact"
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#FF5722] transition-colors py-1 min-h-[40px]"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5722]" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
