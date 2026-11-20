import { Check } from 'lucide-react'

const items = [
  ['Less admin, more impact', 'Save time on administrative tasks.'],
  ['A team you can count on', 'Improve team accountability.'],
  ['Know what pays off', 'Understand project profitability.'],
  ['Bill with confidence', 'Track billable hours accurately.'],
  ['Decisions, not guesswork', 'Make smarter business decisions.'],
  ['Find your focus', 'Improve productivity and focus.'],
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 lg:py-24 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 lg:mb-14">
          <span className="text-[11px] font-bold text-primary-600 tracking-wide uppercase mb-3 block">MAKE SPACE FOR YOUR BEST WORK</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#192852] tracking-tight leading-tight max-w-3xl">Less time managing time.<br />More time making progress.</h2>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <article className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-[#192852]">A week well spent.</h3>
            <p className="text-[10px] text-slate-500 uppercase mt-2 mb-8">YOUR TIMESHEET&nbsp; / &nbsp;JUN 10–16</p>
            <div className="grid grid-cols-[1.8fr_repeat(5,1fr)] gap-y-0 text-[11px] text-slate-500">
              <div className="py-3 text-[9px] font-semibold">PROJECT</div>{['M','T','W','T','F'].map((d,i)=><div key={i} className="py-3 text-center text-[9px] font-semibold">{d}</div>)}
              {[
                ['Website redesign','3:30','2:00','4:00','2:50','2:00'],
                ['Brand strategy','2:00','3:00','1:30','2:00','2:15'],
                ['Mobile app','1:00','2:00','1:30','1:15','1:50'],
              ].map(row=><div key={row[0]} className="col-span-6 grid grid-cols-[1.8fr_repeat(5,1fr)] border-t border-slate-100 py-3"><b className="font-medium text-[#192852]">{row[0]}</b>{row.slice(1).map((v,i)=><span key={i} className="text-center">{v}</span>)}</div>)}
            </div>
            <div className="mt-5 rounded-xl bg-[#efedff] px-4 py-3 flex items-center gap-8"><b className="text-xl text-primary-600">32h 40m</b><span className="text-[10px] text-primary-600">Every hour, accounted for.</span></div>
          </article>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-9">
            {items.map(([title,desc])=><div key={title} className="flex items-start gap-3"><Check size={16} className="text-primary-500 mt-0.5 shrink-0" strokeWidth={3}/><div><h3 className="text-sm font-bold text-[#192852]">{title}</h3><p className="text-sm text-slate-500 mt-2">{desc}</p></div></div>)}
          </div>
        </div>
        <p className="text-[10px] text-slate-400 mt-7">Illustrative product data.</p>
      </div>
    </section>
  )
}
