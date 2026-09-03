import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal, Command } from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'founder', 'work', 'services', 'skills', 'experience', 'writing', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Founder', href: '#founder', id: 'founder' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Journey', href: '#experience', id: 'experience' },
    { name: 'Writing', href: '#writing', id: 'writing' },
  ];

  return (
    <>
      {/* Top reading/scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#FF5722] via-[#FFA000] to-[#FF5722] origin-left z-60"
        style={{ scaleX }}
      />

      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#FAF9F6]/92 backdrop-blur-md border-b border-[#E8E6E1] shadow-xs'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand signature */}
          <motion.a
            href="#hero"
            id="navbar-brand-link"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2.5 text-[#111111] hover:text-[#FF5722] transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-[#111111] text-white flex items-center justify-center font-bold text-sm tracking-tighter group-hover:bg-[#FF5722] transition-colors shadow-xs">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-mono-code text-xs tracking-wider uppercase font-semibold text-[#111111] flex items-center gap-1.5">
                / SANJID
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" title="Available for projects"></span>
              </span>
              <span className="text-[10px] text-[#777777] font-medium tracking-tight">
                Founder · Next Solution
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 border border-[#E8E6E1] px-3 py-1.5 rounded-full shadow-xs backdrop-blur-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'bg-[#111111] text-white shadow-xs'
                      : 'text-[#444444] hover:text-[#111111] hover:bg-[#F4F3EE]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right CTA & Utility */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick Command shortcut button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenCommandPalette}
              id="nav-command-btn"
              className="flex items-center gap-1.5 text-xs font-mono-code px-3 py-2 rounded-lg border border-[#E8E6E1] bg-white text-[#555555] hover:text-[#111111] hover:border-[#D1CEC7] hover:bg-[#F9F8F5] transition-all shadow-2xs"
              title="Open command navigation (Cmd+K)"
            >
              <Command className="w-3.5 h-3.5 text-[#888888]" />
              <span>Quick Jump</span>
              <kbd className="text-[10px] bg-[#EFECE6] px-1.5 py-0.5 rounded text-[#666666] font-semibold border border-[#E0DCD4]">
                ⌘K
              </kbd>
            </motion.button>

            {/* Let's Talk Button */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              id="nav-cta-contact"
              className="group flex items-center gap-1.5 px-4 py-2 bg-[#111111] hover:bg-[#FF5722] text-white text-xs font-semibold rounded-lg transition-all duration-200 shadow-xs hover:shadow-sm min-h-[40px]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Mobile & Tablet menu triggers */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCommandPalette}
              id="nav-mobile-command-btn"
              className="min-w-[42px] min-h-[42px] flex items-center justify-center text-[#444444] hover:text-[#111111] rounded-lg border border-[#E8E6E1] bg-white shadow-2xs"
              aria-label="Quick Navigation"
            >
              <Command className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="nav-mobile-toggle-btn"
              className="min-w-[42px] min-h-[42px] flex items-center justify-center text-[#222222] hover:text-[#FF5722] rounded-lg border border-[#E8E6E1] bg-white transition-colors shadow-2xs"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden border-b border-[#E8E6E1] bg-[#FAF9F6]/98 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 shadow-lg overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                <div className="text-[11px] font-mono-code uppercase tracking-wider text-[#888888] px-3 pb-1 border-b border-[#E8E6E1]">
                  Navigation
                </div>
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3.5 py-3 text-sm font-medium rounded-xl transition-all flex items-center justify-between min-h-[44px] ${
                        isActive
                          ? 'bg-[#111111] text-white font-semibold'
                          : 'text-[#222222] hover:text-[#FF5722] hover:bg-[#F2EFE9]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className={`font-mono-code text-xs ${isActive ? 'text-[#FF5722]' : 'text-[#999999]'}`}>
                        →
                      </span>
                    </a>
                  );
                })}
                <div className="pt-3 mt-2 border-t border-[#E8E6E1] flex flex-col gap-2.5">
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#FF5722] hover:bg-[#E64A19] text-white text-sm font-semibold rounded-xl shadow-xs min-h-[48px]"
                  >
                    <span>Let's Talk — Start a Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <div className="flex items-center justify-between text-[11px] text-[#777777] font-mono-code px-1 pt-1">
                    <span className="truncate">{personalInfo.email}</span>
                    <span className="text-[#10B981] font-semibold flex items-center gap-1 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
