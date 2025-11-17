import React from "react"

function CTA() {
  return (
    <section className="relative py-16">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amber-300/60 bg-white/80 backdrop-blur p-10 text-center shadow">
          <h3 className="text-2xl sm:text-3xl font-bold text-amber-900">Give your business a hive mind</h3>
          <p className="mt-2 text-amber-900/80">Join the waitlist to get early access and shape the future of autonomous operations.</p>
          <form className="mt-6 mx-auto max-w-md flex gap-2">
            <input type="email" required placeholder="you@company.com" className="flex-1 h-12 rounded-xl border border-amber-300 bg-white px-4 text-amber-900 placeholder:text-amber-900/60 focus:outline-none focus:ring-2 focus:ring-amber-400" />
            <button className="h-12 rounded-xl bg-amber-500 px-5 font-semibold text-amber-900 hover:bg-amber-400">Notify me</button>
          </form>
          <p className="mt-3 text-xs text-amber-900/70">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}

export default CTA
