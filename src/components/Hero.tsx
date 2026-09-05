import { useState } from 'react';
import { Search, ArrowRight, Sparkles } from 'lucide-react';

const suggestions = [
  'Logo Design',
  'Brand Identity',
  'Website Design',
  'Poster',
  'Social Media',
  'Video',
];

const heroTiles = [
  {
    src: 'https://images.pexels.com/photos/7661184/pexels-photo-7661184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'Brand Identity',
    span: 'row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/29501720/pexels-photo-29501720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'Poster Series',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/326512/pexels-photo-326512.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'UI Design',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/5146441/pexels-photo-5146441.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'Illustration',
    span: 'row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/1188751/pexels-photo-1188751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'Motion Graphics',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/4841363/pexels-photo-4841363.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'Packaging',
    span: '',
  },
];

export default function Hero() {
  const [focused, setFocused] = useState(false);

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-24 -right-32 w-[500px] h-[500px] rounded-full bg-clay-100/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-[420px] h-[420px] rounded-full bg-ink-100/50 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-6 animate-fade-in">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase text-clay-600 bg-clay-50 border border-clay-200 rounded-full px-3 py-1.5">
            <Sparkles size={13} /> A creative marketplace
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: copy + search */}
          <div className="lg:col-span-7 xl:col-span-6">
            <h1 className="font-display text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-7xl font-semibold tracking-tightest text-ink-900 text-balance animate-fade-up">
              Great ideas deserve
              <span className="block italic text-clay-600 font-normal">great design.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-ink-500 max-w-xl leading-relaxed text-pretty animate-fade-up reveal-delay-1">
              Discover talented creatives, find the right expertise, and bring
              your next idea to life with Lynvia.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up reveal-delay-2">
              <a
                href="#explore"
                className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-cream text-sm font-medium px-6 py-3.5 hover:bg-clay-600 transition-all duration-300 hover:shadow-lg hover:shadow-clay-600/25 active:scale-[0.98] group"
              >
                Explore Designers
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-ink-300 text-ink-800 text-sm font-medium px-6 py-3.5 hover:border-ink-900 hover:bg-ink-900 hover:text-cream transition-all duration-300"
              >
                Start a Project
              </a>
            </div>

            {/* Search */}
            <div className="mt-10 max-w-xl animate-fade-up reveal-delay-3">
              <label className="text-xs font-medium uppercase tracking-wide text-ink-400 mb-2.5 block">
                What are you looking to create?
              </label>
              <div
                className={`relative flex items-center rounded-2xl border bg-white transition-all duration-300 ${
                  focused
                    ? 'border-clay-400 shadow-xl shadow-clay-600/10 ring-4 ring-clay-100/60'
                    : 'border-ink-200 shadow-sm'
                }`}
              >
                <Search
                  size={20}
                  className={`absolute left-4 transition-colors ${focused ? 'text-clay-500' : 'text-ink-400'}`}
                />
                <input
                  type="text"
                  placeholder="Search for logo design, branding, illustration…"
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  className="w-full bg-transparent pl-12 pr-4 py-4 text-sm sm:text-base text-ink-900 placeholder:text-ink-400 focus:outline-none"
                />
                <button className="hidden sm:flex items-center justify-center mr-2.5 w-10 h-10 rounded-xl bg-ink-900 text-cream hover:bg-clay-600 transition-colors shrink-0">
                  <ArrowRight size={17} />
                </button>
              </div>

              {/* Suggested searches */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-xs text-ink-400 mr-1">Popular:</span>
                {suggestions.map((s) => (
                  <button
                    key={s}
                    className="text-xs font-medium text-ink-600 bg-ink-100/70 hover:bg-ink-900 hover:text-cream rounded-full px-3.5 py-1.5 transition-all duration-200 border border-ink-200/50"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: creative work mosaic */}
          <div className="lg:col-span-5 xl:col-span-6 animate-scale-in reveal-delay-2">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 auto-rows-[120px] sm:auto-rows-[140px] lg:auto-rows-[130px]">
              {heroTiles.map((tile, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl bg-ink-100 ${tile.span} ${
                    i === 0 ? 'col-span-2' : ''
                  }`}
                >
                  <img
                    src={tile.src}
                    alt={tile.label}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent opacity-70" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-medium text-cream/95 bg-ink-950/40 backdrop-blur-sm rounded-full px-2.5 py-1">
                    {tile.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats strip */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { n: '12K+', l: 'Creatives' },
                { n: '80+', l: 'Disciplines' },
                { n: '4.9', l: 'Avg. rating' },
              ].map((s) => (
                <div key={s.l} className="text-center sm:text-left">
                  <div className="font-display text-2xl sm:text-3xl font-semibold text-ink-900">{s.n}</div>
                  <div className="text-xs text-ink-400 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
