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
  Settings,
  CheckCircle2,
  Zap,
  Globe,
  Shield,
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
    { name: 'Product Design', hrs: '18h 40m', pct: 78, color: 'bg-primary-500' },
    { name: 'Web Development', hrs: '12h 15m', pct: 62, color: 'bg-indigo-400' },
    { name: 'Client Alignment', hrs: '4h 30m', pct: 35, color: 'bg-violet-400' },
    { name: 'Internal Reviews', hrs: '2h 15m', pct: 18, color: 'bg-primary-300' },
  ]

  const recentActivities = [
    { task: 'Landing page redesign', project: 'Acme Studio', time: '2h 45m', status: 'Billable' },
    { task: 'Design System components', project: 'Timeflow UI', time: '3h 10m', status: 'Billable' },
    { task: 'Sprint retrospective', project: 'Internal', time: '1h 00m', status: 'Internal' },
  ]

  const team = [
    { name: 'Sarah C.', hrs: '38.5h', color: 'bg-primary-500' },
    { name: 'Marcus J.', hrs: '35.0h', color: 'bg-indigo-500' },
    { name: 'Emily R.', hrs: '41.2h', color: 'bg-emerald-500' },
    { name: 'David K.', hrs: '29.0h', color: 'bg-amber-500' },
  ]

  return (
    <section id="dashboard" className="py-24 lg:py-32 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary-600/15 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-primary-400 tracking-wider uppercase mb-3 block">
              CENTRALIZED WORKSPACE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Your entire workflow.<br />One simple dashboard.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Consolidate timers, sprint milestones, team capacity, and automated invoicing into a single synchronized command center.
            </p>
          </div>
        </div>

        {/* Tab Pills */}
        <div className="flex items-center gap-2 mb-8 bg-white/5 p-1.5 rounded-2xl w-fit border border-white/10 backdrop-blur-md">
          {[
            { id: 'projects', label: 'Projects' },
            { id: 'timesheets', label: 'Timesheets' },
            { id: 'reports', label: 'Reports' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Big Dark Dashboard Mockup Card */}
        <div className="bg-[#131B2E]/95 rounded-3xl border border-white/10 p-3 sm:p-6 shadow-2xl backdrop-blur-xl mb-16">
          {/* Top Window Bar inside dark card */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]/80"></div>
              <span className="ml-3 text-xs font-medium text-gray-400 hidden sm:inline">timeflow.app/workspace/dark-mode</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-primary-300 bg-primary-950/60 border border-primary-800/60 px-2.5 py-1 rounded-lg">
                Live Sync Active
              </span>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row bg-[#0E1626] rounded-2xl border border-white/5 overflow-hidden">
            {/* Sidebar */}
            <aside className="hidden lg:flex w-52 flex-col justify-between border-r border-white/5 bg-[#131B2E] p-4">
              <div>
                <div className="flex items-center gap-2.5 px-2 py-2 mb-6">
                  <div className="w-7 h-7 rounded-lg bg-primary-600 flex items-center justify-center text-white">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">Timeflow</p>
                    <p className="text-[10px] text-gray-400 leading-tight">Dark Workspace</p>
                  </div>
                </div>

                <nav className="space-y-1">
                  {[
                    { name: 'Overview', icon: LayoutDashboard, active: true },
                    { name: 'Timers', icon: Timer, active: false },
                    { name: 'Projects', icon: FolderKanban, active: false },
                    { name: 'Team', icon: Users, active: false },
                    { name: 'Reports', icon: BarChart3, active: false },
                    { name: 'Settings', icon: Settings, active: false },
                  ].map((item) => (
                    <button
                      key={item.name}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                        item.active
                          ? 'bg-primary-600/20 text-primary-400 font-semibold border border-primary-500/20'
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <item.icon size={15} />
                      <span>{item.name}</span>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[11px] font-bold text-primary-400 block mb-0.5">Enterprise Cloud</span>
                <span className="text-[10px] text-gray-400">SOC2 Type II Protected</span>
              </div>
            </aside>

            {/* Content Space */}
            <div className="flex-1 p-4 sm:p-6 lg:p-7 space-y-5">
              {/* Header inside mockup */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    A bit more focus. A lot of progress.
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                    Here&apos;s what your team achieved this week
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs font-semibold text-gray-200 hover:bg-white/10">
                    <span>Oct 12 - Oct 18</span>
                    <ChevronDown size={14} className="text-gray-400" />
                  </button>
                </div>
              </div>

              {/* 4 Dark Metric Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Total Tracked</span>
                  <p className="text-xl sm:text-2xl font-extrabold text-white mt-1">37h 40m</p>
                  <span className="text-[11px] font-medium text-emerald-400 mt-1 block">↑ 12% vs last week</span>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Billable Ratio</span>
                  <p className="text-xl sm:text-2xl font-extrabold text-white mt-1">28h 15m</p>
                  <span className="text-[11px] font-medium text-primary-400 mt-1 block">82% billable</span>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Productivity</span>
                  <p className="text-xl sm:text-2xl font-extrabold text-white mt-1">74%</p>
                  <span className="text-[11px] font-medium text-emerald-400 mt-1 block">↑ 4% efficiency</span>
                </div>

                {/* Active Purple Card */}
                <div className="bg-primary-600 rounded-2xl p-4 text-white shadow-lg shadow-primary-600/30 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-primary-100 uppercase tracking-wider">
                      Active Timer
                    </span>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-7 h-7 rounded-full bg-white text-primary-600 hover:bg-primary-50 flex items-center justify-center cursor-pointer"
                    >
                      {isPlaying ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" />}
                    </button>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-mono font-bold">{formatTimer(seconds)}</p>
                    <p className="text-[11px] text-primary-200 truncate mt-0.5">Mobile App Redesign</p>
                  </div>
                </div>
              </div>

              {/* Middle Row: Dark Weekly Bar Chart + Categories */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Bar Chart */}
                <div className="lg:col-span-2 bg-white/5 rounded-2xl p-5 border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Weekly Overview</h4>
                      <p className="text-[11px] text-gray-400">Hours tracked per day</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary-500"></span>
                        <span className="text-[11px] text-gray-300 font-medium">Billable</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary-900"></span>
                        <span className="text-[11px] text-gray-400 font-medium">Internal</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-40 flex items-end justify-between gap-2 sm:gap-3.5 pt-4 pb-2 px-1 border-b border-white/10">
                    {days.map((item) => (
                      <div key={item.name} className="flex-1 flex flex-col items-center h-full justify-end group">
                        <div className="w-full max-w-[34px] flex flex-col items-center gap-0.5 relative">
                          <div
                            className="w-full bg-primary-950/80 border border-primary-800/40 rounded-t-sm"
                            style={{ height: `${item.nonBillable}px` }}
                          ></div>
                          <div
                            className="w-full bg-primary-500 rounded-b-sm group-hover:bg-primary-400 transition-colors shadow-sm shadow-primary-500/50"
                            style={{ height: `${item.billable}px` }}
                          ></div>
                        </div>
                        <span className="text-[11px] font-semibold text-gray-400 mt-2">{item.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 text-[11px] text-gray-400">
                    <span>Daily average: 7.4 hrs</span>
                    <span className="text-primary-400 font-semibold">Weekly Target: 40 hrs (94% reached)</span>
                  </div>
                </div>

                {/* Dark Categories */}
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs sm:text-sm font-bold text-white">Time by Category</h4>
                      <span className="text-[11px] font-semibold text-primary-400 cursor-pointer hover:underline">Details</span>
                    </div>

                    <div className="space-y-3.5">
                      {categories.map((cat) => (
                        <div key={cat.name} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-medium text-gray-300">{cat.name}</span>
                            <span className="font-bold text-white">{cat.hrs}</span>
                          </div>
                          <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${cat.color} rounded-full`}
                              style={{ width: `${cat.pct}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-gray-400">Client Invoiced</span>
                    <span className="font-extrabold text-white">$12,850.00</span>
                  </div>
                </div>
              </div>

              {/* Bottom Row in Dark Mockup */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 bg-white/5 rounded-2xl p-4 sm:p-5 border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs sm:text-sm font-bold text-white">Recent Timesheet Entries</h4>
                    <span className="text-[11px] font-semibold text-primary-400 cursor-pointer hover:underline">View All</span>
                  </div>
                  <div className="divide-y divide-white/5">
                    {recentActivities.map((act) => (
                      <div key={act.task} className="py-2.5 flex items-center justify-between text-xs">
                        <div>
                          <p className="font-semibold text-white">{act.task}</p>
                          <p className="text-[11px] text-gray-400">{act.project}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-semibold text-gray-200">{act.time}</span>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                            act.status === 'Billable'
                              ? 'bg-emerald-950/70 text-emerald-400 border border-emerald-800/60'
                              : 'bg-white/10 text-gray-300'
                          }`}>
                            {act.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 sm:p-5 border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs sm:text-sm font-bold text-white">Team Status</h4>
                    <span className="text-[11px] text-emerald-400 font-semibold">4 active now</span>
                  </div>
                  <div className="space-y-3">
                    {team.map((member) => (
                      <div key={member.name} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-full ${member.color} text-white font-bold text-[9px] flex items-center justify-center`}>
                            {member.name.slice(0, 2)}
                          </div>
                          <span className="font-medium text-gray-300">{member.name}</span>
                        </div>
                        <span className="font-bold text-white">{member.hrs}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Callouts below dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-primary-600/20 text-primary-400 border border-primary-500/20 flex items-center justify-center shrink-0">
              <Zap size={20} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">Automated time tracking</h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Captures active windows and idle time with zero manual effort or intrusive screenshots.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <Globe size={20} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">Multi-platform sync</h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Real-time instant synchronization across macOS, Windows, Linux, iOS, and Web.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <Shield size={20} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">Client-ready invoicing</h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Turn logged billable hours directly into branded client invoices in seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
