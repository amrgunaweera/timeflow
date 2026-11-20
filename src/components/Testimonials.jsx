export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "We used to piece together hours at the end of the week. Now it's just part of how we work. Invoicing feels a lot less like guesswork.",
      name: 'Maya Chen',
      role: 'Founder · Layers Studio',
      avatar: 'MC',
      color: 'bg-primary-600',
      bg: 'bg-[#eeecff] border-indigo-100/60',
    },
    {
      quote:
        "The project view helps us catch a busy week before it becomes an overloaded team. It's clear enough that everyone actually uses it.",
      name: 'Daniel Brooks',
      role: 'Operations Lead · Quotient',
      avatar: 'DB',
      color: 'bg-indigo-600',
      bg: 'bg-white border-gray-200/80',
    },
    {
      quote:
        "I finally know how long the small things take. That has made my estimates more realistic—and made it easier to switch off at the end of the day.",
      name: 'Sofia Martinez',
      role: 'Independent Brand Designer',
      avatar: 'SM',
      color: 'bg-emerald-600',
      bg: 'bg-white border-gray-200/80',
    },
  ]

  return (
    <section id="testimonials" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-14 max-w-2xl">
          <span className="text-xs font-bold text-primary-600 tracking-wider uppercase mb-3 block">
            LESS GUESSWORK. MORE GOOD WORK.
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#192852] tracking-tight leading-tight">
            Teams love having their<br />time under control.
          </h2>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`${t.bg} rounded-2xl p-7 border flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow`}
            >
              <div>
                <p className="text-base text-gray-700 leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100/80">
                <div className={`w-10 h-10 rounded-xl ${t.color} text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#192852] leading-tight">{t.name}</h4>
                  <p className="text-xs text-gray-500 leading-tight mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
