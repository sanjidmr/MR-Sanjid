import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-28 border-t border-[#E8E6E1] bg-[#111111] text-white relative overflow-hidden">
      {/* Subtle architectural grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8"
        >
          <div className="inline-flex items-center gap-2 font-mono-code text-xs text-[#FF5722] font-semibold tracking-wider uppercase px-3 py-1 bg-[#222222] rounded-full border border-[#333333]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>/ THE BUILDER'S MANIFESTO</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-display leading-[1.15]">
            "I don't just build websites. <br />
            I craft{' '}
            <span className="text-[#FF5722] underline decoration-white/20 decoration-2 underline-offset-8">
              fast, purposeful digital experiences
            </span>{' '}
            that build trust and move businesses forward."
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-[#262626] text-left">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="space-y-1 p-4 rounded-xl hover:bg-[#1A1A1A] transition-colors"
            >
              <div className="text-xs font-mono-code text-[#FF5722] font-semibold">
                01 · CLARITY OVER NOISE
              </div>
              <p className="text-xs text-[#999999] leading-relaxed">
                Remove every distraction until only the most compelling message and action remain.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="space-y-1 p-4 rounded-xl hover:bg-[#1A1A1A] transition-colors"
            >
              <div className="text-xs font-mono-code text-[#FF5722] font-semibold">
                02 · SPEED IS RESPECT
              </div>
              <p className="text-xs text-[#999999] leading-relaxed">
                Every millisecond of load time is a measure of respect for the user's attention.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="space-y-1 p-4 rounded-xl hover:bg-[#1A1A1A] transition-colors"
            >
              <div className="text-xs font-mono-code text-[#FF5722] font-semibold">
                03 · FOUNDER ACCOUNTABILITY
              </div>
              <p className="text-xs text-[#999999] leading-relaxed">
                Take full responsibility for the business outcome, not just the code commit.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
