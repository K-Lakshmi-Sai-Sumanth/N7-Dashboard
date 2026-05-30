import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050c12] text-slate-400 py-20 px-6 lg:px-8 border-t border-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between gap-16 pb-16">
          
          {/* Left Column - Giant Logo */}
          <div className="flex-1 lg:max-w-[30%] flex items-center">
            <span 
              className="text-[140px] sm:text-[180px] font-bold leading-none tracking-tighter bg-gradient-to-r from-[#00d2ff] to-[#0066ff] bg-clip-text text-transparent select-none"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              N7
            </span>
          </div>

          {/* Right Column - Navigation and Addresses */}
          <div className="flex-[2.5] flex flex-col gap-16">
            
            {/* Top Row - Addresses */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {/* London */}
              <div>
                <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">London</h4>
                <p className="text-[12px] leading-[1.6] text-slate-400 font-light">
                  Linktia Infosystems Ltd – CB7,<br />
                  26 Main Road Sundridge, TN14 6EP,<br />
                  England, United Kingdom.
                </p>
              </div>

              {/* Dubai */}
              <div>
                <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Dubai</h4>
                <p className="text-[12px] leading-[1.6] text-slate-400 font-light">
                  Linktia Infosystems Ltd –<br />
                  CB7, Jumeirah Business Center 5,<br />
                  Cluster W, Jumeirah Lakes Towers,<br />
                  Dubai, United Arab Emirates.
                </p>
              </div>

              {/* London (India address) */}
              <div>
                <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">London</h4>
                <p className="text-[12px] leading-[1.6] text-slate-400 font-light">
                  Linktia Infosystems Ltd –<br />
                  CB7, Nirmal, Anand Nagar,<br />
                  Suncity Road, Pune,<br />
                  Maharashtra, 411041, India.
                </p>
              </div>
            </div>

            {/* Bottom Row - Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {/* Solutions Links */}
              <div>
                <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-5">Solutions</h4>
                <ul className="flex flex-col gap-3.5">
                  {[
                    { title: 'Core Banking CB7', href: '#core-banking' },
                    { title: 'Digital Banking N7', href: '#digital-banking' },
                    { title: 'Open Banking', href: '#open-banking' },
                    { title: 'Loan Origination System', href: '#loan-origination' },
                    { title: 'Loan Management System', href: '#loan-management' },
                    { title: 'Digital Transformation', href: '#digital-transformation' },
                  ].map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href} className="group text-[12px] font-light text-slate-400 hover:text-white flex items-center justify-between w-full max-w-[200px] transition-colors duration-200">
                        <span className="max-w-[160px]">{link.title}</span>
                        <span className="text-[#0088ff] text-sm transform transition-transform duration-200 group-hover:translate-x-1 shrink-0">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* N7 Banking Links */}
              <div>
                <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-5">N7 Banking</h4>
                <ul className="flex flex-col gap-3.5">
                  {[
                    { title: 'About Us', href: '#about' },
                    { title: 'Solutions', href: '#solutions' },
                    { title: 'Contact', href: '#contact' },
                    { title: 'Company', href: '#company' },
                    { title: 'Careers', href: '#careers' },
                    { title: 'Insights', href: '#insights' },
                    { title: 'Core Team', href: '#core-team' },
                    { title: 'Brand Center', href: '#brand-center' },
                  ].map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href} className="group text-[12px] font-light text-slate-400 hover:text-white flex items-center justify-between w-full max-w-[200px] transition-colors duration-200">
                        <span className="max-w-[160px]">{link.title}</span>
                        <span className="text-[#0088ff] text-sm transform transition-transform duration-200 group-hover:translate-x-1 shrink-0">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Socials Links */}
              <div>
                <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-5">Our Socials</h4>
                <ul className="flex flex-col gap-3.5">
                  {[
                    { title: 'LinkedIn', href: '#linkedin' },
                    { title: 'X', href: '#x' },
                  ].map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href} className="group text-[12px] font-light text-slate-400 hover:text-white flex items-center justify-between w-full max-w-[200px] transition-colors duration-200">
                        <span className="max-w-[160px]">{link.title}</span>
                        <span className="text-[#0088ff] text-sm transform transition-transform duration-200 group-hover:translate-x-1 shrink-0">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom copyright statement */}
        <div className="pt-8 border-t border-slate-900 text-left">
          <p className="text-[10px] sm:text-[11px] leading-[1.7] text-slate-600 font-light max-w-5xl">
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
          </p>
        </div>

      </div>
    </footer>
  );
}
