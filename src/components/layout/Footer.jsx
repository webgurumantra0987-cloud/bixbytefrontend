import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus, Instagram, Linkedin } from 'lucide-react';
import { exteriorData, interiorData } from '../../Data';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('interior'); 
  const [openSector, setOpenSector] = useState(null);

  const currentData = activeTab === 'interior' ? interiorData : exteriorData;

  return (
    <footer className="bg-[#FAF9F6] pt-24 pb-10 text-black font-sans selection:bg-black selection:text-white border-t border-black/10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-20">
        
        {/* TOP SECTION: TAB NAVIGATION */}
        <div className="mb-20 border-b border-black pb-8">
          <div className="flex items-baseline gap-10">
            <span className="text-black text-[7px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180">
              Expertise
            </span>
            <div className="flex gap-12">
              {['interior', 'exterior'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setOpenSector(null); }}
                  className="relative group"
                >
                  <h2 className={`text-5xl md:text-7xl font-serif italic transition-all duration-500 ${
                    activeTab === tab ? 'text-black' : 'text-black/10 hover:text-black/30'
                  }`}>
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </h2>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          
          {/* LEFT COLUMN: ACCORDION (7 COLS) */}
          <div className="lg:col-span-7 border-t border-black/5">
            {currentData.map((sector, index) => {
              const isOpen = openSector === sector.category;
              return (
                <div key={sector.category} className="border-b border-black/10">
                  <button
                    onClick={() => setOpenSector(isOpen ? null : sector.category)}
                    className="w-full py-10 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-8">
                      <span className="font-mono text-[8px] font-bold text-black/40">0{index + 1}</span>
                      <h3 className={`text-xl md:text-2xl uppercase tracking-[0.2em] font-black transition-all duration-500 ${
                        isOpen ? 'text-black' : 'text-black/20 group-hover:text-black'
                      }`}>
                        {sector.category}
                      </h3>
                    </div>
                    {isOpen ? <Minus size={18} strokeWidth={1} /> : <Plus size={18} strokeWidth={1} className="text-black/20 group-hover:text-black" />}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 pb-12 pl-12">
                          {sector.services.map((service, idx) => (
                            <Link
                              key={idx}
                              to={`/${service.link}`}
                              className="group/link flex items-center justify-between border-b border-black/5 py-2"
                            >
                              <span className="text-[9px] text-black/50 group-hover:text-black uppercase tracking-[0.2em] font-bold transition-colors">
                                {service.name}
                              </span>
                              <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: MAP & CONTACT DETAILS */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            {/* BLACK & WHITE MAP */}
            <div className="w-full h-72 bg-gray-100 overflow-hidden border border-black/10 grayscale contrast-[1.2] invert-[0.05]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.310651910103!2d77.0655259!3d28.4550868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d191ec4d69357%3A0x633458b68832a87a!2sSector%2044%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
            
            {/* CONTACT DETAILS - LARGE FONT SIZES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="text-black text-[9px] font-black uppercase tracking-[0.5em] border-b border-black pb-2 w-fit">Location</p>
                <p className="text-[14px] md:text-[15px] uppercase tracking-[0.12em] leading-relaxed font-bold text-black">
                  Plot 44, Sector 44,<br />
                  Institutional Area, Gurgaon,<br />
                  Haryana 122003
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-black text-[9px] font-black uppercase tracking-[0.5em] border-b border-black pb-2 w-fit">Inquiries</p>
                <div className="text-[14px] md:text-[15px] uppercase tracking-[0.12em] leading-relaxed font-bold flex flex-col gap-2 text-black">
                  <a href="tel:+919876543210" className="hover:opacity-50 transition-opacity">+91 98765 43210</a>
                  <a href="mailto:hello@bixbite.in" className="hover:opacity-50 transition-opacity">hello@bixbite.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL SECTION */}
        <div className="pt-10 border-t border-black flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-10">
            <span className="text-[9px] font-black uppercase tracking-[0.5em]">Bixbite Innovation Studio © 2026</span>
            <div className="flex gap-5">
              <Instagram size={14} strokeWidth={1.5} className="cursor-pointer hover:opacity-50" />
              <Linkedin size={14} strokeWidth={1.5} className="cursor-pointer hover:opacity-50" />
            </div>
          </div>

          <div className="flex items-center gap-8 text-[9px] font-black uppercase tracking-[0.5em]">
            <Link to="/privacy" className="hover:text-black/40 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-black/40 transition-colors">Terms of Service</Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group ml-4"
            >
              <span className="font-black">Back To Top</span>
              <div className="w-8 h-8 border border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <ArrowUpRight size={14} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;