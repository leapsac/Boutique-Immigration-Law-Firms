import { motion } from 'motion/react';
import { Shield, Award, Heart } from 'lucide-react';

const team = [
  {
    name: 'Alexander Aurelius',
    role: 'Managing Partner',
    bio: 'Former senior counsel at the Department of State with 20+ years expertise in global talent mobility.',
  },
  {
    name: 'Sarah Montgomery',
    role: 'Senior Associate',
    bio: 'Specialist in EU residency and investor citizenship programs with a focus on high-net-worth clients.',
  },
  {
    name: 'Marcus Thorne',
    role: 'Head of Corporate Affairs',
    bio: 'Leads our corporate relocation division, assisting Fortune 500 companies with global staffing strategy.',
  }
];

const values = [
  {
    title: 'Integrity',
    icon: Shield,
    text: 'We hold ourselves to the highest ethical standards. If a case doesn&apos;t have a path to success, we tell you day one.'
  },
  {
    title: 'Expertise',
    icon: Award,
    text: 'Immigration law changes weekly. We maintain a relentless focus on continuing education and policy shifts.'
  },
  {
    title: 'Commitment',
    icon: Heart,
    text: 'Every client receives direct access to senior counsel. Your success is our reputation.'
  }
];

export default function About() {
  return (
    <div className="pt-0">
      {/* Hero */}
      <section className="px-6 md:px-12 py-32 bg-dark text-white overflow-hidden relative border-b border-white/5 pt-40 md:pt-48">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-gold font-sans text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Our Legacy</span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Boutique Counsel for <br />
              <span className="italic font-light">Global Citizens.</span>
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>
            <p className="text-white/60 text-lg md:text-xl font-sans font-light leading-relaxed">
              Founded on the principles of precision and elite advocacy, Aurelius exists to simplify the complexities of global mobility for those who dream beyond borders.
            </p>
          </motion.div>
        </div>
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      </section>

      {/* Story */}
      <section className="px-6 md:px-12 py-32 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-darktext">Why We Started</h2>
            <div className="space-y-6 text-secondarytext text-lg leading-relaxed font-sans font-light">
              <p>
                Aurelius was born from a simple observation: the world&apos;s most talented individuals and ambitious companies were being held back by archaic, fragmented immigration systems.
              </p>
              <p>
                We saw a need for a law firm that operated at the speed of modern business—a firm that combined the rigorous complexity of a top-tier litigator with the white-glove service of a private concierge.
              </p>
              <p>
                Today, we represent elite innovators, creators, and investors from over 40 countries, providing more than just legal advice—we provide the keys to global opportunity.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full aspect-[4/5] bg-dark/5 rounded-sm overflow-hidden relative group border border-black/5">
              {/* This would be an image, using a placeholder styling */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-darktext/5 font-serif text-2xl tracking-widest italic uppercase">Authenticity</span>
              </div>
              <div className="absolute inset-0 border-[20px] border-white/50 z-10" />
              <div className="absolute bottom-10 right-10 bg-gold p-8 z-20 shadow-2xl">
                <div className="text-dark font-serif text-3xl font-bold">EST. 2011</div>
                <div className="text-dark/60 font-sans text-[10px] uppercase tracking-widest mt-1">London, UK</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-12 py-32 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-gold font-sans text-xs uppercase tracking-[0.3em] font-bold block mb-4">The Counsel</span>
            <h2 className="text-4xl md:text-6xl font-serif text-darktext">Meet Our Partners</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group p-8 bg-white border border-black/5 rounded-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-24 h-24 rounded-full bg-dark/5 mb-8 overflow-hidden flex items-center justify-center border-2 border-gold/20 group-hover:border-gold transition-colors duration-500">
                  <span className="text-darktext/10 font-serif text-3xl italic">{member.name[0]}</span>
                </div>
                <h3 className="text-2xl font-serif text-darktext mb-1 group-hover:text-gold transition-colors">{member.name}</h3>
                <span className="text-gold font-sans text-[10px] uppercase tracking-widest font-bold block mb-6">{member.role}</span>
                <p className="text-secondarytext text-base leading-relaxed font-sans font-light">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-12 py-32 bg-dark text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <v.icon className="text-gold mb-8" size={48} strokeWidth={1} />
                <h3 className="text-2xl font-serif mb-6">{v.title}</h3>
                <p className="text-white/50 font-sans font-light leading-relaxed">
                  {v.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Background Decorative */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gold/5 uppercase font-serif text-[20vw] opacity-[0.02] flex items-end justify-center pointer-events-none">
          Values
        </div>
      </section>
    </div>
  );
}
