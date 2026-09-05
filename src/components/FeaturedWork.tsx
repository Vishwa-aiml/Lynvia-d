import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const works = [
  {
    src: 'https://images.pexels.com/photos/7661185/pexels-photo-7661185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Lumen — Brand Identity System',
    type: 'Brand Identity',
    author: 'Studio Nora',
    cls: 'lg:col-span-5 lg:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/3964576/pexels-photo-3964576.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Festival Poster Collection',
    type: 'Poster Design',
    author: 'M. Okafor',
    cls: 'lg:col-span-4',
  },
  {
    src: 'https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Pulse — Fitness App UI',
    type: 'UI/UX Design',
    author: 'Aria Chen',
    cls: 'lg:col-span-3',
  },
  {
    src: 'https://images.pexels.com/photos/37461259/pexels-photo-37461259.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Creature Studies',
    type: 'Illustration',
    author: 'DΛVΞ G.',
    cls: 'lg:col-span-3',
  },
  {
    src: 'https://images.pexels.com/photos/18936418/pexels-photo-18936418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Maison Verte — Packaging',
    type: 'Packaging',
    author: 'Atelier Lune',
    cls: 'lg:col-span-4',
  },
  {
    src: 'https://images.pexels.com/photos/17115910/pexels-photo-17115910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Chroma — Title Sequence',
    type: 'Motion Graphics',
    author: 'K. Vidal',
    cls: 'lg:col-span-3',
  },
  {
    src: 'https://images.pexels.com/photos/3964837/pexels-photo-3964837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Urban Type Posters',
    type: 'Graphics & Posters',
    author: 'S. Tian',
    cls: 'lg:col-span-4',
  },
];

export default function FeaturedWork() {
  const { ref, visible } = useReveal({ threshold: 0.05 });

  return (
    <section id="explore" className="py-20 lg:py-32 bg-ink-950 text-cream relative overflow-hidden">
      <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] rounded-full bg-clay-600/10 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-8xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16`}
        >
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-wide text-clay-300">Featured Work</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tightest text-cream text-balance">
              Made by creative minds.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-cream/60 leading-relaxed">
            A curated look at work created by designers on Lynvia — from brand
            systems to motion and everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 auto-rows-[200px] sm:auto-rows-[240px] gap-3 sm:gap-4">
          {works.map((w, i) => (
            <a
              key={i}
              href="#"
              className={`group relative overflow-hidden rounded-2xl bg-ink-800 ${w.cls} ${
                visible ? 'is-visible' : ''
              } reveal reveal-delay-${(i % 5) + 1} min-h-[200px]`}
            >
              <img
                src={w.src}
                alt={w.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <span className="text-[11px] font-medium uppercase tracking-wide text-clay-300 mb-1.5">{w.type}</span>
                <h3 className="font-display text-lg sm:text-xl font-medium text-cream leading-tight">{w.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-cream/60">by {w.author}</span>
                  <span className="w-8 h-8 rounded-full bg-cream/10 backdrop-blur-sm flex items-center justify-center opacity-0 -translate-x-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-x-0">
                    <ArrowUpRight size={15} className="text-cream" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
