import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight, Sparkles, Instagram, Linkedin, Plus, Minus } from "lucide-react";
import { interiorData, exteriorData } from "../../Data";
import { companylogo } from "../../image";

// --- YOUR ORIGINAL DESKTOP MEGAMENU (UNCHANGED) ---
const DesktopMegaMenu = ({ data, isOpen }) => {
  return (
    <div className={`absolute left-0 top-full pt-4 w-full transition-all duration-500 z-[100] ${
      isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
    }`}>
      <div className="bg-[#0a0a0a]/98 backdrop-blur-2xl w-full border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.9)] flex flex-col h-[65vh] rounded-sm overflow-hidden mx-auto">
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
            {data.map((section, i) => (
              <div key={i} className="px-0 lg:px-6 first:pl-0 last:pr-0 pb-6 lg:pb-0 group/section">
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                  <section.icon size={16} className="text-[#d4af37]" />
                  <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em]">
                    {section.category}
                  </h4>
                </div>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {section.services.map((service, j) => (
                    <li key={j} className="relative group/item min-h-[32px]">
                      <Link to="/contact" className="flex flex-col h-full">
                        <div className="flex items-start gap-2">
                          <span className="text-[8.5px] text-gray-400 uppercase tracking-widest leading-relaxed group-hover/item:text-white transition-colors line-clamp-2">
                            {service.name}
                          </span>
                        </div>
                        <span className="h-[1px] w-0 bg-[#d4af37] group-hover/item:w-full transition-all duration-500 mt-1"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#d4af37] py-4 px-10 flex justify-between items-center shrink-0 border-t border-white/10">
          <div className="flex items-center gap-3">
            <Sparkles size={12} className="text-black animate-pulse flex-shrink-0" />
            <p className="text-black text-[9px] font-black uppercase tracking-[0.15em] leading-tight">
              Elite Architectural Designs & Turnkey Execution
            </p>
          </div>
          <Link to="/contact" className="text-black text-[9px] font-black uppercase tracking-[0.2em] border-b-2 border-black font-black hover:pb-0.5 transition-all">
            Schedule a Consultation →
          </Link>
        </div>
      </div>
    </div>
  );
};

// --- MOBILE ACCORDION FOR SIDEBAR ---
const MobileAccordion = ({ title, data, isOpen, toggle }) => {
  return (
    <div className="border-b border-white/5 py-4">
      <button onClick={toggle} className="w-full flex justify-between items-center text-white text-2xl font-light italic font-serif">
        {title} {isOpen ? <Minus size={18} className="text-[#d4af37]" /> : <Plus size={18} className="text-[#d4af37]" />}
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[1200px] mt-6" : "max-h-0"}`}>
        {data.map((section, i) => (
          <div key={i} className="mb-6">
            <p className="text-[#d4af37] text-[8px] font-black uppercase tracking-[0.3em] mb-3 opacity-60">{section.category}</p>
            <ul className="space-y-3 pl-2">
              {section.services.map((service, j) => (
                <li key={j}>
                  <Link to="/contact" className="text-gray-400 text-sm hover:text-white flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#d4af37] rounded-full"></span> {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const Navbar = ({ isScrolled }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "unset";
  }, [isSidebarOpen]);

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-700 ${isScrolled ? "bg-[#0f0f0f]/95 py-3 border-b border-white/5 shadow-2xl" : "bg-transparent py-8"}`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center relative">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-4 shrink-0">
            <img src={companylogo} alt="Bixbite" className="h-10 lg:h-12 brightness-0 invert" />
            <div className="hidden md:flex flex-col border-l border-white/10 pl-4 uppercase font-bold text-white">
              <p className="text-xl tracking-tighter leading-none">Bixbite<span className="text-[#d4af37]">.</span></p>
              <p className="text-[7px] text-gray-500 tracking-[0.5em] mt-1 font-medium text-nowrap">Architecture Studio</p>
            </div>
          </Link>

          {/* DESKTOP MENU - Restoration of original logic */}
          <div className="hidden xl:flex items-center gap-2">
            <Link to="/" className="text-[10px] px-5 py-2 text-gray-400 font-bold uppercase tracking-widest hover:text-white transition-all">Home</Link>
            <Link to="/about" className="text-[10px] px-5 py-2 text-gray-400 font-bold uppercase tracking-widest hover:text-white transition-all">About Us</Link>

            <div className="py-2" onMouseEnter={() => setActiveMenu('interior')} onMouseLeave={() => setActiveMenu(null)}>
              <button className={`flex items-center text-[10px] px-5 py-2 font-bold uppercase tracking-widest transition-colors ${activeMenu === 'interior' ? 'text-white' : 'text-gray-400'}`}>
                Interior Services <ChevronDown size={10} className={`ml-2 transition-transform ${activeMenu === 'interior' ? 'rotate-180' : ''}`} />
              </button>
              <DesktopMegaMenu data={interiorData} isOpen={activeMenu === 'interior'} />
            </div>

            <div className="py-2" onMouseEnter={() => setActiveMenu('exterior')} onMouseLeave={() => setActiveMenu(null)}>
              <button className={`flex items-center text-[10px] px-5 py-2 font-bold uppercase tracking-widest transition-colors ${activeMenu === 'exterior' ? 'text-white' : 'text-gray-400'}`}>
                Exterior Services <ChevronDown size={10} className={`ml-2 transition-transform ${activeMenu === 'exterior' ? 'rotate-180' : ''}`} />
              </button>
              <DesktopMegaMenu data={exteriorData} isOpen={activeMenu === 'exterior'} />
            </div>

            <Link to="/gallery" className="text-[10px] px-5 py-2 text-gray-400 font-bold uppercase tracking-widest hover:text-white transition-all">Gallery</Link>
          </div>

          {/* CTA & MOBILE BUTTON */}
          <div className="flex items-center gap-6 shrink-0">
            <Link to="/contact" className="hidden lg:flex px-10 py-4 bg-[#d4af37] text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all">
              Enquire Now
            </Link>
            <button onClick={() => setIsSidebarOpen(true)} className="xl:hidden text-white p-2">
              <Menu size={30} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR PANEL */}
      <div className={`fixed inset-0 z-[200] xl:hidden ${isSidebarOpen ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-500 ${isSidebarOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsSidebarOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-full sm:w-[450px] bg-[#0a0a0a] p-8 flex flex-col transition-transform duration-500 ease-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between items-center mb-10">
            <img src={companylogo} alt="Bixbite" className="h-6 brightness-0 invert" />
            <button onClick={() => setIsSidebarOpen(false)} className="text-white"><X size={35} /></button>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <nav className="flex flex-col">
              <Link to="/" onClick={() => setIsSidebarOpen(false)} className="text-white text-2xl font-light italic font-serif py-4 border-b border-white/5">Home</Link>
              <Link to="/about" onClick={() => setIsSidebarOpen(false)} className="text-white text-2xl font-light italic font-serif py-4 border-b border-white/5">About Us</Link>
              <MobileAccordion title="Interior Services" data={interiorData} isOpen={mobileExpanded === 'int'} toggle={() => setMobileExpanded(mobileExpanded === 'int' ? null : 'int')} />
              <MobileAccordion title="Exterior Services" data={exteriorData} isOpen={mobileExpanded === 'ext'} toggle={() => setMobileExpanded(mobileExpanded === 'ext' ? null : 'ext')} />
              <Link to="/gallery" onClick={() => setIsSidebarOpen(false)} className="text-white text-2xl font-light italic font-serif py-4 border-b border-white/5">Gallery</Link>
            </nav>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
            <Link to="/contact" onClick={() => setIsSidebarOpen(false)} className="block w-full bg-[#d4af37] text-black text-center py-5 text-[10px] font-black uppercase tracking-[0.4em]">Start Consultation</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;