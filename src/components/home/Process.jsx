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
    <section className=" bg-white font-sans" aria-labelledby="process-heading">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Header - EXACT font sizes from your screenshot */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-4 border-b border-black/5 pb-12">
          <div className="max-w-4xl">
            <h2 id="process-heading" className="text-5xl md:text-7xl font-serif italic text-[#1a1a1a] leading-tight">
              The <span className="text-[#828a1c] not-italic font-sans font-black">Design Journey.</span>
            </h2>
            <p className="mt-6 text-gray-500 font-light max-w-2xl text-lg leading-relaxed">
              From initial **architectural consultation** to final **styling**, our four-stage methodology ensures **sustainable luxury** and precision in every square foot.
            </p>
          </div>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.5em] whitespace-nowrap">
            Methodology of Excellence
          </p>
        </div>
        
        {/* Grid - Clean, Architectural Best UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
          {steps.map((step, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              {/* Subtle Watermark Number - High End Feel */}
              <div className="absolute -top-12 left-0 overflow-hidden pointer-events-none">
                <span className="text-9xl font-black text-black/[0.03] group-hover:text-[#828a1c]/10 transition-colors duration-700 leading-none">
                  {step.id}
                </span>
              </div>

              <div className="relative z-10 pt-4">
                {/* Heading & Accent */}
                <h3 className="text-xl font-black uppercase tracking-[0.2em] text-[#1a1a1a] mb-5 flex items-center gap-3">
                  <span className="text-[#828a1c] font-mono text-xs">{step.id}</span>
                  {step.title}
                </h3>
                
                {/* Brand Olive Green Accent Line - Animates on hover */}
                <div className="w-12 h-[2px] bg-[#828a1c] mb-8 group-hover:w-full transition-all duration-1000 ease-out"></div>
                
                <p className="text-gray-500 leading-relaxed font-light text-[15px] mb-8">
                  {step.desc}
                </p>

                {/* Vertical Pill - Keyword Detail */}
                <div className="flex flex-col gap-1 border-l-2 border-gray-50 pl-4 py-1 group-hover:border-[#828a1c]/20 transition-colors">
                    {step.keywords.split(', ').map((kw, i) => (
                        <span key={i} className="text-[9px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-600 transition-colors">
                            {kw}
                        </span>
                    ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;