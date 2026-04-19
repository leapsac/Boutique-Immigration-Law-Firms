import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    visaType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', phone: '', visaType: '', message: '' });
    }, 1500);
  };

  const visaTypes = [
    'Work Visa / Talent Mobility',
    'Permanent Residency / Green Card',
    'Investor Visa / Golden Visa',
    'Citizenship / Naturalization',
    'Family Reunification',
    'General Inquiry'
  ];

  return (
    <div className="pt-32">
      <section className="px-6 md:px-12 py-32 bg-dark pt-40 md:pt-48">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold font-sans text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Consultation</span>
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">Begin Your Path <br />Forward.</h1>
              <p className="text-white/60 text-lg font-sans font-light mb-12 max-w-md">
                We offer confidential, high-level legal consultations to assess your eligibility and map your global mobility strategy.
              </p>

              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/5 text-gold flex items-center justify-center border border-white/10 rounded-sm shrink-0">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-white mb-2">Our Chambers</h4>
                    <p className="text-white/50 font-sans font-light leading-relaxed">
                      124 Berkeley Square,<br />Mayfair, London W1J 6BQ
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/5 text-gold flex items-center justify-center border border-white/10 rounded-sm shrink-0">
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-white mb-2">Direct Contact</h4>
                    <p className="text-white/50 font-sans font-light leading-relaxed">
                      Main Hub: +44 20 7946 0123<br />
                      Confidential: counsel@aurelius.law
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/5 text-gold flex items-center justify-center border border-white/10 rounded-sm shrink-0">
                    <Clock size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-white mb-2">Office Hours</h4>
                    <p className="text-white/50 font-sans font-light leading-relaxed">
                      Mon – Fri: 09:00 – 18:00 GMT<br />
                      Weekend: By Priority Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-16 w-full h-64 bg-white/3 border border-white/5 rounded-sm flex items-center justify-center overflow-hidden group">
                   <div className="absolute opacity-10 group-hover:opacity-20 transition-opacity">
                        <svg width="400" height="400" viewBox="0 0 400 400">
                             <defs>
                                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                       <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                                  </pattern>
                             </defs>
                             <rect width="400" height="400" fill="url(#grid)" className="text-white" />
                        </svg>
                   </div>
                   <div className="relative text-center">
                        <div className="w-3 h-3 bg-gold rounded-full animate-ping mx-auto" />
                        <div className="text-[10px] text-white font-sans tracking-[0.3em] uppercase font-bold mt-4">London Headquarters</div>
                   </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-10 md:p-14 rounded-sm shadow-2xl shadow-black/5 border border-black/5"
            >
              {isSubmitted ? (
                <div className="text-center py-20 flex flex-col items-center">
                  <div className="w-20 h-20 bg-gold/10 text-gold rounded-full flex items-center justify-center mb-8">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-3xl font-serif text-darktext mb-4">Inquiry Received.</h3>
                  <p className="text-secondarytext font-sans font-light max-w-xs mx-auto mb-10 text-lg">
                    A senior associate will contact you within one business day to discuss your case strategy.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-darktext font-sans text-xs uppercase tracking-widest font-bold hover:text-gold transition-colors underline underline-offset-8"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <h3 className="text-2xl font-serif text-darktext mb-10">Confidential Consultation Request</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] text-darktext/40 uppercase tracking-widest font-bold">Full Name</label>
                      <input
                        required
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-offwhite border-b-2 border-black/5 focus:border-gold outline-none p-4 font-sans text-darktext transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] text-darktext/40 uppercase tracking-widest font-bold">Email Address</label>
                        <input
                          required
                          type="email"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                          className="w-full bg-offwhite border-b-2 border-black/5 focus:border-gold outline-none p-4 font-sans text-darktext transition-all"
                          placeholder="john@example.com"
                        />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-[10px] text-darktext/40 uppercase tracking-widest font-bold">Phone Number</label>
                        <input
                          required
                          type="tel"
                          value={formState.phone}
                          onChange={(e) => setFormState({...formState, phone: e.target.value})}
                          className="w-full bg-offwhite border-b-2 border-black/5 focus:border-gold outline-none p-4 font-sans text-darktext transition-all"
                          placeholder="+1 234 567 890"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] text-darktext/40 uppercase tracking-widest font-bold">Visa Type</label>
                        <select
                          required
                          value={formState.visaType}
                          onChange={(e) => setFormState({...formState, visaType: e.target.value})}
                          className="w-full bg-offwhite border-b-2 border-black/5 focus:border-gold outline-none p-4 font-sans text-darktext transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-offwhite">Select Category</option>
                          {visaTypes.map(v => <option key={v} value={v} className="bg-offwhite">{v}</option>)}
                        </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                      <label className="text-[10px] text-darktext/40 uppercase tracking-widest font-bold">Message / Case Overview</label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="w-full bg-offwhite border-b-2 border-black/5 focus:border-gold outline-none p-4 font-sans text-darktext transition-all resize-none"
                        placeholder="Please briefly describe your immigration goals..."
                      />
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full bg-gold text-dark font-sans text-xs uppercase tracking-[0.4em] font-bold py-6 rounded-sm hover:bg-white transition-all duration-500 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-4 group"
                  >
                    {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-dark/20 border-t-dark rounded-full animate-spin" />
                    ) : (
                        <>
                             <Send size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                             <span>Send Inquiry</span>
                        </>
                    )}
                  </button>
                  <p className="text-[10px] text-secondarytext text-center italic">
                    Your information is protected by attorney-client privilege.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
