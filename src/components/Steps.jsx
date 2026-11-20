import { Play, CheckCircle2 } from 'lucide-react'

export default function Steps() {
  const steps = [
    {
      num: '01',
      badgeStyle: 'bg-primary-600 text-white shadow-md shadow-primary-600/25',
      title: 'Start Your Timer',
      desc: 'Select a project and start tracking your working hours.',
      preview: (
        <div className="bg-white rounded-xl p-4 border border-gray-200/80 shadow-2xs space-y-2 mt-6">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-[#192852]">Landing Page Design</span>
            <span className="text-primary-600 font-mono font-bold">01:42:18</span>
          </div>
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[11px] text-gray-400">Tracking actively...</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center">
              <Play size={10} fill="currentColor" />
            </div>
          </div>
        </div>
      ),
    },
    {
      num: '02',
      badgeStyle: 'bg-primary-100 text-primary-700',
      title: 'Manage Your Work',
      desc: "Organize tasks, manage projects, and monitor your team's activities.",
      preview: (
        <div className="bg-white rounded-xl p-4 border border-gray-200/80 shadow-2xs space-y-2.5 mt-6">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-[#192852]">Sprint 4 Milestones</span>
            <span className="bg-primary-50 text-primary-700 text-[10px] font-bold px-2 py-0.5 rounded-full">In Progress</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div className="bg-primary-600 h-full rounded-full" style={{ width: '75%' }}></div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-gray-400">
            <span>Client: Acme Studio</span>
            <span>75% done</span>
          </div>
        </div>
      ),
    },
    {
      num: '03',
      badgeStyle: 'bg-primary-100 text-primary-700',
      title: 'Understand Your Progress',
      desc: 'Generate reports and discover valuable insights into your productivity.',
      preview: (
        <div className="bg-white rounded-xl p-4 border border-gray-200/80 shadow-2xs space-y-2 mt-6">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-[#192852]">Monthly Client Invoice</span>
            <span className="text-emerald-600 font-extrabold">$15,450.00</span>
          </div>
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
              <CheckCircle2 size={13} className="text-emerald-500" />
              <span>Ready to send</span>
            </div>
            <span className="text-[10px] font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-md">
              PDF &amp; CSV
            </span>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="how-it-works" className="py-20 lg:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-primary-600 tracking-wider uppercase mb-3 block">
              A SIMPLE RHYTHM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#192852] tracking-tight leading-tight">
              From tracking to insights<br />in three simple steps.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
              Less setup. More momentum.
            </p>
          </div>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#FAFAFC] rounded-2xl p-7 border border-gray-200/80 hover:border-primary-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className={`w-11 h-11 rounded-full ${step.badgeStyle} flex items-center justify-center font-bold text-sm mb-6`}>
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-[#192852] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>

              {step.preview}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
