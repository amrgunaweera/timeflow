export default function Stats() {
  const logos = [
    {
      name: 'Layers',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
          <polygon points="12 2 2 7 12 12 22 7 12 2}" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      font: 'font-semibold tracking-wider',
    },
    {
      name: 'Quotient',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
          <circle cx="12" cy="12" r="9" />
          <line x1="7" y1="17" x2="17" y2="7" />
        </svg>
      ),
      font: 'font-extrabold tracking-wide',
    },
    {
      name: 'circolles',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
          <circle cx="9" cy="12" r="6" />
          <circle cx="15" cy="12" r="6" />
        </svg>
      ),
      font: 'font-bold tracking-normal',
    },
    {
      name: 'Sisyphus',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      ),
      font: 'font-bold tracking-tight',
    },
    {
      name: 'Catalog',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
      ),
      font: 'font-bold tracking-wider',
    },
  ]

  const stats = [
    { value: '10,000+', label: 'Professionals' },
    { value: '500,000+', label: 'Hours tracked' },
    { value: '2,500+', label: 'Projects managed' },
  ]

  return (
    <section className="py-14 sm:py-16 border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logos Bar */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-75 mb-14">
            {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors">
              {logo.icon}
              <span className={`text-base sm:text-lg ${logo.font}`}>{logo.name}</span>
            </div>
            ))}
          </div>

          {/* 3 Metric Counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pt-8 border-t border-gray-100">
            {stats.map((stat, i) => (
              <div
                key={stat.value}
                className={`text-center sm:text-left ${i > 0 ? 'md:border-l md:border-gray-100 md:pl-10' : ''
                  }`}
              >
                <p className="text-4xl sm:text-5xl font-extrabold text-[#192852] tracking-tight mb-1.5">
                  {stat.value}
                </p>
                <p className="text-base font-semibold text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}
