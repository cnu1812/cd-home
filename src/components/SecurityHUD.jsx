import React, { useState, useEffect } from 'react';
import { Activity, Shield, Wifi, Lock, ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SecurityHUD = () => {
  const [isOpen, setIsOpen] = useState(false); // Closed by default
  const [cpu, setCpu] = useState(24);
  const [threats, setThreats] = useState(842);
  const [encryption] = useState("AES-256");

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(prev => Math.min(100, Math.max(10, prev + (Math.random() * 10 - 5))));
      if (Math.random() > 0.8) setThreats(prev => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex fixed bottom-6 left-6 z-30 font-mono text-xs flex-col items-start">
      
      {/* The Expanded HUD Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 20, height: 0 }}
            className="bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-lg shadow-2xl w-64 space-y-3 relative overflow-hidden mb-4"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/50 animate-scan-line shadow-[0_0_10px_#22d3ee]"></div>

            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
               <span className="text-slate-400 font-bold tracking-wider">SYS_MONITOR</span>
               <div className="flex gap-1">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-green-500 font-bold">ONLINE</span>
               </div>
            </div>

            {/* Metrics */}
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2 text-cyan-400">
                  <Activity size={14} /> <span>SYS.LOAD</span>
               </div>
               <div className="w-24 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 transition-all duration-500" style={{ width: `${cpu}%` }}></div>
               </div>
               <span className="text-slate-300">{Math.floor(cpu)}%</span>
            </div>

            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2 text-red-400">
                  <Shield size={14} /> <span>THREATS</span>
               </div>
               <span className="text-red-400 font-bold animate-pulse">{threats}</span>
            </div>

            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2 text-yellow-400">
                  <Lock size={14} /> <span>ENCRYPT</span>
               </div>
               <span className="text-slate-300">{encryption}</span>
            </div>

            <div className="flex items-center justify-between text-slate-500 pt-1">
               <div className="flex items-center gap-2">
                  <Wifi size={12} /> <span>eth0</span>
               </div>
               <span>192.168.4.x</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-slate-900 border border-slate-700 px-4 py-2 rounded-full text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
      >
        <Activity size={16} className={isOpen ? "text-cyan-400" : ""} />
        <span className="font-bold">SYSTEM STATUS</span>
        {isOpen ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
      </button>

      <style>{`
        @keyframes scan-line {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan-line {
          animation: scan-line 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SecurityHUD;