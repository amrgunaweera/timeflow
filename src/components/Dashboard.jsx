import { useState, useEffect } from 'react'
import {
  Clock,
  Play,
  Pause,
  ChevronDown,
  LayoutDashboard,
  Timer,
  FolderKanban,
  Users,
  BarChart3,
  CheckCircle2,
  Check,
  Search,
  Bell,
  ArrowUpRight
} from 'lucide-react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('timesheets')
  const [isPlaying, setIsPlaying] = useState(true)
  const [seconds, setSeconds] = useState(6138)

  useEffect(() => {
    let interval = null
    if (isPlaying) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const formatTimer = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600)
    const mins = Math.floor((totalSeconds % 3600) / 60)
    const secs = totalSeconds % 60
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const days = [
    { name: 'Mon', billable: 68, nonBillable: 14, hrs: '7.2h' },
    { name: 'Tue', billable: 88, nonBillable: 12, hrs: '8.4h' },
    { name: 'Wed', billable: 60, nonBillable: 18, hrs: '6.5h' },
    { name: 'Thu', billable: 94, nonBillable: 16, hrs: '9.1h' },
    { name: 'Fri', billable: 82, nonBillable: 10, hrs: '7.8h' },
    { name: 'Sat', billable: 28, nonBillable: 6, hrs: '2.8h' },
    { name: 'Sun', billable: 42, nonBillable: 8, hrs: '4.2h' },
  ]

  const categories = [
    { name: 'Website redesign', hrs: '14h 20m', pct: 75, color: 'bg-primary-600' },
    { name: 'Brand strategy', hrs: '10h 45m', pct: 55, color: 'bg-indigo-500' },
    { name: 'Mobile app', hrs: '7h 35m', pct: 39, color: 'bg-violet-400' },
  ]

  const recentActivities = [
    { task: 'Homepage exploration', project: 'Website redesign', time: '02:15:00', status: 'Billable' },
    { task: 'Weekly planning', project: 'Internal', time: '00:45:00', status: 'Billable' },
  ]

  const team = [
    { name: 'Sarah C.', hrs: '38.5h', color: 'bg-primary-600' },
    { name: 'Marcus J.', hrs: '35.0h', color: 'bg-indigo-600' },
    { name: 'Emily R.', hrs: '41.2h', color: 'bg-emerald-600' },
    { name: 'David K.', hrs: '29.0h', color: 'bg-amber-600' },
  ]

  const bottomTabs = ['Summary', 'Detailed', 'Weekly', 'Reports', 'Billing']

  return (
    <section id="dashboard" className="py-24 lg:py-28 bg-[#192854] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-primary-400 tracking-wider uppercase mb-3 block">
              THE BIG PICTURE. EVERY LITTLE DETAIL.
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Your entire workflow.<br />One simple dashboard.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Know what&apos;s moving. See what matters. Keep your team in flow, without the follow-ups.
            </p>
          </div>
        </div>

        {/* Tab Pills */}
        <div className="flex items-center gap-2 mb-8 bg-white/10 p-1 rounded-xl w-fit border border-white/15 backdrop-blur-md">
          {[
            { id: 'projects', label: 'Overview' },
            { id: 'timesheets', label: 'Timesheets' },
            { id: 'reports', label: 'Reports' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Big White Dashboard Mockup Window */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 mb-14 text-gray-900 overflow-hidden">
          {/* Top Window Bar inside card */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-100 bg-white">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              <span className="ml-3 text-xs font-medium text-gray-400 hidden sm:inline">timeflow.app/workspace/overview</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-primary-600 bg-primary-50 font-medium px-2.5 py-1 rounded-lg hidden sm:inline">
                Synced with Jira &amp; Slack
              </span>
            </div>
          </div>

          {/* Main Workspace Area */}
          <div className="flex flex-col lg:flex-row bg-[#FAFAFC]">
            {/* Sidebar */}
            <aside className="hidden lg:flex w-52 flex-col justify-between border-r border-gray-100 bg-white p-4">
              <div>
                <div className="flex items-center gap-2.5 px-2 py-2 mb-6">
                  <div className="w-7 h-7 rounded-lg bg-primary-600 flex items-center justify-center text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#192852] leading-tight">Timeflow</p>
                    <p className="text-[10px] text-gray-400 leading-tight">Studio workspace</p>
                  </div>
                </div>

                <nav className="space-y-1">
                  {[
                    { name: 'Overview', icon: LayoutDashboard, active: true },
                    { name: 'Time tracker', icon: Timer, active: false },
                    { name: 'Projects', icon: FolderKanban, active: false },
                    { name: 'Team', icon: Users, active: false },
                    { name: 'Reports', icon: BarChart3, active: false },
                  ].map((item) => (
                    <button
                      key={item.name}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                        item.active
                          ? 'bg-primary-50 text-primary-600 font-semibold'
                          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <item.icon size={15} />
                      <span>{item.name}</span>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-3 bg-primary-50/70 rounded-xl border border-primary-100">
                <span className="text-[11px] font-bold text-primary-700 block mb-0.5">Good work takes time.</span>
                <span className="text-[10px] text-gray-500">Make room for more.</span>
              </div>
            </aside>

            {/* Content Space */}
            <div className="flex-1 p-5 sm:p-6 lg:p-7 space-y-5">
              {/* Header inside mockup */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#192852] tracking-tight">
                    A little focus. A lot of progress.
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    Here&apos;s what your team achieved this week
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 shadow-2xs">
                    <span>This week</span>
                    <ChevronDown size={14} className="text-gray-400" />
                  </button>
                </div>
              </div>

              {/* 4 Metric Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Total Time</span>
                  <p className="text-xl sm:text-2xl font-extrabold text-[#192852] mt-1">37h 40m</p>
                  <span className="text-[11px] font-medium text-emerald-600 mt-1 block">↑ 12% vs last week</span>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Billable Time</span>
                  <p className="text-xl sm:text-2xl font-extrabold text-[#192852] mt-1">28h 15m</p>
                  <span className="text-[11px] font-medium text-primary-600 mt-1 block">82% billable</span>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Productivity</span>
                  <p className="text-xl sm:text-2xl font-extrabold text-[#192852] mt-1">74%</p>
                  <span className="text-[11px] font-medium text-emerald-600 mt-1 block">↑ 4% efficiency</span>
                </div>

                {/* Active Purple Card with Timer */}
                <div className="bg-primary-600 rounded-2xl p-4 text-white shadow-lg shadow-primary-600/30 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-primary-100 uppercase tracking-wider">
                      Active Timer
                    </span>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-7 h-7 rounded-full bg-white text-primary-600 hover:bg-primary-50 flex items-center justify-center cursor-pointer shadow-sm"
                    >
                      {isPlaying ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" />}
                    </button>
                  </div>
                  <div className="mt-2">
                    <p className="text-xl sm:text-2xl font-mono font-bold">{formatTimer(seconds)}</p>
                    <p className="text-[11px] text-primary-200 truncate mt-0.5">Landing page redesign</p>
                  </div>
                </div>
              </div>

              {/* Middle Row: Weekly Bar Chart + Categories */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Bar Chart */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-gray-200/80 shadow-2xs">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#192852]">Weekly Overview</h4>
                      <p className="text-[11px] text-gray-400">Hours tracked per day</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary-600"></span>
                        <span className="text-[11px] text-gray-600 font-medium">Billable</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary-200"></span>
                        <span className="text-[11px] text-gray-400 font-medium">Internal</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-36 flex items-end justify-between gap-2 sm:gap-3 pt-3 pb-2 px-1 border-b border-gray-100">
                    {days.map((item) => (
                      <div key={item.name} className="flex-1 flex flex-col items-center h-full justify-end group">
                        <div className="w-full max-w-[32px] flex flex-col items-center gap-0.5 relative">
                          <div
                            className="w-full bg-primary-200 rounded-t-sm"
                            style={{ height: `${item.nonBillable}px` }}
                          ></div>
                          <div
                            className="w-full bg-primary-600 rounded-b-sm group-hover:bg-primary-700 transition-colors"
                            style={{ height: `${item.billable}px` }}
                          ></div>
                        </div>
                        <span className="text-[11px] font-semibold text-gray-400 mt-2">{item.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 text-[11px] text-gray-400">
                    <span>Daily average: 7.4 hrs</span>
                    <span className="text-primary-600 font-semibold">Weekly Target: 40 hrs (94% reached)</span>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs sm:text-sm font-bold text-[#192852]">Time by Category</h4>
                      <span className="text-[11px] font-semibold text-primary-600 cursor-pointer hover:underline">Details</span>
                    </div>

                    <div className="space-y-3.5">
                      {categories.map((cat) => (
                        <div key={cat.name} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-medium text-gray-700">{cat.name}</span>
                            <span className="font-bold text-[#192852]">{cat.hrs}</span>
                          </div>
                          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${cat.color} rounded-full`}
                              style={{ width: `${cat.pct}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="text-gray-400">Client Invoiced</span>
                    <span className="font-extrabold text-[#192852]">$12,850.00</span>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Recent Entries + Team */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/80 shadow-2xs">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs sm:text-sm font-bold text-[#192852]">Recent Timesheet Entries</h4>
                    <span className="text-[11px] font-semibold text-primary-600 cursor-pointer hover:underline">View All</span>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {recentActivities.map((act) => (
                      <div key={act.task} className="py-2.5 flex items-center justify-between text-xs">
                        <div>
                          <p className="font-semibold text-gray-900">{act.task}</p>
                          <p className="text-[11px] text-gray-400">{act.project}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-semibold text-gray-800">{act.time}</span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                            {act.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/80 shadow-2xs">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs sm:text-sm font-bold text-[#192852]">Team Status</h4>
                    <span className="text-[11px] text-emerald-600 font-semibold">4 active now</span>
                  </div>
                  <div className="space-y-3">
                    {team.map((member) => (
                      <div key={member.name} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-full ${member.color} text-white font-bold text-[9px] flex items-center justify-center`}>
                            {member.name.slice(0, 2)}
                          </div>
                          <span className="font-medium text-gray-800">{member.name}</span>
                        </div>
                        <span className="font-bold text-[#192852]">{member.hrs}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Tab Bar */}
              <div className="flex items-center justify-center gap-1 bg-gray-100/80 rounded-xl p-1 border border-gray-200/60">
                {bottomTabs.map((tab, i) => (
                  <button
                    key={tab}
                    className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
                      i === 0
                        ? 'bg-white text-[#192852] shadow-xs'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Callouts below dashboard in Dark Navy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center shrink-0 mt-0.5">
              <Check size={14} strokeWidth={3} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1.5">A tool they&apos;ll actually use</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Time tracking so simple, your team will forget they&apos;re even doing it.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center shrink-0 mt-0.5">
              <Check size={14} strokeWidth={3} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1.5">Clear visibility, zero friction</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                See where time goes across projects, teams, and clients in real time.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center shrink-0 mt-0.5">
              <Check size={14} strokeWidth={3} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1.5">Built to scale with your team</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                From solo freelancers to 100+ person agencies, Timeflow grows with you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
