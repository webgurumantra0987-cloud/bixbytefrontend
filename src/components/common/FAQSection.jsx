import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = ({ items, title = "Frequently Asked Questions", subtitle = "Inquiry" }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" max-w-4xl mx-auto px-6">
      <div className="text-center mb-10">
        <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
          {subtitle}
        </span>
        <h2 className="text-3xl md:text-5xl font-serif italic text-[#1a1a1a]">
          {title}
        </h2>
      </div>

      <div className="space-y-4">
        {items.map((item, i) => (
          <div 
            key={i} 
            className="border-b border-black/5 pb-6 transition-all duration-500"
          >
            <button 
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center text-left group"
            >
              <h4 className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a] group-hover:text-[#d4af37] transition-colors">
                {item.q}
              </h4>
              <div className="text-[#d4af37]">
                {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === i ? "max-h-40 mt-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;