import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';
import NavbarLogo from './NavbarLogo'; 
import useHackerEffect from '../hooks/useHackerEffect';

const Navbar = () => {
  const { text: brandText, trigger: triggerBrand } = useHackerEffect("CYBERDEFEND");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Academy', href: 'https://academy.cyberdefend.in' },
    { name: 'Services', href: 'https://services.cyberdefend.in' },
    { name: 'Careers', href: '/careers' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-dark-bg/80 backdrop-blur-md border-cyan-500/20 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Area */}
        <div className="flex items-center gap-3 cursor-pointer group" onMouseEnter={triggerBrand}>
          <div className="relative">
            {/* The Animated Logo Component */}
            <NavbarLogo className="w-12 h-12 relative z-10" />
            
            {/* Glow effect behind the logo */}
            <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
          </div>
          
          <span className="text-xl font-bold tracking-wider text-white">
            CYBER<span className="text-cyan-400">DEFEND</span>
            {/* {brandText} */}
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          <a
            href="mailto:support@cyberdefend.in"
            className="px-5 py-2 text-sm font-bold text-dark-bg bg-cyan-400 rounded hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
          >
            Contact HQ
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-cyan-400 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-card border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between text-slate-300 hover:text-cyan-400 py-2 border-b border-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name} <ExternalLink size={14} />
                </a>
              ))}
              <a
                href="mailto:support@cyberdefend.in"
                className="mt-2 text-center w-full py-3 bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/50 rounded"
              >
                Contact HQ
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;