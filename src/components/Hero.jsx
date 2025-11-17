import React from "react"

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-amber-50 to-white" />
      <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[1200px] rounded-full bg-amber-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-800 ring-1 ring-amber-200">A hive of AI agents</div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-amber-900">
              Build your business with a hive that never sleeps
            </h1>
            <p className="mt-4 text-lg text-amber-900/80">
              wrkrBee ai gives you a swarm of specialized agents—Finance Bee, Sales Bee, Ops Bee and more—working together to solve problems big and small.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center rounded-lg bg-amber-500 px-5 py-3 text-amber-900 font-semibold shadow hover:bg-amber-400 transition">Start free</button>
              <button className="inline-flex items-center rounded-lg border border-amber-300 px-5 py-3 text-amber-900 hover:bg-amber-50 transition">See how it works</button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-amber-900/70">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_,i)=> (
                  <span key={i} className="inline-block h-8 w-8 rounded-full bg-amber-300 ring-2 ring-white" />
                ))}
              </div>
              <p className="text-sm">Trusted by founders and operators</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto h-[380px] w-full max-w-md rounded-2xl border border-amber-200 bg-white p-4 shadow-xl">
              <div className="grid grid-cols-3 gap-3">
                {[
                  {name:"Finance Bee", color:"bg-amber-100", emoji:"💸"},
                  {name:"Sales Bee", color:"bg-amber-100", emoji:"🤝"},
                  {name:"Ops Bee", color:"bg-amber-100", emoji:"⚙️"},
                  {name:"Marketing Bee", color:"bg-amber-100", emoji:"📣"},
                  {name:"HR Bee", color:"bg-amber-100", emoji:"🧑‍🤝‍🧑"},
                  {name:"Support Bee", color:"bg-amber-100", emoji:"💬"},
                ].map((b)=> (
                  <div key={b.name} className={`rounded-xl ${b.color} p-4 ring-1 ring-amber-200/60 hover:ring-amber-400 transition`}>
                    <div className="text-2xl">{b.emoji}</div>
                    <div className="mt-2 text-sm font-semibold text-amber-900">{b.name}</div>
                    <div className="text-xs text-amber-900/70">Always on</div>
                  </div>
                ))}
              </div>
              <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-amber-300 blur-2xl opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
