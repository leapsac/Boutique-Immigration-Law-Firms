import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isHeroPage = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-dark border-b border-white/5 py-2 px-6 md:px-12 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-medium text-white/40">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Mail size={12} className="text-gold" />
              <span>counsel@aurelius.law</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={12} className="text-gold" />
              <span>+44 20 7946 0123</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
             {/* Empty right side as requested */}
          </div>
        </div>
      </div>

      <nav
        className={cn(
          'transition-all duration-500 ease-in-out px-6 md:px-12 py-5',
          isScrolled || !isHeroPage ? 'bg-dark/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center space-x-2 group shrink-0 lg:w-1/4">
            <div className="w-10 h-10 border border-gold flex items-center justify-center rounded-sm group-hover:bg-gold transition-colors duration-300">
              <span className={cn(
                "font-serif text-xl font-bold transition-colors duration-300",
                isScrolled || !isHeroPage ? "text-gold group-hover:text-dark" : "text-gold group-hover:text-white"
              )}>A</span>
            </div>
            <span className="font-serif text-lg font-bold tracking-tight text-white leading-none uppercase">FIRM NAME</span>
          </Link>

          {/* Desktop Nav - Center */}
          <div className="hidden md:flex items-center justify-center space-x-10 lg:w-2/4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative font-sans text-[11px] uppercase tracking-[0.2em] font-bold transition-colors hover:text-gold",
                  location.pathname === link.path ? "text-gold" : "text-white/80"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA - Right */}
          <div className="hidden md:flex justify-end lg:w-1/4">
            <Link
              to="/contact"
              className="bg-gold text-dark px-8 py-3 rounded-sm font-sans text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors duration-300"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-dark border-t border-white/5 p-8 flex flex-col space-y-6 md:hidden shadow-2xl"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "font-serif text-2xl font-medium transition-colors",
                    location.pathname === link.path ? "text-gold" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-gold text-dark w-full py-4 text-center font-sans text-sm uppercase tracking-widest font-bold rounded-sm"
              >
                Book Consultation
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
