import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCTA = ({ title, description, buttonText, link }) => {
  return (
    <section className="py-20  px-6 lg:px-20 bg-[#0F1113] relative overflow-hidden">
      {/* Background Gradients - Adjusted to Gold glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#D4AF37]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles size={16} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em]">Private Engagement</span>
            </div>
            
            <h2 className="text-[#FAF9F6] text-3xl md:text-5xl lg:text-6xl font-serif italic leading-[1.1] mb-8">
              {title || "Crafting the next generation of "} 
              <br className="hidden md:block" />
              <span className="not-italic font-sans font-black text-white">Structural Poetry.</span>
            </h2>
            
            <p className="text-white/50 text-sm md:text-base max-w-xl leading-relaxed tracking-wide">
              {description || "Limited seasonal openings for turnkey residential and commercial commissions. Begin your architectural narrative with Bixbite Innovation Studio."}
            </p>
          </div>
          
          {/* Action Button */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link 
              to={link || "/contact"} 
              className="group w-full lg:w-auto relative inline-flex items-center justify-between lg:justify-start gap-12 bg-transparent border border-white/20 text-white px-10 py-8 md:py-10 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-700 ease-in-out"
            >
              <span className="text-[11px] font-black uppercase tracking-[0.4em]">
                {buttonText || "Inquire Now"}
              </span>
              <div className="relative">
                <ArrowRight size={22} className="group-hover:translate-x-4 transition-transform duration-500" />
              </div>
            </Link>
          </div>

        </div>

        {/* Branding Sub-text */}
        <div className="mt-10 md:mt-15 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
              Bixbite Innovation Studio © 2026
            </p>
            <div className="flex gap-10">
                <span className="text-[9px] text-white/10 uppercase tracking-[0.3em] font-medium">Engineering Precision</span>
                <span className="text-[9px] text-white/10 uppercase tracking-[0.3em] font-medium">Bespoke Aesthetics</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;