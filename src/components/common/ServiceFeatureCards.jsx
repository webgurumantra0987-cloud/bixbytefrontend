import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ServiceFeatureCards = ({ title, subtitle, items }) => {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
              {subtitle || "The Process"}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#1a1a1a]">
              {title || "Design Philosophy"}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10 overflow-hidden">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#FAF9F6] p-10 group hover:bg-[#1a1a1a] transition-all duration-700 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="text-3xl font-serif italic text-black/10 group-hover:text-[#d4af37]/20 transition-colors">
                    0{index + 1}
                  </span>
                  <div className="p-3 border border-black/5 text-[#d4af37] group-hover:border-[#d4af37]/20 transition-all">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-[#1a1a1a] group-hover:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#d4af37] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                Learn More <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatureCards;