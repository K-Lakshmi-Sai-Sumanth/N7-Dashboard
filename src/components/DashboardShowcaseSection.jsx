import React from 'react';
import ckycImg from '../assets/ckyc_dashboard.png';
import amlImg from '../assets/aml_dashboard.png';

export default function DashboardShowcaseSection() {
  const listItems = [
    "Customer-On Boarding",
    "Managing deposits and withdrawals",
    "Transaction management",
    "Interest Calculation",
    "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
    "CRM Activities",
    "Configuring New Banking Products",
    "Loan disbursal and Loan management",
    "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on."
  ];

  return (
    <section className="relative overflow-hidden bg-[#071018] px-6 py-24 sm:py-32">
      {/* Background B7 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[40vw] font-bold leading-none text-white/[0.02] tracking-tighter">B7</span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 mb-32">
          <div className="max-w-xl">
            <h2 className="text-4xl font-light leading-tight text-white sm:text-5xl">
              A complete cloud-based<br />
              core banking.
            </h2>
            <p className="mt-6 text-lg text-slate-400">
              Faster time to market with our cloud-based<br />
              core banking services
            </p>
            <div className="mt-10 flex items-center gap-6">
              <a href="#request" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#1fb6ff] to-[#0066ff] px-11 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-white hover:to-white hover:text-[#1fb6ff] hover:brightness-100 hover:shadow-xl">
                REQUEST DEMO
              </a>
              <a href="#learn-more" className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-[#1fb6ff] uppercase transition-all hover:brightness-110">
                LEARN MORE
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[600px] overflow-hidden rounded-t-xl border-[8px] border-b-0 border-[#0f172a] bg-[#0f172a] shadow-2xl">
              <img src={amlImg} alt="AML Dashboard" className="w-full object-cover" />
            </div>
            <div className="mx-auto h-4 w-[110%] -ml-[5%] rounded-b-xl bg-[#0f172a] shadow-xl"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-[600px] overflow-hidden rounded-t-xl border-[8px] border-b-0 border-[#0f172a] bg-[#0f172a] shadow-2xl">
              <img src={ckycImg} alt="CKYC Dashboard" className="w-full object-cover" />
            </div>
            <div className="mx-auto h-4 w-[110%] -ml-[5%] rounded-b-xl bg-[#0f172a] shadow-xl"></div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-light leading-tight text-white sm:text-4xl">
              Run a more efficient, flexible,and digitally<br />
              connected corebanking system
            </h2>
            <h3 className="mt-8 text-lg font-semibold text-white">What you will get:</h3>
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 text-sm text-slate-300">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0066ff]">
                    <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
