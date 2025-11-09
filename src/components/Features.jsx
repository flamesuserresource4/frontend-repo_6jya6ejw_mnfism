import { Zap, Shield, Sparkles, Cpu } from 'lucide-react'

const items = [
  {
    icon: Zap,
    title: 'Real‑time Interaction',
    desc: 'Fluid 60fps interactions powered by WebGL and optimized assets.',
  },
  {
    icon: Shield,
    title: 'Enterprise‑grade',
    desc: 'Built with accessibility, performance, and security in mind.',
  },
  {
    icon: Sparkles,
    title: 'Polished Visuals',
    desc: 'Iridescent lighting, soft glows, and subtle gradients throughout.',
  },
  {
    icon: Cpu,
    title: 'Developer Friendly',
    desc: 'Clean architecture, React components, and easy customization.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need for a 3D brand moment</h2>
          <p className="mt-3 text-gray-600">Drop‑in components and a live 3D hero let you launch in minutes.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 text-gray-900 ring-1 ring-black/5">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
