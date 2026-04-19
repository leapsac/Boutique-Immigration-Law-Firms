import { motion } from 'motion/react';
import AnimatedCounter from '../common/AnimatedCounter';

const stats = [
  { label: 'Visas Approved', value: 1200, suffix: '+' },
  { label: 'Success Rate', value: 98, suffix: '%' },
  { label: 'Years Experience', value: 15, suffix: '+' },
  { label: 'Countries Served', value: 40, suffix: '+' },
];

export default function TrustBar() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 relative overflow-hidden border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 lg:divide-x divide-black/5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-gold font-bold mb-4 flex items-center">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-darktext/60 text-[10px] uppercase tracking-[0.2em] font-bold font-sans">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
