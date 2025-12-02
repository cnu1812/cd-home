import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Sword, ArrowRight } from 'lucide-react';
import useHackerEffect from '../hooks/useHackerEffect'; 

const CareerCard = ({ title, icon: Icon, description, roles, link, color, delay }) => {
  const { text, trigger } = useHackerEffect(title);

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      onMouseEnter={trigger}
      className="group relative flex-1 bg-slate-900/50 border border-slate-800 rounded-2xl p-8 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:bg-slate-900/80 cursor-none"
    >
      {/* Hover Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700 group-hover:border-cyan-400/30">
          <Icon size={28} className="text-cyan-400" />
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono group-hover:text-cyan-400 transition-colors">
          {text}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm md:text-base mb-6 leading-relaxed">
          {description}
        </p>

        {/* Roles Tag Cloud */}
        <div className="flex flex-wrap gap-2 mb-8">
          {roles.map((role, i) => (
            <span key={i} className="text-[10px] md:text-xs font-mono px-2 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors">
              {role}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-auto flex items-center gap-2 text-cyan-400 text-sm font-bold group-hover:gap-4 transition-all">
          INITIALIZE APPLICATION <ArrowRight size={16} />
        </div>
      </div>
    </motion.a>
  );
};

const CareerSection = () => {
  return (
    <section id="careers" className="py-24 px-6 relative overflow-hidden bg-dark-bg border-t border-slate-800">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-cyan-900/20 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4"
          >
            RECRUITMENT_DRIVE_ACTIVE
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Battlefield</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Do you want to build the next generation of defenders, or do you want to be on the front lines protecting them?
          </p>
        </div>

        {/* The Choice Grid */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-12">
          
          {/* Option 1: Academy */}
          <CareerCard 
            title="ACADEMY"
            icon={GraduationCap}
            description="Shape the minds of future ethical hackers. We need instructors, content creators, and community mentors."
            roles={["Instructor", "Curriculum Dev", "Mentor"]}
            link="https://academy.cyberdefend.in/careers"
            color="from-cyan-500 via-blue-600 to-transparent"
            delay={0.1}
          />

          {/* Option 2: Services */}
          <CareerCard 
            title="OPERATIONS"
            icon={Sword} 
            description="Join our elite Red Team and SOC units. Work on high-stakes VAPT projects and incident response."
            roles={["Pentester", "SOC Analyst", "Architect"]}
            link="https://services.cyberdefend.in/careers" 
            color="from-green-500 via-emerald-600 to-transparent" 
            delay={0.3}
          />

        </div>

      </div>
    </section>
  );
};

export default CareerSection;