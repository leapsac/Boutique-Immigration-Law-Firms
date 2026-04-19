import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 border border-gold flex items-center justify-center rounded-sm">
                <span className="font-serif text-xl font-bold text-gold">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight text-white leading-none">AURELIUS</span>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold font-medium leading-none mt-1">Counsel</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Boutique immigration counsel dedicated to navigating global complexity with precision, integrity, and elite legal expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-gold">Navigations</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-white/60 hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-gold mr-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-gold">Expertise</h4>
            <ul className="space-y-4">
              {[
                'Global Talent Visas',
                'Corporate Relocation',
                'EU/UK Residency',
                'Investor Citizenship',
                'Family Reunification'
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-sm text-white/60 hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-gold">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-4">
                <MapPin className="text-gold shrink-0 mt-1" size={18} />
                <span className="text-sm text-white/60 leading-tight">
                  124 Berkeley Square,<br />Mayfair, London W1J 6BQ
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-gold shrink-0" size={18} />
                <span className="text-sm text-white/60">+44 20 7946 0123</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-gold shrink-0" size={18} />
                <span className="text-sm text-white/60">counsel@aurelius.law</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-white/40 font-sans tracking-widest uppercase">
            © {currentYear} Aurelius Immigration Counsel. All Rights Reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-[10px] text-white/30 uppercase tracking-[0.2em] hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] text-white/30 uppercase tracking-[0.2em] hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
