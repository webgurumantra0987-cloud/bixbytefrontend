import React, { useEffect } from 'react';
import { 
  Grid3X3, Users, Zap, Scale, 
  ArrowUpRight, Move, MousePointer2, 
  Binary, Database, Construction, ClipboardCheck
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const CorporateSpacePlanning = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#2b4c7e] selection:text-white">
      
      {/* 1. HERO: THE STRUCTURAL OVERVIEW */}
      <HeroSection 
        subtitle="Operational Spatial Intelligence"
        title="Corporate Space"
        highlight="Planning."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: THE EFFICIENCY DATASET */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-0 border border-black/10">
          <div className="lg:col-span-5 p-12 md:p-20 bg-white flex flex-col justify-center border-r border-black/10">
            <span className="text-[#2b4c7e] text-[10px] font-black uppercase tracking-[0.6em] mb-6 block">Analysis Phase</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight mb-8">The Calculus of <br /><span className="text-[#2b4c7e]">Productivity.</span></h2>
            <p className="text-gray-500 text-lg leading-relaxed font-light mb-8">
              Corporate real estate is a significant overhead. At Bixbite, we apply <strong>Computational Space Syntax</strong> to ensure your floor plate is performing at its peak. We don't just place desks; we map the "Network of Knowledge"—analyzing how teams overlap, where friction occurs, and how to reduce "travel time" between departments. 
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/5">
                <div>
                    <Binary className="text-[#2b4c7e] mb-2" size={20}/>
                    <p className="text-[10px] font-black uppercase tracking-widest text-black">Data-Driven Logic</p>
                </div>
                <div>
                    <Database className="text-[#2b4c7e] mb-2" size={20}/>
                    <p className="text-[10px] font-black uppercase tracking-widest text-black">Asset Optimization</p>
                </div>
            </div>
          </div>
          <div className="lg:col-span-7 bg-[#1a1a1a] p-12 md:p-24 relative overflow-hidden flex items-center justify-center">
             {/* Background Structural Grid Decor */}
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
             
             <div className="relative z-10 w-full">
                <div className="flex justify-between items-end mb-4">
                    <span className="text-white/40 text-[9px] uppercase tracking-widest font-mono">Simulated_Flow_v2.04</span>
                    <span className="text-[#2b4c7e] text-[9px] uppercase tracking-widest font-mono">Real-Time_Density_Analysis</span>
                </div>
                <div className="aspect-video border border-white/20 bg-white/5 backdrop-blur-sm p-4 flex flex-col justify-between">
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500/50 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-[#2b4c7e]"></div>
                    </div>
                    <div className="flex justify-center">
                        <Grid3X3 className="text-white/20 w-32 h-32 stroke-[0.5]" />
                    </div>
                    <p className="text-white/30 text-[8px] font-mono">SCANNING INTERIOR AXES... SUCCESS</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE FOUR PILLARS OF PLANNING */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-px bg-black/10 border border-black/10">
            {[
              { title: "Occupancy Density", desc: "Balancing peak-load capacity with human comfort to maximize square-meter ROI.", icon: <Users size={20} /> },
              { title: "Adjacency Mapping", desc: "Positioning departments based on frequency of interaction to minimize operational silos.", icon: <Move size={20} /> },
              { title: "Agility Resilience", desc: "Creating modular layouts that can be reconfigured in hours, not weeks, as teams scale.", icon: <Zap size={20} /> },
              { title: "Circadian Pathing", desc: "Aligning movement corridors with natural light sources to boost employee wellness.", icon: <Scale size={20} /> }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-12 hover:bg-[#FAF9F6] transition-colors group">
                <div className="text-[#2b4c7e] mb-8 group-hover:-translate-y-2 transition-transform duration-500">{pillar.icon}</div>
                <h4 className="text-[11px] font-black uppercase tracking-widest mb-4">{pillar.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: LINEAR VS. ORGANIC (THE COMPARISON) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Structural <span className="text-[#2b4c7e]">Typologies.</span></h3>
            <p className="text-gray-400 uppercase text-[10px] tracking-[0.4em]">Choosing the right DNA for your organization</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <div className="aspect-video bg-gray-100 overflow-hidden border-b-4 border-[#2b4c7e]">
               <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80" alt="Linear Office Planning" className="w-full h-full object-cover grayscale" />
            </div>
            <h4 className="text-2xl font-serif italic">The Linear Bench</h4>
            <p className="text-gray-500 font-light leading-relaxed">
              Best for data-driven, focus-heavy teams (Finance, Engineering). Linear planning provides the highest density and clearest cable-management paths, emphasizing discipline and high-output efficiency.
            </p>
          </div>
          <div className="space-y-8">
            <div className="aspect-video bg-gray-100 overflow-hidden border-b-4 border-black">
               <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80" alt="Organic Office Planning" className="w-full h-full object-cover grayscale" />
            </div>
            <h4 className="text-2xl font-serif italic">The Organic Hive</h4>
            <p className="text-gray-500 font-light leading-relaxed">
              Ideal for creative and collaborative hubs (Marketing, Product). Hive planning utilizes 120-degree clusters to foster peripheral vision and spontaneous interaction, breaking down traditional hierarchies.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE TECHNICAL AUDIT PROCESS */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <span className="text-[#2b4c7e] text-[10px] font-black uppercase tracking-[0.6em]">04 — Methodology</span>
            <h3 className="text-4xl font-serif italic">The "Space Potential" <br /> <span className="text-[#2b4c7e]">Audit.</span></h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Before we draw a single line, we conduct a <strong>Site Feasibility Audit</strong>. We measure current occupancy vs. intended growth, evaluate the core-to-perimeter ratio, and identify "Dead Zones" where natural light or HVAC performance is suboptimal. The result is a 40-page technical report that serves as the blueprint for your design journey.
            </p>
            <div className="flex items-center gap-6 mt-10">
                <div className="flex items-center gap-2">
                    <ClipboardCheck className="text-[#2b4c7e]" size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Compliance Ready</span>
                </div>
                <div className="flex items-center gap-2">
                    <Construction className="text-[#2b4c7e]" size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Future Proofed</span>
                </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 border border-[#2b4c7e] translate-x-4 translate-y-4"></div>
             <div className="bg-white p-12 relative z-10">
                <h5 className="text-black text-[10px] font-black uppercase tracking-widest mb-8">Sample Data Points</h5>
                <ul className="space-y-6">
                    {['Net Internal Area (NIA) Analysis', 'Means of Escape (Fire) Compliance', 'Desk-to-Amenity Ratio', 'Universal Access (ADA) Pathing'].map((t, i) => (
                        <li key={i} className="flex justify-between items-center text-gray-400 text-xs border-b border-black/5 pb-2">
                            <span>{t}</span>
                            <ArrowUpRight size={14} className="text-[#2b4c7e]" />
                        </li>
                    ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* KPI PERFORMANCE STRIP */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Density Gain", val: "+22%" },
            { label: "Cost Per Head", val: "Optimized" },
            { label: "BIM Compliance", val: "Gold" },
            { label: "Growth Buffer", val: "15%" }
          ].map((kpi, i) => (
            <div key={i}>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">{kpi.label}</p>
              <p className="text-3xl font-serif italic text-[#2b4c7e]">{kpi.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REUSABLE FAQS */}
      <FAQSection 
        title="Planning & Layout FAQs"
        items={[
            { q: "How much space is needed per employee?", a: "Modern standards suggest between 80 to 120 sq. ft. per person, including shared amenities, but our 'Density Audit' helps refine this based on your specific team workflows." },
            { q: "Can you plan for a 'Hybrid' workforce?", a: "Absolutely. We specialize in 'Hot-Desking' logic and Neighborhood Zoning, allowing you to reduce fixed desk counts while increasing collaborative square footage." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Stop guessing your office capacity."
        description="Book a technical spatial audit to unlock the true potential of your real estate footprint."
        buttonText="Request Space Audit"
        link="/contact"
      />

      {/* TRUST STRIP */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['BIM Level 2 Certified', 'ISO 9001 Management', 'RICS Compliant Measurement', 'Sustainability Partner'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default CorporateSpacePlanning;