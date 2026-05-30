import React from 'react';
import heroNew from '../assets/hero_new.png';

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071018] px-6 pt-24 pb-32 sm:pt-28 lg:pb-36">
      {/* Right-side radial glow */}
      <div aria-hidden className="absolute right-24 top-[180px] -z-10 h-[350px] w-[520px] rounded-full bg-[#0b5bd6] blur-[80px] opacity-80" />

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left column: copy */}
          <div className="px-4 md:px-0">
            <h1 className="text-left text-5xl  leading-tight text-slate-100 sm:text-6xl md:text-[60px] md:leading-[0.98]">
              The new foundation
              <br />
              of modern banking
            </h1>

            <p className="mt-6 max-w-xl text-left text-lg text-slate-300">
              We drive innovation and growth, provide seamless customer experience and operational excellence
            </p>

            <div className="mt-10 flex items-center gap-6">
              <a href="#request" className="inline-flex items-center justify-center rounded-lg  bg-gradient-to-r from-[#1fb6ff] to-[#0066ff] px-11 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-white hover:to-white hover:text-[#1fb6ff] hover:brightness-100 hover:shadow-xl">REQUEST DEMO</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-slate-500/40 px-11 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#1fb6ff] hover:border-white hover:shadow-xl">CONTACT US</a>
            </div>
          </div>

          {/* Right column: hero mockup */}
          <div className="px-4 md:px-0">
            <div className="relative mx-auto max-w-[640px]">
              <img
                src={heroNew}
                alt="Modern Banking Interface"
                className="w-full h-auto object-contain shadow-2xl rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>

        {/* Trusted By section */}
        <div className="mt-20  pt-10">
          <p className="text-left text-sm font-medium text-slate-500 uppercase tracking-wider">Trusted By:</p>
          <div className="mt-6 flex flex-wrap items-center justify-start gap-x-12 gap-y-6">
            <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer group">
              <svg className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 3a9 9 0 1 0 9 9h-3a6 6 0 1 1-6-6v-3z" />
                <path d="M12 9a3 3 0 1 0 3 3h-3v-3z" />
              </svg>
              <span className="text-base font-bold tracking-wide">SHELLS</span>
            </div>

            <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer group">
              <svg className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-base font-semibold tracking-wide">SmartFinder</span>
            </div>

            <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer group">
              <svg className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span className="text-base font-semibold tracking-wide">Zoomerr</span>
            </div>

            <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer group">
              <svg className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-base font-semibold tracking-wide">ArtVenue</span>
            </div>

            <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer group">
              <svg className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M12 2v20A10 10 0 0 0 12 2z" fill="currentColor" />
              </svg>
              <span className="text-base font-semibold tracking-wide">kontrastr</span>
            </div>

            <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer group">
              <svg className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 10s3-3 5-3 5 6 7 6 5-3 7-3M2 14s3-3 5-3 5 6 7 6 5-3 7-3" />
              </svg>
              <span className="text-base font-semibold tracking-wide uppercase">WAVESMARATHON</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}