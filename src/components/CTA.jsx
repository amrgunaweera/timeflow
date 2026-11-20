import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="py-14 sm:py-16 lg:py-20 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl lg:rounded-3xl bg-gradient-to-r from-primary-600 via-indigo-600 to-primary-700 p-6 sm:p-12 lg:p-14 text-white shadow-2xl shadow-primary-600/25 overflow-hidden">
          {/* Subtle Decorative Shapes */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-72 h-72 bg-white/8 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-72 h-72 bg-black/8 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-3">
              <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-tight text-white">
                Ready to take control<br />of your time?
              </h2>
              <p className="text-sm sm:text-base text-primary-100 max-w-xl leading-relaxed">
                Start tracking smarter today. Discover how much more your team can achieve with TimeFlow.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3 w-full">
              <button className="bg-white hover:bg-gray-50 text-primary-700 font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer w-full text-center">
                <span>Get started for free</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-6 py-3 rounded-xl border border-white/20 transition-all duration-200 text-center cursor-pointer w-full">
                Explore Pricing ↗
              </button>

              <p className="text-[11px] text-center text-primary-200 mt-0.5">
                No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
