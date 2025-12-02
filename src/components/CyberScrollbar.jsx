import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const CyberScrollbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* The Track Container (Right Side HUD) */}
      <div className="fixed top-0 right-0 h-screen w-12 z-50 hidden md:flex flex-col items-center justify-between py-24 pointer-events-none mix-blend-screen">
        
        {/* Top Marker */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-[1px] h-8 bg-cyan-500/30"></div>
          <div className="text-[10px] font-mono text-cyan-400/50 rotate-90 origin-center translate-y-2">SYS</div>
        </div>

        {/* The Main Progress Bar */}
        <div className="relative flex-grow w-[1px] bg-white/5 mx-auto my-4">
          {/* Glowing Fill Line */}
          <motion.div 
            className="absolute top-0 left-0 w-full bg-cyan-400 origin-top shadow-[0_0_15px_#22d3ee]"
            style={{ scaleY, height: '100%' }}
          />
        </div>

        {/* Bottom Marker */}
        <div className="flex flex-col items-center gap-1">
          <div className="text-[10px] font-mono text-cyan-400/50 rotate-90 origin-center -translate-y-2">END</div>
          <div className="w-[1px] h-8 bg-cyan-500/30"></div>
        </div>
      </div>

      {/* The Floating Percentage / Back To Top Button */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50 pointer-events-auto"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: percentage > 5 ? 1 : 0, x: percentage > 5 ? 0 : 20 }}
      >
        <button 
          onClick={scrollToTop}
          className="group flex flex-col items-center gap-2"
        >
          <div className="font-mono text-xs text-cyan-400 font-bold">
            {percentage < 10 ? `0${percentage}` : percentage}%
          </div>
          
          <div className="relative w-10 h-10 flex items-center justify-center bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-900/20 transition-all duration-300 clip-path-hex">
            <ChevronUp size={18} className="text-cyan-400 group-hover:-translate-y-1 transition-transform" />
            
            {/* Spinning Border Effect */}
            <div className="absolute inset-0 border border-transparent border-t-cyan-400 rounded-full animate-spin opacity-0 group-hover:opacity-100"></div>
          </div>
        </button>
      </motion.div>

      <style>{`
        .clip-path-hex {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </>
  );
};

export default CyberScrollbar;