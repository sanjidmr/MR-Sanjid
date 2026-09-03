import React, { useEffect } from 'react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Code2,
  Terminal,
} from 'lucide-react';
import { Project } from '../types/portfolio';
import { ProjectMockup } from './ProjectMockup';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  allProjects: Project[];
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
}) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#111111]/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="case-study-modal-container"
        className="bg-[#FAF9F6] text-[#111111] w-full max-w-4xl max-h-[92vh] rounded-2xl border border-[#E8E6E1] shadow-2xl overflow-hidden flex flex-col relative"
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-white/95 backdrop-blur-md border-b border-[#E8E6E1]">
          <div className="flex items-center gap-2 sm:gap-3 truncate">
            <span className="font-mono-code text-[11px] sm:text-xs font-bold text-[#FF5722] uppercase tracking-wider shrink-0">
              / CASE STUDY
            </span>
            <span className="text-[#D1CEC7] hidden sm:inline">|</span>
            <span className="text-xs sm:text-sm font-bold text-[#111111] truncate">
              {project.title}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#111111] hover:text-[#FF5722] bg-[#FAF9F6] border border-[#E8E6E1] rounded-lg transition-colors min-h-[36px]"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              id="case-study-close-btn"
              className="p-2 text-[#555555] hover:text-[#111111] hover:bg-[#F4F3EE] rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-4 sm:px-10 py-6 sm:py-8 space-y-8 sm:space-y-12">
          {/* Project Hero Header */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono-code uppercase px-2.5 py-1 bg-white border border-[#E8E6E1] text-[#FF5722] font-semibold rounded-md">
                {project.category}
              </span>
              <span className="text-xs font-mono-code text-[#777777]">
                Year: {project.year}
              </span>
              <span className="text-xs font-mono-code text-[#777777]">
                Role: {project.role}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#111111] font-display tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-sm sm:text-lg text-[#555555] leading-relaxed max-w-3xl">
              {project.tagline}
            </p>

            {/* Visual representation */}
            <div className="pt-2">
              <ProjectMockup
                type={project.thumbnailSvg}
                accentColor={project.accentColor}
                title={project.title}
              />
            </div>
          </div>

          {/* 01 — Overview */}
          <div className="space-y-3 pt-4 border-t border-[#E8E6E1]">
            <div className="font-mono-code text-xs font-bold text-[#FF5722] uppercase tracking-wider">
              01 — Overview
            </div>
            <p className="text-sm sm:text-base text-[#333333] leading-relaxed">
              {project.caseStudy.overview}
            </p>
          </div>

          {/* 02 & 03 — Challenge & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 pt-4 border-t border-[#E8E6E1]">
            <div className="p-4 sm:p-6 bg-white border border-[#E8E6E1] rounded-xl space-y-2 sm:space-y-3 shadow-2xs">
              <div className="font-mono-code text-xs font-bold text-[#D84315] uppercase tracking-wider">
                02 — The Challenge
              </div>
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                {project.caseStudy.theChallenge}
              </p>
            </div>

            <div className="p-4 sm:p-6 bg-white border border-[#E8E6E1] rounded-xl space-y-2 sm:space-y-3 shadow-2xs">
              <div className="font-mono-code text-xs font-bold text-[#2E7D32] uppercase tracking-wider">
                03 — The Approach
              </div>
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                {project.caseStudy.theApproach}
              </p>
            </div>
          </div>

          {/* 04 & 05 — Design & Development Systems */}
          <div className="space-y-6 pt-4 border-t border-[#E8E6E1]">
            <div className="font-mono-code text-xs font-bold text-[#FF5722] uppercase tracking-wider">
              04 — Design & Visual Strategy
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.caseStudy.designHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border border-[#E8E6E1] rounded-lg text-xs text-[#444444] leading-relaxed shadow-2xs"
                >
                  <div className="text-[10px] font-mono-code text-[#888888] mb-1">
                    [Design Note {idx + 1}]
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div className="font-mono-code text-xs font-bold text-[#FF5722] uppercase tracking-wider pt-4">
              05 — Development & Engineering
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.caseStudy.developmentHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border border-[#E8E6E1] rounded-lg text-xs text-[#444444] leading-relaxed shadow-2xs"
                >
                  <div className="text-[10px] font-mono-code text-[#888888] mb-1">
                    [Engineering Note {idx + 1}]
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* 06 — Technology Stack */}
          <div className="space-y-4 pt-4 border-t border-[#E8E6E1]">
            <div className="font-mono-code text-xs font-bold text-[#FF5722] uppercase tracking-wider">
              06 — Technology Architecture & Rationale
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.caseStudy.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-white border border-[#E8E6E1] rounded-lg flex items-start gap-3 shadow-2xs"
                >
                  <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-1.5 shrink-0"></div>
                  <div>
                    <div className="text-xs font-bold text-[#111111]">{tech.name}</div>
                    <div className="text-[11px] text-[#666666] leading-normal">{tech.purpose}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 07 — Key Features */}
          <div className="space-y-4 pt-4 border-t border-[#E8E6E1]">
            <div className="font-mono-code text-xs font-bold text-[#FF5722] uppercase tracking-wider">
              07 — Key Features
            </div>
            <div className="space-y-3">
              {project.caseStudy.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border border-[#E8E6E1] rounded-xl flex items-start gap-3 shadow-2xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-[#111111]">{feat.title}</h4>
                    <p className="text-xs text-[#555555] leading-relaxed mt-0.5">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 08 & 09 — Outcome & What I Learned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E8E6E1]">
            <div className="p-6 bg-[#111111] text-white rounded-xl space-y-2 shadow-sm">
              <div className="font-mono-code text-xs font-bold text-[#10B981] uppercase tracking-wider">
                08 — Outcome & Impact
              </div>
              <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                {project.caseStudy.outcome}
              </p>
            </div>

            <div className="p-6 bg-[#FFF9F6] border border-[#FFCCBC] rounded-xl space-y-2 shadow-2xs">
              <div className="font-mono-code text-xs font-bold text-[#FF5722] uppercase tracking-wider">
                09 — What I Learned
              </div>
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                {project.caseStudy.whatILearned}
              </p>
            </div>
          </div>

          {/* Project Footer Actions & Next/Prev */}
          <div className="pt-8 border-t border-[#E8E6E1] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#FF5722] hover:bg-[#E64A19] text-white text-xs font-semibold rounded-lg shadow-xs"
                >
                  <span>Launch Live Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-[#D1CEC7] text-[#111111] hover:bg-[#F4F3EE] text-xs font-semibold rounded-lg shadow-2xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              <button
                onClick={() => onSelectProject(prevProject)}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#555555] hover:text-[#111111] hover:bg-[#F4F3EE] rounded-lg transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous Project</span>
              </button>

              <button
                onClick={() => onSelectProject(nextProject)}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#111111] hover:text-[#FF5722] hover:bg-[#FFF9F6] border border-[#E8E6E1] rounded-lg transition-colors"
              >
                <span>Next Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
