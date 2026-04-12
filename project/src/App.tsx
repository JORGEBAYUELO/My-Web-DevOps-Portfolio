import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 800);
    
    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 flex items-center justify-center overflow-hidden"
        >
          <div className="relative z-10 flex items-center justify-center">

            {/* OUTER RING */}
            <div className="w-14 h-14 rounded-full border border-white/10" />

            {/* SPINNING ACCENT RING */}
            <div className="absolute w-14 h-14 rounded-full border-2 border-transparent border-t-accent animate-spin" />
            
            {/* CENTER DOT (subtle glow) */}
            <div className="absolute w-2 h-2 bg-accent rounded-full shadow-[0_0_12px_rgba(166,227,161,0.8)]" />
          </div>
          {/* BACKGROUND */}
          <div className="absolute inset-0 bg-[#0b0f1a]" />
          
          {/* AMBIENT LIGHT (match Hero) */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-accent/10 blur-[140px] rounded-full" />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen bg-[#0b0f1a] text-text overflow-x-hidden"
        >
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
