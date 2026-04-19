import { motion } from 'motion/react';
import { PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-dark">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, #fff 40px, #fff 80px)`
          }}
        />
        {/* Soft Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[120px] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10 border-t border-white/5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6"
            >
              Ready to Start Your <br />Immigration Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg font-sans font-light max-w-xl"
            >
              The first step towards global mobility is a strategic consultation. Our experts are ready to map your path forward.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <Link
              to="/contact"
              className="group bg-gold text-dark px-10 py-6 rounded-sm font-sans text-xs uppercase tracking-[0.3em] font-bold hover:bg-white transition-all duration-500 shadow-2xl flex items-center space-x-4"
            >
              <PhoneCall size={18} className="group-hover:rotate-12 transition-transform" />
              <span>Schedule a Free Call</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
