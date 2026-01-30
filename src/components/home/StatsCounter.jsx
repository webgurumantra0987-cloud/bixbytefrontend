import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { 
    label: 'Luxury Projects Delivered', 
    value: '250+', 
    suffix: 'Executed' 
  },
  { 
    label: 'Cities Across India', 
    value: '12', 
    suffix: 'Presence' 
  },
  { 
    label: 'Square Feet Designed', 
    value: '1.2M', 
    suffix: 'Area' 
  },
  { 
    label: 'Architectural Experts', 
    value: '45+', 
    suffix: 'Specialists' 
  },
];

export const StatsCounter = () => {
  return (
    <section 
      className="py-32 bg-[#839705] relative overflow-hidden" 
      aria-label="Bixbite Achievements"
    >
      {/* Subtle background texture/watermark */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
        <span className="text-[20vw] font-black text-white leading-none uppercase tracking-tighter">
          Studio
        </span>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: "easeOut" }}
              className="group"
            >
              {/* Index - Small and clean */}
              <span className="text-black/40 font-mono text-[9px] mb-4 block group-hover:text-white transition-colors">
                // 0{i + 1}
              </span>

              {/* Value: Off-White for high visibility against green */}
              <p className="text-[#FAF9F6] text-6xl md:text-7xl lg:text-8xl font-serif italic mb-6 tracking-tighter leading-none transition-transform duration-500 group-hover:-translate-y-2">
                {stat.value}
              </p>
              
              {/* Labels: Solid Black for grounding */}
              <div className="space-y-2">
                <p className="text-black text-[11px] font-black uppercase tracking-[0.4em] leading-tight">
                  {stat.label}
                </p>
                <div className="flex items-center gap-3">
                   <div className="h-[1px] w-6 bg-black/20" />
                   <p className="text-black/60 text-[9px] font-bold uppercase tracking-[0.3em]">
                     {stat.suffix}
                   </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom SEO Text - Clean Black & White balance */}
        <div className="mt-24 pt-10 border-t border-black/10 flex flex-col md:flex-row justify-between items-start gap-8">
          <p className="text-black/70 text-[10px] uppercase tracking-[0.3em] max-w-4xl leading-relaxed">
            Leading the <strong className="text-white">Innovation Frontier</strong> in sustainable luxury. 
            Bixbite manages <strong className="text-white">1.2 million sq.ft</strong> across 
            <strong className="text-black"> 12 major cities</strong>.
          </p>
          <div className="shrink-0">
             <span className="inline-block px-4 py-2 border border-black/20 text-black text-[9px] font-black uppercase tracking-widest">
               2026 Archive
             </span>
          </div>
        </div>
      </div>
    </section>
  );
};