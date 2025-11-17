import React from "react"

function Navbar() {
  return (
    <nav className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-amber-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-300 to-yellow-500 shadow-inner">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-900" fill="currentColor" aria-hidden>
                <path d="M12 2l8 4.6v9.2L12 20 4 15.8V6.6L12 2zm0 2.3L6 7v6.8l6 3.2 6-3.2V7l-6-2.7z"/>
              </svg>
            </span>
            <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white"></span>
          </div>
          <span className="text-xl font-semibold tracking-tight text-amber-900">wrkrBee <span className="text-amber-600">ai</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-amber-900/80">
          <a href="#agents" className="hover:text-amber-900 transition">Agents</a>
          <a href="#benefits" className="hover:text-amber-900 transition">Benefits</a>
          <a href="#how" className="hover:text-amber-900 transition">How it works</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-10 items-center rounded-lg border border-amber-300 px-3 text-amber-900 hover:bg-amber-50 transition">Sign in</button>
          <button className="inline-flex h-10 items-center rounded-lg bg-amber-500 px-4 text-amber-900 font-medium shadow hover:bg-amber-400 transition">Get early access</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
