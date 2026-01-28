import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Plus, Minus, Sparkles, ArrowRight } from "lucide-react";
import { interiorData, exteriorData } from "../../Data";
import { companylogo } from "../../image";

// --- MOBILE SIDEBAR COMPONENT ---
const MobileSidebar = ({ isOpen, onClose, interiorData, exteriorData, accentColor }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className={`fixed inset-0 z-[200] lg:hidden ${isOpen ? "visible" : "invisible"}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`} 
        onClick={onClose} 
      />
      
      {/* Drawer */}
      <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        <div className="p-6 flex justify-between items-center border-b">
          <img src={companylogo} alt="Bixbite" className="h-10 w-auto" />
          <button onClick={onClose} className="p-2 bg-gray-100 rounded-full"><X size={20} /></button>
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-6 space-y-8">
          <Link to="/" onClick={onClose} className="block text-xs font-black uppercase tracking-[0.4em] text-[#1a1a1a]">Home</Link>
          <Link to="/about" onClick={onClose} className="block text-xs font-black uppercase tracking-[0.4em] text-[#1a1a1a]">About</Link>

          {/* Accordion Logic for Interior/Exterior */}
          {[
            { id: 'interior', label: 'Interior', data: interiorData },
            { id: 'exterior', label: 'Exterior', data: exteriorData }
          ].map((menu) => (
            <div key={menu.id} className="border-b border-gray-50 pb-4">
              <button 
                onClick={() => toggleSection(menu.id)} 
                className="w-full flex justify-between items-center text-xs font-black uppercase tracking-[0.4em] text-[#1a1a1a]"
              >
                {menu.label} 
                {openSection === menu.id ? <Minus size={14} style={{ color: accentColor }} /> : <Plus size={14} />}
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${openSection === menu.id ? "max-h-[1500px] opacity-100 mt-6" : "max-h-0 opacity-0"}`}>
                {menu.data.map((cat, i) => (
                  <div key={i} className="mb-6 ml-2 border-l-2 pl-4" style={{ borderColor: `${accentColor}20` }}>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 flex items-center gap-2" style={{ color: accentColor }}>
                      <cat.icon size={12} /> {cat.category}
                    </p>
                    <div className="flex flex-col gap-3">
                      {cat.services.map((service, j) => (
                        <Link 
                          key={j} 
                          to={`/${service.link}`} 
                          onClick={onClose}
                          className="text-[11px] text-gray-500 uppercase tracking-widest hover:text-black"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <Link to="/gallery" onClick={onClose} className="block text-xs font-black uppercase tracking-[0.4em] text-[#1a1a1a]">Gallery</Link>
        </div>

        <div className="p-6">
          <Link 
            to="/contact" 
            onClick={onClose} 
            className="flex items-center justify-between w-full py-5 px-6 bg-[#1a1a1a] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-xl"
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
                    <section.icon size={20} className={activeTab === idx ? "text-white" : "text-[#828a1c]"} />
                    <span className="text-[13px] font-black uppercase tracking-[0.2em]">{section.category}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="w-3/4 p-12 bg-white overflow-y-auto">
            <div className="mb-10 text-4xl font-serif italic text-[#1a1a1a]">
              {data[activeTab].category} <span style={{ color: accentColor }}>Specialization.</span>
            </div>
            <div className="grid grid-cols-3 gap-x-12 gap-y-6">
              {data[activeTab].services.map((service, j) => (
                <Link 
                  key={j} 
                  to={`/${service.link}`} 
                  onClick={closeMenu} 
                  className="text-[12px] text-gray-500 uppercase font-medium tracking-widest hover:text-black hover:translate-x-1 transition-all py-2 border-b border-gray-50"
                >
                  {service.name}
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
  const brandAccent = "#828a1c";

  // Auto-close sidebar on route change
  useEffect(() => {
    setIsSidebarOpen(false);
    setActiveMenu(null);
  }, [location]);

  return (
    <>
      <nav className={`fixed w-full z-[150] transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-xl" : "bg-white py-6"
      }`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          <Link to="/" className="relative z-[210]">
            <img src={companylogo} alt="Bixbite" className="h-10 lg:h-14 transition-all" />
          </Link>

          {/* Desktop Links (Hidden on LG and smaller) */}
          <div className="hidden lg:flex items-center">
            <Link to="/" className="text-[11px] px-5 font-bold uppercase tracking-widest text-[#1a1a1a] hover:text-[#828a1c]">Home</Link>
            <Link to="/about" className="text-[11px] px-5 font-bold uppercase tracking-widest text-[#1a1a1a] hover:text-[#828a1c]">About</Link>
            
            <div className="static" onMouseEnter={() => setActiveMenu('interior')} onMouseLeave={() => setActiveMenu(null)}>
              <button className="flex items-center text-[11px] px-5 font-bold uppercase tracking-widest text-[#1a1a1a]">
                Interior <ChevronDown size={12} className={`ml-1 transition-transform ${activeMenu === 'interior' ? 'rotate-180' : ''}`} />
              </button>
              <DesktopMegaMenu data={interiorData} isOpen={activeMenu === 'interior'} closeMenu={() => setActiveMenu(null)} accentColor={brandAccent} />
            </div>

            <div className="static" onMouseEnter={() => setActiveMenu('exterior')} onMouseLeave={() => setActiveMenu(null)}>
              <button className="flex items-center text-[11px] px-5 font-bold uppercase tracking-widest text-[#1a1a1a]">
                Exterior <ChevronDown size={12} className={`ml-1 transition-transform ${activeMenu === 'exterior' ? 'rotate-180' : ''}`} />
              </button>
              <DesktopMegaMenu data={exteriorData} isOpen={activeMenu === 'exterior'} closeMenu={() => setActiveMenu(null)} accentColor={brandAccent} />
            </div>

            <Link to="/gallery" className="text-[11px] px-5 font-bold uppercase tracking-widest text-[#1a1a1a] hover:text-[#828a1c]">Gallery</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden lg:block px-8 py-3 border-2 border-[#1a1a1a] text-[#1a1a1a] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all rounded-full">
              Let's Talk
            </Link>
            
            {/* Mobile Toggle Button (Visible on LG and smaller) */}
            <button 
              onClick={() => setIsSidebarOpen(true)} 
              className="lg:hidden p-2 text-[#1a1a1a] hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Actual Mobile Sidebar Component */}
      <MobileSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        interiorData={interiorData} 
        exteriorData={exteriorData} 
        accentColor={brandAccent}
      />
    </>
  );
};

export default Navbar;