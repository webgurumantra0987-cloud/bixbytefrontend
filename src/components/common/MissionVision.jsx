import React, { useEffect } from "react";
import { ArrowUpRight, Target, Eye, PenTool, Linkedin, Instagram, ArrowRight, Layers, Compass } from "lucide-react";
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const team = [
    {
      name: "Ar. Vikram Aditya",
      role: "Principal Architect",
      desc: "An alumnus of the School of Planning and Architecture, Vikram views buildings as living organisms. His work focuses on 'Structural Honesty'—where the raw bones of the building provide its primary aesthetic value.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Ishani Sharma",
      role: "Lead Interior Architect",
      desc: "Ishani specializes in 'Tactile Luxury.' She curates bespoke material palettes—hand-crimped metal, reclaimed teak, and porous stone—to ensure the interior feels as enduring as the architecture.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen selection:bg-[#d4af37] selection:text-white font-sans text-[#1a1a1a]">
      
      {/* --- 1. THE INTRO --- */}
      <header className="pt-40 pb-20 px-6 lg:px-20 border-b border-black/[0.03]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-2xl">
              <span className="text-[#d4af37] text-[8px] font-black uppercase tracking-[0.6em] mb-10 block">Studio Philosophy</span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif italic leading-[1.1] tracking-tighter">
                Crafting the <br /> 
                <span className="text-gray-300">silent luxury</span> <br /> 
                of tomorrow.
              </h1>
            </div>
            <div className="max-w-xs md:pt-32">
                <p className="text-[11px] leading-relaxed text-gray-500 uppercase tracking-widest font-medium">
                    Bixbite is an award-winning New Delhi practice. We bridge the gap between architectural rigor and the poetic intimacy of a private home.
                </p>
            </div>
          </div>
        </div>
      </header>

      {/* --- 2. THE DUALITY (Sticky Content) --- */}
      <section className="px-6 lg:px-20 border-b border-black/[0.03]">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
          
          <div className="py-24 lg:pr-24 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center">
            <div className="group mb-20">
                <div className="flex items-center gap-3 mb-6">
                    <Compass size={14} className="text-[#d4af37]" />
                    <span className="text-[8px] font-black uppercase tracking-[0.4em] text-gray-400">01 / The Mission</span>
                </div>
                <h2 className="text-3xl font-serif italic mb-6">Structural Integrity.</h2>
                <p className="text-sm text-gray-600 leading-loose font-light max-w-sm">
                    In an era of disposable design, our mission is **Permanence**. We combine 21st-century BIM technology with local Indian craftsmanship to create turnkey structures that function as efficiently as they look.
                </p>
            </div>
            
            <div className="pt-12 border-t border-black/5">
                <div className="flex items-center gap-3 mb-6">
                    <Layers size={14} className="text-[#d4af37]" />
                    <span className="text-[8px] font-black uppercase tracking-[0.4em] text-gray-400">02 / The Vision</span>
                </div>
                <h2 className="text-3xl font-serif italic mb-6">Sensory Environments.</h2>
                <p className="text-sm text-gray-600 leading-loose font-light max-w-sm">
                    We envision architecture that breathes. Our work focuses on 'Climate-Responsive Luxury'—utilizing natural ventilation, passive cooling, and the precise choreography of sunlight.
                </p>
            </div>
          </div>

          <div className="py-24 space-y-24">
            <div className="aspect-[3/4] overflow-hidden bg-gray-100 shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80" 
                    alt="Modern Indian Villa Architecture" 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0 scale-105 hover:scale-100"
                />
            </div>
            <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img 
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" 
                    alt="Minimalist Interior Detail" 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
                />
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE PRINCIPALS --- */}
      <section className="py-32 px-6 lg:px-20 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-baseline mb-24">
             <h2 className="text-4xl md:text-5xl font-serif italic tracking-tighter">The Partners.</h2>
             <p className="text-gray-400 text-[8px] font-bold uppercase tracking-[0.4em]">Leadership Collective</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-black/[0.05] border border-black/[0.05]">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white p-10 lg:p-16 group hover:bg-[#FAF9F6] transition-colors duration-700">
                <div className="aspect-[4/5] overflow-hidden mb-12 relative">
                   <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]" />
                   <div className="absolute inset-0 border-[20px] border-white group-hover:border-transparent transition-all duration-700"></div>
                </div>
                <div className="space-y-4">
                  <span className="text-[#d4af37] text-[8px] font-black uppercase tracking-[0.4em]">{member.role}</span>
                  <h3 className="text-2xl font-serif italic">{member.name}</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-light max-w-xs h-20">
                    {member.desc}
                  </p>
                  <div className="flex gap-4 pt-8">
                    <Linkedin size={12} className="text-gray-400 hover:text-black transition-colors cursor-pointer" />
                    <Instagram size={12} className="text-gray-400 hover:text-black transition-colors cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. TACTILE FINISH (THE TURNKEY PROMISE) --- */}
      <section className="py-40 px-6 lg:px-20 bg-[#0A0A0A] text-white overflow-hidden relative">
        <div className="container mx-auto flex flex-col items-center text-center relative z-10">
          <PenTool size={20} className="text-[#d4af37] mb-12" />
          <h2 className="text-4xl md:text-6xl font-serif italic tracking-tighter mb-10 max-w-3xl leading-[1.1]">
            From the raw earth of the site <br /> to the final <span className="text-[#d4af37]">bespoke finish</span>.
          </h2>
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] mb-12 max-w-md leading-loose">
            We manage every variable of the construction lifecycle, delivering a home that is ready for life the moment we hand over the keys.
          </p>
          <Link to="/contact" className="group flex items-center gap-6 mt-6">
            <span className="text-[9px] font-black uppercase tracking-[0.6em] border-b border-white/20 pb-2 group-hover:border-[#d4af37] transition-colors">
                Initiate a Commission
            </span>
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
        {/* Background Decorative Layer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.01] text-[25rem] font-serif italic select-none pointer-events-none">
            Archive
        </div>
      </section>

    </div>
  );
};

export default About;