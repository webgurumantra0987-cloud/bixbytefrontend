import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Paintbrush } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-white flex flex-col pt-24 lg:pt-44 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-12 gap-0 flex-grow">
        
        {/* TEXT CONTENT */}
        <div className="lg:col-span-6 flex flex-col justify-center z-10 pb-16 lg:pb-0 pr-0 lg:pr-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[1px] bg-[#828a1c]"></span>
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.5em]">Bixbite Innovation Studio</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[85px] font-serif italic text-[#1a1a1a] leading-[1.05] mb-8"
          >
            Building <br /> 
            <span className="text-[#828a1c]">Innovation</span> <br /> 
            From Within.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed mb-10 max-w-md"
          >
            Bixbite is a premier <strong>architectural construction and interior design firm</strong>. 
            We blend engineering precision with bespoke aesthetics to define the future of living.
          </motion.p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-10 py-5 bg-[#828a1c] text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#6b4411] transition-all flex items-center gap-4 group">
              Start Execution <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-10 py-5 border border-gray-200 text-[#1a1a1a] text-[10px] font-black uppercase tracking-[0.3em] hover:bg-gray-50 transition-all">
              View Portfolio
            </button>
          </div>
        </div>

        {/* IMAGE & STAT BLOCK */}
        <div className="lg:col-span-6 relative h-[500px] lg:h-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-[90%] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000" 
              className="w-full h-full object-cover brightness-100" 
              /* Removed grayscale and hover effects */
              alt="Luxury Architecture"
            />
          </motion.div>

          {/* Floating 'Bespoke' Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute top-1/2 -left-10 bg-white border border-gray-100 p-8 shadow-2xl hidden xl:flex flex-col items-center min-w-[180px]"
          >
             <Paintbrush className="text-[#828a1c] mb-3" size={24} />
             <p className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a] text-center">Bespoke <br /> Interiors</p>
          </motion.div>

          {/* Solid Brown Stat Box */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-0 right-0 w-4/5 lg:w-2/3 bg-[#6b4411] p-10 lg:p-14 text-white shadow-2xl z-20"
          >
             <Building2 className="text-[#828a1c] mb-6" size={32} />
             <div className="flex items-end gap-4">
                <p className="text-6xl font-serif italic leading-none">150+</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#828a1c] pb-1">Projects <br /> Handed Over</p>
             </div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER TICKER */}
      <div className="w-full bg-[#1a1a1a] py-6">
        <div className="flex justify-around items-center opacity-40">
           {['Residential Architecture', 'Commercial Turnkey', 'Industrial Fit-outs', 'Sustainability Focus'].map((tag) => (
             <span key={tag} className="text-white text-[9px] font-black uppercase tracking-[0.4em]">{tag}</span>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;