import React from "react"

const agents = [
  {
    title: "Finance Bee",
    description: "Automates bookkeeping, forecasts cash flow, and flags anomalies in real-time.",
    emoji: "💸"
  },
  {
    title: "Sales Bee",
    description: "Prospects leads, drafts outreach, and updates your CRM while you sleep.",
    emoji: "🤝"
  },
  {
    title: "Ops Bee",
    description: "Optimizes workflows, assigns tasks, and monitors SLAs across teams.",
    emoji: "⚙️"
  },
  {
    title: "Marketing Bee",
    description: "Plans campaigns, schedules content, and A/B tests landing pages.",
    emoji: "📣"
  },
  {
    title: "HR Bee",
    description: "Screens candidates, coordinates interviews, and handles onboarding.",
    emoji: "🧑‍🤝‍🧑"
  },
  {
    title: "Support Bee",
    description: "Triages tickets, drafts replies, and escalates complex issues instantly.",
    emoji: "💬"
  }
]

function Agents() {
  return (
    <section id="agents" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-amber-900">Your hive of specialists</h2>
          <p className="mt-3 text-amber-900/80">Mix and match the bees your business needs. Each agent excels at a domain, and they collaborate to get things done.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((a)=> (
            <div key={a.title} className="group rounded-2xl border border-amber-200 p-6 bg-amber-50/40 hover:shadow-md hover:bg-white transition">
              <div className="text-3xl">{a.emoji}</div>
              <h3 className="mt-4 text-xl font-semibold text-amber-900">{a.title}</h3>
              <p className="mt-2 text-amber-900/75">{a.description}</p>
              <div className="mt-4 inline-flex items-center text-amber-700 font-medium">Assign task <span className="ml-1">→</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Agents
