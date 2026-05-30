import React from 'react';

export default function PaperlessCTASection() {
  return (
    <section className="relative w-full bg-[#071018] px-6 pb-24 pt-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#030e16] to-[#01060c] shadow-2xl lg:px-20 px-12 py-24">
          
          {/* Outline Background Text 'CB7' */}
          <div className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 pointer-events-none select-none flex items-center justify-center overflow-hidden">
            <span 
              className="text-[480px] font-medium leading-none tracking-tighter"
              style={{
                WebkitTextStroke: '1px rgba(20, 60, 140, 0.4)',
                color: 'transparent',
                marginLeft: '15%',
              }}
            >
              CB7
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
            
            {/* Left Content */}
            <div className="max-w-2xl text-left">
              <h2 className="text-4xl font-light leading-[1.2] text-white sm:text-5xl md:text-[54px] tracking-tight">
                Take the full advantage of<br />
                going paper-less now.
              </h2>
              <p className="mt-8 max-w-xl text-[17px] font-light text-slate-300 leading-relaxed">
                CB7 helps your financial institution improve the client experience,
                automate and optimize procedures, simplify banking operations
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0 lg:pr-6">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-lg border border-slate-500/40 px-11 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#1fb6ff] hover:border-white hover:shadow-xl"
              >
                CONTACT US
              </a>
              <a 
                href="#request-demo" 
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#1fb6ff] to-[#0066ff] px-11 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-white hover:to-white hover:text-[#1fb6ff] hover:brightness-100 hover:shadow-xl"
              >
                REQUEST DEMO
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
