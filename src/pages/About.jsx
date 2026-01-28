import React, { useEffect } from "react";
import { ArrowUpRight, Ruler, ShieldCheck, Users, Sparkles, Target, Eye, Plus, MapPin, Sun } from "lucide-react";
import { Link } from 'react-router-dom';
import { bixbiteFAQ } from "../Data";
import FAQSection from "../components/common/FAQSection";
import ServiceCTA from "../components/common/ServiceCTA";

const About = () => {
  // Reset scroll to top on component mount
  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  const pillars = [
    { icon: Ruler, title: "Precision", desc: "BIM modeling ensures zero error during the casting phase." },
    { icon: Users, title: "Culture", desc: "Our designs are rooted in Indian heritage, optimized for modern living." },
    { icon: ShieldCheck, title: "Trust", desc: "A single point of turnkey accountability from site to styling." },
    { icon: Sparkles, title: "Soul", desc: "We merge raw materiality with refined luxury for sensory environments." }
  ];

  const workflow = [
    { step: "01", icon: MapPin, title: "Site Intuition", text: "Topography and light pattern analysis." },
    { step: "02", icon: Sun, title: "Spatial Narrative", text: "Developing flow and material palettes." },
    { step: "03", icon: Ruler, title: "Synthesis", text: "8K visualizations and performance blueprints." },
    { step: "04", icon: Plus, title: "Realization", text: "Indistinguishable from the initial concept." }
  ];


  return (
    <div className="bg-[#FAF9F6] min-h-screen selection:bg-[#d4af37] selection:text-white font-sans scroll-smooth overflow-x-hidden text-[#1a1a1a]">
      
      {/* --- HERO: MINIMALIST OVERLAP --- */}
      <section className="relative h-[80vh] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" 
            alt="Modern Indian Architecture" 
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[3s]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-[#d4af37]"></div>
                <span className="text-[#d4af37] text-[9px] font-black uppercase tracking-[0.6em]">Est. 2012 • New Delhi</span>
            </nav>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif italic leading-[0.9] tracking-tighter mb-8">
              The Art of <br />
              <span className="text-[#d4af37] not-italic text-4xl md:text-6xl lg:text-7xl">Permanence</span>.
            </h1>
            <p className="text-gray-400 text-xs md:text-sm max-w-sm leading-relaxed border-l border-white/10 pl-6">
              Bixbite is a multidisciplinary studio redefining the intersections of light, material, and human experience across the Indian subcontinent.
            </p>
          </div>
        </div>
      </section>

      {/* --- MANIFESTO: REDUCED SCALE --- */}
      <section className="py-32 px-6 lg:px-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-gray-400 mb-6 block">Our Manifesto</span>
                <h2 className="text-3xl md:text-4xl font-serif italic leading-tight">
                    We do not build houses. <br />We curate <span className="text-gray-300">atmospheres</span>.
                </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light mb-10 italic">
                    "Since our inception, we have operated at the nexus of technical rigor and poetic intuition. We believe architecture should be a silent protagonist in the lives of those it shelters."
                </p>
                <div className="flex gap-16 pt-10 border-t border-black/5">
                    <div>
                        <p className="text-2xl font-serif italic text-[#d4af37]">12+</p>
                        <p className="text-[7px] font-black uppercase tracking-[0.2em] text-gray-400">Years Practice</p>
                    </div>
                    <div>
                        <p className="text-2xl font-serif italic text-[#d4af37]">150+</p>
                        <p className="text-[7px] font-black uppercase tracking-[0.2em] text-gray-400">Projects Delivered</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION: SMALLER BLOCKS --- */}
      <section className="bg-white px-6 lg:px-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 border-x border-black/5">
           <div className="bg-white p-12 group hover:bg-[#0A0A0A] transition-all duration-500">
              <Target className="text-[#d4af37] mb-8" size={24}/>
              <h3 className="text-[8px] font-black uppercase tracking-[0.4em] mb-4 group-hover:text-white">The Mission</h3>
              <p className="text-lg font-serif italic leading-snug group-hover:text-gray-400">
                Eliminating the friction between conceptual design and livable reality through turnkey precision.
              </p>
           </div>
           <div className="bg-white p-12 group hover:bg-[#0A0A0A] transition-all duration-500">
              <Eye className="text-[#d4af37] mb-8" size={24}/>
              <h3 className="text-[8px] font-black uppercase tracking-[0.4em] mb-4 group-hover:text-white">The Vision</h3>
              <p className="text-lg font-serif italic leading-snug group-hover:text-gray-400">
                Setting the global benchmark for sustainable opulence responding to the climate of 2026.
              </p>
           </div>
        </div>
      </section>

      {/* --- CORE PILLARS: CLEAN DARK GRID --- */}
      <section className="py-32 bg-[#0A0A0A] text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-3xl md:text-4xl font-serif italic tracking-tighter">Core Pillars</h2>
            <span className="hidden md:block text-gray-500 text-[8px] font-bold uppercase tracking-[0.4em]">Methodology • 04</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {pillars.map((item, idx) => (
              <div key={idx} className="bg-[#0A0A0A] p-10 hover:bg-[#FAF9F6] transition-all duration-500 group">
                <item.icon className="text-[#d4af37] group-hover:text-black mb-8 transition-colors" size={20} />
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-3 group-hover:text-black transition-colors">{item.title}</h4>
                <p className="text-gray-500 group-hover:text-gray-600 text-[11px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS: MICRO-TYPOGRAPHY LIST --- */}
      <section className="py-32 px-6 lg:px-20 bg-[#FAF9F6]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 border-b border-black/5 pb-8">
            <h2 className="text-4xl font-serif italic tracking-tighter">Lifecycle.</h2>
            <p className="text-gray-400 text-[8px] font-bold uppercase tracking-[0.4em]">A Four-Stage Evolution</p>
          </div>

          <div className="space-y-2">
            {workflow.map((item, idx) => (
              <div key={idx} className="flex gap-10 items-center py-8 border-b border-black/5 group hover:bg-white transition-all px-6">
                <span className="text-xl font-serif italic text-gray-300 group-hover:text-[#d4af37] transition-colors">{item.step}</span>
                <div className="flex-1 flex justify-between items-center">
                    <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-[11px] font-light">{item.text}</p>
                    </div>
                    <ArrowUpRight className="text-gray-300 group-hover:text-black opacity-0 group-hover:opacity-100 transition-all" size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection 
  items={bixbiteFAQ} 
  title="Structural Inquiries" 
  subtitle="The Dialogue" 
/>

   <ServiceCTA/>
    </div>



  );
};

export default About;