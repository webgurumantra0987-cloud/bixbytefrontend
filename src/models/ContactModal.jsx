import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MapPin, Clock } from 'lucide-react';

export const ContactModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          
          {/* Modal Content Card */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            className="relative w-full max-w-5xl bg-[#FAF9F6] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row h-auto max-h-[95vh]"
          >
            {/* Close Trigger */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-20 p-2 bg-white/80 backdrop-blur hover:bg-[#d4af37] hover:text-white rounded-full transition-all group"
            >
              <X size={20} className="text-black group-hover:text-white" />
            </button>

            {/* Visual Side Panel */}
            <div className="hidden lg:block lg:w-5/12 relative">
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&q=80" 
                className="absolute inset-0 w-full h-full object-cover brightness-75"
                alt="Architecture Studio Consultation"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-12 flex flex-col justify-end text-white">
                <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] mb-4">The Studio</span>
                <h3 className="text-3xl font-serif italic mb-6 leading-tight">Let's craft your <br /> vision together.</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 opacity-80">
                    <MapPin size={14} className="text-[#d4af37]" />
                    <p className="text-[9px] uppercase tracking-[0.2em] font-bold">New Delhi • Dubai • London</p>
                  </div>
                  <div className="flex items-center gap-3 opacity-80">
                    <Clock size={14} className="text-[#d4af37]" />
                    <p className="text-[9px] uppercase tracking-[0.2em] font-bold">Mon - Sat: 10AM - 7PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side Panel */}
            <div className="w-full lg:w-7/12 p-8 md:p-14 overflow-y-auto custom-scrollbar">
              <div className="mb-10">
                <h2 className="text-[#1a1a1a] text-3xl font-light italic font-serif">Consultation Inquiry</h2>
                <div className="w-12 h-[1px] bg-[#d4af37] mt-4"></div>
              </div>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-1 group">
                    <label className="text-[9px] uppercase tracking-widest text-gray-400 font-black">Full Name</label>
                    <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-gray-200 py-3 text-sm outline-none focus:border-[#d4af37] transition-colors placeholder:text-gray-300" />
                  </div>
                  <div className="space-y-1 group">
                    <label className="text-[9px] uppercase tracking-widest text-gray-400 font-black">Email Address</label>
                    <input type="email" placeholder="email@domain.com" className="w-full bg-transparent border-b border-gray-200 py-3 text-sm outline-none focus:border-[#d4af37] transition-colors placeholder:text-gray-300" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-widest text-gray-400 font-black">Service Interest</label>
                  <select className="w-full bg-transparent border-b border-gray-200 py-3 text-sm outline-none focus:border-[#d4af37] transition-colors appearance-none cursor-pointer">
                    <option>Interior Architecture</option>
                    <option>Luxury Exterior Design</option>
                    <option>Turnkey Execution</option>
                    <option>Commercial Planning</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-widest text-gray-400 font-black">Project Brief</label>
                  <textarea rows="3" placeholder="Describe your dream project..." className="w-full bg-transparent border-b border-gray-200 py-3 text-sm outline-none focus:border-[#d4af37] transition-colors resize-none placeholder:text-gray-300"></textarea>
                </div>

                <button className="group relative w-full py-6 bg-[#1a1a1a] overflow-hidden mt-6 transition-transform active:scale-[0.98]">
                  <span className="absolute inset-0 bg-[#d4af37] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                  <span className="relative text-white group-hover:text-black text-[10px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-3">
                    Submit Inquiry <Send size={14} />
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};