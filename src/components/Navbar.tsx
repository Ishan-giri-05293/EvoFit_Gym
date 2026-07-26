import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Trainers', href: '/#trainers' },
  { name: 'Results', href: '/transformations' },
  { name: 'Memberships', href: '/#memberships' },
  { name: 'Contact', href: '/#visit' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveSection('');
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection based on scroll position
      const sections = NAV_LINKS.map(link => link.href.split('#')[1]).filter(Boolean);
      let current = '';
      
      for (const section of sections) {
        if (!section) continue;
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset to detect when section is in view
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetHash = href.split('#')[1];
    
    if (location.pathname === '/') {
      // If already on home page, handle smooth scroll manually to avoid router race conditions
      if (targetHash) {
        e.preventDefault();
        const element = document.getElementById(targetHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          element.setAttribute('tabIndex', '-1');
          element.focus({ preventScroll: true });
          window.history.pushState(null, '', href);
          setActiveSection(targetHash);
        }
      } else if (href === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', href);
        setActiveSection('');
      }
    }
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isScrolled ? 'bg-zinc-950/85 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-50 flex items-center gap-2 md:gap-4 group" aria-label="EvoFit Gym Home">
          <img src="/logo.jpg" alt="EvoFit Gym Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-full" />
          <img src="/after-logo.jpg" alt="EvoFit Gym" className="h-8 md:h-12 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isHash = link.href.includes('#');
            const targetHash = link.href.split('#')[1];
            
            let isActive = false;
            if (isHash) {
              isActive = activeSection === targetHash;
            } else if (link.href === '/') {
              isActive = location.pathname === '/' && activeSection === '';
            } else {
              isActive = location.pathname === link.href;
            }

            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 pb-1 uppercase tracking-wider ${
                  isActive 
                    ? 'text-white after:w-full' 
                    : 'text-zinc-400 hover:text-white after:w-0 hover:after:w-full'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-50">
          <Link
            to="/book-trial"
            className="hidden md:inline-flex h-11 items-center justify-center px-6 bg-white text-zinc-950 font-bold text-sm tracking-widest uppercase hover:bg-zinc-200 transition-colors"
          >
            Join Now
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-zinc-400 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-zinc-950 z-40 flex flex-col items-center justify-center pt-20"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, index) => {
                const isHash = link.href.includes('#');
                const targetHash = link.href.split('#')[1];
                
                let isActive = false;
                if (isHash) {
                  isActive = activeSection === targetHash;
                } else if (link.href === '/') {
                  isActive = location.pathname === '/' && activeSection === '';
                } else {
                  isActive = location.pathname === link.href;
                }

                return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-3xl font-light hover:text-zinc-400 transition-colors uppercase tracking-widest block ${
                      isActive ? 'text-white' : 'text-zinc-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
                );
              })}
              <Link
                to="/book-trial"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 h-14 px-10 flex items-center justify-center bg-white text-zinc-950 font-bold text-lg tracking-widest uppercase hover:bg-zinc-200 transition-colors"
              >
                Join Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
