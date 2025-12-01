import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Users, GlobeLock } from 'lucide-react';

const features = [
  {
    icon: Terminal,
    title: "Hyper-Realistic Labs",
    desc: "Academy students train on live-fire ranges simulating real-world APT attacks, not just theory."
  },
  {
    icon: GlobeLock,
    title: "Adaptive Security Arch",
    desc: "For startups, we build security that scales with your user base, ensuring compliance from Day 1."
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    desc: "Direct access to seasoned CISOs and Red Team leads for both our students and service clients."
  },
  {
    icon: Cpu,
    title: "AI-Driven Analysis",
    desc: "Utilizing cutting-edge ML models to predict threats before they manifest in your infrastructure."
  }
];

const FeaturesGrid = () => {
  return (
    <section className="py-24 px-4 relative z-10 bg-dark-card/30">
       <div className="max-w-6xl mx-auto">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4"><span className="neon-glow">The Cyberdefend Advantage</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Bridge the gap between theoretical knowledge and practical application.</p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 className="bg-dark-bg border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 hover:bg-cyan-900/10 transition-all duration-300 group"
               >
                  <div className="w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
                     <feature.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-light">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
               </motion.div>
            ))}
         </div>
       </div>
    </section>
  );
};

export default FeaturesGrid;