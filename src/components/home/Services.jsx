import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Sparkles } from 'lucide-react';
import { servicesExpertise } from '../../Data';

export const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-24 bg-[#FAF9F6] selection:bg-[#828a1c] selection:text-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Header Logic */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-200 pb-8">
          <div className="max-w-2xl">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">Our Expertise</span>
            <h2 className="text-[#1a1a1a] text-5xl md:text-7xl font-light italic font-serif leading-tight">
              Curating <span className="not-italic font-sans font-black text-[#828a1c]">Excellence.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-[10px] uppercase tracking-[0.4em] font-bold">Bespoke Design Solutions</p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesExpertise.map((service) => (
            <motion.div 
              key={service.id}
              whileHover={{ y: -12 }}
              className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] cursor-pointer bg-white"
              onClick={() => setSelectedService(service)}
            >
              {/* Card Image - Removed grayscale and pulse animations */}
              <img 
                src={service.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                alt={service.title}
                /* Image is now full color by default */
              />
              
              {/* Category Badge - Olive Green */}
              <div className="absolute top-8 left-8">
                <span className="bg-[#828a1c] text-white text-[9px] font-black uppercase px-6 py-2.5 rounded-full tracking-widest shadow-xl">
                  {service.tag}
                </span>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-x-5 bottom-5 bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 rounded-[1.5rem] p-8 text-white transform transition-all duration-500 group-hover:bg-[#828a1c]/90">
                <div className="flex justify-between items-start mb-3">
                    <p className="text-[#828a1c] group-hover:text-white text-[9px] font-black uppercase tracking-[0.3em] transition-colors">Project — {service.id}</p>
                    <Sparkles size={14} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-3xl font-serif italic mb-6 leading-none tracking-tight">{service.title}</h3>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-80">
                    Explore Space
                  </span>
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-[#1a1a1a] shadow-xl group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight size={20} />
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
              className="absolute inset-0 bg-[#0f1108]/90 backdrop-blur-lg"
            />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row h-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 z-10 p-3 bg-white shadow-xl rounded-full hover:bg-[#828a1c] hover:text-white transition-all group"
              >
                <X size={20} className="text-black group-hover:text-white" />
              </button>

              <div className="w-full lg:w-1/2 h-80 lg:h-auto overflow-hidden">
                <img src={selectedService.image} className="w-full h-full object-cover" alt={selectedService.title} />
              </div>

              <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white overflow-y-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[1px] bg-[#828a1c]"></div>
                  <span className="text-[#828a1c] text-[11px] font-black uppercase tracking-[0.5em]">
                    Innovation Studio
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-light text-[#1a1a1a] mb-8 italic font-serif leading-tight">
                  {selectedService.title}
                </h2>
                
                <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light border-l-2 border-[#828a1c]/20 pl-6">
                  {selectedService.fullDescription}
                </p>

                <div className="flex flex-wrap gap-3 mb-12">
                    {['Concept', 'Design', 'Execute'].map(tag => (
                      <span key={tag} className="px-5 py-2 bg-gray-50 rounded-full text-[9px] font-black uppercase tracking-widest text-gray-400 border border-gray-100">
                        {tag}
                      </span>
                    ))}
                </div>

                <button className="w-full md:w-fit px-12 py-6 bg-[#1a1a1a] text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#828a1c] transition-all shadow-2xl flex items-center justify-center gap-4 group">
                  Start Consultation <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};