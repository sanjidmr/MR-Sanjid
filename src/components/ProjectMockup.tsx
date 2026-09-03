import React from 'react';

interface ProjectMockupProps {
  type: string;
  accentColor: string;
  title: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type, accentColor, title }) => {
  if (type === 'ecommerce') {
    return (
      <div className="w-full h-56 sm:h-64 bg-[#F5F4F0] border border-[#E8E6E1] rounded-xl p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-[#FF5722]/50 transition-all">
        {/* Mock browser header */}
        <div className="flex items-center justify-between border-b border-[#E0DCD4] pb-2 text-[11px] font-mono-code text-[#777777]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E0DCD4]"></span>
            <span className="w-2 h-2 rounded-full bg-[#E0DCD4]"></span>
            <span className="w-2 h-2 rounded-full bg-[#E0DCD4]"></span>
          </div>
          <span>fashion-hub.app/catalog</span>
          <span className="text-[10px] px-1.5 py-0.5 bg-[#E8E6E1] rounded">2 Items In Bag</span>
        </div>

        {/* Mock product grid */}
        <div className="grid grid-cols-2 gap-3 my-auto pt-2">
          <div className="bg-white p-2.5 rounded-lg border border-[#E8E6E1] shadow-2xs space-y-1.5">
            <div className="h-20 bg-[#FAF9F6] rounded flex items-center justify-center text-xs text-[#888888] font-mono-code">
              [Minimalist Overshirt]
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#111111]">$140</span>
              <span className="text-[10px] text-[#10B981] font-mono-code">In Stock</span>
            </div>
          </div>

          <div className="bg-white p-2.5 rounded-lg border border-[#E8E6E1] shadow-2xs space-y-1.5">
            <div className="h-20 bg-[#FAF9F6] rounded flex items-center justify-center text-xs text-[#888888] font-mono-code">
              [Tailored Wool Pant]
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#111111]">$190</span>
              <span className="text-[10px] text-[#FF5722] font-mono-code">Low Stock</span>
            </div>
          </div>
        </div>

        {/* Mock footer toolbar */}
        <div className="flex items-center justify-between text-[11px] bg-white px-3 py-2 rounded-lg border border-[#E8E6E1]">
          <span className="font-mono-code text-[#555555]">Instant Filter: All Sizes</span>
          <span className="font-semibold text-[#FF5722]">Instant Checkout →</span>
        </div>
      </div>
    );
  }

  if (type === 'restaurant') {
    return (
      <div className="w-full h-56 sm:h-64 bg-[#F9F8F5] border border-[#E8E6E1] rounded-xl p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-[#FF5722]/50 transition-all">
        {/* Mock browser header */}
        <div className="flex items-center justify-between border-b border-[#E0DCD4] pb-2 text-[11px] font-mono-code text-[#777777]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E0DCD4]"></span>
            <span className="w-2 h-2 rounded-full bg-[#E0DCD4]"></span>
            <span className="w-2 h-2 rounded-full bg-[#E0DCD4]"></span>
          </div>
          <span>laziiz-dining.com/menu</span>
          <span className="text-[10px] px-1.5 py-0.5 bg-[#E8F5E9] text-[#2E7D32] font-semibold rounded">
            ● Open Today
          </span>
        </div>

        {/* Mock menu card */}
        <div className="bg-white p-3 rounded-lg border border-[#E8E6E1] shadow-2xs space-y-2 my-auto">
          <div className="flex items-center justify-between">
            <span className="text-xs font-serif font-bold text-[#111111]">
              Smoked Truffle Lamb Shank
            </span>
            <span className="font-mono-code text-xs font-bold text-[#D84315]">$42</span>
          </div>
          <p className="text-[11px] text-[#666666]">
            Slow-braised with rosemary glaze, seasonal heirloom root vegetables & jus.
          </p>
          <div className="flex gap-1.5 pt-1">
            <span className="text-[9px] px-1.5 py-0.5 bg-[#FAF9F6] border border-[#E0DCD4] rounded font-mono-code">
              Halal
            </span>
            <span className="text-[9px] px-1.5 py-0.5 bg-[#FFF3E0] text-[#E65100] rounded font-mono-code">
              Chef Signature
            </span>
          </div>
        </div>

        {/* Reservation CTA */}
        <div className="flex items-center justify-between text-[11px] bg-[#111111] text-white px-3 py-2 rounded-lg">
          <span className="font-mono-code">Reserve for 2 Guests · 7:30 PM</span>
          <span className="text-[#FF5722] font-semibold">Book Table →</span>
        </div>
      </div>
    );
  }

  if (type === 'agency') {
    return (
      <div className="w-full h-56 sm:h-64 bg-[#141414] text-white border border-[#2B2B2B] rounded-xl p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-[#FF5722]/60 transition-all">
        {/* Mock browser header */}
        <div className="flex items-center justify-between border-b border-[#262626] pb-2 text-[11px] font-mono-code text-[#888888]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FF5722]"></span>
            <span className="w-2 h-2 rounded-full bg-[#444444]"></span>
            <span className="w-2 h-2 rounded-full bg-[#444444]"></span>
          </div>
          <span>nextsolution.agency</span>
          <span className="text-[10px] text-[#FF5722] font-semibold">FOUNDED BY SANJID</span>
        </div>

        {/* Mock agency hero */}
        <div className="my-auto space-y-2 py-1">
          <div className="text-[11px] font-mono-code text-[#FF5722]">
            / DIGITAL SOLUTIONS ECOSYSTEM
          </div>
          <div className="text-base font-bold tracking-tight text-white leading-tight">
            Turning Bold Ideas into Digital Products.
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="text-[10px] px-2 py-0.5 bg-[#222222] border border-[#333333] rounded text-[#CCCCCC]">
              Web Development
            </span>
            <span className="text-[10px] px-2 py-0.5 bg-[#222222] border border-[#333333] rounded text-[#CCCCCC]">
              UI/UX Systems
            </span>
            <span className="text-[10px] px-2 py-0.5 bg-[#222222] border border-[#333333] rounded text-[#CCCCCC]">
              AI Automation
            </span>
          </div>
        </div>

        {/* Agency footer */}
        <div className="flex items-center justify-between text-[11px] bg-[#1F1F1F] px-3 py-1.5 rounded-lg border border-[#2D2D2D]">
          <span className="text-[#888888] font-mono-code">Next Solution v2.4</span>
          <span className="text-[#FF5722] font-semibold">Start Discovery →</span>
        </div>
      </div>
    );
  }

  if (type === 'dashboard') {
    return (
      <div className="w-full h-56 sm:h-64 bg-[#F7F6F2] border border-[#E8E6E1] rounded-xl p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-[#FF5722]/50 transition-all">
        {/* Mock browser header */}
        <div className="flex items-center justify-between border-b border-[#E0DCD4] pb-2 text-[11px] font-mono-code text-[#777777]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E0DCD4]"></span>
            <span className="w-2 h-2 rounded-full bg-[#E0DCD4]"></span>
            <span className="w-2 h-2 rounded-full bg-[#E0DCD4]"></span>
          </div>
          <span>apex-console.internal/analytics</span>
          <span className="text-[10px] font-mono-code text-[#111111]">Live Telemetry</span>
        </div>

        {/* Mock Dashboard metrics & chart */}
        <div className="space-y-2 my-auto">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white p-2 rounded-lg border border-[#E8E6E1]">
              <div className="text-[9px] font-mono-code text-[#888888]">ACTIVE USERS</div>
              <div className="text-sm font-bold text-[#111111]">4,821</div>
            </div>
            <div className="bg-white p-2 rounded-lg border border-[#E8E6E1]">
              <div className="text-[9px] font-mono-code text-[#888888]">API LATENCY</div>
              <div className="text-sm font-bold text-[#10B981]">24ms</div>
            </div>
          </div>

          {/* Mini chart visualizer */}
          <div className="bg-white p-2 rounded-lg border border-[#E8E6E1] flex items-end justify-between h-12 px-2 gap-1">
            <div className="w-full bg-[#E0DCD4] rounded-t h-4"></div>
            <div className="w-full bg-[#E0DCD4] rounded-t h-7"></div>
            <div className="w-full bg-[#E0DCD4] rounded-t h-5"></div>
            <div className="w-full bg-[#E0DCD4] rounded-t h-9"></div>
            <div className="w-full bg-[#FF5722] rounded-t h-11"></div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[11px] text-[#666666] font-mono-code">
          <span>Virtual Table: 500 records</span>
          <span className="text-[#111111] font-semibold">Inspect Component</span>
        </div>
      </div>
    );
  }

  // Default / Landing Page type
  return (
    <div className="w-full h-56 sm:h-64 bg-[#F8F7F3] border border-[#E8E6E1] rounded-xl p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-[#FF5722]/50 transition-all">
      <div className="flex items-center justify-between border-b border-[#E0DCD4] pb-2 text-[11px] font-mono-code text-[#777777]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#E0DCD4]"></span>
          <span className="w-2 h-2 rounded-full bg-[#E0DCD4]"></span>
          <span className="w-2 h-2 rounded-full bg-[#E0DCD4]"></span>
        </div>
        <span>prism-labs.dev</span>
        <span className="text-[10px] text-[#FF5722] font-mono-code">Conversion Funnel</span>
      </div>

      <div className="bg-white p-3 rounded-lg border border-[#E8E6E1] shadow-2xs space-y-1.5 my-auto">
        <div className="text-xs font-mono-code text-[#777777]">
          &lt;PrismProvider strict={'{true}'}&gt;
        </div>
        <div className="text-xs font-bold text-[#111111]">
          Zero-Runtime Developer Tooling
        </div>
        <div className="text-[11px] text-[#666666]">
          100/100 Lighthouse performance baseline.
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] bg-[#111111] text-white px-3 py-2 rounded-lg">
        <span className="font-mono-code">High-Impact Launch</span>
        <span className="text-[#FF5722] font-semibold">View Flow →</span>
      </div>
    </div>
  );
};
