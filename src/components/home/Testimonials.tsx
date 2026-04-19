import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The team at Aurelius provided a level of strategic depth I hadn't found in other firms. They made a complex London relocation feel effortless.",
    author: "Jonathan Chen",
    type: "Corporate Expansion",
    country: "🇸🇬"
  },
  {
    quote: "Exceptional integrity and speed. My Tier 1 Exceptional Talent visa was approved in record time thanks to their meticulous file preparation.",
    author: "Elena Markova",
    type: "Tech Founder Visa",
    country: "🇪🇪"
  },
  {
    quote: "Aurelius doesn't just process forms; they build a future-proof legal strategy. They are, quite simply, the best in the business.",
    author: "Robert Sutherland",
    type: "Investor Residency",
    country: "🇨🇦"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-offwhite py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <Quote className="text-gold/10 mb-10" size={80} strokeWidth={1} />
            
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-darktext italic font-light leading-tight mb-12">
              &ldquo;{testimonials[index].quote}&rdquo;
            </h3>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-2xl">{testimonials[index].country}</span>
                <span className="text-darktext font-serif text-xl font-bold tracking-tight">
                  {testimonials[index].author}
                </span>
              </div>
              <span className="text-gold font-sans text-[10px] uppercase tracking-[0.3em] font-bold">
                {testimonials[index].type}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-20 space-x-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="group relative w-12 h-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/5" />
              <motion.div
                initial={false}
                animate={{ width: index === i ? '100%' : '0%' }}
                className="absolute inset-0 bg-gold z-10"
                transition={{ duration: 0.8 }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
