import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ShieldCheck, ArrowRight } from 'lucide-react';

const GatewayCards = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
        
        {/* Academy Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative bg-dark-card border border-slate-800 rounded-2xl p-8 md:p-12 overflow-hidden hover:animate-breath transition-all duration-300"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <GraduationCap className="w-12 h-12 text-cyan-400 mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-light transition-colors">Academy</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Premium cybersecurity training for the next generation of defenders. 
            Hands-on labs, CTFs, and industry certification paths.
          </p>
          
          <a 
            href="https://academy.cyberdefend.in" 
            className="inline-flex items-center gap-2 text-cyan-400 font-bold tracking-wide group-hover:gap-4 transition-all"
          >
            Enter Academy <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Services Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative bg-dark-card border border-slate-800 rounded-2xl p-8 md:p-12 overflow-hidden hover:animate-breath transition-all duration-300"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <ShieldCheck className="w-12 h-12 text-blue-400 mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">Services</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Elite VAPT, Red Teaming, and Compliance services for Startups and Enterprises. 
            Secure your infrastructure before deployment.
          </p>
          
          <a 
            href="https://services.cyberdefend.in" 
            className="inline-flex items-center gap-2 text-blue-400 font-bold tracking-wide group-hover:gap-4 transition-all"
          >
            Explore Services <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default GatewayCards;