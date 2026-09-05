import { useScrollPosition } from '@/hooks/useReveal';
import { Menu, X, Search } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Explore', href: '#explore' },
  { label: 'Categories', href: '#categories' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Designers', href: '#designers' },
];

export default function Header() {
  const scrolled = useScrollPosition();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/90 backdrop-blur-xl border-b border-ink-200/70 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-8xl px-6 sm:px-10 lg:px-12 flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0 group">
            <span className="font-display text-2xl font-semibold tracking-tightest text-ink-900 transition-colors group-hover:text-iris-600">
              LYNVIA
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-ink-600 hover:text-ink-900 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-iris-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="#"
              className="hidden sm:block text-sm font-medium text-ink-600 hover:text-ink-900 transition-colors"
            >
              Log In
            </a>
            <a
              href="#"
              className="hidden sm:block text-sm font-medium text-ink-900 hover:text-iris-600 transition-colors"
            >
              Join Lynvia
            </a>
            <a
              href="#"
              className="hidden sm:inline-flex items-center rounded-full bg-ink-900 text-cream text-sm font-medium px-5 py-2.5 hover:bg-iris-600 transition-all duration-300 hover:shadow-lg hover:shadow-iris-600/20 active:scale-[0.98]"
            >
              Start a Project
            </a>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-1.5 -mr-1.5 text-ink-900"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <nav
          className={`absolute top-0 right-0 h-full w-[82%] max-w-sm bg-cream shadow-2xl flex flex-col px-7 pt-24 pb-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl font-medium text-ink-900 py-3.5 border-b border-ink-200/60 hover:text-iris-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-auto flex flex-col gap-3">
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="text-center text-sm font-medium text-ink-700 py-3 border border-ink-300 rounded-full hover:border-ink-900 transition-colors"
            >
              Log In
            </a>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="text-center text-sm font-medium bg-ink-900 text-cream py-3 rounded-full hover:bg-iris-600 transition-colors"
            >
              Join Lynvia
            </a>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="text-center text-sm font-semibold bg-iris-600 text-cream py-3.5 rounded-full hover:bg-iris-700 transition-colors flex items-center justify-center gap-2 mt-1"
            >
              <Search size={16} /> Start a Project
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
