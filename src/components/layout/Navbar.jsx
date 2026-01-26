import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, Plus, Minus, Phone, Sparkles } from "lucide-react";
import { interiorData, exteriorData } from "../../Data";
import { companylogo } from "../../image";

const DesktopMegaMenu = ({ data, isOpen, closeMenu, accentColor }) => {
  // Initialize with the first category (e.g., Commercial)
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`absolute left-0 top-full pt-0 w-full transition-all duration-500 z-[100] ${
      isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
    }`}>
      <div className="bg-white w-full border-t border-gray-100 shadow-2xl flex flex-col h-[70vh] overflow-hidden">
        <div className="flex flex-1 max-w-[1600px] mx-auto w-full">
          
          {/* LEFT SIDE: Main Categories (4 Modules) */}
          <div className="w-1/4 border-r border-gray-50 p-8 bg-gray-50/30">
            <div className="flex flex-col gap-2">
              {data.map((section, idx) => (
                <button
                  key={idx}
                  onMouseEnter={() => setActiveTab(idx)}
                  className={`flex items-center justify-between p-6 transition-all duration-300 rounded-xl group ${
                    activeTab === idx 
                    ? "bg-[#828a1c] text-white shadow-lg translate-x-2" 
                    : "hover:bg-white text-[#1a1a1a]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <section.icon size={20} className={activeTab === idx ? "text-white" : "text-[#828a1c]"} />
                    <span className="text-[13px] font-black uppercase tracking-[0.2em]">
                      {section.category}
                    </span>
                  </div>
                  <ChevronDown size={16} className={`-rotate-90 transition-transform ${activeTab === idx ? "opacity-100" : "opacity-0"}`} />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Service Links (12 Links) */}
          <div className="w-3/4 p-12 bg-white overflow-y-auto">
            <div className="mb-8">
              <h3 className="text-3xl font-serif italic text-[#1a1a1a]">
                {data[activeTab].category} <span style={{ color: accentColor }}>Interiors.</span>
              </h3>
              <div className="w-20 h-1 mt-4" style={{ backgroundColor: accentColor }}></div>
            </div>

            <div className="grid grid-cols-3 gap-x-12 gap-y-6">
              {data[activeTab].services.map((service, j) => (
                <Link 
                  key={j}
                  to={`/${service.link}`}
                  onClick={closeMenu}
                  className="group flex items-center gap-3 py-2 border-b border-transparent hover:border-gray-100 transition-all"
                >
                  <div className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: accentColor }}></div>
                  <span className="text-[12px] text-gray-500 uppercase font-medium tracking-widest group-hover:text-[#1a1a1a] group-hover:translate-x-1 transition-all">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Brand Footer */}
        <div style={{ backgroundColor: accentColor }} className="py-5 px-12 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3 text-white">
            <Sparkles size={14} className="animate-pulse" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Leading the Evolution of Design</p>
          </div>
          <Link to="/contact" className="text-white text-[10px] font-black uppercase tracking-[0.2em] border-b border-white">
            Request a Consultation →
          </Link>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ isScrolled }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const brandAccent = "#828a1c";

  return (
    <>
     

      <nav className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-xl" : "bg-white py-6"
      }`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          <Link to="/">
            <img src={companylogo} alt="Bixbite" className="h-12 lg:h-14" />
          </Link>

          <div className="hidden xl:flex items-center">
            <Link to="/" className="text-[11px] px-5 font-bold uppercase tracking-widest text-[#1a1a1a] hover:text-[#828a1c]">Home</Link>
                       <Link to="/about" className="text-[11px] px-5 font-bold uppercase tracking-widest text-[#1a1a1a] hover:text-[#828a1c]">About</Link>
            
            {/* Interior Trigger */}
            <div className="static" onMouseEnter={() => setActiveMenu('interior')} onMouseLeave={() => setActiveMenu(null)}>
              <button className="flex items-center text-[11px] px-5 font-bold uppercase tracking-widest text-[#1a1a1a]">
                Interior <ChevronDown size={12} className="ml-1" />
              </button>
              <DesktopMegaMenu data={interiorData} isOpen={activeMenu === 'interior'} closeMenu={() => setActiveMenu(null)} accentColor={brandAccent} />
            </div>

            {/* Exterior Trigger */}
            <div className="static" onMouseEnter={() => setActiveMenu('exterior')} onMouseLeave={() => setActiveMenu(null)}>
              <button className="flex items-center text-[11px] px-5 font-bold uppercase tracking-widest text-[#1a1a1a]">
                Exterior <ChevronDown size={12} className="ml-1" />
              </button>
              <DesktopMegaMenu data={exteriorData} isOpen={activeMenu === 'exterior'} closeMenu={() => setActiveMenu(null)} accentColor={brandAccent} />
            </div>

            <Link to="/gallery" className="text-[11px] px-5 font-bold uppercase tracking-widest text-[#1a1a1a] hover:text-[#828a1c]">Gallery</Link>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hidden lg:block px-10 py-3.5 border-2 border-[#1a1a1a] text-[#1a1a1a] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all rounded-full">
              Let's Talk
            </Link>
            <button onClick={() => setIsSidebarOpen(true)} className="xl:hidden"><Menu size={30} /></button>
          </div>
        </div>
      </nav>
      {/* (Mobile Sidebar component code remains same as previous) */}
    </>
  );
};

export default Navbar;