import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building2 } from 'lucide-react';

const Hero = () => {
  const slides = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000",
    "https://media.istockphoto.com/id/2166310230/photo/a-quiet-luxury-living-room-interior-with-glamour-and-traditional-furniturea-quiet-luxury.webp?a=1&b=1&s=612x612&w=0&k=20&c=Kx8eRjCVMHVaVcCSKYLQVGMfm68Y2k02Ym50TUBB0FU=",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000",
    "https://media.istockphoto.com/id/2157083256/photo/modern-living-room-interior-with-white-sofa-against-the-wood-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=FwSat6lWcfY2K3ZhZ49p3IzwVf2t8KKFZPMby5dimIE="
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-[#050505]">
      
      {/* 1. BACKGROUND SLIDER (FULL SCREEN) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "linear" }}
            className="absolute inset-0"
          >
            {/* Ken Burns Effect: Subtle zoom-in */}
            <motion.img 
              src={slides[current]} 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 5, ease: "easeOut" }}
              className="w-full h-full object-cover" 
              alt="Bixbite Architecture"
            />
            {/* Progressive Dark Overlay: Stronger on the left for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. OVERLAY CONTENT */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-[1px] bg-[#828a1c]"></span>
              <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.5em]">
                Est. 2026 Innovation Studio
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white text-5xl md:text-8xl font-serif italic leading-[1.1] mb-8"
            >
              Building <br /> 
              <span className="not-italic font-sans font-black text-[#828a1c] uppercase tracking-tighter">Innovation</span> <br /> 
              From Within.
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-10 py-5 bg-[#828a1c] text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-[#828a1c] transition-all duration-500 flex items-center gap-4 group">
                Start Execution <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-10 py-5 border border-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500">
                View Portfolio
              </button>
            </motion.div>
          </div>

          {/* Floating Stat Card */}
          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 max-w-[280px]"
            >
              <Building2 className="text-[#828a1c] mb-6" size={32} />
              <p className="text-5xl font-serif italic text-white mb-2">150+</p>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#828a1c] leading-loose">
                Premium Projects <br /> Handed Over
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3. NAVIGATION INDICATORS (Bottom Right) */}
      <div className="absolute bottom-12 right-12 z-20 flex flex-col gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-12 w-[2px] transition-all duration-500 ${
              current === i ? "bg-[#828a1c] h-16" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;