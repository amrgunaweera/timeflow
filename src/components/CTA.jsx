import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl lg:rounded-4xl bg-gradient-to-r from-primary-600 via-indigo-600 to-primary-700 p-8 sm:p-14 lg:p-16 text-white shadow-2xl shadow-primary-600/30 overflow-hidden">
          {/* Subtle Decorative Shapes */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block text-xs font-bold text-primary-200 uppercase tracking-widest">
                START YOUR 14-DAY FREE TRIAL
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Ready to take control<br />of your time?
              </h2>
              <p className="text-base sm:text-lg text-primary-100 max-w-xl leading-relaxed">
                Join thousands of teams already using Timeflow to track time, manage projects, and grow their business.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <button className="bg-white hover:bg-gray-50 text-primary-700 font-bold text-base px-6 py-4 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer">
                <span>Get started for free</span>
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-6 py-3.5 rounded-xl border border-white/20 transition-all duration-200 text-center cursor-pointer">
                Schedule a demo
              </button>

              <p className="text-[11px] text-center text-primary-200 mt-1">
                No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
