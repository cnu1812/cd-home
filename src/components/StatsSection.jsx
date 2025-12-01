import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Future Defenders in Training", value: "500+" },
  { label: "Startups Secured", value: "50+" },
  { label: "Uptime Maintained", value: "99.9%" },
];

const StatsSection = () => {
  return (
    <section className="py-12 relative z-10 border-b border-white/5 bg-dark-bg/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-4"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 font-mono">
              {stat.value}
            </h3>
            <p className="text-slate-400 uppercase tracking-widest text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;