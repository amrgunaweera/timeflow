import { Check } from 'lucide-react'

const items = [
  ['Less admin, more impact', 'Save time on administrative tasks and focus on what matters most.'],
  ['A team you can count on', 'Improve team accountability and workload visibility.'],
  ['Know what pays off', 'Understand project profitability with clear financial insights.'],
  ['Bill with confidence', 'Track billable hours accurately and invoice with precision.'],
  ['Decisions, not guesswork', 'Make smarter business decisions backed by real data.'],
  ['Find your focus', 'Improve productivity and eliminate distractions.'],
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 sm:py-20 lg:py-24 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 sm:mb-12 lg:mb-14">
          <span className="text-xs font-bold text-primary-600 tracking-wider uppercase mb-2.5 sm:mb-3 block">
            MAKE SPACE FOR YOUR BEST WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#192852] tracking-tight leading-tight max-w-3xl">
            Less time managing time.<br />More time making progress.
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
          {/* Left: Timesheet Card */}
          <article className="lg:col-span-5 bg-white rounded-2xl p-4 sm:p-7 border border-gray-200/80 shadow-sm overflow-hidden">
            <h3 className="text-lg sm:text-xl font-bold text-[#192852]">A week well spent.</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1 mb-5 sm:mb-6">YOUR TIMESHEET&nbsp; / &nbsp;JUN 10–16</p>
            
            {/* Scrollable on ultra-narrow screens */}
            <div className="overflow-x-auto -mx-1 px-1">
              <div className="min-w-[270px]">
                <div className="grid grid-cols-[1.6fr_repeat(5,1fr)] gap-y-0 text-[11px] text-gray-500">
                  <div className="py-2 text-[9px] font-semibold text-gray-400 uppercase">Project</div>
                  {['M','T','W','T','F'].map((d,i) => (
                    <div key={i} className="py-2 text-center text-[9px] font-semibold text-gray-400 uppercase">{d}</div>
                  ))}
                  {[
                    ['Website redesign','3:30','2:00','4:00','2:50','2:00'],
                    ['Brand strategy','2:00','3:00','1:30','2:00','2:15'],
                    ['Mobile app','1:00','2:00','1:30','1:15','1:50'],
                  ].map((row) => (
                    <div key={row[0]} className="col-span-6 grid grid-cols-[1.6fr_repeat(5,1fr)] border-t border-gray-100 py-2.5 sm:py-3">
                      <span className="font-semibold text-[#192852] text-xs truncate pr-1">{row[0]}</span>
                      {row.slice(1).map((v,i) => (
                        <span key={i} className="text-center text-xs text-gray-600">{v}</span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 rounded-xl bg-primary-50 px-3.5 sm:px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
              <span className="text-lg sm:text-xl font-extrabold text-primary-600">32h 40m</span>
              <span className="text-[11px] sm:text-xs text-primary-600 font-medium">Every hour, accounted for.</span>
            </div>
          </article>

          {/* Right: 6 Benefits Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-10 gap-y-6 sm:gap-y-9">
            {items.map(([title, desc]) => (
              <div key={title} className="flex items-start gap-3 sm:gap-3.5">
                <div className="w-5 h-5 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#192852]">{title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-1.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[10px] sm:text-[11px] text-gray-400 mt-6 sm:mt-8">Illustrative product data.</p>
      </div>
    </section>
  )
}
