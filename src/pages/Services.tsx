import { motion } from 'motion/react';
import { Briefcase, Building2, Globe, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesDetail = [
  {
    id: 'work-visas',
    title: 'Work Visas & Mobility',
    icon: Briefcase,
    description: 'Specialized counsel for global talent corporations looking to relocate their workforce, and individuals with exceptional abilities seeking specialized entry. We handle the complexity of sponsorship, compliance, and multi-jurisdictional transfers.',
    bullets: [
      'Intra-company Transferee (L-1/ICT) Visas',
      'EB-1/Global Talent Exceptional Ability visas',
      'H-1B and specialized skilled labor sponsorship',
      'Short-term project-based work authorizations'
    ]
  },
  {
    id: 'residency',
    title: 'Permanent Residency',
    icon: Building2,
    description: 'We design strategic pathways to permanent residency through high-yield investment programs, employment-based sponsorship, and national interest waivers. Our approach ensures long-term security for you and your legacy.',
    bullets: [
      'EB-5 Investor Residency programs',
      'EU Golden Visa strategic applications',
      'Employment-based green card processing',
      'National Interest Waivers (NIW)'
    ]
  },
  {
    id: 'citizenship',
    title: 'Citizenship & Naturalization',
    icon: Globe,
    description: 'Navigating the path to a second passport requires both legal precision and diplomatic sensitivity. We provide expert guidance through ancestral citizenship, merit-based naturalization, and complex dual-citizenship registrations.',
    bullets: [
      'Citizenship by Investment (CBI) programs',
      'Ancestral and Jus Sanguinis citizenship claims',
      'Multi-jurisdictional naturalization filings',
      'Renunciation and dual-nationality counsel'
    ]
  },
  {
    id: 'family',
    title: 'Family Reunification',
    icon: Users,
    description: 'Borders should never separate families. We provide compassionate yet efficient advocacy for family reunifications, marriage-based sponsorships, and complex dependency cases involving children or elderly parents.',
    bullets: [
      'Spousal and Fiancé visa applications',
      'Immediate relative sponsorship petitions',
      'Dependency and adoption-based immigration',
      'Waivers for prior entry or status issues'
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-32">
      {/* Page Header */}
      <section className="px-6 md:px-12 py-20 bg-dark text-white relative overflow-hidden pt-40 md:pt-48">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-sans text-xs uppercase tracking-[0.4em] font-bold mb-6"
          >
            Our Expertise
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8"
          >
            Precision Legal <br />
            <span className="italic font-light">Solutions.</span>
          </motion.h1>
          <p className="text-white/60 text-lg md:text-xl font-sans font-light max-w-2xl leading-relaxed">
            From corporate relocation to individual citizenship, we provide the strategic depth required to navigate the world&apos;s most complex immigration systems.
          </p>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(201,168,76,0.1),transparent)] pointer-events-none" />
      </section>

      {/* Services detailed list */}
      <section className="bg-white">
        {servicesDetail.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`px-6 md:px-12 py-32 ${index % 2 !== 0 ? 'bg-offwhite' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={index % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div className="w-16 h-16 bg-dark/5 text-gold flex items-center justify-center border border-gold/10 rounded-sm mb-10 shadow-xl shadow-dark/5">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-darktext mb-8">{service.title}</h2>
                <p className="text-secondarytext text-lg font-sans font-light leading-relaxed mb-10">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-12">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center space-x-4">
                      <CheckCircle2 className="text-gold shrink-0" size={20} />
                      <span className="text-darktext font-serif text-lg italic">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-3 text-gold font-sans text-xs uppercase tracking-[0.2em] font-bold group"
                >
                  <span>Request Consultation</span>
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                    <ArrowRight size={16} className="text-darktext group-hover:text-white" />
                  </div>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <div className="relative aspect-video lg:aspect-square bg-dark/5 rounded-sm overflow-hidden border border-black/5 shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center opacity-5 font-serif text-[4vw] uppercase tracking-[1em] rotate-12 pointer-events-none text-dark">
                    Legal Strategy
                  </div>
                  {/* Visual patterns instead of images for "Premium" feel */}
                  <div className="absolute inset-0 flex items-center justify-center p-20">
                    <div className="w-full h-full border border-gold/20 flex items-center justify-center relative">
                       <div className="absolute inset-10 border border-gold/10" />
                       <div className="absolute inset-20 border border-gold/5" />
                       <div className="font-serif text-gold/30 text-8xl">0{index + 1}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="px-6 md:px-12 py-32 bg-dark text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Can&apos;t find the specific pathway you need?</h2>
          <p className="text-white/60 text-lg font-sans font-light mb-12">
            Every immigration journey is unique. We specialize in custom legal strategies for non-standard cases.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold text-dark px-12 py-5 rounded-sm font-sans text-xs uppercase tracking-[0.3em] font-bold hover:bg-white hover:shadow-2xl transition-all duration-500"
          >
            Speak with an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
