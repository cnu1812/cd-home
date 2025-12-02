import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal, Minus, Square, ShieldAlert, Command } from 'lucide-react'; // Added Command icon
import { motion, AnimatePresence } from 'framer-motion';

const CyberTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBooting, setIsBooting] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // --- KEYBOARD SHORTCUT LISTENER (Ctrl+K) ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check for Ctrl+K or Cmd+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault(); // Prevent browser default (often search bar)
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // --- BOOT SEQUENCE ---
  const runBootSequence = () => {
    setIsBooting(true);
    setHistory([]);
    const bootLines = [
      { text: "BIOS CHECK... OK", delay: 100 },
      { text: "MOUNTING DRIVES... /dev/sda1 [OK]", delay: 300 },
      { text: "LOADING KERNEL... CYBERDEFEND-OS v2.1", delay: 600 },
      { text: "ESTABLISHING SECURE CONNECTION...", delay: 900 },
      { text: "ACCESS GRANTED. WELCOME, GUEST.", delay: 1400 },
      { text: "Type 'help' to view command list.", delay: 1600, type: 'info' }
    ];

    let accumulatedDelay = 0;
    bootLines.forEach((line) => {
      accumulatedDelay += line.delay;
      setTimeout(() => {
        setHistory(prev => [...prev, { type: line.type || 'system', content: line.text }]);
      }, accumulatedDelay);
    });

    setTimeout(() => setIsBooting(false), accumulatedDelay + 200);
  };

  useEffect(() => {
    if (isOpen) runBootSequence();
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isBooting]);

  useEffect(() => {
    if (isOpen && !isBooting) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isBooting]);

  // Hacking Simulation
  const runHackSimulation = () => {
    const hashes = [
      "[+] Bypassing firewall...",
      "[*] Brute-forcing SHA-256...",
      "0x4F 0x9A 0x21 ... FAIL",
      "0x11 0xBB 0xCC ... FAIL",
      "[*] Injecting payload...",
      "[+] Escalating privileges...",
      "[!] ROOT ACCESS GRANTED"
    ];

    hashes.forEach((hash, index) => {
      setTimeout(() => {
        setHistory(prev => [...prev, { type: 'warning', content: hash }]);
      }, index * 400);
    });

    setTimeout(() => {
      setHistory(prev => [
        ...prev, 
        { type: 'success', content: "SECRET FOUND: Use code 'CYBERHACK20' for 20% off on Academy!" }
      ]);
    }, hashes.length * 400 + 500);
  };

  const handleCommand = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < cmdHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(cmdHistory[cmdHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(cmdHistory[cmdHistory.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = ['help', 'whoami', 'ls', 'cat', 'hack', 'clear', 'services', 'academy', 'contact', 'exit'];
      const match = commands.find(c => c.startsWith(input));
      if (match) setInput(match);
    } else if (e.key === 'Enter') {
      if (!input.trim()) return;
      
      const cmd = input.trim().toLowerCase();
      setCmdHistory(prev => [...prev, cmd]);
      setHistoryIndex(-1);
      
      const newHistory = [...history, { type: 'user', content: `guest@cyberdefend:~$ ${input}` }];

      switch (cmd) {
        case 'help':
          newHistory.push({ type: 'success', content: 'CMDS: help, whoami, ls, cat, hack, services, academy, contact, clear' });
          break;
        case 'whoami':
          newHistory.push({ type: 'info', content: 'User: Anonymous | Role: Student Candidate' });
          break;
        case 'ls':
          newHistory.push({ type: 'info', content: 'config.sys  public_keys.pem  secret_coupon.txt' });
          break;
        case 'cat secret_coupon.txt':
          newHistory.push({ type: 'error', content: 'ERROR: File encrypted. Root privileges required. Try "hack" to bypass.' });
          break;
        case 'hack':
          setHistory(newHistory);
          setInput('');
          runHackSimulation();
          return;
        case 'services':
          newHistory.push({ type: 'success', content: 'Opening Services...' });
          setTimeout(() => window.open('https://services.cyberdefend.in', '_blank'), 1000);
          break;
        case 'academy':
          newHistory.push({ type: 'success', content: 'Opening Academy...' });
          setTimeout(() => window.open('https://academy.cyberdefend.in', '_blank'), 1000);
          break;
          case 'contact':
            newHistory.push({ type: 'success', content: 'Opening Contact page...' });
            setTimeout(() => window.open('https://services.cyberdefend.in/contact', '_blank'), 1000);
            break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case 'exit':
          setIsOpen(false);
          return;
        default:
          newHistory.push({ type: 'error', content: `bash: ${cmd}: command not found` });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <>
      {/* TRIGGER BUTTON - Fixed Top Right (Below Navbar) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-24 right-6 z-40 w-12 h-12 flex items-center justify-center bg-slate-900/90 backdrop-blur border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-900/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all group"
        title="Open Terminal (Ctrl+K)"
      >
        <Terminal size={20} />
        {/* Tooltip now includes shortcut hint */}
        <span className="absolute top-14 left-1/2 -translate-x-1/2 bg-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-700 text-cyan-400 flex items-center gap-1">
          Terminal <span className="bg-slate-700 px-1 rounded text-[10px] text-white">⌘K</span>
        </span>
      </button>

      {/* TERMINAL MODAL - Centered Screen */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm font-mono">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-3xl bg-[#0c0c0c] border border-slate-700 rounded-lg shadow-2xl overflow-hidden flex flex-col h-[500px]"
            >
              {/* Window Bar */}
              <div className="bg-[#1a1a1a] px-4 py-2 flex justify-between items-center border-b border-slate-700 select-none">
                <div className="flex gap-2 items-center text-slate-400 text-xs">
                  <ShieldAlert size={14} className="text-yellow-500" />
                  <span>root@cyberdefend-server: ~ (ssh)</span>
                </div>
                <div className="flex gap-2">
                   <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-red-500"><X size={14}/></button>
                </div>
              </div>

              {/* Console Output */}
              <div 
                className="flex-1 overflow-y-auto p-4 space-y-1 cursor-text bg-black/50"
                onClick={() => !isBooting && inputRef.current?.focus()}
                style={{ fontFamily: '"Fira Code", "Courier New", monospace' }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] opacity-20" />

                {history.map((line, i) => (
                  <div key={i} className={`text-sm tracking-wide ${
                    line.type === 'error' ? 'text-red-500' : 
                    line.type === 'success' ? 'text-green-400' : 
                    line.type === 'warning' ? 'text-yellow-400' : 
                    line.type === 'user' ? 'text-cyan-300 mt-2' : 
                    'text-slate-400'
                  }`}>
                    {line.content}
                  </div>
                ))}
                
                {!isBooting && (
                  <div className="flex items-center gap-2 text-cyan-400 mt-2 relative z-20">
                    <span className="font-bold">guest@cyberdefend:~$</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleCommand}
                      className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 text-sm caret-cyan-400"
                      autoFocus
                      spellCheck="false"
                      autoComplete="off"
                    />
                  </div>
                )}
                <div ref={bottomRef} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CyberTerminal;