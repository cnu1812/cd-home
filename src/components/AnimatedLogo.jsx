import React from 'react';

const AnimatedLogo = () => {
  return (
    <div className="w-full max-w-[500px] mx-auto mb-8 relative z-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="w-full h-auto drop-shadow-[0_0_25px_rgba(0,188,212,0.3)]">
        {/* Background - Made transparent so it sits on our site BG nicely, 
            adjust opacity if you want the box shape visible */}
        <rect width="500" height="500" fill="#0A192F" rx="20" ry="20" opacity="0" />
        
        {/* CD Infinity Symbol */}
        {/* Left C part */}
        <path id="cPath"
              d="M175,250 C120,320 120,180 175,250 C225,315 275,315 325,250"
              fill="none"
              stroke="#0A3A5C"
              strokeWidth="30"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="600"
              strokeDashoffset="600">
          <animate attributeName="stroke-dashoffset" from="600" to="0" dur="1.5s" begin="0.5s" fill="freeze"/>
        </path>
        
        {/* Right D part */}
        <path id="dPath"
              d="M325,250 C375,185 375,315 325,250 C275,185 225,185 175,250"
              fill="none"
              stroke="#0A3A5C"
              strokeWidth="30"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="600"
              strokeDashoffset="600">
          <animate attributeName="stroke-dashoffset" from="600" to="0" dur="1.5s" begin="2s" fill="freeze"/>
        </path>
        
        {/* Yellow C overlay (reveals after blue outline) */}
        <path id="cYellow"
              d="M175,250 C120,320 120,180 175,250 C225,315 275,315 325,250"
              fill="none"
              stroke="#FFD100"
              strokeWidth="18"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="600"
              strokeDashoffset="600">
          <animate attributeName="stroke-dashoffset" from="600" to="0" dur="1.5s" begin="1s" fill="freeze"/>
        </path>
        
        {/* Yellow D overlay (reveals after blue outline) */}
        <path id="dYellow"
              d="M325,250 C375,185 375,315 325,250 C275,185 225,185 175,250"
              fill="none"
              stroke="#FFD100"
              strokeWidth="18"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="600"
              strokeDashoffset="600">
          <animate attributeName="stroke-dashoffset" from="600" to="0" dur="1.5s" begin="2.5s" fill="freeze"/>
        </path>
        
        {/* Connecting Line (cyber green) */}
        <path id="connectingLine"
              d="M175,250 L325,250"
              fill="none"
              stroke="#00FF9F"
              strokeWidth="12"
              strokeLinecap="round"
              opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="3.5s" fill="freeze"/>
        </path>
        
      {/* Company Name Text */}
      <g opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur="1s" begin="4s" fill="freeze"/>
        {/* Combined CYBERDEFEND text centered */}
        <text x="250" y="380" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold">
          <tspan fill="#E0E0E0">CYBER</tspan>
          <tspan fill="url(#textGradient)">DEFEND</tspan>
        </text>
      </g>
        <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E0E0E0"/>
          <stop offset="100%" stopColor="#00FF9F"/>
        </linearGradient>
      </defs>
        
        {/* Subtle Digital Particle Effect */}
        <g opacity="0.3">
          <animate attributeName="opacity" from="0" to="0.3" dur="1s" begin="5s" fill="freeze"/>
          <circle cx="120" cy="150" r="1.5" fill="#00FF9F">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="380" cy="150" r="1.5" fill="#00FF9F">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="150" cy="350" r="1.5" fill="#00FF9F">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="350" cy="350" r="1.5" fill="#00FF9F">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3.2s" repeatCount="indefinite"/>
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedLogo;