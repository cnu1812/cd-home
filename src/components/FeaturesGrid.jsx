import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Users, GlobeLock, Zap } from 'lucide-react';

const features = [
  {
    icon: Terminal,
    title: "Hyper-Realistic Labs",
    desc: "Train on live-fire ranges simulating real-world APT attacks. No simulations, just pure kernel-level warfare.",
    stat: "100+ LABS"
  },
  {
    icon: GlobeLock,
    title: "Adaptive Security",
    desc: "Security architecture that scales with your user base. We ensure compliance from Day 1 without slowing dev velocity.",
    stat: "ZERO TRUST"
  },
  {
    icon: Users,
    title: "Elite Mentorship",
    desc: "Direct channels to seasoned CISOs and Red Team leads. Get inside the mind of the attacker to better defend.",
    stat: "24/7 ACCESS"
  },
  {
    icon: Cpu,
    title: "AI-Driven Defense",
    desc: "Utilize cutting-edge ML models to predict vectors before they manifest. The future of defense is automated.",
    stat: "AI NATIVE"
  }
];

const FeaturesGrid = () => {
  return (
    <section className="py-24 px-4 relative z-10 overflow-hidden">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

       <div className="max-w-7xl mx-auto relative z-10">
         
         {/* Section Header */}
         <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-900/20 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest mb-6"
            >
              <Zap size={12} className="fill-current" /> SYSTEM CAPABILITIES
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Cyberdefend</span> Advantage
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Bridging the gap between theoretical knowledge and kinetic application.
            </p>
         </div>

         {/* The Grid */}
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 className="group relative bg-[#0a1625]/80 backdrop-blur-sm border border-slate-800 p-8 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
               >
                  {/* --- HUD CORNERS (The "Tech" Look) --- */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-slate-700 group-hover:border-cyan-400 transition-colors duration-300 rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-slate-700 group-hover:border-cyan-400 transition-colors duration-300 rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-slate-700 group-hover:border-cyan-400 transition-colors duration-300 rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-slate-700 group-hover:border-cyan-400 transition-colors duration-300 rounded-br-lg"></div>

                  {/* Scanline Effect on Hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent -translate-y-[100%] group-hover:animate-scan opacity-50"></div>

                  {/* Icon Area */}
                  <div className="mb-6 relative">
                    <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-all duration-300 relative z-10 border border-slate-700 group-hover:border-cyan-400">
                       <feature.icon size={28} />
                    </div>
                    {/* Icon Glow */}
                    <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    {feature.desc}
                  </p>

                  {/* Bottom Stat/Tag */}
                  <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                      STATUS: ONLINE
                    </span>
                    <span className="text-xs font-bold bg-slate-800 px-2 py-1 rounded text-cyan-400 border border-cyan-500/20">
                      {feature.stat}
                    </span>
                  </div>
               </motion.div>
            ))}
         </div>
       </div>

       <style>{`
         @keyframes scan {
           0% { transform: translateY(-100%); opacity: 0; }
           50% { opacity: 1; }
           100% { transform: translateY(500%); opacity: 0; }
         }
         .animate-scan {
           animation: scan 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
         }
       `}</style>
    </section>
  );
};

export default FeaturesGrid;