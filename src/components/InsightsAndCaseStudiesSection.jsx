import React from 'react';
import card1 from '../assets/card1.png'; // Square Insight 2
import card2 from '../assets/card2.png'; // Square Insight 1
import card3 from '../assets/card3.png'; // Case Study Slider (has stack)
import card4 from '../assets/card4.png'; // Horizontal Insight

export default function InsightsAndCaseStudiesSection() {
  return (
    <section className="w-full bg-[#071018] pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Insights Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 mb-32 justify-between">
          {/* Left Column */}
          <div className="w-full lg:w-1/3 pt-4">
            <h2 className="text-[2rem] sm:text-[2.25rem] font-light text-white leading-[1.2] mb-10 tracking-tight">
              Get yourself up-to-speed on<br className="hidden lg:block"/>
              all the things happening in<br className="hidden lg:block"/>
              fintech
            </h2>
            <a href="#insights" className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-8 py-3 text-[11px] font-semibold tracking-widest text-white uppercase hover:bg-white/10 transition-all">
              INSIGHTS
            </a>
          </div>

          {/* Right Column Grid */}
          <div className="w-full lg:w-[60%] flex flex-col gap-6">
            <div className="w-full">
              {/* Horizontal Insight Card */}
              <img src={card4} alt="Insight Card" className="w-full h-auto object-cover shadow-xl hover:brightness-110 transition-all duration-300 rounded-[1.5rem]" />
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                {/* Square Insight Card */}
                <img src={card2} alt="Insight Card" className="w-full h-auto object-cover shadow-xl hover:brightness-110 transition-all duration-300 rounded-[1.5rem]" />
              </div>
              <div className="flex-1">
                {/* Square Insight Card */}
                <img src={card1} alt="Insight Card" className="w-full h-auto object-cover shadow-xl hover:brightness-110 transition-all duration-300 rounded-[1.5rem]" />
              </div>
            </div>
            <div className="flex justify-end mt-2 pr-4">
              <a href="#all-insights" className="text-[11px] font-bold text-[#0088ff] uppercase tracking-wider hover:brightness-125 transition-all flex items-center gap-1.5">
                READ ALL INSIGHTS <span className="text-lg leading-none">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-[2rem] sm:text-[2.25rem] font-light text-white mb-16 tracking-tight">
            Our Case Studies
          </h2>
          
          <div className="relative w-full max-w-5xl mx-auto mb-10">
            <div className="relative z-10 mx-auto w-full">
               <img src={card3} alt="Case Study" className="w-full h-auto object-contain hover:brightness-105 transition-all duration-300" />
            </div>
          </div>

          <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between mt-6 px-4 gap-6 sm:gap-0 relative">
            {/* Left spacer for perfect centering on desktop */}
            <div className="hidden sm:block w-24"></div>
            
            {/* Centered Controls */}
            <div className="flex items-center gap-4">
              {/* Left Arrow */}
              <button className="w-8 h-8 rounded-full border border-[#0088ff] text-[#0088ff] flex items-center justify-center hover:bg-[#0088ff]/10 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              {/* Dots */}
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full border border-slate-600"></div>
                <div className="w-6 h-2 rounded-full bg-[#0088ff]"></div>
                <div className="w-2 h-2 rounded-full border border-slate-600"></div>
                <div className="w-2 h-2 rounded-full border border-slate-600"></div>
              </div>
              {/* Right Arrow */}
              <button className="w-8 h-8 rounded-full border border-[#0088ff] text-[#0088ff] flex items-center justify-center hover:bg-[#0088ff]/10 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
            
            {/* Right-aligned VIEW ALL */}
            <a href="#all-case-studies" className="text-[11px] font-bold text-[#0088ff] uppercase tracking-wider hover:brightness-125 transition-all flex items-center gap-1.5 sm:absolute sm:right-4">
              VIEW ALL <span className="text-lg leading-none">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
