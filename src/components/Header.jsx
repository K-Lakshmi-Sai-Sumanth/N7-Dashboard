import { useState, useEffect } from 'react'

const defaultLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Resources', href: '#resources' },
  { label: 'About us', href: '#about' },
]

export default function Header({ logoText = 'N7', logoHref = '/' }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`w-full left-0 z-50 transition-all duration-300 sticky top-0 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-center">
          {/* pill container */}
          <div className={`relative flex w-full max-w-4xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
            scrolled 
              ? 'bg-[#071018]/70 backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] ring-1 ring-white/5' 
              : 'bg-[#071018]/50 backdrop-blur-md border border-slate-800/40 shadow-lg'
          }`}>

            {/* Left: logo tile */}
            <a href={logoHref} className="relative z-10 inline-flex items-center gap-3 text-sm font-semibold text-white">
              <span className="inline-flex h-9 w-14 items-center justify-center rounded-md bg-slate-900/80 px-3 py-1 text-sm font-bold text-white">{logoText}</span>
            </a>

            {/* Center: nav (absolutely centered to keep visual center) */}
            <nav className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 hidden md:block">
              <ul className="pointer-events-auto flex items-center gap-8 text-[11px] font-medium text-slate-200 uppercase tracking-wider">
                <li className="flex items-center gap-2">
                  <button className="inline-flex items-center gap-2 rounded px-2 py-1 hover:text-white focus:outline-none">
                    <span>Solutions</span>
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </li>
                <li className="flex items-center gap-2">
                  <button className="inline-flex items-center gap-2 rounded px-2 py-1 hover:text-white focus:outline-none">
                    <span>Resources</span>
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </li>
                <li>
                  <a href="#about" className="hover:text-white">About us</a>
                </li>
              </ul>
            </nav>
 
            {/* Right: CTA */}
            <div className="relative z-10 flex items-center gap-3">
              <button className="hidden rounded-lg bg-gradient-to-r from-[#1fb6ff] to-[#0066ff] px-5 py-2.5 text-[12px] font-semibold text-white shadow-md transition-all duration-300 hover:from-white hover:to-white hover:text-[#1fb6ff] hover:brightness-100 hover:shadow-lg md:inline-flex">REQUEST DEMO</button>
 
              {/* Mobile hamburger */}
              <button
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-slate-200 hover:bg-slate-800/30 md:hidden"
              >
                <span className="sr-only">Open menu</span>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
 
            {/* Mobile popover */}
            {open && (
              <div id="mobile-menu" className="absolute left-0 right-0 top-full mt-3 w-full px-4 md:hidden">
                <div className="mx-auto max-w-md rounded-2xl bg-slate-900/95 p-4 shadow-lg ring-1 ring-slate-800/60">
                  <ul className="flex flex-col gap-3 text-sm text-slate-200">
                    <li><a href="#solutions" className="block rounded px-3 py-2 hover:bg-slate-800/40">Solutions</a></li>
                    <li><a href="#resources" className="block rounded px-3 py-2 hover:bg-slate-800/40">Resources</a></li>
                    <li><a href="#about" className="block rounded px-3 py-2 hover:bg-slate-800/40">About us</a></li>
                    <li><a href="#request" className="mt-2 inline-block rounded-full border border-slate-700/60 px-3 py-2 text-center text-sm font-semibold text-white">Request demo</a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
