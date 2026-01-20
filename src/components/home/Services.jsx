import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Sparkles } from 'lucide-react';
import { servicesExpertise } from '../../Data';

export const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-5 p bg-[#FAF9F6] selection:bg-[#d4af37] selection:text-white">
      <div className="max-w-[1540px] mx-auto px-6 lg:px-12">
        
        {/* Header Logic */}
        <div className="mb-6 md:mb-8 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-200 ">
          <div className="max-w-2xl">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">Our Expertise</span>
            <h2 className="text-[#1a1a1a] text-5xl md:text-6xl font-light italic font-serif leading-tight">
              Curating <span className="not-italic font-sans font-bold text-[#b59431]">Excellence.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-medium">Bespoke Design Solutions</p>
        </div>

        {/* Card Grid - 6 Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesExpertise.map((service) => (
            <motion.div 
              key={service.id}
              whileHover={{ y: -12 }}
              className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              {/* Card Image */}
              <img 
                src={service.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                alt={service.title}
              />
              
              {/* Category Badge */}
              <div className="absolute top-8 left-8">
                <span className="bg-[#d4af37] text-black text-[9px] font-black uppercase px-5 py-2 rounded-full tracking-widest shadow-lg">
                  {service.tag}
                </span>
              </div>

              {/* Glass Content Overlay */}
              <div className="absolute inset-x-5 bottom-5 bg-white/20 backdrop-blur-xl border border-white/30 rounded-[2rem] p-8 text-white transform transition-all duration-500 group-hover:bg-white/30">
                <div className="flex justify-between items-start mb-3">
                    <p className="text-[#d4af37] text-[9px] font-black uppercase tracking-[0.3em]">Project — {service.id}</p>
                    <Sparkles size={14} className="text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-3xl font-serif italic mb-6 leading-none">{service.title}</h3>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/20">
                  <button className="text-[10px] font-black uppercase tracking-widest border border-white/50 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-500">
                    View Details
                  </button>
                  <div className="h-12 w-12 bg-[#d4af37] rounded-full flex items-center justify-center text-black shadow-xl group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight size={22} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Details Model */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row h-auto max-h-[90vh]"
            >
              {/* Close Icon */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 z-10 p-3 bg-white/90 backdrop-blur shadow-lg rounded-full hover:bg-[#d4af37] hover:text-white transition-all group"
              >
                <X size={20} className="text-black group-hover:text-white" />
              </button>

              {/* Left Side: Image */}
              <div className="w-full lg:w-1/2 h-72 lg:h-full">
                <img src={selectedService.image} className="w-full h-full object-cover" alt={selectedService.title} />
              </div>

              {/* Right Side: Copy */}
              <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-[#FAF9F6] overflow-y-auto">
                <span className="text-[#d4af37] text-[11px] font-black uppercase tracking-[0.5em] mb-4 block">
                    Architecture Studio
                </span>
                <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-6 italic font-serif leading-tight">
                  {selectedService.title}
                </h2>
                <div className="w-20 h-[2px] bg-[#d4af37] mb-8"></div>
                <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light">
                  {selectedService.fullDescription}
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                    <div className="px-4 py-2 border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400">Concept</div>
                    <div className="px-4 py-2 border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400">Design</div>
                    <div className="px-4 py-2 border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400">Execute</div>
                </div>
                <button className="w-full md:w-fit px-12 py-5 bg-[#d4af37] text-black text-[11px] font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all shadow-xl">
                  Enquire Now
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};