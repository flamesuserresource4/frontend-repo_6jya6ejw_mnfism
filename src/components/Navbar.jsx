import { useState } from 'react'
import { Menu, X, Rocket } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-xl bg-white/60 backdrop-blur-md shadow-sm ring-1 ring-black/5 mt-4 px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-white">
              <Rocket size={20} />
            </div>
            <span className="font-semibold tracking-tight text-gray-900">Nova3D</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Sign in</a>
            <a href="#" className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">Get Started</a>
          </div>

          <button aria-label="Toggle menu" className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-xl bg-white/80 backdrop-blur-md shadow-sm ring-1 ring-black/5 p-4 md:hidden">
            <div className="grid gap-3 text-gray-700">
              <a href="#features" className="hover:text-gray-900">Features</a>
              <a href="#pricing" className="hover:text-gray-900">Pricing</a>
              <a href="#about" className="hover:text-gray-900">About</a>
              <a href="#" className="font-medium text-gray-900">Sign in</a>
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">Get Started</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
