import { useState } from 'react';
import { Rocket, Wallet, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#features', label: 'Features' },
    { href: '#governance', label: 'Governance' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-fuchsia-500"><Rocket size={18} /></span>
            <span className="font-semibold tracking-tight text-lg">syra</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#app"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              <Wallet size={16} /> Launch App
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 pb-4">
            <nav className="flex flex-col gap-2 pt-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#app"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90"
              >
                <Wallet size={16} /> Launch App
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
