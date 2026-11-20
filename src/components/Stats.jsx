export default function Stats() {
  const logos = [
    { name: 'Layers', font: 'font-semibold tracking-wider text-gray-700' },
    { name: 'Quotient', font: 'font-extrabold tracking-wide text-gray-800' },
    { name: 'circolles', font: 'font-bold tracking-normal text-gray-700' },
    { name: 'Sisyphus', font: 'font-bold tracking-tight text-gray-800' },
    { name: 'Catalog', font: 'font-bold tracking-wider text-gray-700' },
  ]

  const stats = [
    { value: '10,000+', label: 'Professionals', sub: '' },
    { value: '500,000+', label: 'Hours tracked', sub: '' },
    { value: '2,500+', label: 'Projects managed', sub: '' },
  ]

  return (
    <section className="py-14 sm:py-18 border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logos Bar */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Trusted by teams that value their time.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-20 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {logos.map((logo) => (
              <span key={logo.name} className={`text-lg sm:text-xl ${logo.font} hover:text-primary-600 transition-colors`}>
                {logo.name}
              </span>
            ))}
          </div>
        </div>

        {/* 3 Metric Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pt-8 border-t border-gray-100">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className={`text-center sm:text-left ${
                i > 0 ? 'md:border-l md:border-gray-100 md:pl-10' : ''
              }`}
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-gray-950 tracking-tight mb-1.5">
                {stat.value}
              </p>
              <p className="text-base font-bold text-gray-800 mb-0.5">{stat.label}</p>
              <p className="text-xs text-gray-400">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
