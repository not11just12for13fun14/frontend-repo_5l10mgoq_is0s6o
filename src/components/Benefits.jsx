import React from "react"

function Benefits() {
  const items = [
    {
      title: "24/7 execution",
      text: "Bees never sleep. Your tasks keep moving while you focus on strategy."
    },
    {
      title: "Specialist-level output",
      text: "Each bee is tuned for a function—finance, sales, ops—delivering expert work."
    },
    {
      title: "Orchestrated teamwork",
      text: "Agents collaborate, hand off context, and close loops without you micromanaging."
    },
    {
      title: "Plug into your stack",
      text: "Connect to the tools you already use and watch the hive go to work."
    }
  ]

  return (
    <section id="benefits" className="relative py-20 bg-gradient-to-b from-white to-amber-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-amber-900">Why wrkrBee ai</h2>
            <p className="mt-3 text-amber-900/80 max-w-xl">Run your business with an intelligent hive that handles the busywork and the brainwork. You get leverage, consistency, and speed.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((i)=> (
                <div key={i.title} className="rounded-xl border border-amber-200 bg-white p-5">
                  <h3 className="font-semibold text-amber-900">{i.title}</h3>
                  <p className="mt-1 text-amber-900/75 text-sm">{i.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto max-w-md rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
              <div className="h-3 w-24 rounded-full bg-amber-200" />
              <div className="mt-6 space-y-4">
                {Array.from({length:5}).map((_,i)=> (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md bg-amber-100 text-amber-800">{i+1}</span>
                    <div>
                      <div className="h-4 w-48 bg-amber-100 rounded" />
                      <div className="mt-2 h-3 w-64 bg-amber-50 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-amber-200 blur-2xl opacity-60" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
