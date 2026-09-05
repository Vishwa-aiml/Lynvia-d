const groups = [
  {
    title: 'Explore',
    links: ['Designers', 'Categories', 'How It Works', 'For Designers'],
  },
  {
    title: 'Company',
    links: ['About', 'Contact', 'Careers'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-cream pt-20 pb-10">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-cream/10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <span className="font-display text-3xl font-semibold tracking-tightest text-cream">LYNVIA</span>
            <p className="mt-4 text-cream/50 max-w-sm leading-relaxed">
              A premium creative-services marketplace. Discover talented
              creatives and bring your next idea to life.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-cream/10 hover:bg-clay-500 text-cream text-sm font-medium px-5 py-2.5 transition-all duration-300"
            >
              Start a Project
            </a>
          </div>

          {/* Link groups */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {groups.map((g) => (
              <div key={g.title}>
                <h4 className="text-xs font-medium uppercase tracking-wide text-cream/40 mb-4">{g.title}</h4>
                <ul className="space-y-3">
                  {g.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-cream/70 hover:text-clay-300 transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">© {new Date().getFullYear()} Lynvia. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {['Twitter', 'Instagram', 'LinkedIn', 'Dribbble'].map((s) => (
              <a key={s} href="#" className="text-xs text-cream/50 hover:text-cream transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
