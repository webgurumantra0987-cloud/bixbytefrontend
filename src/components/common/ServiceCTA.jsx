import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCTA = ({ title, description, buttonText, link }) => {
  return (
    /* Changed bg-[#0F1113] to bg-white and border color to black/5 */
    <section className="py-20 px-6 lg:px-20 bg-white relative overflow-hidden border-t border-black/5">
      {/* Subtle Branding Gradients - kept the green but lowered opacity for white background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#828a1c]/40 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#828a1c]/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles size={16} className="text-[#828a1c]" />
              <span className="text-[#828a1c] text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em]">Private Engagement</span>
            </div>
            
            {/* Changed text-[#FAF9F6] to text-[#1a1a1a] (Dark) */}
            <h2 className="text-[#1a1a1a] text-3xl md:text-5xl lg:text-6xl font-serif italic leading-[1.1] mb-8">
              {title || "Crafting the next generation of "} 
              <br className="hidden md:block" />
              {/* Changed text-white to text-black */}
              <span className="not-italic font-sans font-black text-black">Structural Poetry.</span>
            </h2>
            
            {/* Changed text-white/50 to text-black/60 */}
            <p className="text-black/60 text-sm md:text-base max-w-xl leading-relaxed tracking-wide">
              {description || "Limited seasonal openings for turnkey residential and commercial commissions. Begin your architectural narrative with Bixbite Innovation Studio."}
            </p>
          </div>
          
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link 
              to={link || "/contact"} 
              /* Changed border-white/20 to border-black/20 and text-white to text-black */
              className="group w-full lg:w-auto relative inline-flex items-center justify-between lg:justify-start gap-12 bg-transparent border border-black/20 text-black px-10 py-8 md:py-10 hover:bg-[#828a1c] hover:text-white hover:border-[#828a1c] transition-all duration-700 ease-in-out rounded-full md:rounded-none"
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

        {/* Changed border-white/5 to border-black/5 and text colors to dark variants */}
        <div className="mt-10 md:mt-15 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-black/40 uppercase tracking-[0.4em] font-bold">
              Bixbite Innovation Studio © 2026
            </p>
            <div className="flex gap-10">
                <span className="text-[9px] text-black/30 uppercase tracking-[0.3em] font-medium">Engineering Precision</span>
                <span className="text-[9px] text-black/30 uppercase tracking-[0.3em] font-medium">Bespoke Aesthetics</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;