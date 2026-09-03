import React, { useEffect } from 'react';
import { X, Clock, Calendar, Bookmark, ArrowLeft, ArrowUpRight, Share2, Check } from 'lucide-react';
import { BlogPost } from '../types/portfolio';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    if (!post) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || '';
    };
  }, [post, onClose]);

  if (!post) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="article-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#111111]/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="article-modal-container"
        className="bg-[#FAF9F6] text-[#111111] w-full max-w-3xl max-h-[92vh] rounded-2xl border border-[#E8E6E1] shadow-2xl overflow-hidden flex flex-col relative"
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-white/95 backdrop-blur-md border-b border-[#E8E6E1]">
          <div className="flex items-center gap-2 truncate">
            <span className="font-mono-code text-xs font-bold text-[#FF5722] uppercase shrink-0">
              / ESSAY & INSIGHTS
            </span>
            <span className="text-[#D1CEC7] hidden sm:inline">|</span>
            <span className="text-xs font-mono-code text-[#777777] hidden sm:inline">{post.category}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono-code bg-[#FAF9F6] border border-[#E8E6E1] hover:border-[#111111] rounded-lg transition-colors text-[#555555] min-h-[38px]"
              title="Share article link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span className="text-[#10B981]">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#555555] hover:text-[#111111] hover:bg-[#F4F3EE] rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto px-4 sm:px-10 py-6 sm:py-8 space-y-6 sm:space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs font-mono-code text-[#777777]">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
              <span>·</span>
              <span className="text-[#FF5722] font-semibold">By Sanjid</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] font-display tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base text-[#555555] leading-relaxed italic border-l-2 border-[#FF5722] pl-4 py-1">
              {post.subtitle}
            </p>
          </div>

          {/* Key takeaways box */}
          <div className="p-5 bg-white border border-[#E8E6E1] rounded-xl space-y-2 shadow-2xs">
            <div className="font-mono-code text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-2">
              <Bookmark className="w-3.5 h-3.5 text-[#FF5722]" />
              Core Takeaways
            </div>
            <ul className="space-y-1.5 text-xs text-[#444444]">
              {post.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#FF5722] font-bold">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article paragraphs */}
          <div className="space-y-5 text-sm sm:text-base text-[#333333] leading-relaxed pt-2">
            {post.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Author footer */}
          <div className="pt-8 border-t border-[#E8E6E1] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-sm">
                S
              </div>
              <div>
                <div className="text-sm font-bold text-[#111111]">Sanjid</div>
                <div className="text-xs text-[#777777] font-mono-code">
                  Founder of Next Solution · Web Developer
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#111111] text-white text-xs font-semibold rounded-lg hover:bg-[#FF5722] transition-colors"
            >
              Close Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
