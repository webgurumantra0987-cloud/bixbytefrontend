import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight, Globe } from 'lucide-react';
import { ContactModal } from '../../models/ContactModal';

export const PartnersContact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // High-end Architectural Brands
  const brands = ["ARCHDIGEST", "VOGUE LIVING", "DESIGN BOOM", "ELLE DECOR", "DWELL", "LUXURY LIFESTYLE"];

  return (
    <section className="bg-white relative overflow-hidden font-sans">
      
      {/* 1. PARTNER SECTION: High-Contrast Marquee */}
      <div className="py-16 border-y border-black/5 bg-[#FAF9F6]">
        <div className="mb-10 text-center">
          <span className="text-[#828a1c] text-[9px] font-black uppercase tracking-[0.6em]">
            Global Recognition & Press
          </span>
        </div>
        
        {/* Infinite Scroll Effect */}
        <div className="flex overflow-hidden group select-none">
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex flex-nowrap gap-20 items-center min-w-full"
          >
            {[...brands, ...brands].map((brand, index) => (
              <span 
                key={index} 
                className="text-black text-2xl md:text-4xl font-serif italic tracking-tighter opacity-100 hover:text-[#828a1c] transition-colors cursor-default whitespace-nowrap"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 2. MAIN CTA SECTION: Solid Black & Olive Green */}
      <div className="relative py-32 px-6 lg:px-12">
        {/* Large Decorative Text Behind Content */}
        <div className="absolute top-10 left-10 opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-[25vw] font-black leading-none uppercase tracking-tighter">
            Legacy
          </h2>
        </div>

        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          
          {/* Left Side: Bold Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-[#1a1a1a] text-6xl md:text-8xl font-black leading-[0.9] mb-8">
              Begin Your <br /> 
              <span className="italic font-serif text-[#828a1c] font-light">Architectural</span> <br />
              <span className="tracking-tighter uppercase">Legacy.</span>
            </h2>
            <p className="text-black/60 text-lg max-w-md font-light leading-relaxed">
              We translate abstract visions into physical landmarks. Secure your consultation for 2026/27 commissions.
            </p>
          </motion.div>

          {/* Right Side: Interactive Action Box */}
          <div className="flex flex-col gap-6">
            
            {/* Main Action Box */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-black p-12 rounded-[2rem] text-white flex flex-col md:flex-row justify-between items-center gap-10 shadow-2xl"
            >
              <div className="space-y-2">
                <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-widest">Available Globally</span>
                <h3 className="text-3xl font-serif italic">Curated Strategy Session</h3>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="h-20 w-20 bg-[#828a1c] rounded-full flex items-center justify-center hover:scale-110 transition-transform group"
              >
                <ArrowUpRight size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>

            {/* Quick Contact Bar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="mailto:office@bixbite.in" className="flex items-center justify-between p-8 border border-black/10 rounded-2xl hover:border-[#828a1c] hover:bg-white transition-all group">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-[#828a1c]/10 rounded-full flex items-center justify-center text-[#828a1c]">
                    <Mail size={18} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">OFFICE@BIXBITE.IN</span>
                </div>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a href="tel:+91987654321" className="flex items-center justify-between p-8 border border-black/10 rounded-2xl hover:border-[#828a1c] hover:bg-white transition-all group">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-[#828a1c]/10 rounded-full flex items-center justify-center text-[#828a1c]">
                    <Phone size={18} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">+91 987 654 321</span>
                </div>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};