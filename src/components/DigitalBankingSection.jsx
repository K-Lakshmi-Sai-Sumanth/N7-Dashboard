import React from 'react';
import mobile1 from '../assets/mobile_1.png';
import mobile2 from '../assets/mobile_2.png';
import mobile3 from '../assets/mobile_3.png';

const CheckIcon = () => (
  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0066ff]">
    <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  </span>
);

export default function DigitalBankingSection() {
  return (
    <section className="relative w-full bg-[#f0f4f8] overflow-hidden pt-4 pb-32">
      {/* Top Marquee Banner */}
      <div className="flex w-full items-center overflow-hidden bg-white py-4 shadow-sm mb-20 whitespace-nowrap border-y border-slate-200">
        <div className="animate-marquee flex items-center w-max">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 px-3 text-xl font-bold tracking-wide">
              <span className="text-[#0066ff]">N7</span>
              <span className="text-slate-300 text-2xl">✶</span>
              <span className="text-slate-900">Say 👋 to the new way of banking</span>
              <span className="text-slate-300 text-2xl">✶</span>
              <span className="text-[#1fb6ff]">CB7</span>
              <span className="text-slate-300 text-2xl">✶</span>
              <span className="text-slate-900">Say 👋 to the new way of banking</span>
              <span className="text-slate-300 text-2xl">✶</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Background faint N7 watermark */}
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none select-none flex items-start justify-center overflow-hidden">
          <span
            className="text-[600px] font-bold leading-none tracking-tighter text-transparent"
            style={{ WebkitTextStroke: '2px rgba(200, 210, 225, 0.4)' }}
          >
            N7
          </span>
        </div>

        {/* Row 1 */}
        <div className="relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-start mb-24">
          <div className="flex-1 max-w-[280px] pt-8">
            <h2 className="text-3xl font-light text-slate-900 leading-[1.1] mb-5">
              Digital banking<br />out-of-the-box
            </h2>
            <p className="text-xs text-slate-500 mb-8 leading-relaxed font-medium">
              N7 helps your financial institution improve the client experience, automate and optimize procedures
            </p>
            <div className="flex flex-col items-start gap-5">
              <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#1fb6ff] to-[#0066ff] px-11 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-white hover:to-white hover:text-[#1fb6ff] hover:brightness-100 hover:shadow-xl">
                REQUEST DEMO
              </a>
              <a href="#learn" className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#0066ff] uppercase tracking-wider hover:brightness-110 transition-all">
                LEARN MORE <span className="text-sm leading-none">→</span>
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img src={mobile1} alt="Mobile App Screen 1" className="h-[500px] object-contain drop-shadow-2xl" />
          </div>

          <div className="flex-1 max-w-[280px] pt-16">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Fully compliant with regulatory requirement</h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed font-medium">
              The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational risk protocols and procedures.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-xs font-medium text-slate-700"><CheckIcon /> Pre-integrated Security System</li>
              <li className="flex items-start gap-3 text-xs font-medium text-slate-700"><CheckIcon /> Fully Compliant With Regulatory Requirement</li>
              <li className="flex items-start gap-3 text-xs font-medium text-slate-700"><CheckIcon /> Digitally Connected Core</li>
            </ul>
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative z-10 flex flex-col-reverse items-center justify-center gap-12 lg:flex-row lg:items-center mb-24 lg:gap-32">
          <div className="max-w-[280px]">
            <h3 className="text-sm font-bold text-slate-900 mb-4">No legacy IT systems</h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed font-medium">
              Our digital banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-xs font-medium text-slate-700"><CheckIcon /> Adaptive & intelligent API monetization</li>
              <li className="flex items-start gap-3 text-xs font-medium text-slate-700"><CheckIcon /> Ambient User Experience</li>
              <li className="flex items-start gap-3 text-xs font-medium text-slate-700"><CheckIcon /> Cloud-native With Lower TCO</li>
            </ul>
          </div>

          <div>
            <img src={mobile2} alt="Mobile App Screen 2" className="h-[500px] object-contain drop-shadow-2xl" />
          </div>
        </div>

        {/* Row 3 */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-12 lg:flex-row lg:items-center lg:gap-32">
          <div>
            <img src={mobile3} alt="Mobile App Screen 3" className="h-[500px] object-contain drop-shadow-2xl" />
          </div>

          <div className="max-w-[280px]">
            <h3 className="text-sm font-bold text-slate-900 mb-4">No traditional branches</h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed font-medium">
              Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing data and optimizing operational costs for a seamless branchless experience.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-xs font-medium text-slate-700"><CheckIcon /> Branchless & Paperless Banking</li>
              <li className="flex items-start gap-3 text-xs font-medium text-slate-700"><CheckIcon /> Digital Transformation Capability</li>
              <li className="flex items-start gap-3 text-xs font-medium text-slate-700"><CheckIcon /> Optimized, Adaptable and Scalable</li>
            </ul>
          </div>
        </div>

      </div>

    </section>
  );
}
