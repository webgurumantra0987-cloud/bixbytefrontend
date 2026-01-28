import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Plus, Minus, Sparkles, ArrowRight } from "lucide-react";
import { interiorData, exteriorData } from "../../Data";
import { companylogo } from "../../image";

// --- MOBILE SIDEBAR COMPONENT ---
const MobileSidebar = ({ isOpen, onClose, interiorData, exteriorData }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className={`fixed inset-0 z-[200] transition-all duration-500 ${isOpen ? "visible" : "invisible"}`}>
      {/* Dark Overlay */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`} 
        onClick={onClose} 
      />
      
      {/* Sidebar Panel */}
      <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Header */}
        <div className="p-6 flex justify-between items-center border-b border-gray-100">
          <img src={companylogo} alt="Bixbite" className="h-8 w-auto" />
          <button onClick={onClose} className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
            <X size={20} className="text-[#1a1a1a]" />
          </button>
        </div>

        {/* Scrollable Navigation */}
        <div className="flex-1 overflow-y-auto py-8 px-6">
          <div className="space-y-8">
            <Link to="/" onClick={onClose} className="block text-xs font-black uppercase tracking-[0.4em] text-[#1a1a1a]">Home</Link>
            <Link to="/about" onClick={onClose} className="block text-xs font-black uppercase tracking-[0.4em] text-[#1a1a1a]">About</Link>

            {/* INTERIOR ACCORDION */}
            <div className="border-b border-gray-50 pb-4">
              <button 
                onClick={() => toggleSection('interior')} 
                className="w-full flex justify-between items-center text-xs font-black uppercase tracking-[0.4em] text-[#1a1a1a]"
              >
                Interior {openSection === 'interior' ? <Minus size={14} className="text-[#828a1c]" /> : <Plus size={14} />}
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${openSection === 'interior' ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-0"}`}>
                {interiorData.map((cat, i) => (
                  <div key={i} className="mb-8 ml-2 border-l border-gray-100 pl-4">
                    <p className="text-[10px] font-black text-[#828a1c] uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                      <cat.icon size={12} /> {cat.category}
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {cat.services.map((service, j) => (
                        <Link 
                          key={j} 
                          to={`/${service.link}`} 
                          onClick={onClose}
                          className="py-1 text-[11px] text-gray-500 hover:text-black transition-colors uppercase tracking-wider"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EXTERIOR ACCORDION */}
            <div className="border-b border-gray-50 pb-4">
              <button 
                onClick={() => toggleSection('exterior')} 
                className="w-full flex justify-between items-center text-xs font-black uppercase tracking-[0.4em] text-[#1a1a1a]"
              >
                Exterior {openSection === 'exterior' ? <Minus size={14} className="text-[#828a1c]" /> : <Plus size={14} />}
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${openSection === 'exterior' ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-0"}`}>
                {exteriorData.map((cat, i) => (
                  <div key={i} className="mb-8 ml-2 border-l border-gray-100 pl-4">
                    <p className="text-[10px] font-black text-[#828a1c] uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                      <cat.icon size={12} /> {cat.category}
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {cat.services.map((service, j) => (
                        <Link 
                          key={j} 
                          to={`/${service.link}`} 
                          onClick={onClose}
                          className="py-1 text-[11px] text-gray-500 hover:text-black transition-colors uppercase tracking-wider"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/gallery" onClick={onClose} className="block text-xs font-black uppercase tracking-[0.4em] text-[#1a1a1a]">Gallery</Link>
          </div>
        </div>

        {/* Footer in Sidebar */}
        <div className="p-6 bg-gray-50">
          <Link 
            to="/contact" 
            onClick={onClose} 
            className="flex items-center justify-between w-full py-5 px-6 bg-[#1a1a1a] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-[#828a1c] transition-all"
          >
            Start Project <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

// --- DESKTOP MEGA MENU ---
const DesktopMegaMenu = ({ data, isOpen, closeMenu, accentColor }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`absolute left-0 top-full pt-0 w-full transition-all duration-500 z-[100] ${
      isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
    }`}>
      <div className="bg-white w-full border-t border-gray-100 shadow-2xl flex flex-col h-[65vh] overflow-hidden">
        <div className="flex flex-1 max-w-[1600px] mx-auto w-full">
          <div className="w-1/4 border-r border-gray-50 p-8 bg-gray-50/30">
            <div className="flex flex-col gap-2">
              {data.map((section, idx) => (
                <button
                  key={idx}
                  onMouseEnter={() => setActiveTab(idx)}
                  className={`flex items-center justify-between p-6 transition-all duration-300 rounded-xl group ${
                    activeTab === idx ? "bg-[#828a1c] text-white shadow-lg translate-x-2" : "hover:bg-white text-[#1a1a1a]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <section.icon size={18} className={activeTab === idx ? "text-white" : "text-[#828a1c]"} />
                    <span className="text-[12px] font-black uppercase tracking-[0.2em]">{section.category}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="w-3/4 p-12 bg-white overflow-y-auto">
            <div className="mb-10">
              <h3 className="text-4xl font-serif italic text-[#1a1a1a] mb-2">
                {data[activeTab].category} <span style={{ color: accentColor }}>Specialization.</span>
              </h3>
              <p className="text-gray-400 text-[10px] uppercase tracking-[0.4em]">Comprehensive Architectural Solutions</p>
            </div>
            <div className="grid grid-cols-3 gap-x-12 gap-y-6">
              {data[activeTab].services.map((service, j) => (
                <Link key={j} to={`/${service.link}`} onClick={closeMenu} className="group flex items-center gap-3 py-2 border-b border-gray-50 hover:border-[#828a1c] transition-all">
                  <span className="text-[11px] text-gray-500 uppercase font-medium tracking-widest group-hover:text-black group-hover:translate-x-1 transition-all">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN NAVBAR ---
const Navbar = ({ isScrolled }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsSidebarOpen(false);
    setActiveMenu(null);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <nav className={`fixed w-full z-[150] transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-xl" : "bg-white py-6"
      }`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          <Link to="/">
            <img src={companylogo} alt="Bixbite" className="h-10 lg:h-14 transition-all" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center">
            <Link to="/" className="text-[10px] px-6 font-black uppercase tracking-[0.3em] text-[#1a1a1a] hover:text-[#828a1c] transition-colors">Home</Link>
            <Link to="/about" className="text-[10px] px-6 font-black uppercase tracking-[0.3em] text-[#1a1a1a] hover:text-[#828a1c] transition-colors">About</Link>
            
            <div className="relative" onMouseEnter={() => setActiveMenu('interior')} onMouseLeave={() => setActiveMenu(null)}>
              <button className="flex items-center text-[10px] px-6 font-black uppercase tracking-[0.3em] text-[#1a1a1a]">
                Interior <ChevronDown size={12} className={`ml-1 transition-transform ${activeMenu === 'interior' ? 'rotate-180' : ''}`} />
              </button>
              <DesktopMegaMenu data={interiorData} isOpen={activeMenu === 'interior'} closeMenu={() => setActiveMenu(null)} accentColor="#828a1c" />
            </div>

            <div className="relative" onMouseEnter={() => setActiveMenu('exterior')} onMouseLeave={() => setActiveMenu(null)}>
              <button className="flex items-center text-[10px] px-6 font-black uppercase tracking-[0.3em] text-[#1a1a1a]">
                Exterior <ChevronDown size={12} className={`ml-1 transition-transform ${activeMenu === 'exterior' ? 'rotate-180' : ''}`} />
              </button>
              <DesktopMegaMenu data={exteriorData} isOpen={activeMenu === 'exterior'} closeMenu={() => setActiveMenu(null)} accentColor="#828a1c" />
            </div>

            <Link to="/gallery" className="text-[10px] px-6 font-black uppercase tracking-[0.3em] text-[#1a1a1a] hover:text-[#828a1c] transition-colors">Gallery</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden lg:block px-10 py-3.5 border-2 border-[#1a1a1a] text-[#1a1a1a] text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#1a1a1a] hover:text-white transition-all rounded-full">
              Let's Talk
            </Link>
            <button onClick={() => setIsSidebarOpen(true)} className="xl:hidden p-2 text-[#1a1a1a]">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      <MobileSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        interiorData={interiorData} 
        exteriorData={exteriorData} 
      />
    </>
  );
};

export default Navbar;