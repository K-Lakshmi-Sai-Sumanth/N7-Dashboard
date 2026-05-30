import React from 'react'

const defaultSolutions = [
  {
    id: 'core-banking',
    title: 'Core Banking CB7',
    description: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
    linkText: 'LEARN MORE',
    linkHref: '#learn-more-cb7',
    tag: null,
    icon: (
      <svg className="h-8 w-8 text-slate-300 transition-colors duration-300 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2z" />
        <path d="M12 6a6 6 0 0 1 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6s2.686-6 6-6z" />
        <path d="M12 2c0 4 4 4 4 8s-4 4-4 8" />
        <path d="M2 12c4 0 4 4 8 4s4-4 8-4" />
      </svg>
    )
  },
  {
    id: 'digital-banking',
    title: 'Digital Banking N7',
    description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    linkText: 'LEARN MORE',
    linkHref: '#learn-more-n7',
    tag: null,
    icon: (
      <svg className="h-8 w-8 text-slate-300 transition-colors duration-300 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="15" y="3" width="6" height="6" rx="1" />
        <rect x="3" y="15" width="6" height="6" rx="1" />
        <rect x="15" y="15" width="6" height="6" rx="1" />
        <path d="M9 6h6M9 18h6M6 9v6M18 9v6" />
      </svg>
    )
  },
  {
    id: 'open-banking',
    title: 'Open Banking',
    description: 'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
    linkText: 'LEARN MORE',
    linkHref: '#learn-more-open',
    tag: null,
    icon: (
      <svg className="h-8 w-8 text-slate-300 transition-colors duration-300 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(-30 12 12)" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    )
  },
  {
    id: 'loan-origination',
    title: 'Loan Origination System',
    description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    linkText: 'LEARN MORE',
    linkHref: '#learn-more-origination',
    tag: 'NBFC',
    icon: (
      <svg className="h-8 w-8 text-slate-300 transition-colors duration-300 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 12h20L12 2zM2 12l10 10 10-10H2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  {
    id: 'loan-management',
    title: 'Loan Management System',
    description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    linkText: 'LEARN MORE',
    linkHref: '#learn-more-management',
    tag: 'NBFC',
    icon: (
      <svg className="h-8 w-8 text-slate-300 transition-colors duration-300 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
        <path d="M12 12v10" />
      </svg>
    )
  }
]

export default function SolutionsSection({
  title = 'All of our solutions are tailor-made to your needs',
  solutions = defaultSolutions,
  ctaText = 'REQUEST DEMO',
  ctaHref = '#request'
}) {
  return (
    <section className="relative w-full bg-[#071018] px-6 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          
          {/* Left Column: Heading and Request Demo */}
          <div className="lg:col-span-4 flex flex-col items-start justify-start">
            <h2 className="text-left text-3xl font-light leading-tight text-slate-100 sm:text-4xl md:text-[44px] md:leading-[1.1] max-w-md">
              {title}
            </h2>
            
            <div className="mt-10">
              <a 
                href={ctaHref} 
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#1fb6ff] to-[#0066ff] px-11 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-white hover:to-white hover:text-[#1fb6ff] hover:brightness-100 hover:shadow-xl"
              >
                {ctaText}
              </a>
            </div>
          </div>

          {/* Right Column: Grid of Dynamic Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
              {solutions.map((item) => (
                <div key={item.id} className="group relative flex flex-col items-start justify-between">
                  <div className="w-full">
                    {/* Header: Icon and Tag */}
                    <div className="flex items-center justify-between w-full">
                      <div className="inline-flex h-12 w-12 items-center justify-start rounded-lg text-slate-300">
                        {item.icon}
                      </div>
                      {item.tag && (
                        <span className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 text-xl font-semibold text-slate-100 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-relaxed text-slate-400 font-light max-w-sm">
                      {item.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="mt-6">
                    <a 
                      href={item.linkHref} 
                      className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#1fb6ff] uppercase group-hover:brightness-110 transition-all duration-300"
                    >
                      {item.linkText}
                      <svg className="h-3 w-3 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
