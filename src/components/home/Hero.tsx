import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<{ x: number, y: number, size: number, speedX: number, speedY: number, opacity: number }> = [];
    const particleCount = 20;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${p.opacity})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    createParticles();
    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  const titleWords = "Your Journey Deserves Expert Guidance".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative h-screen w-full flex items-center bg-dark overflow-hidden pt-32 md:pt-40">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />
      
      {/* Background Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-dark/90 z-0 animate-pulse duration-[10000ms] opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] mb-8">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                variants={itemVariants}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={itemVariants}
            className="text-white/70 text-lg md:text-xl font-sans font-light leading-relaxed max-w-lg mb-12"
          >
            We navigate complex immigration systems with precision and integrity, so you can focus on building your future without borders.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="bg-gold text-navy px-8 py-4 rounded-sm font-sans text-xs uppercase tracking-widest font-bold hover:bg-white transition-all duration-500 shadow-xl shadow-gold/10 text-center"
            >
              Book a Consultation
            </Link>
            <Link
              to="/services"
              className="group border border-white/20 hover:border-white text-white px-8 py-4 rounded-sm font-sans text-xs uppercase tracking-widest font-bold transition-all duration-500 flex items-center justify-center space-x-2"
            >
              <span>View Our Services</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Abstract Modern Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="hidden lg:flex justify-end relative"
        >
          <div className="relative w-full aspect-square max-w-md">
            {/* SVG Compass Rose Outline */}
            <svg viewBox="0 0 400 400" className="w-full h-full text-gold/30">
              <motion.path
                d="M200 20 L220 180 L380 200 L220 220 L200 380 L180 220 L20 200 L180 180 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
              />
              <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 10" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <motion.line
                x1="200" y1="50" x2="200" y2="350"
                stroke="currentColor" strokeWidth="0.5"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
              <motion.line
                x1="50" y1="200" x2="350" y2="200"
                stroke="currentColor" strokeWidth="0.5"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
            </svg>
            
            {/* Soft Glow */}
            <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* Hero Badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-12 hidden md:block"
      >
        <div className="flex items-center space-x-4 border-l-2 border-gold pl-6 py-2">
          <div className="text-gold font-serif text-3xl font-bold italic">Top Tier</div>
          <div className="text-white/40 font-sans text-[10px] uppercase tracking-widest leading-tight">
            LEGAL 500<br />CERTIFIED
          </div>
        </div>
      </motion.div>
    </section>
  );
}
