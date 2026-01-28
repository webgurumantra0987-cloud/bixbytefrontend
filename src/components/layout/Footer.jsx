import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Linkedin, Twitter, Facebook, ArrowUpRight } from 'lucide-react';
import { companylogo } from "../../image";

const Footer = () => {
  // Centralized Data Management
  const services = [
    "Residential Interiors",
    "Commercial Design",
    "Retail Spaces",
    "Lighting Design",
    "Turnkey Solutions",
    "Architectural Planning"
  ];

  const socialLinks = [
    { Icon: Instagram, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Facebook, href: "#" }
  ];

  return (
    <footer className="bg-[#050505] pt-16 md:pt-24 pb-10 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto">
        
        {/* TOP ROW: Logo and Studio Intro */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
           <div className="max-w-xs">
              <img src={companylogo} alt="Bixbite" className="h-8 w-auto mb-6 brightness-110" />
              <p className="text-gray-600 text-[9px] uppercase tracking-[0.4em] leading-relaxed">
                Engineering Precision, <br/> Bespoke Aesthetics.
              </p>
           </div>
           <div className="flex gap-10">
              {["About", "Gallery", "Process", "Contact"].map((item) => (
                <Link key={item} to={`/${item.toLowerCase()}`} className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-[#828a1c] transition-colors">
                  {item}
                </Link>
              ))}
           </div>
        </div>

        {/* MIDDLE ROW: Unified Grid (Fixes the drifting look) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* THE CONTACT CARD (Left Side) */}
          <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-[#828a1c]/30 transition-all">
            <div>
              <span className="text-[#828a1c] text-[8px] font-black uppercase tracking-[0.5em] mb-4 block">Inquiries</span>
              <a href="mailto:hello@bixbite.com" className="text-white text-2xl md:text-3xl font-serif italic hover:text-[#828a1c] transition-colors">
                hello@bixbite.com
              </a>
            </div>
            
            <div className="flex gap-3 mt-10">
              {socialLinks.map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#828a1c] rounded-lg transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* THE SERVICES GRID (Right Side - Fills the empty space) */}
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/5 rounded-2xl p-8">
            <h4 className="text-[#828a1c] text-[9px] font-black uppercase tracking-[0.6em] mb-8">Expertise</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
              {services.map((service) => (
                <div key={service} className="group flex items-center justify-between py-2 border-b border-white/5 cursor-pointer">
                  <span className="text-gray-500 text-[11px] uppercase tracking-widest group-hover:text-white transition-colors">
                    {service}
                  </span>
                  <ArrowUpRight size={12} className="text-[#828a1c] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <span className="text-[8px] font-bold text-white/20 uppercase tracking-[0.5em]">© 2026 Bixbite Innovation Studio</span>
          
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group flex items-center gap-3">
            <span className="text-[8px] text-gray-500 uppercase tracking-[0.5em] group-hover:text-white">Top</span>
            <div className="w-8 h-8 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-[#828a1c] transition-all">
              <ArrowUpRight size={12} className="group-hover:text-white" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;