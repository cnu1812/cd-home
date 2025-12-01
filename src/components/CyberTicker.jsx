import React from 'react';

const CyberTicker = () => {
  const items = [
    "SYSTEM STATUS: ONLINE",
    "●",
    "NEW BATCH STARTING SOON",
    "●",
    "VAPT SERVICES AVAILABLE",
    "●",
    "SECURE YOUR INFRASTRUCTURE",
    "●",
    "JOIN 500+ ALUMNI",
    "●",
    "24/7 MONITORING ACTIVE",
    "●"
  ];

  return (
    <div className="w-full bg-cyan-900/20 border-y border-cyan-500/20 overflow-hidden py-3 relative z-20 backdrop-blur-sm">
      <div className="flex whitespace-nowrap animate-ticker">
        {/* We duplicate the list to ensure seamless looping */}
        {[...items, ...items, ...items].map((item, index) => (
          <span key={index} className="mx-8 text-cyan-400/80 text-xs font-mono tracking-[0.2em] font-bold">
            {item}
          </span>
        ))}
      </div>
      
      {/* Inline styles for the custom ticker animation */}
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-ticker {
          animation: ticker 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CyberTicker;