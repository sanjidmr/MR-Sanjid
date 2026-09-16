import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, ExternalLink, FileText, Code2, Briefcase, Mail, Globe } from 'lucide-react';
import { projects, services, blogPosts, personalInfo } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
          // Trigger handled in parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredServices = services.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredPosts = blogPosts.filter((b) =>
    b.title.toLowerCase().includes(query.toLowerCase()) ||
    b.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      id="command-palette-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-10 sm:pt-20 p-2 sm:p-4 bg-[#111111]/70 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="command-palette-modal"
        className="w-full max-w-xl bg-white rounded-2xl border border-[#E8E6E1] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col max-h-[85vh]"
      >
        {/* Search input bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#E8E6E1] bg-[#FAF9F6]">
          <Search className="w-4 h-4 text-[#888888] mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, services, essays..."
            className="w-full bg-transparent text-sm text-[#111111] focus:outline-hidden placeholder:text-[#888888]"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-[#888888] hover:text-[#111111] rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 sm:p-3 space-y-4 text-xs">
          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div className="space-y-1">
              <div className="font-mono-code text-[10px] uppercase text-[#888888] px-3 py-1 font-semibold">
                Projects & Case Studies
              </div>
              {filteredProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    onSelectProject(p);
                    onClose();
                  }}
                  className="w-full text-left flex items-center justify-between p-2.5 rounded-xl hover:bg-[#FFF9F6] hover:text-[#FF5722] transition-colors group min-h-[44px]"
                >
                  <div className="flex items-center gap-2.5">
                    <Code2 className="w-4 h-4 text-[#888888] group-hover:text-[#FF5722] shrink-0" />
                    <span className="font-semibold text-[#111111] group-hover:text-[#FF5722] truncate">
                      {p.title}
                    </span>
                    <span className="text-[10px] text-[#777777] font-mono-code hidden sm:inline">
                      [{p.category}]
                    </span>
                  </div>
                  <span className="font-mono-code text-[11px] text-[#888888] group-hover:text-[#FF5722] shrink-0">
                    View →
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Services */}
          {filteredServices.length > 0 && (
            <div className="space-y-1">
              <div className="font-mono-code text-[10px] uppercase text-[#888888] px-3 py-1 font-semibold">
                Services & Capabilities
              </div>
              {filteredServices.map((s) => (
                <a
                  key={s.number}
                  href="#services"
                  onClick={onClose}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#FAF9F6] transition-colors min-h-[44px]"
                >
                  <div className="flex items-center gap-2.5">
                    <Briefcase className="w-4 h-4 text-[#888888] shrink-0" />
                    <span className="font-semibold text-[#111111] truncate">{s.title}</span>
                  </div>
                  <span className="font-mono-code text-[10px] text-[#888888] shrink-0">
                    Service {s.number}
                  </span>
                </a>
              ))}
            </div>
          )}

          {/* Quick Actions */}
          <div className="space-y-1 border-t border-[#EFECE6] pt-2">
            <div className="font-mono-code text-[10px] uppercase text-[#888888] px-3 py-1 font-semibold">
              Quick Actions
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#FAF9F6] text-[#111111] min-h-[44px]"
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF5722] shrink-0" />
                <span className="font-semibold">Start Project Conversation</span>
              </div>
              <span className="font-mono-code text-[10px] text-[#777777]">#contact</span>
            </a>

            <a
              href={personalInfo.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#FAF9F6] text-[#111111] min-h-[44px]"
            >
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#FF5722] shrink-0" />
                <span className="font-semibold">Visit Next Solution MYM Platform</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#777777] shrink-0" />
            </a>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-[#FAF9F6] border-t border-[#E8E6E1] flex items-center justify-between text-[11px] font-mono-code text-[#888888]">
          <span>Navigation Assist</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
