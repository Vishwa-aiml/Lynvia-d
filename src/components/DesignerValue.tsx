import { ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const perks = [
  { n: '01', title: 'Showcase your portfolio', desc: 'Present your work in a curated, professional space.' },
  { n: '02', title: 'Build a professional presence', desc: 'Grow a reputation that travels with your work.' },
  { n: '03', title: 'Discover meaningful projects', desc: 'Find briefs that align with your style and skills.' },
  { n: '04', title: 'Collaborate directly with clients', desc: 'Build real relationships from first message to delivery.' },
  { n: '05', title: 'Manage creative projects', desc: 'Keep briefs, files, and feedback organized in one place.' },
  { n: '06', title: 'Receive earnings through the platform', desc: 'Secure payments throughout your project workflow.' },
];

export default function DesignerValue() {
  const { ref, visible } = useReveal({ threshold: 0.08 });

  return (
    <section className="py-24 lg:py-32 bg-ink-950 text-cream relative overflow-hidden">
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-iris-600/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-iris-950/25 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-8xl px-6 sm:px-10 lg:px-12">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid lg:grid-cols-12 gap-10 lg:gap-16 items-center`}>
          {/* Left: image collage */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="relative overflow-hidden rounded-3xl h-56 group">
                  <img
                    src="https://images.pexels.com/photos/7661185/pexels-photo-7661185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Brand identity work"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                  />
                </div>
                <div className="relative overflow-hidden rounded-3xl h-40 group">
                  <img
                    src="https://images.pexels.com/photos/27594599/pexels-photo-27594599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Digital illustration"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 mt-8">
                <div className="relative overflow-hidden rounded-3xl h-40 group">
                  <img
                    src="https://images.pexels.com/photos/4088095/pexels-photo-4088095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Editorial design"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                  />
                </div>
                <div className="relative overflow-hidden rounded-3xl h-56 group">
                  <img
                    src="https://images.pexels.com/photos/8015895/pexels-photo-8015895.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Packaging design"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="text-xs font-medium uppercase tracking-wide text-iris-300">For Designers</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold tracking-tightest text-cream text-balance leading-[1.08]">
              Your talent deserves to be seen.
            </h2>
            <p className="mt-5 text-cream/60 leading-relaxed max-w-md">
              Lynvia is where creative professionals showcase their work, connect
              with clients, and build a name for themselves.
            </p>

            <ul className="mt-8 divide-y divide-cream/10 border-y border-cream/10">
              {perks.map((p, i) => (
                <li
                  key={p.n}
                  className={`group flex items-start gap-5 py-4 hover:bg-cream/[0.03] -mx-3 px-3 rounded-lg transition-colors ${
                    visible ? 'is-visible' : ''
                  } reveal reveal-delay-${(i % 4) + 1}`}
                >
                  <span className="font-display text-sm font-medium text-iris-300 w-6 shrink-0 pt-1">{p.n}</span>
                  <div className="flex-1">
                    <h3 className="font-medium text-cream">{p.title}</h3>
                    <p className="text-sm text-cream/50 mt-0.5">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-iris-600 text-cream text-sm font-medium px-6 py-3.5 hover:bg-iris-500 transition-all duration-300 group"
            >
              Join as a Designer
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
