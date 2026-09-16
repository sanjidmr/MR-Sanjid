import React, { useState } from 'react';
import { ArrowUpRight, Clock, Calendar, Bookmark, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { blogPosts } from '../data/portfolioData';
import { BlogPost } from '../types/portfolio';
import { ArticleModal } from './ArticleModal';

export const WritingSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="writing" className="py-16 sm:py-24 border-t border-[#E8E6E1] bg-[#FAF9F6] relative">
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
              <span>/ 09 · WRITING & INSIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-display tracking-tight leading-tight">
              Thoughts on craft. <br />
              <span className="text-[#666666]">Engineering & building Next Solution MYM.</span>
            </h2>
          </div>
          <div className="max-w-md text-sm text-[#555555] leading-relaxed">
            Reflections from building digital products, managing frontend performance, and leading a modern digital agency.
          </div>
        </motion.div>

        {/* 3 Featured Essays Grid */}
        <div className="pt-6 sm:pt-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              id={`blog-card-${post.id}`}
              onClick={() => setSelectedPost(post)}
              className="p-5 sm:p-7 bg-white border border-[#E8E6E1] rounded-2xl flex flex-col justify-between hover:border-[#FF5722]/60 hover:shadow-xs transition-all cursor-pointer group min-h-[44px]"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between text-xs font-mono-code text-[#777777]">
                  <span className="px-2 py-0.5 bg-[#FAF9F6] border border-[#E8E6E1] rounded text-[#FF5722] font-semibold">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#111111] group-hover:text-[#FF5722] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#EFECE6] flex items-center justify-between text-xs font-mono-code">
                <span className="text-[#888888]">{post.date}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#111111] group-hover:text-[#FF5722]">
                  <span>Read Essay</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Full Reader Modal */}
      {selectedPost && (
        <ArticleModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </section>
  );
};
