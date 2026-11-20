import { useState, useEffect } from 'react'
import { Clock, FolderKanban, Users, BarChart3, Pause, Play, CheckCircle2 } from 'lucide-react'

export default function Features() {
  const [timerRunning, setTimerRunning] = useState(true)
  const [seconds, setSeconds] = useState(4998) // 01:23:18

  useEffect(() => {
    let interval = null
    if (timerRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [timerRunning])

  const formatTimer = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600)
    const mins = Math.floor((totalSeconds % 3600) / 60)
    const secs = totalSeconds % 60
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const teamMembers = [
    { name: 'Sarah Chen', hrs: 38, capacity: 40, avatar: 'SC', color: 'bg-primary-600' },
    { name: 'Marcus Johnson', hrs: 35, capacity: 40, avatar: 'MJ', color: 'bg-indigo-600' },
    { name: 'Emily Rodriguez', hrs: 42, capacity: 40, avatar: 'ER', color: 'bg-emerald-600' },
  ]

  return (
    <section id="features" className="py-20 lg:py-24 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-primary-600 tracking-wider uppercase mb-3 block">
              BUILT FOR THE WAY YOU WORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#192852] tracking-tight">
              Everything you need<br />to work smarter.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
              Powerful tools to help you understand your time, manage your projects, and get more done.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Smart Time Tracking (7 cols, light lavender) */}
          <div className="lg:col-span-7 bg-[#eeecff] rounded-2xl p-7 border border-indigo-100/60 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-primary-600 tracking-wider uppercase mb-3 block">01 /</span>
              <h3 className="text-xl font-bold text-[#192852] mb-2">Smart Time Tracking</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-lg">
                Track working hours with a simple timer or manual time entries. Never lose track of billable hours.
              </p>
            </div>

            {/* Interactive Live Timer Widget */}
            <div className="mt-8 bg-white rounded-xl p-4 border border-indigo-100 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-semibold text-gray-700">Currently Tracking</span>
                </div>
                <span className="text-[11px] font-medium text-primary-600 bg-primary-50 px-2.5 py-0.5 rounded-full">
                  Client: Acme Studio
                </span>
              </div>

              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 border border-gray-100">
                <div>
                  <p className="text-sm font-bold text-[#192852]">Landing Page Redesign</p>
                  <p className="text-xs text-gray-400">Design System • Sprint 4</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-base font-mono font-bold text-primary-700">
                    {formatTimer(seconds)}
                  </span>
                  <button
                    onClick={() => setTimerRunning(!timerRunning)}
                    className="w-8 h-8 rounded-full bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    {timerRunning ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Project Management (5 cols, white) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-7 border border-gray-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-primary-600 tracking-wider uppercase mb-3 block">02 /</span>
              <h3 className="text-xl font-bold text-[#192852] mb-2">Project Management</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Organize tasks, track project progress, and understand how time is spent across different projects.
              </p>
            </div>

            {/* Project Progress Widget */}
            <div className="mt-8 p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-gray-700">Active Sprint Budget</span>
                <span className="font-bold text-[#192852]">$8,400 / $10,000 (84%)</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-primary-600 h-full rounded-full transition-all duration-500" style={{ width: '84%' }}></div>
              </div>
              <div className="flex items-center justify-between pt-1 text-[11px] text-gray-500">
                <span className="flex items-center gap-1 text-emerald-600 font-medium">
                  <CheckCircle2 size={12} /> 18 of 22 tasks done
                </span>
                <span>Deadline: Oct 30</span>
              </div>
            </div>
          </div>

          {/* Card 3: Team Management (5 cols, white) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-7 border border-gray-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-primary-600 tracking-wider uppercase mb-3 block">03 /</span>
              <h3 className="text-xl font-bold text-[#192852] mb-2">Team Management</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Manage your team, monitor working hours, and get a clear overview of everyone&apos;s workload.
              </p>
            </div>

            {/* Team Capacity Widget */}
            <div className="mt-8 p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-3">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-full ${member.color} text-white font-bold text-[10px] flex items-center justify-center shrink-0`}>
                    {member.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-gray-800 truncate">{member.name}</span>
                      <span className="font-medium text-gray-600">{member.hrs}h / {member.capacity}h</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${member.color} rounded-full`}
                        style={{ width: `${(member.hrs / member.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Actionable Insights (7 cols, light grayish/slate) */}
          <div className="lg:col-span-7 bg-[#edf2f8] rounded-2xl p-7 border border-slate-200/60 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-primary-600 tracking-wider uppercase mb-3 block">04 /</span>
              <h3 className="text-xl font-bold text-[#192852] mb-2">Actionable Insights</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-lg">
                Turn tracked hours into meaningful insights with detailed reports, timesheets, and productivity analytics.
              </p>
            </div>

            {/* Insights Widget */}
            <div className="mt-8 bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-[11px] text-gray-400 uppercase font-medium">Weekly Billable Hours</span>
                  <p className="text-lg font-extrabold text-[#192852]">28h 15m</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                    +18% efficiency
                  </span>
                </div>
              </div>

              {/* Mini Sparkline Bars */}
              <div className="flex items-end justify-between gap-1.5 h-12 pt-2">
                {[45, 60, 40, 85, 75, 95, 60].map((val, idx) => (
                  <div key={idx} className="flex-1 bg-primary-100 rounded-t-sm hover:bg-primary-600 transition-colors" style={{ height: `${val}%` }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
