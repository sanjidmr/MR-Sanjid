import React, { useState, useEffect } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Copy,
  Check,
} from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [liveTime, setLiveTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setLiveTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const leftContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const leftItemFromTopVariants = {
    hidden: { opacity: 0, y: -60, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between overflow-hidden bg-grid-pattern"
    >
      {/* Ambient glowing orbs for world-class visual depth */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-24 left-1/4 w-96 h-96 bg-[#FF5722]/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1.1, 0.95, 1.1],
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-1/3 -right-20 w-[420px] h-[420px] bg-[#FFAB91]/15 rounded-full blur-3xl pointer-events-none"
      />

      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full border-x border-[#E8E6E1]/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top metadata row (Enters smoothly from top) */}
        <motion.div
          initial={{ opacity: 0, y: -40, filter: 'blur(3px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-3 pb-8 border-b border-[#E8E6E1]/80 mb-10"
        >
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-code bg-white border border-[#E8E6E1] text-[#222222] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              {personalInfo.availability.text}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono-code text-[#666666]">
            <span className="hidden sm:inline">
              DHAKA / {liveTime ? liveTime : 'GMT+6'}
            </span>
            <span className="hidden md:inline">·</span>
            <span className="text-[#111111] font-medium">NEXT SOLUTION MYM / FOUNDER</span>
          </div>
        </motion.div>

        {/* Core Hero Grid: Left from TOP / Right from BOTTOM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Enters dynamically from TOP */}
          <motion.div
            variants={leftContainerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            <motion.div variants={leftItemFromTopVariants} className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono-code text-xs text-[#FF5722] font-semibold tracking-wider uppercase bg-[#FFF1EC] px-3 py-1 rounded-full border border-[#FFCCBC] w-fit shadow-2xs">
                <span>/ SANJID</span>
                <span className="text-[#FF8A65]">—</span>
                <span className="text-[#D84315]">WEB DEVELOPER & FOUNDER</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.08] font-display">
                Building digital experiences that{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#FF5722] to-[#111111]">
                  move businesses
                </span>{' '}
                forward.
              </h1>
            </motion.div>

            <motion.p
              variants={leftItemFromTopVariants}
              className="text-base sm:text-lg text-[#444444] leading-relaxed max-w-2xl"
            >
              I'm Sanjid — a Web Developer and Founder of{' '}
              <a
                href="#founder"
                className="font-semibold text-[#111111] underline decoration-[#FF5722] decoration-2 underline-offset-4 hover:text-[#FF5722] transition-colors"
              >
                Next Solution MYM
              </a>
              . I engineer modern, high-performance websites, user interfaces, and digital products with a relentless focus on usability, speed, and tangible business impact.
            </motion.p>

            {/* CTAs and quick contact bar (from Top) */}
            <motion.div
              variants={leftItemFromTopVariants}
              className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#work"
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#111111] text-white text-sm font-semibold rounded-xl hover:bg-[#FF5722] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer min-h-[44px]"
              >
                <span>View Selected Work</span>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                >
                  <ArrowDown className="w-4 h-4" />
                </motion.div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white text-[#111111] border border-[#D1CEC7] text-sm font-semibold rounded-xl hover:bg-[#F4F3EE] hover:border-[#111111] transition-all duration-200 shadow-2xs cursor-pointer min-h-[44px]"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF5722]" />
              </motion.a>

              {/* Instant Copy Email Button */}
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCopyEmail}
                id="hero-copy-email-btn"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#FAF9F6] border border-[#E8E6E1] text-[#555555] hover:text-[#111111] hover:border-[#CCCCCC] text-xs font-mono-code rounded-xl transition-all shadow-2xs cursor-pointer min-h-[44px]"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span className="text-[#10B981] font-semibold">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#888888]" />
                    <span className="truncate">{personalInfo.email}</span>
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Trust points / Principles preview (from Top) */}
            <motion.div
              variants={leftItemFromTopVariants}
              className="pt-6 border-t border-[#E8E6E1]/80 grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <div className="p-3 bg-white/60 backdrop-blur-xs border border-[#E8E6E1] rounded-xl">
                <div className="text-xs font-mono-code text-[#777777] uppercase tracking-wider">
                  Specialization
                </div>
                <div className="text-sm font-semibold text-[#111111] mt-0.5">
                  Frontend & UI Systems
                </div>
              </div>
              <div className="p-3 bg-white/60 backdrop-blur-xs border border-[#E8E6E1] rounded-xl">
                <div className="text-xs font-mono-code text-[#777777] uppercase tracking-wider">
                  Company
                </div>
                <div className="text-sm font-semibold text-[#111111] mt-0.5">
                  Next Solution MYM Founder
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 bg-white/60 backdrop-blur-xs border border-[#E8E6E1] rounded-xl">
                <div className="text-xs font-mono-code text-[#777777] uppercase tracking-wider">
                  Standard
                </div>
                <div className="text-sm font-semibold text-[#111111] mt-0.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                  95+ Core Web Vitals
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Borderless Portrait + Beautiful Identity Plate (Enters from BOTTOM) */}
          <motion.div
            initial={{ opacity: 0, y: 110, scale: 0.92, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{
              duration: 0.95,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5 w-full"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Borderless portrait image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white">
                <img
                  src="/sanjid.png"
                  alt="Mushfiqur Rahman Sanjid — Web Developer & Founder of Next Solution MYM"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>

              {/* Beautiful identity plate layered over the portrait (replaces the old chip) */}
              <div className="relative z-10 -mt-10 sm:-mt-12 mx-2 sm:mx-4 bg-white/95 backdrop-blur-md border border-[#E8E6E1] rounded-2xl p-4 sm:p-5 shadow-lg">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 font-mono-code text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF5722]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse"></span>
                    Web Developer
                  </span>
                  <span className="text-[10px] font-mono-code text-[#888888]">
                    @sanjid.dev
                  </span>
                </div>

                <h3 className="mt-2 font-display text-xl sm:text-2xl font-extrabold text-[#111111] leading-tight tracking-tight">
                  {personalInfo.fullName.replace(/\sSanjid$/, '')}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D84315] via-[#FF5722] to-[#FF7043]">
                    Sanjid
                  </span>
                </h3>

                <div className="mt-3 pt-3 border-t border-[#EFECE6] flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] sm:text-xs font-mono-code text-[#111111] font-semibold flex items-center gap-1.5">
                    Founder
                    <span className="text-[#FF5722]">·</span>
                    Next Solution{' '}
                    <span className="text-[#FF5722]">MYM</span>
                  </span>
                  <span className="text-[10px] font-mono-code text-[#555555]">
                    Dhaka, BD
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
