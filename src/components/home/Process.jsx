import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { 
    id: '01', 
    title: 'Consultation', 
    desc: 'Strategic architectural consultation to define your spatial programming and project vision.',
    keywords: 'Architectural Consultancy, Project Planning'
  },
  { 
    id: '02', 
    title: 'Concept Design', 
    desc: 'Bespoke conceptualization using high-fidelity 3D BIM modeling and curated material palettes.',
    keywords: '3D Visualization, Interior Concept'
  },
  { 
    id: '03', 
    title: 'Construction', 
    desc: 'Turnkey construction execution with precision engineering and structural integrity.',
    keywords: 'Turnkey Construction, Structural Engineering'
  },
  { 
    id: '04', 
    title: 'Handover', 
    desc: 'Seamless project delivery featuring final interior styling and architectural curation.',
    keywords: 'Project Delivery, Interior Styling'
  }
];

export const Process = () => {
  return (
    <section className="py-24 bg-white" aria-labelledby="process-heading">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Header Logic - SEO Friendly */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-4 border-b border-gray-100 pb-10">
          <div className="max-w-3xl">
            <h2 id="process-heading" className="text-5xl md:text-6xl font-serif italic text-[#1a1a1a] leading-tight">
              The <span className="text-[#828a1c] not-italic font-sans font-black">Design Journey.</span>
            </h2>
            <p className="mt-4 text-gray-500 font-light max-w-xl">
              From initial **architectural consultation** to final **styling**, our four-stage methodology ensures **sustainable luxury** and precision in every square foot.
            </p>
          </div>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.4em]">Methodology of Excellence</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              aria-label={`Step ${step.id}: ${step.title}`}
            >
              {/* Background Watermark ID */}
              <span className="text-7xl font-serif italic text-gray-50 group-hover:text-[#828a1c]/10 transition-colors duration-500 absolute -top-10 -left-4 -z-0 select-none">
                {step.id}
              </span>

              <div className="relative z-10">
                {/* Hidden Keywords for SEO Crawlers */}
                <span className="sr-only">{step.keywords}</span>
                
                <h3 className="text-xl font-bold uppercase tracking-widest text-[#1a1a1a] mb-4">
                  {step.title}
                </h3>
                
                {/* Brand Olive Green Accent Line */}
                <div className="w-8 h-[2px] bg-[#828a1c] mb-6 group-hover:w-full transition-all duration-700"></div>
                
                <p className="text-gray-500 leading-relaxed font-light text-sm">
                  {step.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};