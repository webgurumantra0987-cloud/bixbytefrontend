import React from 'react';
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ isScrolled }) => {
  return (
    <AnimatePresence mode="wait">
      {!isScrolled && (
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="hidden lg:block bg-[#0a0a0a] border-b border-white/5 py-2 px-12"
        >
          <div className="max-w-[1540px] mx-auto flex justify-between items-center">
            {/* Contact Info */}
             <div className="flex items-center gap-8">
              <a href="mailto:Abc@BIXBITE.in" className="flex items-center gap-2 group">
                {/* Changed to Brand Olive Green */}
                <Mail size={12} className="text-[#828a1c] group-hover:scale-110 transition-transform" />
                <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                  Abc@BIXBITE.in
                </span>
              </a>
              <a href="tel:+91987654321" className="flex items-center gap-2 group">
                {/* Changed to Brand Olive Green */}
                <Phone size={12} className="text-[#828a1c] group-hover:scale-110 transition-transform" />
                <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                  +91 987654321
                </span>
              </a>
            </div>

           <div className="flex items-center gap-6 text-gray-500">
              <div className="flex gap-4">
                <Facebook size={14} className="hover:text-[#828a1c] cursor-pointer transition-colors" />
                <Instagram size={14} className="hover:text-[#828a1c] cursor-pointer transition-colors" />
                <Linkedin size={14} className="hover:text-[#828a1c] cursor-pointer transition-colors" />
              </div>
              <div className="h-3 w-[1px] bg-white/10 mx-1" />
              {/* Changed to Brand Olive Green */}
              <span className="text-[9px] text-[#828a1c] font-black uppercase tracking-[0.4em]">Est. 2026</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header;



