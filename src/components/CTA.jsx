import { ArrowRight, Star } from 'lucide-react'

export default function CTA() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Launch a 3D landing in minutes</h3>
            <p className="mt-4 text-gray-600">Use our prebuilt sections and interactive hero to deliver a premium, futuristic impression without heavy lifting.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-white font-medium hover:bg-gray-800">
                Start Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-gray-900 ring-1 ring-black/10 hover:ring-black/20">
                Book a Demo
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-400/30 to-fuchsia-400/30 blur-2xl" />
            <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4">
                <p className="text-gray-900 text-lg font-medium">“This 3D hero boosted our engagement by 3x. The visuals feel truly next‑gen.”</p>
                <footer className="mt-3 text-sm text-gray-600">Avery Chen, Product Lead</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
