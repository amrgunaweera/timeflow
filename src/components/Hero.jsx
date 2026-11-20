import { Check } from 'lucide-react'
import DashboardPreview from './DashboardPreview'

export default function Hero() {
  return (
    <section className="hero-section pt-28 pb-8 lg:pt-36 lg:pb-8 bg-gradient-to-b from-indigo-50/30 via-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badge */}
        <div className="flex justify-start mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200/60 text-primary-700 text-xs font-semibold tracking-wide shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-600 animate-pulse"></span>
            <span>NEW</span>
            <span className="text-primary-300">•</span>
            <span>A clearer view of your workday</span>
          </div>
        </div>

        {/* Split Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 lg:mb-16">
          {/* Left: Big Bold Headline */}
          <div className="lg:col-span-7">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-950 tracking-tight leading-[1.06]">
              Make every<br />
              <span className="text-gray-900">hour count.</span>
            </h1>
          </div>

          {/* Right: Paragraph + CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-end space-y-5">
            <p className="text-sm font-bold text-primary-600 uppercase tracking-wider hidden lg:block">
              YOUR TIME. YOUR MOMENTUM.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Track time effortlessly, manage projects smarter, and understand where your team&apos;s productivity goes. Everything you need to stay focused and in control.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#cta"
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-primary-600/25 hover:shadow-primary-600/35 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Tracking for Free</span>
              </a>

              <a
                href="#how-it-works"
                className="bg-white hover:bg-gray-50 text-gray-800 font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl border border-gray-200 shadow-2xs hover:border-gray-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Features</span>
              </a>
            </div>

            <p className="text-xs text-gray-400 flex items-center gap-2">
              <span>No credit card required</span>
              <span>•</span>
              <span>Cancel anytime</span>
            </p>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="w-full">
          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}
