import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCTA = ({ title, description, buttonText, link }) => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#d4af37]/5 -skew-x-12 translate-x-20"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-white text-4xl md:text-6xl font-serif italic leading-tight mb-6">
              {title || "Ready to transform your vision into reality?"}
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              {description || "Join our elite circle of clients who demand nothing less than architectural perfection."}
            </p>
          </div>
          
          <div className="flex lg:justify-end">
            <Link 
              to={link || "/contact"} 
              className="group relative inline-flex items-center gap-8 bg-[#d4af37] text-black px-12 py-8 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-700"
            >
              <span>{buttonText || "Start Your Consultation"}</span>
              <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;