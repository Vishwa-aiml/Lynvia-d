import { Search, MessagesSquare, FolderOpen, RefreshCw, ShieldCheck, CreditCard } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const values = [
  { icon: Search, title: 'Discover the right creative talent', desc: 'Browse creative work and find the right specialist for your project.' },
  { icon: MessagesSquare, title: 'Direct communication', desc: 'Talk to your designer from the start — keep every conversation in one place.' },
  { icon: FolderOpen, title: 'Organized files & deliveries', desc: 'Project files, assets, and versions kept structured and easy to find.' },
  { icon: RefreshCw, title: 'Revision workflow', desc: 'Request changes with structured feedback until the work is right.' },
  { icon: ShieldCheck, title: 'Secure project experience', desc: 'Work through a structured project workflow with protected payments.' },
  { icon: CreditCard, title: 'Collaborate with confidence', desc: 'Manage your project from brief to final delivery with clarity.' },
];

export default function ClientValue() {
  const { ref, visible } = useReveal({ threshold: 0.08 });

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-8xl px-6 sm:px-10 lg:px-12">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid lg:grid-cols-12 gap-10 lg:gap-16 items-start`}>
          {/* Left editorial */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs font-medium uppercase tracking-wide text-iris-600">For Clients</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold tracking-tightest text-ink-900 text-balance leading-[1.08]">
              From idea to finished work, without the friction.
            </h2>
            <p className="mt-5 text-ink-500 leading-relaxed max-w-md">
              Lynvia brings discovery, collaboration, and delivery into a single
              creative workflow — so you can focus on the work, not the process.
            </p>

            <div className="mt-8 relative overflow-hidden rounded-3xl h-72 group">
              <img
                src="https://images.pexels.com/photos/7661184/pexels-photo-7661184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Creative project work"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-cream text-sm font-medium">A workspace built for creative projects.</p>
              </div>
            </div>
          </div>

          {/* Right values list */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-px bg-ink-100 rounded-3xl overflow-hidden border border-ink-100">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className={`group bg-cream p-6 sm:p-7 hover:bg-white transition-colors duration-300 ${
                      visible ? 'is-visible' : ''
                    } reveal reveal-delay-${(i % 4) + 1}`}
                  >
                    <div className="w-11 h-11 rounded-2xl bg-ink-900 text-cream flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-iris-600">
                      <Icon size={19} />
                    </div>
                    <h3 className="font-display text-xl font-medium text-ink-900 mb-1.5">{v.title}</h3>
                    <p className="text-sm text-ink-500 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
