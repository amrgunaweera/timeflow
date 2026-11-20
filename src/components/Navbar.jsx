import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-primary-600 flex items-center justify-center text-white shadow-md shadow-primary-600/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-950">Timeflow</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7 lg:gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-950 transition-colors flex items-center gap-1">
              <span>Product</span>
              <svg width="9" height="5" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-950 transition-colors flex items-center gap-1">
              <span>Solutions</span>
              <svg width="9" height="5" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-950 transition-colors">Features</a>
            <a href="#dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-950 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-950 transition-colors flex items-center gap-1">
              <span>Resources</span>
              <svg width="9" height="5" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#cta" className="text-sm font-medium text-gray-600 hover:text-gray-950 transition-colors">Blog</a>
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#cta" className="text-sm font-semibold text-gray-700 hover:text-gray-950 transition-colors">Log in</a>
            <a
              href="#cta"
              className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-primary-600/20 hover:shadow-lg hover:shadow-primary-600/30 transition-all duration-200"
            >
              Start free trial
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 px-2 space-y-3 bg-white">
            <a href="#features" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-700 py-1">Product</a>
            <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-700 py-1">Solutions</a>
            <a href="#features" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-700 py-1">Features</a>
            <a href="#dashboard" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-700 py-1">Pricing</a>
            <a href="#testimonials" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-700 py-1">Resources</a>
            <a href="#cta" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-700 py-1">Blog</a>
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a href="#cta" onClick={() => setMobileOpen(false)} className="text-center text-sm font-semibold text-gray-700 py-2">Log in</a>
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-primary-600 text-white text-sm font-semibold py-2.5 rounded-xl shadow-md"
              >
                Start free trial
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
