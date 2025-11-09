import { Cpu, Network, Workflow, BarChart3, PenTool, Zap } from 'lucide-react'

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">Platform Architecture</h2>
          <p className="mt-4 text-lg text-gray-700">Six core systems power the platform — built for autonomy, scale, and continuous learning.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ArchCard icon={Cpu} title="Agentic AI Engine" desc="Goal‑oriented multi‑agent orchestration with continuous learning." />
          <ArchCard icon={Network} title="Data Integration Hub" desc="Unified CDP with real‑time sync, aggregation, and enrichment." />
          <ArchCard icon={Workflow} title="Channel Management" desc="Omnichannel coordination across email, social, ads, and SMS." />
          <ArchCard icon={BarChart3} title="Analytics & Intelligence" desc="Predictive insights, attribution, and performance dashboards." />
          <ArchCard icon={PenTool} title="Content Studio" desc="AI content creation with brand consistency and A/B automation." />
          <ArchCard icon={Zap} title="Automation Engine" desc="Visual workflows, triggers, and event‑driven logic." />
        </div>
      </div>
    </section>
  )
}

function ArchCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white/70 backdrop-blur p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-gray-900 text-white p-2">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <p className="mt-1 text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  )
}
