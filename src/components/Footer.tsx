import React from 'react';
import { ArrowUp, Github, Linkedin, Facebook, Globe, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Founder', href: '#founder' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#experience' },
    { name: 'Writing', href: '#writing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-[#E8E6E1] bg-white py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-[#111111] text-white flex items-center justify-center font-bold text-xs tracking-tight">
                S
              </div>
              <span className="font-mono-code text-sm font-bold text-[#111111] tracking-wider uppercase">
                / SANJID
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#555555] max-w-sm leading-relaxed">
              Web Developer & Founder of Next Solution MYM. Crafting modern, high-performance websites and digital products for ambitious brands worldwide.
            </p>
            <div className="text-xs font-mono-code text-[#777777] pt-1">
              Available for selected client projects & partnerships.
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-mono-code uppercase text-[#777777] font-semibold tracking-wider">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#555555] hover:text-[#FF5722] transition-colors py-1.5 min-h-[36px] flex items-center"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 space-y-4 md:text-right">
            <div className="text-xs font-mono-code uppercase text-[#777777] font-semibold tracking-wider">
              Connect & Top
            </div>
            <div className="flex md:justify-end items-center gap-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-[#555555] hover:text-[#111111] bg-[#FAF9F6] border border-[#E8E6E1] rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-[#555555] hover:text-[#111111] bg-[#FAF9F6] border border-[#E8E6E1] rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-[#555555] hover:text-[#1877F2] hover:bg-[#FAF9F6] border border-[#E8E6E1] rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-[#555555] hover:text-[#111111] bg-[#FAF9F6] border border-[#E8E6E1] rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                title="Next Solution MYM"
              >
                <Globe className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                id="footer-back-to-top"
                className="p-2.5 text-[#111111] hover:text-white hover:bg-[#FF5722] bg-[#FAF9F6] border border-[#E8E6E1] rounded-lg transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                title="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 sm:pt-8 border-t border-[#EFECE6] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-code text-[#777777] text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Sanjid. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[#555555]">
            <span>Designed & engineered with precision by Sanjid.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
