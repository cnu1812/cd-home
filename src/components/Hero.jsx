import React from 'react';
import { motion } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid -z-10" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -z-10" />

      {/* The New Animated SVG Logo */}
      <AnimatedLogo />

      {/* Content that appears AFTER logo animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        // Delay animation by 3.5s to sync with SVG finishing its main sequence
        transition={{ duration: 1, delay: 3.5 }}
        className="max-w-3xl mx-auto relative z-20"
      >
        <h2 className="text-xl md:text-2xl text-cyan-light font-light tracking-wider mb-6">
          The Convergence of Education & Security
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          Forging elite defenders through our <span className="text-white font-semibold">Academy</span> and 
          protecting innovative startups with our cutting-edge <span className="text-white font-semibold">Services</span>.
        </p>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 text-cyan-500/50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;