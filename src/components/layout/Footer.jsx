import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Linkedin, Twitter, Facebook, ArrowUpRight, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { companylogo } from "../../image";

const Footer = () => {
  const services = [
    "Residential Interiors", "Commercial Design", "Retail & Boutique", 
    "Lighting Design", "Turnkey Solutions", "Architectural Planning", 
    "Landscape Design", "Furniture Curation", "Project Management",
    "Vastu Consultation", "Renovation", "3D Visualization"
  ];

  const socialLinks = [
    { Icon: Instagram, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Facebook, href: "#" }
  ];

  return (
    /* Background adjusted to a deeper, richer Olive #5d6314 */
    <footer className="bg-[#5d6314] pt-20 pb-10 px-6 lg:px-12 border-t border-white/10 text-white">
      <div className="max-w-[1600px] mx-auto">
        
        {/* TOP SECTION: BRANDING & CONTACT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* 1. Brand Identity */}
          <div className="lg:col-span-4">
            <img 
              src={companylogo} 
              alt="Bixbite" 
              className="h-10 w-auto mb-6 brightness-0 invert opacity-90" 
            />
            <p className="text-white/70 text-[9px] uppercase tracking-[0.4em] font-medium leading-relaxed max-w-[280px]">
              Engineering Precision, Bespoke Aesthetics. <br /> A Bixbite Innovation Studio Venture.
            </p>
          </div>

          {/* 2. Office Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-black/40 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Studio Headquarters</h4>
            <div className="flex items-start gap-3 text-white">
              <MapPin size={14} className="mt-1 shrink-0 opacity-60" />
              <p className="text-[11px] font-bold leading-relaxed tracking-wider uppercase">
                Sector 44, Gurgaon, <br /> Haryana 122003, India
              </p>
            </div>
            <div className="flex items-center gap-3 text-white hover:text-black transition-colors duration-300">
              <Phone size={14} className="opacity-60" />
              <a href="tel:+919999999999" className="text-[11px] font-bold tracking-widest">+91 9999 999 999</a>
            </div>
          </div>

          {/* 3. Registration Info */}
          <div className="lg:col-span-2">
            <h4 className="text-black/40 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Registration</h4>
            <div className="space-y-2 text-white/80">
              <div className="flex items-center gap-2">
                <ShieldCheck size={12} className="opacity-60" />
                <span className="text-[9px] font-bold tracking-widest uppercase">GST: 07AAACB1234F1Z5</span>
              </div>
              <p className="text-[9px] font-bold tracking-widest uppercase ml-5">CIN: U74140DL2026PTC123456</p>
            </div>
          </div>

          {/* 4. Small Email Link */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end">
            <h4 className="text-black/40 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Direct Link</h4>
            <a 
              href="mailto:hello@bixbite.com" 
              className="text-white text-xl md:text-2xl font-serif italic hover:text-black transition-all duration-500 underline underline-offset-8 decoration-white/20"
            >
              hello@bixbite.com
            </a>
          </div>
        </div>

        {/* SERVICE GRID: Clean Horizontal Lines */}
        <div className="py-12 border-y border-white/10 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6">
            {services.map((service) => (
              <Link 
                key={service} 
                to="/gallery" 
                className="text-white/60 text-[9px] font-bold uppercase tracking-[0.15em] hover:text-white hover:translate-x-1 transition-all"
              >
                {service}
              </Link>
            ))}
          </div>
        </div>

        {/* BOTTOM: SOCIALS & COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Naked Floating Icons */}
          <div className="flex gap-10 items-center">
            {socialLinks.map(({ Icon, href }, i) => (
              <a 
                key={i} 
                href={href} 
                className="text-white/60 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6 text-[8px] font-black text-white/40 uppercase tracking-[0.4em]">
             <span>© 2026 Bixbite Innovation Studio</span>
             <Link to="/privacy" className="hover:text-white transition-opacity">Privacy</Link>
             <Link to="/terms" className="hover:text-white transition-opacity">Terms</Link>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="group flex items-center gap-4 text-white"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-50 group-hover:opacity-100 transition-opacity">Back to Top</span>
            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#5d6314] transition-all duration-500">
              <ArrowUpRight size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;