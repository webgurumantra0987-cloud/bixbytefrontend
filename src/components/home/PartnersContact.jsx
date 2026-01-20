import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { ContactModal } from '../../models/ContactModal';


export const PartnersContact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const brands = ["ArchDigest", "Vogue Living", "Luxury Lifestyle", "Design Boom", "Elle Decor"];

  return (
    <section className="bg-[#FAF9F6] relative overflow-hidden">
      
      {/* Dynamic Background Text (Watermark) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[22vw] font-black text-black/[0.02] select-none pointer-events-none uppercase tracking-tighter leading-none">
        Bixbite
      </div>

      {/* Brand Partners Bar */}
      <div className="py-20 border-b border-gray-200 relative z-10">
        <div className="max-w-[1540px] mx-auto px-6 lg:px-12">
          <p className="text-gray-400 text-[9px] font-black uppercase tracking-[0.6em] text-center mb-12">
            Global Recognition & Press
          </p>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
            {brands.map((brand) => (
              <span key={brand} className="text-[#1a1a1a] text-lg md:text-xl font-serif italic tracking-tight border-b border-transparent hover:border-[#d4af37] py-2 cursor-default transition-all">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main CTA Section */}
      <div className="py-10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-5xl mx-auto px-6"
        >
          <h2 className="text-[#1a1a1a] text-5xl md:text-8xl font-light tracking-tighter leading-[1.1] mb-20">
            Begin Your <br /> 
            <span className="italic font-serif text-[#b59431]">Architectural Legacy.</span>
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-16 lg:gap-24">
            
            {/* Email Contact */}
            <div className="space-y-3 group cursor-pointer text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={12} className="text-[#d4af37]" />
                <p className="text-gray-400 text-[9px] font-black uppercase tracking-widest">Inquiries</p>
              </div>
              <a href="mailto:office@bixbite.in" className="block text-[#1a1a1a] text-xs font-bold tracking-[0.3em] hover:text-[#d4af37] transition-colors border-b border-transparent hover:border-[#d4af37] pb-1 uppercase">
                OFFICE@BIXBITE.IN
              </a>
            </div>
            
            {/* Main Action Button - Triggers Modal */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative px-14 py-7 overflow-hidden bg-[#1a1a1a] rounded-sm transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] active:scale-95"
            >
              <span className="absolute inset-0 bg-[#d4af37] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative text-white group-hover:text-black text-[11px] font-black uppercase tracking-[0.5em] transition-colors flex items-center gap-4">
                Start Consultation <ArrowUpRight size={16} />
              </span>
            </button>

            {/* Phone Contact */}
            <div className="space-y-3 group cursor-pointer text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Phone size={12} className="text-[#d4af37]" />
                <p className="text-gray-400 text-[9px] font-black uppercase tracking-widest">Global Desk</p>
              </div>
              <a href="tel:+91987654321" className="block text-[#1a1a1a] text-xs font-bold tracking-[0.3em] hover:text-[#d4af37] transition-colors border-b border-transparent hover:border-[#d4af37] pb-1">
                +91 987 654 321
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal Component */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};