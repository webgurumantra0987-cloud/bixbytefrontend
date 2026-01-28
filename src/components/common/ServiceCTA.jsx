import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';


  

const ServiceCTA = ({ title, description, buttonText, link }) => {
  return (
    /* Background updated to Deep Olive #5d6314 */
    <section className="py-24 px-6 lg:px-12 bg-[#5d6314] relative overflow-hidden">
      
      {/* Background Subtle Overlay for Depth */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
      
      {/* Visual Accent */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={14} className="text-white" />
              <span className="text-white text-[9px] font-black uppercase tracking-[0.5em] opacity-80">
                Private Engagement
              </span>
            </div>
            
            <h2 className="text-white text-4xl md:text-5xl font-serif italic leading-tight mb-6">
              {title || "Crafting the next generation of "} 
              <span className="not-italic font-sans font-black text-black/90">
                Structural Poetry.
              </span>
            </h2>
            
            <p className="text-white/80 text-sm md:text-base max-w-lg leading-relaxed font-medium">
              {description || "Limited seasonal openings for turnkey residential and commercial commissions. Begin your architectural narrative with Bixbite."}
            </p>
          </div>
          
          {/* Action Button: High Contrast Black/White */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <Link 
              to={link || "/contact"} 
              className="group w-full lg:w-auto relative inline-flex items-center justify-between lg:justify-start gap-12 bg-black text-white px-10 py-8 rounded-sm hover:bg-white hover:text-[#5d6314] transition-all duration-700 ease-in-out shadow-2xl"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                {buttonText || "Inquire Now"}
              </span>
              <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
            </Link>
          </div>

        </div>

        {/* Branding Sub-text */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between gap-4">
            <p className="text-[8px] text-white/40 uppercase tracking-[0.4em] font-bold">
              Bixbite Innovation Studio © 2026
            </p>
            <div className="flex gap-8">
                <span className="text-[8px] text-white/50 uppercase tracking-[0.2em] font-black">Engineering Precision</span>
                <span className="text-[8px] text-white/50 uppercase tracking-[0.2em] font-black">Bespoke Aesthetics</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;