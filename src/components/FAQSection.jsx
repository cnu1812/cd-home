import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Terminal, Shield, GraduationCap, Cpu } from 'lucide-react';

const faqData = [
  // --- ACADEMY QUESTIONS ---
  {
    category: "academy",
    question: "Do I need coding experience to join?",
    answer: "Negative. Our 'Zero to Hero' path starts with Linux and Networking basics before moving into Python for Security and Exploit Development."
  },
  {
    category: "academy",
    question: "What is the 40% Discount Protocol?",
    answer: "We bypass corporate markups. By removing the 'middleman' and 'fancy campus' costs, we offer the exact same curriculum as ₹50k+ bootcamps for a fraction of the price."
  },
  {
    category: "academy",
    question: "Do you provide internship opportunities?",
    answer: "Affirmative. Top-performing recruits in the Academy are drafted into our Services division (Red Team/SOC) for live projects."
  },
  {
    category: "academy",
    question: "Is the certification recognized?",
    answer: "Yes. Our curriculum aligns with NIST, OWASP, and CEH frameworks. We focus on practical skills that pass technical interviews, not just paper exams."
  },

  // --- SERVICES QUESTIONS ---
  {
    category: "services",
    question: "We are a seed-stage startup. Is VAPT necessary?",
    answer: "Absolutely. One breach can kill a startup's reputation. We offer 'Startup-First' packages that cover essential OWASP Top 10 vulnerabilities without the enterprise price tag."
  },
  {
    category: "services",
    question: "How long does a Security Audit take?",
    answer: "For most startups, our rapid assessment protocol takes 5-10 days. We deliver critical findings in real-time via Slack/Discord so your devs can fix them immediately."
  },
  {
    category: "services",
    question: "Do you provide compliance support (ISO/SOC2)?",
    answer: "Yes. We don't just find bugs; we prepare your infrastructure for compliance audits. We act as your fractional security team during the certification process."
  },
  {
    category: "services",
    question: "What access do you need?",
    answer: "Depending on the scope (Blackbox vs Whitebox), we may need staging environment URLs, API documentation, or temporary AWS IAM roles. All access is logged and encrypted."
  }
];

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("academy"); // 'academy' or 'services'
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Filter the data based on selection
  const filteredFAQs = faqData.filter(item => item.category === activeTab);

  return (
    <section className="py-24 px-6 relative bg-dark-bg overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-sm mb-4 border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-900/10">
            <HelpCircle size={14} /> KNOWLEDGE_BASE_QUERY
          </div>
          <h2 className="text-4xl font-bold text-white">Frequently <span className="text-cyan-400">Interrogated</span></h2>
        </div>

        {/* --- TAB SELECTOR (THE "SWITCH") --- */}
        <div className="grid grid-cols-2 gap-4 mb-12 bg-slate-900/50 p-2 rounded-xl border border-slate-800">
          
          {/* Academy Tab */}
          <button
            onClick={() => { setActiveTab("academy"); setActiveIndex(null); }}
            className={`relative flex items-center justify-center gap-3 py-4 rounded-lg transition-all duration-300 font-bold tracking-wide ${
              activeTab === "academy" 
                ? "text-cyan-900 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]" 
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <GraduationCap size={20} />
            ACADEMY
            {/* Active Indicator Arrow */}
            {activeTab === "academy" && (
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-cyan-400"></div>
            )}
          </button>

          {/* Services Tab */}
          <button
            onClick={() => { setActiveTab("services"); setActiveIndex(null); }}
            className={`relative flex items-center justify-center gap-3 py-4 rounded-lg transition-all duration-300 font-bold tracking-wide ${
              activeTab === "services" 
                ? "text-slate-900 bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.4)]" 
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <Shield size={20} />
            SERVICES
            {/* Active Indicator Arrow */}
            {activeTab === "services" && (
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-green-400"></div>
            )}
          </button>

        </div>

        {/* --- THE ACCORDION LIST --- */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} // Unique key triggers animation on tab switch
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {filteredFAQs.map((faq, index) => (
                <div 
                  key={index}
                  onClick={() => toggle(index)}
                  className={`border rounded-lg overflow-hidden transition-all duration-300 cursor-pointer group ${
                    activeIndex === index 
                      ? activeTab === "academy" 
                          ? 'bg-slate-900/80 border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.1)]' 
                          : 'bg-slate-900/80 border-green-500/50 shadow-[0_0_15px_rgba(74,222,128,0.1)]'
                      : 'bg-slate-900/30 border-slate-800 hover:border-slate-600'
                  }`}
                >
                  {/* Question Header */}
                  <div className="p-6 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded bg-slate-800 ${
                        activeIndex === index 
                          ? activeTab === "academy" ? 'text-cyan-400' : 'text-green-400'
                          : 'text-slate-500'
                      }`}>
                        <Terminal size={18} />
                      </div>
                      <h3 className={`font-bold text-lg transition-colors ${activeIndex === index ? 'text-white' : 'text-slate-300'}`}>
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`transition-transform duration-300 shrink-0 ${
                        activeIndex === index 
                          ? `rotate-180 ${activeTab === 'academy' ? 'text-cyan-400' : 'text-green-400'}` 
                          : 'rotate-0 opacity-50 text-slate-400'
                      }`} 
                    />
                  </div>

                  {/* Answer Content */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`px-6 pb-6 pt-0 pl-20 border-t mt-2 font-mono text-sm leading-relaxed ${
                           activeTab === "academy" ? "border-cyan-500/10 text-slate-400" : "border-green-500/10 text-slate-400"
                        }`}>
                          <div className="py-4">
                            <span className={`mr-2 ${activeTab === "academy" ? "text-cyan-500" : "text-green-500"}`}>&gt;&gt;</span>
                            {faq.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;