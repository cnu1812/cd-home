import React from "react";
import { ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import { BsGithub, BsInstagram, BsTwitter, BsWhatsapp, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative bg-dark-bg text-slate-400 py-16 border-t border-slate-800 overflow-hidden">
      
      {/* Optional: Add the cyber grid to footer background for consistency */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Branding & About Section */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center md:justify-start space-x-2"
            >
              <ShieldAlert size={32} className="text-cyan-400" />
              <h2 className="text-2xl font-bold text-white tracking-wider">
                CYBER<span className="text-cyan-400">DEFEND</span>
              </h2>
            </motion.div>
            <p className="mt-4 text-sm text-slate-500 max-w-xs mx-auto md:mx-0 leading-relaxed">
              The central hub for elite cybersecurity education and startup defense services. Securing the future, one node at a time.
            </p>
          </div>

          {/* Quick Links (Updated for Main Domain Routing) */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-white mb-6">Hub Navigation</h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-left">
              {[
                { name: "Home", path: "#" },
                { name: "Academy", path: "https://academy.cyberdefend.in" },
                { name: "Services", path: "https://services.cyberdefend.in" },
                { name: "About", path: "#about" },
                { name: "Contact HQ", path: "mailto:contact@cyberdefend.in" },
                { name: "Community", path: "https://chat.whatsapp.com/LRzT7qWKvWGKlQIoElqYbF" },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.path}
                  className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition duration-300 relative after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>


          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-6">Connect With Us</h3>
            <div className="flex space-x-6">
              {[
                { icon: BsInstagram, href: "https://www.instagram.com/defendcyber" },
                { icon: BsTwitter, href: "https://x.com/defend_cyber" },
                { icon: BsLinkedin, href: "https://www.linkedin.com/company/cyberdefend1" },
                { icon: BsGithub, href: "https://github.com/cnu1812/CyberDefend" },
                { icon: BsWhatsapp, href: "https://chat.whatsapp.com/LRzT7qWKvWGKlQIoElqYbF" }
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  whileHover={{ scale: 1.2, rotate: 5, color: "#22d3ee" }} // hex for cyan-400
                  transition={{ duration: 0.3 }}
                  className="text-slate-500 hover:text-cyan-400 transition duration-300"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
            
            <div className="mt-6 text-xs text-slate-600">
               <p>Bangalore, India • Online Globally</p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-600">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <p>© {new Date().getFullYear()} CyberDefend. All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
               <a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a>
               <a href="#" className="hover:text-cyan-400 transition">Terms of Service</a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;