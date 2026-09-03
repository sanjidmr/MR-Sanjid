import React, { useState } from 'react';
import { ArrowUpRight, Github, Sparkles, Filter, Code2, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types/portfolio';
import { projects } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockup';

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCaseStudy }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'E-Commerce Platform', label: 'E-Commerce' },
    { id: 'Hospitality & Culinary Platform', label: 'Hospitality' },
    { id: 'Digital Agency Platform', label: 'Agency & Brands' },
    { id: 'Web Application & Admin System', label: 'SaaS & Dashboards' },
    { id: 'High-Conversion Landing Page', label: 'Landing Pages' },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="work" className="py-16 sm:py-24 border-t border-[#E8E6E1] bg-[#FAF9F6] relative">
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
              <span>/ 03 · SELECTED WORK</span>
              <span className="text-[#999999]">// {projects.length} CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-display tracking-tight leading-tight">
              Crafted with purpose. <br />
              <span className="text-[#666666]">Engineered for performance.</span>
            </h2>
          </div>
          <div className="max-w-md text-sm text-[#555555] leading-relaxed">
            A curated selection of client projects, platforms, and digital products. Each piece represents a deliberate balance of aesthetic restraint and frontend speed.
          </div>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="pt-6 sm:pt-8 pb-6 sm:pb-10 flex flex-wrap items-center gap-2"
        >
          {filterOptions.map((filter) => {
            const isActive = selectedFilter === filter.id;
            return (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedFilter(filter.id)}
                id={`filter-btn-${filter.id}`}
                className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all min-h-[38px] flex items-center justify-center ${
                  isActive
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'bg-white border border-[#E8E6E1] text-[#555555] hover:text-[#111111] hover:border-[#CCCCCC]'
                }`}
              >
                {filter.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Showcase: Editorial asymmetric layout */}
        <div className="space-y-10 sm:space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  id={`project-card-${project.id}`}
                  className="bg-white border border-[#E8E6E1] rounded-2xl p-4 sm:p-8 hover:border-[#D1CEC7] transition-all shadow-xs hover:shadow-md group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                    {/* Visual column */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <motion.div
                        whileHover={{ scale: 1.015 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => onOpenCaseStudy(project)}
                        className="cursor-pointer overflow-hidden rounded-xl shadow-2xs"
                      >
                        <ProjectMockup
                          type={project.thumbnailSvg}
                          accentColor={project.accentColor}
                          title={project.title}
                        />
                      </motion.div>
                    </div>

                    {/* Content column */}
                    <div
                      className={`lg:col-span-6 space-y-4 sm:space-y-5 ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono-code text-[11px] font-bold uppercase px-2.5 py-0.5 bg-[#FAF9F6] border border-[#E8E6E1] text-[#FF5722] rounded">
                          {project.category}
                        </span>
                        <span className="font-mono-code text-xs text-[#888888]">
                          · {project.year}
                        </span>
                        <span className="font-mono-code text-xs text-[#888888]">
                          · {project.role}
                        </span>
                      </div>

                      <div className="space-y-1.5 sm:space-y-2">
                        <h3
                          onClick={() => onOpenCaseStudy(project)}
                          className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#111111] group-hover:text-[#FF5722] transition-colors cursor-pointer font-display"
                        >
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-[#444444] leading-snug">
                          {project.tagline}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono-code text-[11px] px-2.5 py-1 bg-[#FAF9F6] border border-[#E8E6E1] text-[#333333] rounded-md font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-2.5 sm:gap-3">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => onOpenCaseStudy(project)}
                          id={`btn-case-study-${project.id}`}
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#111111] hover:bg-[#FF5722] text-white text-xs font-semibold rounded-lg transition-colors shadow-2xs min-h-[42px]"
                        >
                          <span>Read Case Study</span>
                          <span className="font-mono-code text-xs">→</span>
                        </motion.button>

                        {project.liveUrl && (
                          <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-white border border-[#E8E6E1] hover:border-[#111111] text-[#111111] text-xs font-semibold rounded-lg transition-colors shadow-2xs min-h-[42px]"
                          >
                            <span>Live Site</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5722]" />
                          </motion.a>
                        )}

                        {project.githubUrl && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-w-[42px] min-h-[42px] flex items-center justify-center text-[#555555] hover:text-[#111111] bg-[#FAF9F6] border border-[#E8E6E1] rounded-lg transition-colors"
                            title="View on GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
