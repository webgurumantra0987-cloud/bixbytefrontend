import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, Sparkles, Plus, Minus } from "lucide-react";
import { interiorData, exteriorData } from "../../Data";
import { companylogo } from "../../image";

const DesktopMegaMenu = ({ data, isOpen, closeMenu }) => {
  return (
    <div className={`absolute left-0 top-full pt-0 w-full transition-all duration-300 z-[100] ${
      isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
    }`}>
      {/* Solid Background - No Glass Effect */}
      <div className="bg-white w-full border-t border-[#828a1c] shadow-2xl flex flex-col h-[60vh] overflow-hidden mx-auto">
        <div className="flex-1 overflow-y-auto p-10">
          <div className="grid grid-cols-4 gap-12 max-w-[1600px] mx-auto">
            {data.map((section, i) => (
              <div key={i} className="group/section">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <section.icon size={16} className="text-[#828a1c]" />
                  <h4 className="text-[#1a1a1a] text-[10px] font-black uppercase tracking-[0.3em]">
                    {section.category}
                  </h4>
                </div>
                <ul className="grid grid-cols-1 gap-y-4">
                  {section.services.map((service, j) => (
                    <li key={j} className="relative group/item">
                      <Link 
                        to={`${service.link}`} 
                        onClick={closeMenu} 
                        className="flex items-center group"
                      >
                        <span className="text-[11px] text-gray-500 uppercase tracking-widest group-hover:text-[#828a1c] group-hover:translate-x-2 transition-all duration-300">
                          {service.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Solid Brand Footer */}
        <div className="bg-[#828a1c] py-5 px-12 flex justify-between items-center">
          <div className="flex items-center gap-3 text-white">
            <Sparkles size={14} className="animate-pulse" />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
              Architectural Construction Innovation
            </p>
          </div>
          <Link to="/contact" className="text-white text-[10px] font-black uppercase tracking-[0.2em] border-b border-white hover:opacity-80 transition-all">
            Start Your Project →
          </Link>
        </div>
      </div>
    </div>
  );
};

const MobileAccordion = ({ title, data, isOpen, toggle, closeSidebar }) => {
  return (
    <div className="border-b border-gray-100 py-6">
      <button onClick={toggle} className="w-full flex justify-between items-center text-[#1a1a1a] text-xl font-serif italic">
        {title} 
        {isOpen ? <Minus size={20} className="text-[#828a1c]" /> : <Plus size={20} className="text-[#828a1c]" />}
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[1500px] opacity-100 mt-6" : "max-h-0 opacity-0"}`}>
        {data.map((section, i) => (
          <div key={i} className="mb-8 last:mb-0">
            <p className="text-[#828a1c] text-[9px] font-black uppercase tracking-[0.3em] mb-4">{section.category}</p>
            <ul className="space-y-4 pl-2">
              {section.services.map((service, j) => (
                <li key={j}>
                  <Link 
                    to={`${service.link}`} 
                    onClick={closeSidebar}
                    className="text-gray-600 text-sm hover:text-[#828a1c] flex items-center gap-3 uppercase tracking-tighter"
                  >
                    <div className="w-1 h-1 bg-[#6b4411] rounded-full"></div> {service.name}
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
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled ? "bg-white py-4 shadow-xl" : "bg-white/90 py-6"
      }`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-4">
            <img src={companylogo} alt="Bixbite" className="h-10 lg:h-14" />
            <div className="hidden md:flex flex-col border-l border-gray-200 pl-4 uppercase">
              <p className="text-xl font-serif italic text-[#1a1a1a] leading-none">Bixbite<span className="text-[#828a1c]">.</span></p>
              <p className="text-[7px] text-[#6b4411] tracking-[0.4em] mt-1 font-bold">Innovation Studio</p>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-4">
            <Link to="/" className="text-[11px] px-4 font-bold uppercase tracking-widest text-[#1a1a1a] hover:text-[#828a1c] transition-all">Home</Link>
            <Link to="/about" className="text-[11px] px-4 font-bold uppercase tracking-widest text-[#1a1a1a] hover:text-[#828a1c] transition-all">About</Link>

            {/* Interior Trigger */}
            <div className="static" onMouseEnter={() => setActiveMenu('interior')} onMouseLeave={() => setActiveMenu(null)}>
              <button className={`flex items-center text-[11px] px-4 font-bold uppercase tracking-widest transition-colors ${activeMenu === 'interior' ? 'text-[#828a1c]' : 'text-[#1a1a1a]'}`}>
                Interior <ChevronDown size={12} className="ml-1" />
              </button>
              <DesktopMegaMenu data={interiorData} isOpen={activeMenu === 'interior'} closeMenu={() => setActiveMenu(null)} />
            </div>

            {/* Exterior Trigger */}
            <div className="static" onMouseEnter={() => setActiveMenu('exterior')} onMouseLeave={() => setActiveMenu(null)}>
              <button className={`flex items-center text-[11px] px-4 font-bold uppercase tracking-widest transition-colors ${activeMenu === 'exterior' ? 'text-[#828a1c]' : 'text-[#1a1a1a]'}`}>
                Exterior <ChevronDown size={12} className="ml-1" />
              </button>
              <DesktopMegaMenu data={exteriorData} isOpen={activeMenu === 'exterior'} closeMenu={() => setActiveMenu(null)} />
            </div>

            <Link to="/gallery" className="text-[11px] px-4 font-bold uppercase tracking-widest text-[#1a1a1a] hover:text-[#828a1c] transition-all">Gallery</Link>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hidden lg:block px-8 py-4 bg-[#828a1c] text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#6b4411] transition-all">
              Enquire Now
            </Link>
            <button onClick={() => setIsSidebarOpen(true)} className="xl:hidden text-[#1a1a1a]">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR - Clean White Background */}
      <div className={`fixed inset-0 z-[200] xl:hidden ${isSidebarOpen ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${isSidebarOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsSidebarOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-full max-w-[400px] bg-white shadow-2xl p-8 flex flex-col transition-transform duration-500 ease-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-6">
            <img src={companylogo} alt="Bixbite" className="h-10" />
            <button onClick={() => setIsSidebarOpen(false)} className="text-[#1a1a1a]"><X size={32} /></button>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2">
            <nav className="flex flex-col">
              <Link to="/" onClick={() => setIsSidebarOpen(false)} className="text-[#1a1a1a] text-2xl font-serif italic py-4 border-b border-gray-100">Home</Link>
              <Link to="/about" onClick={() => setIsSidebarOpen(false)} className="text-[#1a1a1a] text-2xl font-serif italic py-4 border-b border-gray-100">About Us</Link>
              
              <MobileAccordion 
                title="Interior Services" 
                data={interiorData} 
                isOpen={mobileExpanded === 'int'} 
                toggle={() => setMobileExpanded(mobileExpanded === 'int' ? null : 'int')} 
                closeSidebar={() => setIsSidebarOpen(false)}
              />
              
              <MobileAccordion 
                title="Exterior Services" 
                data={exteriorData} 
                isOpen={mobileExpanded === 'ext'} 
                toggle={() => setMobileExpanded(mobileExpanded === 'ext' ? null : 'ext')} 
                closeSidebar={() => setIsSidebarOpen(false)}
              />

              <Link to="/gallery" onClick={() => setIsSidebarOpen(false)} className="text-[#1a1a1a] text-2xl font-serif italic py-4">Gallery</Link>
            </nav>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <Link to="/contact" onClick={() => setIsSidebarOpen(false)} className="block w-full bg-[#828a1c] text-white text-center py-5 text-[10px] font-black uppercase tracking-[0.4em]">Start Consultation</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;