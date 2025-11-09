import Spline from '@splinetool/react-spline'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function NewHero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Non‑blocking gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white via-white/10" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-black/5 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-500" /> AI voice agent aura animation
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Autonomous AI marketing that runs itself
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Agents analyze, decide, and act across every channel — continuously learning to maximize ROI with minimal human input.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#overview" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-white font-medium hover:bg-gray-800">
              See how it works
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-gray-900 ring-1 ring-black/10 hover:ring-black/20">
              Start free trial
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
