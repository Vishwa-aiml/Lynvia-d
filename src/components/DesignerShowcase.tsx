import { ArrowRight, BadgeCheck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const designers = [
  {
    name: 'Nora Achebe',
    specialty: 'Brand Identity & Logo Systems',
    avatar: 'https://images.pexels.com/photos/4621573/pexels-photo-4621573.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    work: [
      'https://images.pexels.com/photos/7661184/pexels-photo-7661184.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      'https://images.pexels.com/photos/5706015/pexels-photo-5706015.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    ],
    verified: true,
  },
  {
    name: 'Aria Chen',
    specialty: 'UI/UX & Product Design',
    avatar: 'https://images.pexels.com/photos/7147841/pexels-photo-7147841.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    work: [
      'https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      'https://images.pexels.com/photos/326512/pexels-photo-326512.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    ],
    verified: true,
  },
  {
    name: 'Mateo Vidal',
    specialty: 'Motion & Video',
    avatar: 'https://images.pexels.com/photos/12903019/pexels-photo-12903019.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    work: [
      'https://images.pexels.com/photos/29450016/pexels-photo-29450016.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      'https://images.pexels.com/photos/29488853/pexels-photo-29488853.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    ],
    verified: false,
  },
  {
    name: 'Sofia Tian',
    specialty: 'Illustration & Posters',
    avatar: 'https://images.pexels.com/photos/4621581/pexels-photo-4621581.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    work: [
      'https://images.pexels.com/photos/29501720/pexels-photo-29501720.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      'https://images.pexels.com/photos/3964576/pexels-photo-3964576.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    ],
    verified: true,
  },
];

export default function DesignerShowcase() {
  const { ref, visible } = useReveal();

  return (
    <section id="designers" className="py-24 lg:py-32 bg-iris-50/40">
      <div className="mx-auto max-w-8xl px-6 sm:px-10 lg:px-12">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16`}
        >
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-wide text-iris-600">Designers</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold tracking-tightest text-ink-900 text-balance leading-[1.08]">
              Meet the people behind the work.
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-cream text-sm font-medium px-5 py-3 hover:bg-iris-600 transition-all duration-300 group shrink-0"
          >
            Explore Designers
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {designers.map((d, i) => (
            <article
              key={d.name}
              className={`group bg-white rounded-3xl overflow-hidden border border-ink-100 hover:border-ink-200 hover:shadow-xl hover:shadow-ink-900/5 transition-all duration-500 ${
                visible ? 'is-visible' : ''
              } reveal reveal-delay-${(i % 4) + 1}`}
            >
              {/* Portfolio preview */}
              <div className="relative grid grid-cols-2 gap-1 h-44 overflow-hidden">
                {d.work.map((src, j) => (
                  <div key={j} className="relative overflow-hidden">
                    <img
                      src={src}
                      alt={`${d.name} work`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

              <div className="p-5 -mt-8 relative">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-4 border-white shadow-sm bg-ink-100 mb-3">
                  <img src={d.avatar} alt={d.name} loading="lazy" className="w-full h-full object-cover" />
                </div>

                <div className="flex items-center gap-1.5">
                  <h3 className="font-display text-lg font-medium text-ink-900">{d.name}</h3>
                  {d.verified && <BadgeCheck size={16} className="text-iris-500 shrink-0" />}
                </div>
                <p className="text-sm text-ink-500 mt-0.5">{d.specialty}</p>

                <div className="mt-4 pt-4 border-t border-ink-100 flex items-center justify-between">
                  <span className="text-xs text-ink-400">Available for work</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
