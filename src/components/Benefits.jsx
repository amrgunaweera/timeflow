import { Check, ArrowRight } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    { title: 'Automated idle detection', desc: 'Pauses timer when you step away so your client numbers stay 100% truthful.' },
    { title: 'Client portal access', desc: 'Share live, read-only project timesheets with clients without exporting PDFs.' },
    { title: 'Custom billing rates', desc: 'Set unique hourly rates per team member, project milestone, or task type.' },
    { title: 'Billable and non-billable tags', desc: 'Instantly isolate client billable time from internal administration.' },
    { title: 'Integrations that just work', desc: 'Native two-way synchronization with Jira, Slack, Linear, and GitHub.' },
    { title: 'Enterprise-grade security', desc: 'SOC2 Type II certified with granular role-based permission controls.' },
  ]

  const weeklySchedule = [
    { project: 'Website Redesign', mon: '4.5h', tue: '5.0h', wed: '4.0h', thu: '6.0h', fri: '3.5h', total: '23.0h' },
    { project: 'Mobile App API', mon: '2.5h', tue: '3.0h', wed: '3.5h', thu: '2.0h', fri: '4.0h', total: '15.0h' },
    { project: 'Client Reviews', mon: '1.0h', tue: '0.5h', wed: '1.0h', thu: '0.5h', fri: '0.5h', total: '3.5h' },
  ]

  return (
    <section id="benefits" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Realistic Timesheet Card */}
          <div className="lg:col-span-6 bg-[#FAFAFC] rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm">
            <div className="flex items-center justify-between pb-5 mb-5 border-b border-gray-200/80">
              <div>
                <h4 className="text-base font-bold text-gray-950">A typical work week</h4>
                <p className="text-xs text-gray-400">40 hours tracked • Oct 14 - Oct 18</p>
              </div>
              <span className="text-xs font-bold text-primary-700 bg-primary-50 px-3 py-1 rounded-full border border-primary-200/60">
                Verified Timesheet
              </span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-100">
                    <th className="pb-3 font-semibold">Project</th>
                    <th className="pb-3 text-center">Mon</th>
                    <th className="pb-3 text-center">Tue</th>
                    <th className="pb-3 text-center">Wed</th>
                    <th className="pb-3 text-center">Thu</th>
                    <th className="pb-3 text-center">Fri</th>
                    <th className="pb-3 text-right font-bold text-gray-800">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {weeklySchedule.map((row) => (
                    <tr key={row.project} className="hover:bg-white transition-colors">
                      <td className="py-3 font-medium text-gray-900 whitespace-nowrap">{row.project}</td>
                      <td className="py-3 text-center text-gray-500">{row.mon}</td>
                      <td className="py-3 text-center text-gray-500">{row.tue}</td>
                      <td className="py-3 text-center text-gray-500">{row.wed}</td>
                      <td className="py-3 text-center text-gray-500">{row.thu}</td>
                      <td className="py-3 text-center text-gray-500">{row.fri}</td>
                      <td className="py-3 text-right font-bold text-primary-600">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary Banner */}
            <div className="mt-6 pt-5 border-t border-gray-200/80 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-gray-400 block font-medium">Weekly Total</span>
                <span className="text-lg font-extrabold text-gray-950">41.5 hrs tracked</span>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-primary-700 bg-primary-100/70 px-3 py-1.5 rounded-full border border-primary-200">
                  92% Billable ratio ($4,850)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-6 space-y-7">
            <div>
              <span className="text-xs font-bold text-primary-600 tracking-wider uppercase mb-3 block">
                TIME SAVINGS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
                Less time managing time.<br />
                More time making progress.
              </h2>
              <p className="text-base text-gray-500 mt-4 leading-relaxed">
                Say goodbye to Friday afternoon timesheet guessing games. Timeflow does the heavy lifting so your agency captures every billable minute without friction.
              </p>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900">{item.title}</h4>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md shadow-primary-600/25 transition-all duration-200 cursor-pointer"
              >
                <span>Start free trial</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
