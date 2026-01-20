import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
 import { Link } from 'react-router-dom';

export const AboutUs = () => {
  return (
    <section className="py-24 bg-[#FAF9F6] overflow-hidden"> 
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
                alt="Minimalist Luxury Interior" 
                className="w-full h-full object-cover brightness-105 hover:scale-105 transition-transform duration-1000"
              />
            </div>
         
            <div className="absolute -bottom-6 -right-6 bg-white p-8 shadow-xl border border-[#d4af37]/10 hidden xl:block">
              <p className="text-[#d4af37] text-3xl font-serif">15+</p>
              <p className="text-gray-400 text-[9px] font-bold uppercase tracking-widest mt-1 text-center">Design Awards</p>
            </div>
          </motion.div>
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#d4af37]"></span>
              <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em]">The Studio</span>
            </div>

            {/* Reduced Heading Size for Professional Look */}
            <h2 className="text-[#1a1a1a] text-4xl lg:text-5xl font-light leading-[1.2] tracking-tight max-w-xl">
              Creating <span className="italic font-serif text-[#b59431]">Timeless</span> environments that elevate the human experience.
            </h2>

            <div className="space-y-6 max-w-2xl">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light italic">
                "Architecture is not just about space; it is about the emotions that space evokes."
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                At BIXBITE, we harmonize **sculptural aesthetics** with modern utility. Our approach is deeply personal—curating environments that reflect the unique identity of our clients while maintaining a commitment to **sustainable luxury** and architectural integrity.
              </p>
            </div>

            {/* Feature Grid with Light Styling */}
            <div className="grid grid-cols-2 gap-12 pt-10 border-t border-gray-200">
              <div className="group cursor-default">
                <p className="text-[#1a1a1a] text-xl font-serif group-hover:text-[#d4af37] transition-colors">Bespoke Curation</p>
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] mt-2">Tailored Material Selection</p>
              </div>
              <div className="group cursor-default">
                <p className="text-[#1a1a1a] text-xl font-serif group-hover:text-[#d4af37] transition-colors">Future Vision</p>
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] mt-2">Sustainable Technology</p>
              </div>
            </div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="inline-block pt-4"
            >
              <Link to="/about" className="flex items-center gap-3 text-[#1a1a1a] text-[11px] font-black uppercase tracking-[0.3em] border-b border-[#d4af37] pb-2">
                Discover our story <ArrowUpRight size={16} className="text-[#d4af37]" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};