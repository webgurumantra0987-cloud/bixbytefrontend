import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* --- BACKGROUND IMAGE WITH OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover scale-105"
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* --- CONTENT --- */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Logo/Title (Inspired by IS LUXURY) */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-white text-[10px] md:text-[12px] font-bold tracking-[0.8em] uppercase mb-4 opacity-80">
            The Pinnacle of Design
          </h2>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-light tracking-widest uppercase italic font-serif">
            BIXBITE<span className="text-[#d4af37]">.</span>
          </h1>
        </motion.div>

        {/* --- INTERACTIVE GHOST CARDS (The 3 Boxes) --- */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 md:border border-white/20"
        >
          {[
            { title: "Residential", subtitle: "Crafting Private Havens", link: "/residential" },
            { title: "Commercial", subtitle: "Strategic Workspaces", link: "/commercial" },
            { title: "Hospitality", subtitle: "Immersive Experiences", link: "/hospitality" }
          ].map((box, i) => (
            <a 
              key={i}
              href={box.link}
              className="group relative p-12 md:p-16 border border-white/20 md:border-none overflow-hidden transition-all duration-700"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <p className="text-[#d4af37] text-[8px] tracking-[0.4em] uppercase mb-3 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {box.subtitle}
                </p>
                <h3 className="text-white text-xs md:text-sm font-bold tracking-[0.5em] uppercase group-hover:scale-110 transition-transform duration-500">
                  {box.title}
                </h3>
              </div>
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50"
      >
        <span className="text-[8px] uppercase tracking-[0.6em] mb-4">Discover More</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;