import { useReveal } from '@/hooks/useReveal';
import { Search, MessagesSquare, Sparkles } from 'lucide-react';

const steps = [
  {
    n: '01',
    title: 'Discover',
    desc: 'Find designers and creative services that match your vision.',
    icon: Search,
    src: 'https://images.pexels.com/photos/3688759/pexels-photo-3688759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    n: '02',
    title: 'Collaborate',
    desc: 'Work directly with your chosen creative through Lynvia.',
    icon: MessagesSquare,
    src: 'https://images.pexels.com/photos/1055731/pexels-photo-1055731.png?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    n: '03',
    title: 'Create',
    desc: 'Review, refine and receive your final work.',
    icon: Sparkles,
    src: 'https://images.pexels.com/photos/4841363/pexels-photo-4841363.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export default function HowItWorks() {
  const { ref, visible } = useReveal();

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-cream">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} text-center max-w-2xl mx-auto mb-14 lg:mb-20`}
        >
          <span className="text-xs font-medium uppercase tracking-wide text-clay-600">How It Works</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tightest text-ink-900 text-balance">
            From idea to finished work.
          </h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-6">
          {/* connecting line */}
          <div className="hidden md:block absolute top-[90px] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                className={`relative reveal ${visible ? 'is-visible' : ''} reveal-delay-${i + 1}`}
              >
                {/* Number badge */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display text-5xl font-semibold text-clay-500/30">{s.n}</span>
                  <div className="w-12 h-12 rounded-2xl bg-ink-900 text-cream flex items-center justify-center shrink-0 relative z-10">
                    <Icon size={20} />
                  </div>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl bg-ink-100 h-56 mb-5 group">
                  <img
                    src={s.src}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
                </div>

                <h3 className="font-display text-2xl font-medium text-ink-900 mb-2">{s.title}</h3>
                <p className="text-ink-500 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
