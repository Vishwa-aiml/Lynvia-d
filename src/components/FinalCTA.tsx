import { ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function FinalCTA() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-24 lg:py-36 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <span className="font-display text-[28vw] font-semibold tracking-tightest text-ink-900 leading-none select-none">
          LYNVIA
        </span>
      </div>
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tightest text-ink-900 text-balance">
            Your next great project
            <span className="block italic text-clay-600 font-normal">starts here.</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-ink-500 max-w-xl mx-auto text-pretty">
            Find the talent. Start the project. Create something remarkable.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#explore"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-cream text-sm font-medium px-7 py-3.5 hover:bg-clay-600 transition-all duration-300 hover:shadow-lg hover:shadow-clay-600/25 active:scale-[0.98] group"
            >
              Explore Designers
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-ink-300 text-ink-800 text-sm font-medium px-7 py-3.5 hover:border-ink-900 hover:bg-ink-900 hover:text-cream transition-all duration-300"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
