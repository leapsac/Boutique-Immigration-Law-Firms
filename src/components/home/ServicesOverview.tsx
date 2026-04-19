import { motion } from 'motion/react';
import { Briefcase, Building2, Globe, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Work Visas & Permits',
    description: 'Specialized counsel for global talent, intra-company transfers, and specialized work authorizations.',
    icon: Briefcase,
    path: '/services#work-visas'
  },
  {
    title: 'Permanent Residency',
    description: 'Strategic pathways to residency through investment, high-skilled labor, or national interest waivers.',
    icon: Building2,
    path: '/services#residency'
  },
  {
    title: 'Citizenship & Naturalization',
    description: 'Expert guidance through complex citizenship acquisitions and multi-jurisdictional naturalization.',
    icon: Globe,
    path: '/services#citizenship'
  },
  {
    title: 'Family Immigration',
    description: 'Compassionate and efficient advocacy for family reunifications and marriage-based sponsorship.',
    icon: Users,
    path: '/services#family'
  }
];

export default function ServicesOverview() {
  return (
    <section className="bg-offwhite py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Accent */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gold font-sans text-xs uppercase tracking-[0.3em] font-bold block mb-4"
          >
            Our Expertise
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif text-darktext leading-tight"
            >
              Excellence in Every <br />Legal Pathway
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="h-1 lg:w-32 md:w-20 bg-gold"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={service.path} className="group flex flex-col p-10 bg-white border border-black/5 hover:border-gold/30 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 rounded-sm h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="text-gold" size={20} />
                </div>
                
                <div className="w-16 h-16 bg-dark/5 flex items-center justify-center rounded-sm mb-8 group-hover:bg-gold transition-colors duration-500">
                  <service.icon className="text-gold group-hover:text-white transition-colors duration-500" size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-serif text-darktext mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-secondarytext text-base font-sans font-light leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <span className="mt-auto text-darktext font-sans text-[10px] uppercase tracking-[0.2em] font-bold group-hover:translate-x-2 transition-transform duration-500 inline-flex items-center space-x-2">
                  <span>Explore Service</span>
                  <div className="w-8 h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
