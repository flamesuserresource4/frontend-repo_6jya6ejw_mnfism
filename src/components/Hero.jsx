import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white/0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white via-white/10" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-black/5 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500" />
            Live 3D — Interactive Hero Experience
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Design the future in stunning 3D
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            A dynamic, interactive experience with futuristic lighting, iridescent spheres, and a central cubic structure. Built for modern tech brands.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-white font-medium hover:bg-gray-800">
              Explore Features
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-gray-900 ring-1 ring-black/10 hover:ring-black/20">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
