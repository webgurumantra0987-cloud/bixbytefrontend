import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { homepagevideo } from '../../image';

export const AboutUs = () => {
  return (
    <section className="py-24 bg-[#FAF9F6] overflow-hidden font-sans"> 
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* items-stretch ensures both columns take the same height */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* VISUAL SIDE - Increased width to exactly 50% */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-full"
          >
            {/* Aspect ratio set to match content height better */}
            <div className="h-full min-h-[500px] lg:min-h-[650px] overflow-hidden rounded-sm bg-[#1a1a1a] shadow-[30px_30px_80px_-15px_rgba(0,0,0,0.15)] relative">
              <video
                src={homepagevideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            </div>

            {/* Floating Stat Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-8 lg:p-10 shadow-2xl border-l-[6px] border-[#828a1c] hidden xl:block z-20">
              <p className="text-[#828a1c] text-5xl font-serif italic leading-none">15+</p>
              <p className="text-black text-[10px] font-black uppercase tracking-[0.3em] mt-4 whitespace-nowrap">
                Global Design Awards
              </p>
            </div>
          </motion.div>

          {/* CONTENT SIDE - Perfectly Aligned to Card Height */}
          <div className="flex flex-col justify-between py-2">
            <div className="space-y-10">
              {/* Top Branding */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-[#828a1c]"></span>
                  <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.5em]">The Studio</span>
                </div>

                <h2 className="text-[#1a1a1a] text-5xl lg:text-7xl xl:text-8xl font-light leading-[1.1] tracking-tighter">
                  Creating <br />
                  <span className="italic font-serif text-[#828a1c]">Timeless</span> <br /> 
                  spaces.
                </h2>
              </div>

              {/* Central Message */}
              <div className="space-y-8 max-w-xl">
                <p className="text-black text-xl lg:text-2xl leading-relaxed font-light italic border-l-2 border-[#828a1c] pl-8">
                  "We don't just build structures; we curate the atmosphere between the walls."
                </p>

                <div className="space-y-6 text-black/80 text-base lg:text-lg leading-relaxed tracking-wide">
                  <p>
                    At <strong className="text-[#1a1a1a] font-black">BIXBITE</strong>, we bridge the gap between 
                    <span className="text-[#828a1c] font-medium italic"> raw materiality</span> and sophisticated comfort. 
                    Every project is an exercise in precision.
                  </p>
                  <p>
                    Our philosophy is <span className="text-[#828a1c] font-bold">Sustainable Luxury</span>: 
                    designing for the future without compromising the tactile richness of the present.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Interaction Area - Aligned to bottom of video card */}
            <div className="mt-12 pt-8 border-t border-black/10">
               <div className="flex flex-wrap items-center justify-between gap-8">
                  <div className="flex gap-10">
                    <div>
                      <p className="text-black text-xl font-serif italic">Bespoke</p>
                      <p className="text-black/40 text-[8px] font-black uppercase tracking-widest mt-1">Curation</p>
                    </div>
                    <div>
                      <p className="text-black text-xl font-serif italic">Future</p>
                      <p className="text-black/40 text-[8px] font-black uppercase tracking-widest mt-1">Vision</p>
                    </div>
                  </div>

                  <Link 
                    to="/about" 
                    className="inline-flex items-center gap-5 text-[#1a1a1a] text-[11px] font-black uppercase tracking-[0.4em] group"
                  >
                    <span className="border-b border-[#828a1c] pb-2 group-hover:pr-4 transition-all duration-500">
                      Discover story
                    </span>
                    <div className="h-12 w-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#828a1c] group-hover:text-white transition-all duration-500">
                      <ArrowUpRight size={18} className="transition-transform group-hover:rotate-45" />
                    </div>
                  </Link>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};