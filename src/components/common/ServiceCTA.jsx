import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCTA = ({ title, description, buttonText, link }) => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#050505] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#828a1c]/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={14} className="text-[#828a1c]" />
              <span className="text-[#828a1c] text-[9px] font-bold uppercase tracking-[0.5em]">Private Engagement</span>
            </div>
            
            {/* Reduced from text-7xl to text-5xl */}
            <h2 className="text-white text-4xl md:text-5xl font-serif italic leading-tight mb-6">
              {title || "Crafting the next generation of "} 
              <span className="not-italic font-sans font-black text-[#828a1c]">Structural Poetry.</span>
            </h2>
            
            {/* Reduced from text-xl to text-base */}
            <p className="text-gray-500 text-sm md:text-base max-w-lg leading-relaxed opacity-80">
              {description || "Limited seasonal openings for turnkey residential and commercial commissions. Begin your architectural narrative with Bixbite."}
            </p>
          </div>
          
          {/* Action Button */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <Link 
              to={link || "/contact"} 
              className="group w-full lg:w-auto relative inline-flex items-center justify-between lg:justify-start gap-10 bg-[#828a1c] text-white px-8 py-8 rounded-sm hover:bg-white hover:text-black transition-all duration-700 ease-in-out"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                {buttonText || "Inquire Now"}
              </span>
              <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
            </Link>
          </div>

        </div>

        {/* Branding Sub-text */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4">
            <p className="text-[8px] text-white/20 uppercase tracking-[0.4em] font-bold">
              Bixbite Innovation Studio © 2026
            </p>
            <div className="flex gap-8">
                <span className="text-[8px] text-white/30 uppercase tracking-[0.2em]">Engineering Precision</span>
                <span className="text-[8px] text-white/30 uppercase tracking-[0.2em]">Bespoke Aesthetics</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;