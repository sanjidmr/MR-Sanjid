import React from 'react';
import { Quote, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { testimonials } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 border-t border-[#E8E6E1] bg-[#FAF9F6] relative">
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
              <span>/ 08 · CLIENT FEEDBACK & COLLABORATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-display tracking-tight leading-tight">
              Words from partners. <br />
              <span className="text-[#666666]">Building trust in the real world.</span>
            </h2>
          </div>
          <div className="max-w-md text-sm text-[#555555] leading-relaxed">
            Authentic feedback from business owners and founders who collaborated on digital builds.
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="pt-6 sm:pt-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-5 sm:p-7 bg-white border border-[#E8E6E1] rounded-2xl flex flex-col justify-between hover:border-[#D1CEC7] transition-all shadow-2xs hover:shadow-xs group"
            >
              <div className="space-y-3 sm:space-y-4">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5722]/50 group-hover:text-[#FF5722] transition-colors" />
                <p className="text-xs sm:text-sm text-[#333333] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#EFECE6] space-y-1">
                <div className="text-xs font-bold text-[#111111]">{item.author}</div>
                <div className="text-[11px] font-mono-code text-[#777777]">
                  {item.company} · {item.projectType}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Authentic Trust note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 sm:mt-8 p-3.5 sm:p-4 bg-white border border-[#E8E6E1] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono-code text-[#777777] max-w-2xl mx-auto shadow-2xs"
        >
          <span className="flex items-center gap-2 text-[#111111]">
            <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
            Strict Authenticity: Zero fabricated reviews or inflated claims.
          </span>
          <span className="text-[#FF5722] font-semibold shrink-0">CMS-Verified</span>
        </motion.div>
      </div>
    </section>
  );
};
