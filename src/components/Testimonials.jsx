import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "We used to piece together hours at the end of the week. Now it’s just part of how we work. Invoicing feels a lot less like guesswork.",
      name: 'Maya Chen',
      role: 'Founder · Layers Studio',
      avatar: 'SC',
      color: 'bg-primary-600',
    },
    {
      quote:
        "The project view helps us catch a busy week before it becomes an overloaded team. It’s clear enough that everyone actually uses it.",
      name: 'Daniel Brooks',
      role: 'Operations Lead · Quotient',
      avatar: 'MJ',
      color: 'bg-indigo-600',
    },
    {
      quote:
        "I finally know how long the small things take. That has made my estimates more realistic—and made it easier to switch off at the end of the day.",
      name: 'Sofia Martinez',
      role: 'Independent Brand Designer',
      avatar: 'ER',
      color: 'bg-emerald-600',
    },
  ]

  return (
    <section id="testimonials" className="testimonials-section py-20 lg:py-28 bg-[#FCFCFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-16 max-w-2xl">
          <span className="text-xs font-bold text-primary-600 tracking-wider uppercase mb-3 block">
            LESS GUESSWORK. MORE GOOD WORK.
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
            Teams love having their<br />time under control.
          </h2>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-primary-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed not-italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
                <div className={`w-10 h-10 rounded-2xl ${t.color} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-950 leading-tight">{t.name}</h4>
                  <p className="text-xs text-gray-400 leading-tight mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
