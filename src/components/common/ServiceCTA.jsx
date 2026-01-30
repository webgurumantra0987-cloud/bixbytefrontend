import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCTA = ({ title, description, buttonText, link }) => {
  return (
    /* Background changed to your specific Olive Green #839705 */
    <section className="py-24 bg-[#839705] px-6 lg:px-12 relative overflow-hidden font-sans">
      
      {/* Dynamic Brand Accents - Subtle Light Orbs for depth on dark green */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-10">
              <Sparkles size={14} className="text-white" />
              <span className="text-white text-[10px] md:text-[11px] font-black uppercase tracking-[0.6em]">
                Private Engagement
              </span>
            </div>
            
            {/* High Contrast Typography: Linen White for the main heading */}
            <h2 className="text-[#FAF9F6] text-4xl md:text-6xl lg:text-7xl font-serif italic leading-[1.05] mb-8 tracking-tight">
              {title || "Crafting the next generation of "} 
              <br className="hidden md:block" />
              <span className="not-italic font-sans font-black text-black uppercase tracking-tighter">
                Structural Poetry.
              </span>
            </h2>
            
            {/* Description: High contrast against green */}
            <p className="text-black/80 text-base md:text-lg max-w-xl leading-relaxed tracking-wide font-medium border-l-2 border-white pl-8">
              {description || "Limited seasonal openings for turnkey residential and commercial commissions. Begin your architectural narrative with Bixbite Innovation Studio."}
            </p>
          </div>
          
          <div className="lg:col-span-4 flex lg:justify-end">
            {/* CTA Button: White background to pop off the Olive Green */}
            <Link 
              to={link || "/contact"} 
              className="group w-full lg:w-auto relative inline-flex items-center justify-between lg:justify-start gap-16 bg-[#FAF9F6] border border-transparent text-black px-12 py-10 hover:bg-black hover:text-white transition-all duration-700 ease-in-out shadow-xl"
            >
              <span className="text-[12px] font-black uppercase tracking-[0.5em]">
                {buttonText || "Inquire Now"}
              </span>
              <div className="relative overflow-hidden w-6 h-6">
                <ArrowRight size={24} className="absolute inset-0 group-hover:translate-x-8 transition-transform duration-500 ease-in-out" />
                <ArrowRight size={24} className="absolute inset-0 -translate-x-8 group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              </div>
            </Link>
          </div>
        </div>

        {/* Studio Signature Footer: Styled for Dark Background */}
        <div className="mt-20 pt-10 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
               <div className="w-8 h-[1px] bg-white" />
               <p className="text-[10px] text-black/60 uppercase tracking-[0.4em] font-bold">
                 Bixbite Technology  © 2026
               </p>
            </div>
            <div className="flex gap-12">
                <span className="text-[9px] text-white uppercase tracking-[0.4em] font-black">Engineering Precision</span>
                <span className="text-[9px] text-black/40 uppercase tracking-[0.4em] font-medium">Bespoke Aesthetics</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;