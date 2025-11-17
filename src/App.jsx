import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Agents from "./components/Agents"
import Benefits from "./components/Benefits"
import HowItWorks from "./components/HowItWorks"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Agents />
        <Benefits />
        <HowItWorks />

        <section className="relative py-20 bg-amber-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-amber-50">Give your business a hive that never stops working</h2>
                <p className="mt-3 text-amber-100/80 max-w-xl">Get early access to wrkrBee ai and start delegating outcomes to a coordinated swarm of specialists.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                <input placeholder="Enter your work email" className="h-12 w-full sm:w-80 rounded-lg border border-amber-700/60 bg-amber-800/60 px-4 text-amber-50 placeholder:text-amber-200/60 focus:outline-none focus:ring-2 focus:ring-amber-400/60" />
                <button className="h-12 rounded-lg bg-amber-400 px-6 text-amber-900 font-semibold shadow hover:bg-amber-300 transition">Request invite</button>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute inset-x-0 -bottom-8 h-16 bg-gradient-to-b from-amber-900 to-amber-950/0" />
        </section>
      </main>

      <footer className="bg-amber-50 border-t border-amber-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-amber-300 to-yellow-500">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-amber-900" fill="currentColor" aria-hidden>
                <path d="M12 2l8 4.6v9.2L12 20 4 15.8V6.6L12 2zm0 2.3L6 7v6.8l6 3.2 6-3.2V7l-6-2.7z"/>
              </svg>
            </span>
            <span className="font-semibold text-amber-900">wrkrBee <span className="text-amber-600">ai</span></span>
          </div>
          <p className="text-sm text-amber-900/70">© {new Date().getFullYear()} wrkrBee ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
