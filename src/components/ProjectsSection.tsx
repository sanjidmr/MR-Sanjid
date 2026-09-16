import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { projects } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
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
              <span className="text-[#999999]">// {projects.length} PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-display tracking-tight leading-tight">
              Crafted with purpose. <br />
              <span className="text-[#666666]">Engineered for performance.</span>
            </h2>
          </div>
          <div className="max-w-md text-sm text-[#555555] leading-relaxed">
            A curated selection of design and development projects — each representing a deliberate balance of aesthetic clarity and frontend speed.
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="pt-8 sm:pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group bg-white border border-[#E8E6E1] rounded-2xl overflow-hidden hover:border-[#FF5722]/60 hover:shadow-md transition-all cursor-pointer flex flex-col"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-[16/10] bg-[#F5F4F0]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-md border border-[#E8E6E1] rounded-lg text-[10px] font-mono-code font-semibold text-[#555555] group-hover:bg-[#FF5722] group-hover:text-white group-hover:border-[#FF5722] transition-all">
                  <span>Visit Live</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono-code text-[10px] font-bold uppercase px-2 py-0.5 bg-[#FAF9F6] border border-[#E8E6E1] text-[#FF5722] rounded">
                    {project.category}
                  </span>
                  <span className="font-mono-code text-[11px] text-[#999999]">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-[#111111] group-hover:text-[#FF5722] transition-colors font-display leading-tight">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-2">
                  {project.tagline}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono-code text-[10px] px-2 py-0.5 bg-[#FAF9F6] border border-[#E8E6E1] text-[#555555] rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-3 mt-auto border-t border-[#EFECE6]">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] group-hover:text-[#FF5722] transition-colors">
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Agency Link Banner */}
        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          href="https://nextsolutionmym.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 sm:mt-12 group flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-7 bg-[#111111] text-white rounded-2xl hover:bg-[#FF5722] transition-all shadow-lg shadow-black/5"
        >
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-[11px] font-mono-code uppercase tracking-[0.2em] text-[#FF5722] group-hover:text-white/90 font-semibold">
              Next Solution MYM
            </div>
            <div className="text-lg sm:text-xl font-display font-extrabold tracking-tight">
              Explore more work & full digital services
            </div>
            <div className="text-xs text-[#AAAAAA] group-hover:text-white/80 font-mono-code">
              nextsolutionmym.com
            </div>
          </div>
          <span className="inline-flex items-center gap-2 shrink-0 px-5 py-3 bg-white text-[#111111] rounded-xl text-xs font-semibold group-hover:bg-[#111111] group-hover:text-white transition-colors min-h-[44px]">
            <span>Visit the Agency</span>
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </motion.a>
      </div>
    </section>
  );
};