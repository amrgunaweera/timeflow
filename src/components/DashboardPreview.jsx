import { useState, useEffect } from 'react'
import {
  LayoutDashboard,
  Timer,
  FolderKanban,
  Users,
  BarChart3,
  Play,
  Pause,
  ChevronDown,
  Sparkles,
  Search,
  Bell,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react'

export default function DashboardPreview() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [seconds, setSeconds] = useState(6138) // 01:42:18

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

  return (
    <div className="relative mx-auto w-full rounded-2xl md:rounded-3xl bg-white shadow-[0_25px_80px_-15px_rgba(79,70,229,0.15)] border border-gray-200/90 overflow-hidden">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          <span className="ml-3 text-xs font-medium text-gray-400 hidden sm:inline">timeflow.app/workspace/overview</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-gray-50 border border-gray-200/70 rounded-lg px-2.5 py-1 text-xs text-gray-500">
            <Search size={13} className="text-gray-400" />
            <span>Search or jump to...</span>
            <kbd className="text-[10px] bg-white border border-gray-200 px-1 rounded text-gray-400 font-mono">⌘K</kbd>
          </div>
          <div className="w-7 h-7 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center relative cursor-pointer">
            <Bell size={13} />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Main Workspace Frame */}
      <div className="flex flex-col lg:flex-row bg-[#FAFAFC]">
        {/* Left App Sidebar */}
        <aside className="hidden lg:flex w-52 flex-col justify-between border-r border-gray-100 bg-white p-4">
          <div>
            <div className="flex items-center gap-2.5 px-2 py-2 mb-6">
              <div className="w-7 h-7 rounded-lg bg-primary-600 flex items-center justify-center text-white shadow-xs">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    item.active
                      ? 'bg-primary-50 text-primary-600 font-semibold shadow-xs'
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
            <div className="flex items-center gap-1.5 text-primary-700 text-[11px] font-bold mb-1">
              <Sparkles size={13} />
              <span>Good work takes time.</span>
            </div>
            <p className="text-[11px] text-gray-500 leading-snug">Make room for more.</p>
          </div>
        </aside>

        {/* Center Workspace Content */}
        <div className="flex-1 p-5 sm:p-6 lg:p-7 space-y-5">
          {/* Dashboard Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#192852] tracking-tight">
                A little focus. A lot of progress.
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Here&apos;s how your team is spending their time today.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-2xs hover:bg-gray-50">
                <span>This week</span>
                <ChevronDown size={14} className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* 4 Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {/* Metric 1 */}
            <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs">
              <span className="text-[11px] font-semibold text-gray-400 tracking-wider">Tracked this week</span>
              <p className="text-xl sm:text-2xl font-extrabold text-[#192852] mt-1">32h 40m</p>
              <div className="flex items-center gap-1 mt-1 text-[11px] font-medium text-emerald-600">
                <ArrowUpRight size={12} />
                <span>+12% vs last week</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs">
              <span className="text-[11px] font-semibold text-gray-400 tracking-wider">Billable hours</span>
              <p className="text-xl sm:text-2xl font-extrabold text-[#192852] mt-1">26h 15m</p>
              <div className="flex items-center gap-1 mt-1 text-[11px] font-medium text-primary-600">
                <span>82% of total hours</span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs">
              <span className="text-[11px] font-semibold text-gray-400 tracking-wider">Project progress</span>
              <p className="text-xl sm:text-2xl font-extrabold text-[#192852] mt-1">74%</p>
              <div className="flex items-center gap-1 mt-1 text-[11px] font-medium text-emerald-600">
                <ArrowUpRight size={12} />
                <span>+4% this week</span>
              </div>
            </div>

            {/* Metric 4: Solid Purple Timer Card */}
            <div className="bg-primary-600 rounded-2xl p-4 text-white shadow-lg shadow-primary-600/25 relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-primary-100 uppercase tracking-wider">
                  ● TIMER RUNNING
                </span>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-7 h-7 rounded-full bg-white text-primary-600 hover:bg-primary-50 flex items-center justify-center shadow-sm transition-all cursor-pointer"
                  title={isPlaying ? 'Pause' : 'Resume'}
                >
                  {isPlaying ? <span className="block w-2.5 h-2.5 rounded-[2px] bg-primary-600" /> : <Play size={12} fill="currentColor" />}
                </button>
              </div>
              <div className="mt-2">
                <p className="text-2xl sm:text-3xl font-extrabold tracking-tight">{formatTimer(seconds)}</p>
                <div className="flex items-center justify-between mt-1 text-[10px] text-primary-100">
                  <span>Website redesign · Design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row: Weekly Overview Chart + Category Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Weekly Bar Chart */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-gray-200/80 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#192852]">Your week, at a glance</h4>
                  <p className="text-[11px] text-gray-400">Tracked hours</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-600"></span>
                    <span className="text-[11px] text-gray-500 font-medium">Billable</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-200"></span>
                    <span className="text-[11px] text-gray-500 font-medium">Non-billable</span>
                  </div>
                </div>
              </div>

              {/* Stacked Pillars */}
              <div className="h-40 flex items-end justify-between gap-2 sm:gap-3.5 pt-4 pb-2 px-1 border-b border-gray-100">
                {days.map((item) => (
                  <div key={item.name} className="flex-1 flex flex-col items-center h-full justify-end group">
                    <div className="w-full max-w-[34px] flex flex-col items-center gap-0.5 relative">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded shadow pointer-events-none whitespace-nowrap z-20">
                        {item.hrs}
                      </div>
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
                <span className="text-primary-600 font-semibold">Weekly Target: 40 hrs (94% achieved)</span>
              </div>
            </div>

            {/* Time by Category Progress */}
            <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs sm:text-sm font-bold text-[#192852]">Where your time goes</h4>
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

          {/* Bottom Row inside Dashboard: Recent Activity + Team */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Recent Activity List */}
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

            {/* Team Members Status */}
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
        </div>
      </div>

      {/* Floating Badge on Bottom Right */}
      <div className="hidden sm:flex absolute -bottom-4 right-8 bg-white border border-gray-200/90 rounded-full px-4 py-2 shadow-xl items-center gap-2 text-xs text-gray-800">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="font-semibold">Synced with Jira &amp; Slack</span>
        <span className="text-gray-400">• Just now</span>
        <CheckCircle2 size={15} className="text-primary-600 ml-1" />
      </div>
    </div>
  )
}
