import { Brain, Sparkles, ChartLine, Layers, Clock, CheckCircle2 } from 'lucide-react'

export default function ValueProps() {
  const items = [
    { icon: Brain, title: 'Agentic by design', desc: 'Autonomous agents plan, execute, and optimize across channels.' },
    { icon: Sparkles, title: 'AI Content Studio', desc: 'Generate on‑brand copy, images, and video variations automatically.' },
    { icon: ChartLine, title: 'Real‑time intelligence', desc: 'Predictive insights and automated recommendations.' },
    { icon: Layers, title: 'Unified CDP', desc: '360° customer profiles with identity resolution and compliance.' },
    { icon: Clock, title: 'Always‑on optimization', desc: 'Continuous testing, budget shifts, and bid tuning.' },
    { icon: CheckCircle2, title: 'Enterprise‑ready', desc: 'RBAC, audit logs, encryption, and SOC2‑ready controls.' },
  ]
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">Why teams choose us</h2>
          <p className="mt-4 text-lg text-gray-700">Everything you need to run campaigns that improve themselves.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-gray-900 text-white p-2"><Icon className="h-5 w-5" /></div>
                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
