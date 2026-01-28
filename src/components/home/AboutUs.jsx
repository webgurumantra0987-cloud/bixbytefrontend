import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutUs = () => {
  return (
    <section className="py-24 bg-[#FAF9F6] overflow-hidden"> 
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* IMAGE SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Architectural Image Frame - Removed Grayscale */}
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-gray-200 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
                alt="Bixbite Luxury Interior" 
                className="w-full h-full object-cover brightness-100 hover:scale-105 transition-transform duration-1000"
                /* Image now renders in full color without hover grayscale transitions */
              />
            </div>
         
            {/* Stat Badge - Brand Olive Green styling */}
            <div className="absolute -bottom-6 -right-6 bg-white p-8 shadow-2xl border-l-4 border-[#828a1c] hidden xl:block">
              <p className="text-[#828a1c] text-4xl font-serif italic">15+</p>
              <p className="text-gray-400 text-[9px] font-black uppercase tracking-[0.3em] mt-2">Design Awards</p>
            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <div className="lg:col-span-7 space-y-10">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#828a1c]"></span>
              <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.5em]">The Studio</span>
            </div>

            {/* Typography balanced with Hero style */}
            <h2 className="text-[#1a1a1a] text-4xl lg:text-6xl font-light leading-[1.15] tracking-tight max-w-2xl">
              Creating <span className="italic font-serif text-[#828a1c]">Timeless</span> environments that elevate the human experience.
            </h2>

            <div className="space-y-8 max-w-2xl">
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light italic border-l-2 border-gray-100 pl-6">
                "Architecture is not just about space; it is about the emotions that space evokes."
              </p>
              <p className="text-gray-500 text-base leading-relaxed tracking-wide">
                At <strong className="text-[#1a1a1a]">BIXBITE</strong>, we harmonize <span className="text-[#6b4411]">sculptural aesthetics</span> with modern utility. Our approach is deeply personal—curating environments that reflect the unique identity of our clients while maintaining a commitment to <span className="text-[#828a1c]">sustainable luxury</span> and architectural integrity.
              </p>
            </div>

            {/* Feature Grid - Original Olive Branding */}
            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-gray-200">
              <div className="group cursor-default">
                <p className="text-[#1a1a1a] text-2xl font-serif italic group-hover:text-[#828a1c] transition-colors">Bespoke Curation</p>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-3">Tailored Material Selection</p>
              </div>
              <div className="group cursor-default">
                <p className="text-[#1a1a1a] text-2xl font-serif italic group-hover:text-[#828a1c] transition-colors">Future Vision</p>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-3">Sustainable Technology</p>
              </div>
            </div>

            {/* CTA with Brand Olive underline */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="inline-block pt-6"
            >
              <Link to="/about" className="flex items-center gap-4 text-[#1a1a1a] text-[11px] font-black uppercase tracking-[0.4em] border-b-2 border-[#828a1c] pb-3 hover:text-[#828a1c] transition-colors">
                Discover our story <ArrowUpRight size={18} className="text-[#828a1c]" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};