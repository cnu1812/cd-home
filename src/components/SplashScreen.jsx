import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavbarLogo from './NavbarLogo'; // <--- Import your animated logo

const bootText = [
  "INITIALIZING_CYBERDEFEND_GATEWAY...",
  "LOADING_ACADEMY_CURRICULUM...",
  "ESTABLISHING_VAPT_SERVICE_UPLINK...",
  "AUTHENTICATING_USER_CREDENTIALS...",
  "SECURE_CONNECTION_ESTABLISHED.",
  "WELCOME_TO_THE_FUTURE."
];

const SplashScreen = ({ onComplete }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Text Cycling
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev < bootText.length - 1 ? prev + 1 : prev));
    }, 600);

    // 2. Progress Bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(textInterval);
          clearInterval(progressInterval);
          setTimeout(onComplete, 500); 
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 12), 100);
      });
    }, 150);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f172a] text-cyan-400 overflow-hidden"
      exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-6">
        
        {/* Central Logo Animation */}
        <div className="mb-10 relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
          
          {/* The Actual Logo Component */}
          <div className="relative z-10">
             <NavbarLogo className="w-32 h-32" />
          </div>
        </div>

        {/* Terminal Text */}
        <div className="w-full font-mono text-sm mb-4 h-6 flex justify-between items-center text-slate-400">
          <span className="truncate mr-4 text-xs md:text-sm">&gt; {bootText[textIndex]}</span>
          <span className="text-cyan-400 font-bold">{progress}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden relative">
          <motion.div 
            className="h-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* Session ID */}
        <div className="mt-6 flex justify-between w-full text-[10px] font-mono text-slate-600 tracking-widest uppercase">
          <span>SECURE_BOOT_VERIFIED</span>
          <span>ID: {Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
        </div>

      </div>
    </motion.div>
  );
};

export default SplashScreen;