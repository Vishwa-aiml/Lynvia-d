import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const categories = [
  {
    name: 'Logo & Branding',
    count: '2,400+ creatives',
    src: 'https://images.pexels.com/photos/7661184/pexels-photo-7661184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    name: 'Graphics & Posters',
    count: '1,800+ creatives',
    src: 'https://images.pexels.com/photos/29501720/pexels-photo-29501720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: '',
  },
  {
    name: 'UI/UX Design',
    count: '3,100+ creatives',
    src: 'https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: '',
  },
  {
    name: 'Social Media',
    count: '1,500+ creatives',
    src: 'https://images.pexels.com/photos/7661410/pexels-photo-7661410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: '',
  },
  {
    name: 'Illustration',
    count: '960+ creatives',
    src: 'https://images.pexels.com/photos/27594599/pexels-photo-27594599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: '',
  },
  {
    name: 'Video & Animation',
    count: '1,200+ creatives',
    src: 'https://images.pexels.com/photos/29450016/pexels-photo-29450016.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: 'sm:col-span-2',
  },
  {
    name: 'Presentation Design',
    count: '740+ creatives',
    src: 'https://images.pexels.com/photos/4088095/pexels-photo-4088095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: '',
  },
  {
    name: 'Motion Graphics',
    count: '880+ creatives',
    src: 'https://images.pexels.com/photos/29488853/pexels-photo-29488853.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: '',
  },
];

export default function Categories() {
  const { ref, visible } = useReveal();

  return (
    <section id="categories" className="py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-8xl px-6 sm:px-10 lg:px-12">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16`}
        >
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-wide text-iris-600">Categories</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold tracking-tightest text-ink-900 text-balance leading-[1.08]">
              Find the creative expertise you need.
            </h2>
          </div>
          <a
            href="#explore"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 hover:text-iris-600 transition-colors group shrink-0"
          >
            Browse all categories
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[170px] sm:auto-rows-[210px] gap-3 sm:gap-4">
          {categories.map((cat, i) => (
            <a
              key={cat.name}
              href="#explore"
              className={`group relative overflow-hidden rounded-2xl bg-ink-100 ${cat.span} ${
                visible ? 'is-visible' : ''
              } reveal reveal-delay-${(i % 5) + 1}`}
            >
              <img
                src={cat.src}
                alt={cat.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent transition-opacity duration-500 group-hover:from-ink-950/80" />
              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
                <h3 className="font-display text-lg sm:text-xl font-medium text-cream leading-tight">
                  {cat.name}
                </h3>
                <p className="text-xs text-cream/70 mt-1 opacity-0 -translate-y-1 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0">
                  {cat.count}
                </p>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream/90 flex items-center justify-center opacity-0 scale-90 transition-all duration-400 group-hover:opacity-100 group-hover:scale-100">
                <ArrowUpRight size={16} className="text-ink-900" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
