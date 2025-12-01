import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, AlertTriangle, Zap, Shield } from 'lucide-react';

const comparisonData = [
  {
    feature: "Academy Pricing",
    competitor: "₹40k - ₹1.5L+ / Course",
    us: "Student-Friendly (Top Value)",
    winner: true
  },
  {
    feature: "Startup VAPT Cost",
    competitor: "High Corporate Rates",
    us: "Startup-First Pricing",
    winner: true
  },
  {
    feature: "Learning Methodology",
    competitor: "Recorded Video Lectures",
    us: "Live Fire Attack Labs",
    winner: true
  },
  {
    feature: "Hardware Requirements",
    competitor: "High-End PC Required",
    us: "Browser-Based Cloud Labs",
    winner: true
  },
  {
    feature: "Consultation",
    competitor: "Hourly Billing",
    us: "Free Initial Audit",
    winner: true
  }
];

const ComparisonSection = () => {
  return (
    <section className="py-24 px-4 relative z-10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-bold mb-6"
          >
            <AlertTriangle size={16} />
            <span>STOP OVERPAYING FOR SECURITY</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The <span className="text-cyan-400">Cyberdefend</span> Difference
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We disrupted the market by stripping away corporate bloat. You get elite military-grade security and education without the premium price tag.
          </p>
        </div>

        {/* The Comparison Matrix */}
        <div className="relative">
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-4 mb-6 px-6 text-sm tracking-widest uppercase font-bold text-slate-500">
            <div className="hidden md:block">Feature</div>
            <div className="text-center md:text-left">Industry Standard</div>
            <div className="text-center md:text-left text-cyan-400">Cyberdefend Protocol</div>
          </div>

          {/* Rows */}
          <div className="space-y-4">
            {comparisonData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-dark-card/40 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/30 transition-all duration-300 items-center group relative overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                {/* Column 1: Feature Name */}
                <div className="font-bold text-slate-300 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                    <Shield size={16} className="text-slate-400" />
                  </div>
                  {item.feature}
                </div>

                {/* Column 2: Competitor */}
                <div className="flex items-center gap-2 text-red-400/80 font-medium opacity-70">
                  <X size={16} />
                  <span className="line-through decoration-red-500/50">{item.competitor}</span>
                </div>

                {/* Column 3: Us (Highlighted) */}
                <div className="flex items-center gap-2 text-cyan-400 font-bold bg-cyan-900/10 py-2 px-3 rounded-lg border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                  <Check size={18} className="text-cyan-400" />
                  {item.us}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 text-center p-8 bg-gradient-to-b from-cyan-900/10 to-transparent border border-cyan-500/20 rounded-2xl"
          >
            <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Ready to save budget without compromising security?</h3>
            <p className="text-slate-400 mb-6">Join the ecosystem that prioritizes skill over bills.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://academy.cyberdefend.in" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-dark-bg font-bold rounded-lg transition-colors shadow-lg shadow-cyan-500/25">
                Start Learning
              </a>
              <a href="https://services.cyberdefend.in" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-700 transition-colors">
                Get Secured
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;