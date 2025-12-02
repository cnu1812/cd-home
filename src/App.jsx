import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CyberTicker from './components/CyberTicker'; 
import StatsSection from './components/StatsSection';
import GatewayCards from './components/GatewayCards';
import FeaturesGrid from './components/FeaturesGrid';
import Footer from './components/Footer';
import ChatBotInvite from './components/ChatBotInvite';
import ComparisonSection from './components/ComparisonSection';
import PriceSimulator from './components/PriceSimulator';
import CyberTerminal from './components/CyberTerminal';
import SecurityHUD from './components/SecurityHUD';
import SmoothScroll from './components/SmoothScroll'; // <--- Physics Scroll
import CyberScrollbar from './components/CyberScrollbar';
import SplashScreen from './components/SplashScreen';
import NeuralBackground from './components/NeuralBackground';
import CyberCursor from './components/CyberCursor';
import CareerSection from './components/CareerSection';
import FAQSection from './components/FAQSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [godMode, setGodMode] = useState(false);


  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Mouse Position Logic for Spotlight
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-cyan-500/30 relative">
   {/* --- PHASE 1: SPLASH SCREEN --- */}
   <AnimatePresence mode="wait">
        {isLoading && (
          <SplashScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      <CyberCursor />
   <SmoothScroll />
   <CyberScrollbar />

   <NeuralBackground />
      
      {/* 1. Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* 2. Spotlight Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.06), transparent 40%)`
        }}
      />

      {/* 3. The New Navbar */}
      <Navbar />
      <main className="relative z-10">
       
      </main>

      <main>
        <Hero />
        
        {/* 4. The Ticker (Placed below hero or stats) */}
        <CyberTicker />
        
        <StatsSection />
        
        {/* Add an ID here so the "About" link works */}
        <section id="about">
          <GatewayCards />
        </section>
        
        <FeaturesGrid />
        <ComparisonSection />
        <PriceSimulator />
        <CareerSection />
      </main>
      <FAQSection/>
      <Footer />
      <CyberTerminal />

      <ChatBotInvite />
      <SecurityHUD/>
    </div>
  );
}

export default App;