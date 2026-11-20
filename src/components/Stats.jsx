export default function Stats() {
  const logos = [
    { name: 'Layers', font: 'font-semibold tracking-wider' },
    { name: 'Quotient', font: 'font-extrabold tracking-wide' },
    { name: 'circolles', font: 'font-bold tracking-normal' },
    { name: 'Sisyphus', font: 'font-bold tracking-tight' },
    { name: 'Catalog', font: 'font-bold tracking-wider' },
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
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-20 opacity-50 mb-14">
          {logos.map((logo) => (
            <span key={logo.name} className={`text-lg sm:text-xl text-gray-500 ${logo.font}`}>
              {logo.name}
            </span>
          ))}
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
