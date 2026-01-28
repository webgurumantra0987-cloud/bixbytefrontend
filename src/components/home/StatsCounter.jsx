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
      className="py-24 bg-[#0f1108]" 
      aria-label="Bixbite Innovation Studio Achievements"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <h2 className="sr-only">Our Architectural Impact and Interior Design Track Record</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="text-center lg:text-left"
              /* Removed the 'group' class to stop hover-based scaling */
            >
              {/* Value with Brand Color - Static and Bold */}
              <p className="text-[#828a1c] text-5xl md:text-7xl font-serif italic mb-3 tracking-tighter">
                {stat.value}
              </p>
              
              {/* SEO Optimized Label */}
              <div className="space-y-1">
                <p className="text-white text-[10px] font-black uppercase tracking-[0.4em] leading-tight">
                  {stat.label}
                </p>
                {/* Contextual Sub-label */}
                <p className="text-[#6b4411] text-[8px] font-bold uppercase tracking-[0.3em] opacity-80">
                  {stat.suffix}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO Contextual Paragraph */}
        <div className="mt-16 pt-10 border-t border-white/5">
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] max-w-4xl leading-relaxed">
            As a leading **Innovation Studio**, Bixbite has transformed over **1.2 million square feet** of space into **sustainable luxury** environments. Our portfolio spans **top-tier residential interiors** and **modern commercial architecture** across **12 major cities**, powered by a team of **45+ elite design professionals**.
          </p>
        </div>
      </div>
    </section>
  );
};