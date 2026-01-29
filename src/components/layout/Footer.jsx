import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Plus, 
  Minus, 
  MapPin, 
  Phone 
} from 'lucide-react';
import { exteriorData, interiorData } from '../../Data';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('interior'); 
  const [openSector, setOpenSector] = useState(null);

  const currentData = activeTab === 'interior' ? interiorData : exteriorData;

  const toggleSector = (category) => {
    setOpenSector(openSector === category ? null : category);
  };

  return (
    <footer className="bg-[#0F1113]  pb-6 px-6 sm:px-10 lg:px-20 text-white font-sans selection:bg-white selection:text-black">
      <div className="max-w-[1600px] mx-auto">
        
        {/* HEADER: TAB NAVIGATION */}
        <div className="flex flex-row items-baseline gap-4 mb-8">
          <h2 className="text-white text-[7px] font-black uppercase tracking-[0.5em]">Expertise</h2>
          <div className="flex gap-4">
            {['interior', 'exterior'].map((tab) => (
              <button
                key={tab}
                onClick={() => { 
                  setActiveTab(tab); 
                  setOpenSector(null); 
                }}
                className={`text-lg md:text-xl font-serif italic transition-none ${
                  activeTab === tab ? 'text-white' : 'text-white opacity-20'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT: ACCORDION LIST */}
        <div className="min-h-[200px] space-y-1">
          {currentData.map((sector) => {
            const isOpen = openSector === sector.category;
            return (
              <div key={sector.category} className="overflow-hidden">
                <button
                  onClick={() => toggleSector(sector.category)}
                  className="w-full py-2 flex justify-between items-center text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-white font-mono text-[7px] uppercase tracking-tighter opacity-60">
                      {activeTab === 'interior' ? 'INT' : 'EXT'} — 0{currentData.indexOf(sector) + 1}
                    </span>
                    <h3 className="text-xs md:text-sm lg:text-base uppercase tracking-[0.25em] font-bold text-white">
                      {sector.category}
                    </h3>
                  </div>
                  <div className="text-white">
                    {isOpen ? <Minus size={12} strokeWidth={2} /> : <Plus size={12} strokeWidth={2} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-6 pt-1 animate-in fade-in duration-300">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-2">
                      {sector.services.map((service, idx) => (
                        <Link
                          key={idx}
                          to={`/services/${service.link}`}
                          className="flex items-center justify-between py-0.5"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-[7px] font-mono text-white opacity-40">
                              {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                            </span>
                            <span className="text-[8px] text-white tracking-[0.2em] font-bold uppercase">
                              {service.name}
                            </span>
                          </div>
                          <ArrowUpRight size={8} className="text-white opacity-50 shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FOOTER BOTTOM: ONE ROW ON DESKTOP */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Combined Info Row for Desktop */}
          <div className="flex flex-row flex-wrap items-center gap-x-8 gap-y-3">
            {/* Address & No */}
            <div className="flex items-center gap-2 text-[7px] text-white tracking-[0.3em] uppercase font-bold">
              <MapPin size={9} /> Sector 44, Gurgaon
            </div>
            <div className="flex items-center gap-2 text-[7px] text-white tracking-[0.3em] uppercase font-bold border-r border-white/20 pr-8 hidden lg:flex">
              <Phone size={9} /> +91 9999 999 999
            </div>
            {/* Mobile Phone (no border) */}
            <div className="flex lg:hidden items-center gap-2 text-[7px] text-white tracking-[0.3em] uppercase font-bold">
              <Phone size={9} /> +91 9999 999 999
            </div>

            {/* Legal Links (Integrated in same row) */}
            <div className="flex flex-row flex-wrap gap-x-6 text-white text-[7px] font-black uppercase tracking-[0.4em]">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/conditions">Conditions</Link>
              <span className="opacity-20">© 2026 Bixbite</span>
            </div>
          </div>

          {/* Top Button stays on Right */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-white shrink-0"
          >
            <span className="text-[7px] font-black uppercase tracking-[0.4em]">Top</span>
            <div className="w-7 h-7 border border-white/20 rounded-full flex items-center justify-center">
              <ArrowUpRight size={12} />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;