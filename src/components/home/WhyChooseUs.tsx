import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const reasons = [
  'Personalized case strategy formulated by senior counsel',
  'Senior attorney oversight on every single legal file',
  'Transparent fee structure and process from day one',
  'Global network of top-tier legal and corporate partners'
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-gold font-sans text-xs uppercase tracking-[0.3em] font-bold block mb-6">
            Our Standards
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-darktext leading-tight mb-8">
            Precision. Experience.<br /> Proven Results.
          </h2>
          <p className="text-secondarytext text-lg font-sans font-light leading-relaxed mb-10 max-w-lg">
            Immigration is more than just paperwork; it&apos;s a life-changing transition. We provide the meticulous attention to detail and high-level legal strategy your journey requires.
          </p>
          <div className="flex space-x-8 items-center border-t border-black/5 pt-10">
            <div>
              <div className="text-3xl font-serif text-darktext font-bold">15+</div>
              <div className="text-[10px] text-secondarytext uppercase tracking-widest mt-1">Years Combined</div>
            </div>
            <div className="w-px h-10 bg-gold/30"></div>
            <div>
              <div className="text-3xl font-serif text-darktext font-bold">Top 1%</div>
              <div className="text-[10px] text-secondarytext uppercase tracking-widest mt-1">Global Attorneys</div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="flex items-start space-x-6 p-8 bg-offwhite border border-transparent hover:border-gold/20 hover:bg-white hover:shadow-xl transition-all duration-500 rounded-sm"
            >
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center shrink-0 mt-1">
                <Check className="text-white" size={18} strokeWidth={3} />
              </div>
              <p className="text-darktext font-serif text-lg md:text-xl font-medium leading-tight">
                {reason}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
