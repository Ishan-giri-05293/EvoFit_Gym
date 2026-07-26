import React from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const QUICK_LINKS = [
  { name: 'Programs', href: '/#memberships' },
  { name: 'Trainers', href: '/#trainers' },
  { name: 'Facilities', href: '/#gallery' },
  { name: 'FAQ', href: '/#faq' }
];

export function Footer() {
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetHash = href.split('#')[1];
    
    if (location.pathname === '/') {
      if (targetHash) {
        e.preventDefault();
        const element = document.getElementById(targetHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
        }
      }
    }
  };

  return (
    <footer className="bg-zinc-950 text-white border-t border-white/[0.03] pt-16 md:pt-20 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-20">
          
          <div className="md:col-span-5 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-2 md:gap-4 group mb-4 md:mb-6" aria-label="EvoFit Gym Home">
              <img src="/logo.jpg" alt="EvoFit Gym Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-full" />
              <img src="/after-logo.jpg" alt="EvoFit Gym" className="h-8 md:h-12 object-contain" />
            </Link>
            <p className="text-zinc-400 font-light text-sm leading-relaxed max-w-sm">
              Premium fitness experience designed for those who demand excellence. Elevate your standards, break your limits.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4 md:mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 md:gap-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-zinc-400 hover:text-white transition-colors text-sm font-light uppercase tracking-widest"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col items-start md:items-end">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4 md:mb-6">Social</h4>
            <div className="flex gap-4 mb-6 md:mb-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                <Youtube size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-6 md:pt-8 gap-4">
          <p className="text-zinc-600 text-xs font-bold tracking-[0.2em] uppercase">
            &copy; {new Date().getFullYear()} EvoFit Gym. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/" className="text-zinc-600 hover:text-zinc-400 transition-colors text-[10px] font-bold tracking-[0.2em] uppercase">Privacy</Link>
            <Link to="/" className="text-zinc-600 hover:text-zinc-400 transition-colors text-[10px] font-bold tracking-[0.2em] uppercase">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
