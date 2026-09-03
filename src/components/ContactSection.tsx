import React, { useState } from 'react';
import {
  ArrowUpRight,
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  Globe,
  Github,
  Linkedin,
  Clock,
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

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-[#E8E6E1] bg-[#FAF9F6] relative">
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
              <span>/ 10 · INITIATE CONVERSATION</span>
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-display tracking-tight leading-tight">
              Have something worth building? <br />
              <span className="text-[#666666]">Let's talk.</span>
            </h2>
          </div>
          <div className="max-w-md text-sm text-[#555555] leading-relaxed">
            Whether you have an upcoming product launch, want to revamp your website, or need a dedicated digital team at Next Solution — I respond within 24 hours.
          </div>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 pt-8 sm:pt-12">
          {/* Left Column: Direct Links & Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white border border-[#E8E6E1] rounded-2xl p-4 sm:p-7 space-y-5 sm:space-y-6 shadow-2xs">
              <div className="space-y-2">
                <div className="text-xs font-mono-code text-[#777777] uppercase tracking-wider">
                  Direct Email
                </div>
                <div className="flex items-center justify-between gap-2 p-3 bg-[#FAF9F6] border border-[#E8E6E1] rounded-xl">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-mono-code text-xs sm:text-sm font-bold text-[#111111] hover:text-[#FF5722] transition-colors truncate"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-[#666666] hover:text-[#111111] hover:bg-white rounded-lg transition-all min-h-[40px] min-w-[40px] flex items-center justify-center"
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

              {/* Instant WhatsApp Direct */}
              <div className="space-y-2">
                <div className="text-xs font-mono-code text-[#777777] uppercase tracking-wider">
                  Instant Messaging
                </div>
                <motion.a
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  href={`https://wa.me/8801700000000?text=Hi%20Sanjid,%20I'd%20like%20to%20discuss%20a%20web%20project`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[#FAF9F6] hover:bg-[#FFF9F6] border border-[#E8E6E1] hover:border-[#FF5722] rounded-xl transition-all group min-h-[48px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center font-bold text-sm shrink-0">
                      WA
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#111111] group-hover:text-[#FF5722]">
                        Direct on WhatsApp
                      </div>
                      <div className="text-[11px] text-[#666666]">
                        Fastest for urgent project inquiries
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-[#FF5722] transition-colors shrink-0" />
                </motion.a>
              </div>

              {/* Founder / Next Solution Portal */}
              <div className="space-y-2">
                <div className="text-xs font-mono-code text-[#777777] uppercase tracking-wider">
                  Agency Channel
                </div>
                <motion.a
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  href={personalInfo.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[#111111] text-white hover:bg-[#FF5722] rounded-xl transition-all group min-h-[48px]"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-[#FF5722] group-hover:text-white transition-colors shrink-0" />
                    <div>
                      <div className="text-xs font-bold">Next Solution Agency</div>
                      <div className="text-[11px] text-[#AAAAAA] group-hover:text-white/80">
                        Full-service digital product studio
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white shrink-0" />
                </motion.a>
              </div>

              {/* Social links bar */}
              <div className="pt-4 border-t border-[#EFECE6] flex items-center justify-between text-xs">
                <span className="font-mono-code text-[#777777]">Professional Profiles</span>
                <div className="flex items-center gap-2">
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
            </div>

            {/* Availability note */}
            <div className="p-4 bg-[#FAF9F6] border border-[#E8E6E1] rounded-xl text-xs space-y-1">
              <div className="flex items-center gap-2 text-[#111111] font-semibold">
                <Clock className="w-3.5 h-3.5 text-[#10B981]" />
                Response Guarantee
              </div>
              <p className="text-[#666666] leading-relaxed">
                All serious inquiries receive a detailed reply within 24 hours with scoping feedback or scheduled calendar options.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Consultation Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-[#E8E6E1] rounded-2xl p-4 sm:p-8 shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#10B981]/10 text-[#10B981] mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
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
                      className="px-5 py-2.5 bg-[#FAF9F6] border border-[#E8E6E1] text-[#111111] text-xs font-semibold rounded-lg hover:bg-[#F4F3EE] min-h-[44px]"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#111111]">
                      Start a Conversation
                    </h3>
                    <p className="text-xs text-[#666666]">
                      Fill out this quick briefing form to get a tailored response.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-code text-[#444444] uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-[#FAF9F6] border border-[#E8E6E1] rounded-xl focus:border-[#FF5722] focus:bg-white focus:outline-hidden transition-all text-[#111111]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-code text-[#444444] uppercase tracking-wider">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-[#FAF9F6] border border-[#E8E6E1] rounded-xl focus:border-[#FF5722] focus:bg-white focus:outline-hidden transition-all text-[#111111]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-code text-[#444444] uppercase tracking-wider">
                        Project Scope / Category
                      </label>
                      <select
                        value={formState.projectType}
                        onChange={(e) =>
                          setFormState({ ...formState, projectType: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-[#FAF9F6] border border-[#E8E6E1] rounded-xl focus:border-[#FF5722] focus:bg-white focus:outline-hidden transition-all text-[#111111]"
                      >
                        <option value="Custom Web Development">Custom Web Development</option>
                        <option value="UI/UX Design & Systems">UI/UX Design & Systems</option>
                        <option value="High-Conversion Landing Page">Landing Page Build</option>
                        <option value="E-Commerce Storefront">E-Commerce Storefront</option>
                        <option value="SaaS / Admin Dashboard">SaaS / Admin Dashboard</option>
                        <option value="Website Optimization & SEO">Website Optimization & SEO</option>
                        <option value="Next Solution Full Digital Agency">Next Solution Agency Project</option>
                        <option value="Other Inquiry">Other Collaboration</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-code text-[#444444] uppercase tracking-wider">
                        Desired Timeline
                      </label>
                      <select
                        value={formState.timeline}
                        onChange={(e) =>
                          setFormState({ ...formState, timeline: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-[#FAF9F6] border border-[#E8E6E1] rounded-xl focus:border-[#FF5722] focus:bg-white focus:outline-hidden transition-all text-[#111111]"
                      >
                        <option value="Urgent (1-2 Weeks)">Urgent (1-2 Weeks)</option>
                        <option value="Within 2-4 Weeks">Within 2-4 Weeks</option>
                        <option value="Within 1-2 Months">Within 1-2 Months</option>
                        <option value="Flexible / Exploring">Flexible / Exploring</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-code text-[#444444] uppercase tracking-wider">
                      Project Details & Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell me about your business, the core goal of the project, and any reference websites you admire..."
                      className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-[#FAF9F6] border border-[#E8E6E1] rounded-xl focus:border-[#FF5722] focus:bg-white focus:outline-hidden transition-all text-[#111111] resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    id="contact-form-submit-btn"
                    className="w-full py-3.5 bg-[#111111] hover:bg-[#FF5722] text-white text-sm font-semibold rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
