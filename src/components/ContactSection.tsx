import React, { useState } from 'react';
import {
  ArrowUpRight,
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  Phone,
  Globe,
  Github,
  Linkedin,
  Facebook,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

interface ContactSectionProps {
  prefilledService?: string | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: prefilledService || 'Custom Web Development',
    timeline: 'Within 2-4 Weeks',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (prefilledService) {
      setFormState((prev) => ({ ...prev, projectType: prefilledService }));
    }
  }, [prefilledService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full px-4 py-3.5 text-base sm:text-sm bg-transparent border-b-2 border-[#D8D5CE] focus:border-[#FF5722] focus:outline-hidden transition-colors text-[#111111] placeholder:text-[#A9A69E] hover:border-[#C5C1B9]';

  const labelClass =
    'text-[11px] font-mono-code text-[#777777] uppercase tracking-[0.18em] font-semibold';

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-[#E8E6E1] bg-[#FAF9F6] relative overflow-hidden">
      {/* Ambient glow accents */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -top-32 right-0 w-[420px] h-[420px] bg-[#FF5722]/8 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-0 -left-24 w-[380px] h-[380px] bg-[#FFAB91]/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <span>/ 10 · INITIATE CONVERSATION</span>
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-display tracking-tight leading-tight">
              Have something worth building? <br />
              <span className="text-[#666666]">Let's talk.</span>
            </h2>
          </div>
          <div className="max-w-md text-sm text-[#555555] leading-relaxed">
            Whether you have an upcoming product launch, want to revamp your website, or need a dedicated web team at Next Solution MYM — I respond within 24 hours.
          </div>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 pt-8 sm:pt-12">
          {/* Left Column: Direct Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-4 sm:space-y-5"
          >
            {/* Direct Email */}
            <div className="group p-5 sm:p-6 bg-white border border-[#E8E6E1] hover:border-[#FF5722]/50 rounded-2xl transition-all shadow-2xs hover:shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#FF5722]/10 text-[#FF5722] flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono-code text-[#777777] uppercase tracking-wider font-semibold">
                  Direct Email
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono-code text-xs sm:text-sm font-bold text-[#111111] hover:text-[#FF5722] transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-[#666666] hover:text-[#111111] hover:bg-[#FAF9F6] border border-[#E8E6E1] rounded-lg transition-all min-h-[40px] min-w-[40px] flex items-center justify-center shrink-0"
                  title="Copy Email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#10B981]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="group p-5 sm:p-6 bg-white border border-[#E8E6E1] hover:border-[#25D366]/50 rounded-2xl transition-all shadow-2xs hover:shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono-code text-[#777777] uppercase tracking-wider font-semibold">
                  WhatsApp
                </div>
              </div>
              <a
                href={`https://wa.me/8801955417215?text=Hi%20Sanjid,%20I'd%20like%20to%20discuss%20a%20web%20project`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#111111] hover:text-[#25D366] transition-colors"
              >
                <span className="font-mono-code">+880 1955 417215</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <p className="text-[11px] text-[#666666] mt-1">
                Fastest for urgent project inquiries
              </p>
            </div>

            {/* Facebook */}
            <div className="group p-5 sm:p-6 bg-white border border-[#E8E6E1] hover:border-[#1877F2]/50 rounded-2xl transition-all shadow-2xs hover:shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center">
                  <Facebook className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono-code text-[#777777] uppercase tracking-wider font-semibold">
                  Facebook
                </div>
              </div>
              <a
                href={personalInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#111111] hover:text-[#1877F2] transition-colors"
              >
                <span>Sanjid — Next Solution MYM</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <p className="text-[11px] text-[#666666] mt-1">
                Connect & follow for updates
              </p>
            </div>

            {/* Agency Channel */}
            <div className="group p-5 sm:p-6 bg-[#111111] text-white border border-[#111111] hover:bg-[#FF5722] hover:border-[#FF5722] rounded-2xl transition-all shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-[#FF5722] group-hover:text-white transition-colors" />
                </div>
                <div className="text-xs font-mono-code text-[#AAAAAA] group-hover:text-white/90 uppercase tracking-wider font-semibold">
                  Agency Platform
                </div>
              </div>
              <a
                href={personalInfo.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold group-hover:text-white transition-colors"
              >
                <span>Next Solution MYM</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <p className="text-[11px] text-[#AAAAAA] group-hover:text-white/85 mt-1">
                View the studio — nextsolutionmym.com
              </p>
            </div>

            {/* Social icons */}
            <div className="pt-2 flex items-center justify-between text-xs">
              <span className="font-mono-code text-[#777777]">Professional Profiles</span>
              <div className="flex items-center gap-2">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={personalInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-[#555555] hover:text-[#1877F2] hover:bg-[#FAF9F6] border border-[#E8E6E1] rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-[#555555] hover:text-[#111111] hover:bg-[#FAF9F6] border border-[#E8E6E1] rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-[#555555] hover:text-[#111111] hover:bg-[#FAF9F6] border border-[#E8E6E1] rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Borderless Premium Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            {/* Removed outer card background & border — transparent, premium form */}
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#10B981]/10 text-[#10B981] mx-auto flex items-center justify-center animate-in fade-in duration-300">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#111111]">
                  Message Received, Thank You!
                </h3>
                <p className="text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                  Sanjid will review your project details and follow up directly at{' '}
                  <strong className="text-[#111111]">{formState.email}</strong> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-white border border-[#E8E6E1] text-[#111111] text-xs font-semibold rounded-lg hover:bg-[#F4F3EE] min-h-[44px]"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#FF5722]/40 to-transparent"></div>
                  <h3 className="text-lg sm:text-2xl font-bold text-[#111111] font-display">
                    Start a Conversation
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-l from-[#FF5722]/40 to-transparent"></div>
                </div>

                {/* Intro character */}
                <div className="space-y-1 text-center">
                  <p className="text-xs sm:text-sm text-[#666666]">
                    Fill out this quick briefing form to get a tailored response.
                  </p>
                  <div className="inline-flex items-center gap-2 text-[11px] font-mono-code text-[#10B981] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Every inquiry receives a reply within 24 hours.
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-1.5">
                    <label className={labelClass}>Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="e.g. Alex Morgan"
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={labelClass}>Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="alex@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-1.5">
                    <label className={labelClass}>Project Scope / Category</label>
                    <select
                      value={formState.projectType}
                      onChange={(e) =>
                        setFormState({ ...formState, projectType: e.target.value })
                      }
                      className={`${inputClass} cursor-pointer ${formState.projectType ? 'text-[#111111]' : 'text-[#A9A69E]'}`}
                    >
                      <option value="Custom Web Development">Custom Web Development</option>
                      <option value="UI/UX Design & Systems">UI/UX Design & Systems</option>
                      <option value="High-Conversion Landing Page">Landing Page Build</option>
                      <option value="E-Commerce Storefront">E-Commerce Storefront</option>
                      <option value="Business & Brand Website">Business & Brand Website</option>
                      <option value="Website Optimization & SEO">Website Optimization & SEO</option>
                      <option value="Next Solution MYM Full Service">Next Solution MYM Project</option>
                      <option value="Other Inquiry">Other Collaboration</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className={labelClass}>Desired Timeline</label>
                    <select
                      value={formState.timeline}
                      onChange={(e) =>
                        setFormState({ ...formState, timeline: e.target.value })
                      }
                      className={`${inputClass} cursor-pointer text-[#111111]`}
                    >
                      <option value="Urgent (1-2 Weeks)">Urgent (1-2 Weeks)</option>
                      <option value="Within 2-4 Weeks">Within 2-4 Weeks</option>
                      <option value="Within 1-2 Months">Within 1-2 Months</option>
                      <option value="Flexible / Exploring">Flexible / Exploring</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className={labelClass}>Project Details & Objectives *</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Tell me about your business, the core goal of the project, and any reference websites you admire..."
                    className={`${inputClass} resize-none leading-relaxed`}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  id="contact-form-submit-btn"
                  className="w-full py-4 bg-gradient-to-r from-[#FF5722] to-[#E64A19] hover:from-[#E64A19] hover:to-[#D84315] text-white text-sm font-semibold rounded-2xl transition-all shadow-lg shadow-[#FF5722]/20 hover:shadow-[#FF5722]/30 flex items-center justify-center gap-2 min-h-[50px]"
                >
                  <span>Send Project Inquiry</span>
                  <Send className="w-4 h-4" />
                </motion.button>

                <div className="flex items-center gap-2 justify-center text-[11px] text-[#999999] font-mono-code">
                  <MessageSquare className="w-3.5 h-3.5 text-[#FF5722]" />
                  Prefer WhatsApp? Message me directly — I usually respond within hours.
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};