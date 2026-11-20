import DashboardPreview from './DashboardPreview'

export default function Hero() {
  return (
    <section className="pt-24 pb-12 sm:pt-28 lg:pt-36 lg:pb-16 bg-gradient-to-b from-indigo-50/25 via-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start mb-10 sm:mb-12 lg:mb-16">
          {/* Left: Badge + Big Bold Headline */}
          <div className="lg:col-span-7">
            {/* Top Badge */}
            <div className="mb-3 sm:mb-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold tracking-wide border border-primary-100 max-w-full">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-600 animate-pulse shrink-0"></span>
                <span className="shrink-0">NEW</span>
                <span className="text-primary-300">•</span>
                <span className="truncate">A clearer view of your workday</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-extrabold text-[#192852] tracking-tight leading-[1.08] sm:leading-[1.05]">
              Make every<br />
              hour count.
            </h1>
          </div>

          {/* Right: Paragraph + CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-end space-y-4 sm:space-y-5 lg:pt-8">
            <p className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed">
              Track time effortlessly, manage projects smarter, and understand where your team&apos;s productivity goes. Everything you need to stay focused and in control.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#cta"
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-primary-600/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>Start Tracking for Free</span>
              </a>

              <a
                href="#how-it-works"
                className="bg-white hover:bg-gray-50 text-gray-700 font-semibold text-sm px-5 py-3.5 rounded-xl border border-gray-200 shadow-2xs hover:border-gray-300 transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>Explore Features</span>
              </a>
            </div>

            <p className="text-xs text-gray-400 flex items-center gap-1.5">
              <span>✓</span>
              <span>No credit card required. Get started in minutes.</span>
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
