import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ChevronRight } from 'lucide-react';
import { interiorData, exteriorData } from '../../Data';

export const Services = () => {
  const [activeType, setActiveType] = useState('interior'); 
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedService ? 'hidden' : 'unset';
  }, [selectedService]);

  const currentData = activeType === 'interior' ? interiorData : exteriorData;

  const interiorImages = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069"
  ];

  const exteriorImages = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070"
  ];

  const getCategoryImage = (index) => {
    const images = activeType === 'interior' ? interiorImages : exteriorImages;
    return images[index % images.length];
  };

  return (
    <section className="py-20 bg-[#FAF9F6] text-[#1a1a1a] font-sans">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* HEADER - Updated Typography & Colors */}
        <div className="mb-12 border-b border-black/5 pb-8">
          <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em] mb-6 block">Our Expertise</span>
          <div className="flex gap-8 md:gap-14 items-baseline overflow-x-auto no-scrollbar">
            {['interior', 'exterior'].map((type) => (
              <button
                key={type}
                onClick={() => { setActiveType(type); setSelectedService(null); }}
                className="relative group pb-4"
              >
                {/* Tab text: 
                  - Solid Black if inactive
                  - Green if active or on hover 
                */}
                <h2 className={`text-4xl md:text-6xl font-serif italic transition-colors duration-500 whitespace-nowrap ${
                  activeType === type ? 'text-[#828a1c]' : 'text-black hover:text-[#828a1c]'
                }`}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </h2>
                
                {activeType === type && (
                  <motion.div 
                    layoutId="activeTabUnderline" 
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-[#828a1c]" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* GRID - With Fade-in animation for tab switching */}
        <motion.div 
          key={activeType}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {currentData.map((sector, index) => (
            <motion.div 
              key={sector.category}
              whileHover={{ y: -5 }}
              className="group relative h-[420px] rounded-[1.5rem] overflow-hidden cursor-pointer"
              onClick={() => setSelectedService({ ...sector, displayImage: getCategoryImage(index) })}
            >
              <img 
                src={getCategoryImage(index)} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                alt={sector.category} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-white text-3xl font-serif italic mb-4 group-hover:text-[#828a1c] transition-colors duration-500">
                  {sector.category}
                </h3>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-white/40 text-[8px] font-black uppercase tracking-widest group-hover:text-white transition-colors">Explore Sector</span>
                  <div className="h-10 w-10 border border-white/20 rounded-full flex items-center justify-center text-white group-hover:bg-[#828a1c] group-hover:border-[#828a1c] transition-all duration-500">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* MODAL - Maintained structural integrity */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[85vh]"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-[1010] w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#828a1c] transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-full lg:w-5/12 h-64 lg:h-auto shrink-0">
                <img src={selectedService.displayImage} className="w-full h-full object-cover" alt="" />
              </div>

              <div className="w-full lg:w-7/12 p-8 lg:p-12 flex flex-col bg-white overflow-hidden">
                <span className="text-[#828a1c] text-[9px] font-black uppercase tracking-[0.4em] mb-3 block">Service Scope</span>
                <h2 className="text-3xl md:text-5xl font-serif italic text-black mb-8 leading-tight">
                  {selectedService.category}
                </h2>
                
                <div className="flex-grow overflow-y-auto pr-4 custom-scrollbar mb-8">
                  {selectedService.services.map((service, idx) => (
                    <div key={idx} className="flex items-center justify-between py-4 border-b border-black/5 group cursor-pointer hover:border-[#828a1c] transition-colors">
                       <span className="text-[10px] text-black/60 group-hover:text-black uppercase tracking-widest font-black transition-colors">
                         {service.name}
                       </span>
                       <ChevronRight size={14} className="text-[#828a1c] opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </div>
                  ))}
                </div>

                <button className="w-full py-5 bg-black text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-[#828a1c] transition-all shadow-xl active:scale-95">
                  Request Briefing
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section> 
  );
};