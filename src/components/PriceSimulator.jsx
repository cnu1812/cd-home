import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, ShieldCheck, TrendingUp, Info } from 'lucide-react';

const PriceSimulator = () => {
  const [activeTab, setActiveTab] = useState('academy');
  
  // Initial values for the slider (Cyberdefend's Price)
  const [cyberPrice, setCyberPrice] = useState(5000);

  // Market multipliers based on real industry data
  const metrics = {
    academy: {
      min: 2000,
      max: 15000,
      step: 500,
      multiplier: 8.5, 
      label: "Course / Certification",
      marketLabel: "Avg. Bootcamp Cost",
      desc: "Compared to standard CEH/OSCP preparation courses."
    },
    services: {
      min: 10000,
      max: 100000,
      step: 2500,
      multiplier: 3.8,
      label: "VAPT Project Scope",
      marketLabel: "Corporate Agency Quote",
      desc: "Compared to Big 4 or Tier-1 security agency pricing."
    }
  };

  const currentMetric = metrics[activeTab];
  
  // CALCULATIONS FOR ANIMATION
  const marketPrice = Math.floor(cyberPrice * currentMetric.multiplier);
  const savings = marketPrice - cyberPrice;
  
  // This is the "Ceiling" of the graph. 
  // It represents the cost of the most expensive competitor at the highest slider setting.
  // We use this to scale both bars so they move dynamically.
  const maxGraphValue = currentMetric.max * currentMetric.multiplier;

  // Format currency to Indian Rupee
  const formatINR = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumSignificantDigits: 3
    }).format(amount);
  };

  return (
    <section className="py-20 px-4 relative z-10 bg-gradient-to-b from-dark-bg to-dark-card/50">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyan-400">ROI</span> Simulator
          </h2>
          <p className="text-slate-400">See exactly how much you save by choosing the hacker-first approach over corporate bloat.</p>
        </div>

        {/* The Calculator Card */}
        <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-6 md:p-10 shadow-[0_0_50px_rgba(0,188,212,0.1)] backdrop-blur-md">
          
          {/* Toggles */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800 p-1 rounded-xl inline-flex relative">
              {/* Sliding background pill */}
              <motion.div 
                className="absolute top-1 bottom-1 bg-cyan-500 rounded-lg"
                initial={false}
                animate={{ 
                  x: activeTab === 'academy' ? 0 : '100%', 
                  width: '50%' 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              
              <button
                onClick={() => { setActiveTab('academy'); setCyberPrice(5000); }}
                className={`relative z-10 px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors ${activeTab === 'academy' ? 'text-white' : 'text-slate-400'}`}
              >
                <GraduationCap size={18} /> Academy
              </button>
              <button
                onClick={() => { setActiveTab('services'); setCyberPrice(25000); }}
                className={`relative z-10 px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors ${activeTab === 'services' ? 'text-white' : 'text-slate-400'}`}
              >
                <ShieldCheck size={18} /> Services
              </button>
            </div>
          </div>

          {/* Interactive Area */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left: The Controls */}
            <div>
              <label className="text-sm text-cyan-400 font-bold uppercase tracking-wider mb-4 block">
                Adjust Your Budget (Cyberdefend Price)
              </label>
              
              <div className="mb-8">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-4xl font-bold text-white font-mono">{formatINR(cyberPrice)}</span>
                  <span className="text-slate-500 text-sm mb-1">per project/course</span>
                </div>

                <input
                  type="range"
                  min={currentMetric.min}
                  max={currentMetric.max}
                  step={currentMetric.step}
                  value={cyberPrice}
                  onChange={(e) => setCyberPrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400 hover:accent-cyan-300 transition-all"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                  <span>{formatINR(currentMetric.min)}</span>
                  <span>{formatINR(currentMetric.max)}</span>
                </div>
              </div>

              <div className="bg-cyan-900/20 border border-cyan-500/20 p-4 rounded-lg flex gap-3 items-start">
                <Info className="text-cyan-400 shrink-0 mt-1" size={18} />
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentMetric.desc} We cut out the "Suit Tax" — no fancy sales teams, just pure security expertise.
                </p>
              </div>
            </div>

            {/* Right: The Visual Comparison */}
            <div className="relative space-y-8">
                
                {/* Bar 1: Market Price */}
                <div>
                  <div className="flex flex-wrap justify-between items-end mb-3 gap-2">
                     <div>
                        <div className="text-sm text-slate-400 mb-1">{currentMetric.marketLabel}</div>
                         <div className="text-red-400 font-mono text-lg line-through opacity-70 font-bold">{formatINR(marketPrice)}</div>
                     </div>

                     {/* SAVINGS BADGE */}
                     <motion.div
                        className="bg-green-500 text-slate-900 text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        key={savings}
                      >
                       <TrendingUp size={14} />
                       <span>YOU SAVE: {formatINR(savings)}</span>
                     </motion.div>
                  </div>

                  {/* Market Bar Track */}
                  <div className="h-12 bg-slate-800 rounded-r-xl relative overflow-hidden w-full">
                    {/* The Market Bar - Now animates relative to maxGraphValue */}
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-900/50 to-red-500/50 border-r-2 border-red-500"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${(marketPrice / maxGraphValue) * 100}%` 
                      }} 
                      transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                  </div>
                </div>

                {/* Bar 2: Cyberdefend Price */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                     <div>
                        <div className="text-sm text-cyan-400 font-bold mb-1">Cyberdefend Price</div>
                        <div className="text-cyan-400 font-mono text-lg font-bold">{formatINR(cyberPrice)}</div>
                    </div>
                  </div>
                  {/* Cyberdefend Bar Track */}
                  <div className="h-12 bg-slate-800 rounded-r-xl relative overflow-hidden w-full">
                    {/* The Cyberdefend Bar - Also animates relative to maxGraphValue */}
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-900 to-cyan-400 border-r-2 border-white shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${(cyberPrice / maxGraphValue) * 100}%` 
                      }}
                      transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    />
                  </div>
                </div>

              {/* Comparison Text */}
              <div className="mt-6 text-center">
                <p className="text-sm text-slate-400">
                  You are getting <strong className="text-white">{currentMetric.multiplier}x</strong> more value for every rupee spent.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSimulator;