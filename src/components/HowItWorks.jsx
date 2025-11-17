import React from "react"

function HowItWorks() {
  const steps = [
    {title:"Connect your tools", text:"Securely integrate email, docs, CRM, accounting and more."},
    {title:"Pick your bees", text:"Choose the agents you need. Start small and grow your hive."},
    {title:"Assign outcomes", text:"Describe goals, not tasks. The hive figures out the steps."},
    {title:"Review and refine", text:"You stay in control with approvals, dashboards and alerts."}
  ]

  return (
    <section id="how" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-amber-900">How it works</h2>
          <p className="mt-3 text-amber-900/80">From onboarding to automation in minutes, not months.</p>
        </div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s,idx)=> (
            <li key={s.title} className="rounded-2xl border border-amber-200 p-6 bg-amber-50/40">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-200 text-amber-900 font-semibold">{idx+1}</div>
              <h3 className="mt-4 text-lg font-semibold text-amber-900">{s.title}</h3>
              <p className="mt-2 text-amber-900/75 text-sm">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorks
