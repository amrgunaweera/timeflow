export default function Footer() {
  const footerSections = [
    {
      title: 'Product',
      links: ['Time tracking', 'Projects', 'Team management', 'Reports', 'Pricing'],
    },
    {
      title: 'Solutions',
      links: ['Freelancers', 'Agencies', 'Remote teams', 'Consultants'],
    },
    {
      title: 'Resources',
      links: ['Help center', 'Guides', 'Templates', 'Product updates'],
    },
    {
      title: 'Company',
      links: ['About us', 'Contact', 'Careers'],
    },
  ]

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 pb-12 border-b border-gray-100">
          {/* Logo & Description */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-primary-600/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#192852]">Timeflow</span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              A little structure. A lot more flow.<br/>Time tracking for work that matters.
            </p>
            <a className="text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors" href="mailto:hello@timeflow.com">
              hello@timeflow.com
            </a>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1 space-y-3">
              <h4 className="text-xs font-bold text-[#192852] uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs sm:text-sm text-gray-500 hover:text-primary-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 TimeFlow. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
