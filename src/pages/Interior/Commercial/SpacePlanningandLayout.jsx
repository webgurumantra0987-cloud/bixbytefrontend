import React, { useEffect } from 'react';
import { 
  Maximize, ShieldCheck, Layers, Compass, Zap, Quote, 
  Move, Focus, Sun, Thermometer, Database, PenTool
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const SpacePlanningandLayout = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#828a1c] selection:text-white overflow-x-hidden">
      
      {/* 1. HERO: THE ARCHITECTURAL AXIS */}
      <HeroSection 
        subtitle="Mathematical Spatial Design"
        title="Space Planning"
        highlight="& Layout Engineering."
        backgroundImage="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: THE PHILOSOPHY OF FLOW */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em] block">Methodology</span>
            <h2 className="text-5xl md:text-6xl font-serif italic text-[#1a1a1a] leading-[1.1]">The Geometry <br /> of Human <br /> <span className="text-[#828a1c]">Interaction.</span></h2>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              At Bixbite, we don't just fill rooms; we engineer the invisible flow of human energy. 
              Our spatial logic optimizes movement to transform static areas into living ecosystems. 
              We utilize <strong>Computational Design</strong> to simulate thousands of circulation 
              patterns before a single wall is positioned. This ensures that every square meter 
              contributes to either operational efficiency or psychological well-being.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
               <div className="aspect-[3/4] bg-gray-200 overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80" alt="Architectural Plan" className="w-full h-full object-cover grayscale" />
               </div>
               <div className="p-8 bg-[#828a1c] text-white">
                  <p className="text-[10px] font-black uppercase tracking-widest mb-2">Technical Standard</p>
                  <p className="font-serif italic text-xl">BIM Level 2 Integrated Planning</p>
               </div>
            </div>
            <div className="aspect-[3/5] bg-[#1a1a1a] overflow-hidden relative group">
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Spatial Analysis" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-1000" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <Move className="text-white w-20 h-20 opacity-20" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE 4-PILLAR ANALYSIS (Interactive Depth) */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Variables of Optimization.</h3>
            <p className="text-gray-400 text-xs uppercase tracking-[0.4em] max-w-sm">Every layout is a response to environmental and functional constraints.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-px bg-gray-100">
            {[
              { icon: <Sun />, title: "Luminance Mapping", desc: "Calculating lux levels to ensure natural light reaches deep into the floor plate, reducing artificial energy load." },
              { icon: <Thermometer />, title: "Thermal Zoning", desc: "Coordinating layouts with HVAC load profiles to maintain micro-climates that support human focus." },
              { icon: <Focus />, title: "Acoustic Zoning", desc: "Mapping sound travel and reverberation to separate high-energy collaboration from deep-work quiet zones." },
              { icon: <Database />, title: "Utility Matrix", desc: "Engineering the hidden infrastructure—power, data, and plumbing—to allow for modular future-proofing." }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-12 hover:bg-[#FAF9F6] transition-colors group">
                <div className="text-[#828a1c] mb-8 group-hover:scale-110 transition-transform duration-500">{pillar.icon}</div>
                <h4 className="text-[11px] font-black uppercase tracking-widest mb-4">{pillar.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CIRCULATION VS. STAGNATION (The Graphic Section) */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            
            <p className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.5em] mb-6">Circulation Intelligence</p>
            <h3 className="text-4xl font-serif italic mb-8">Eradicating <br /> Dead Space.</h3>
            <p className="text-gray-400 leading-relaxed text-lg font-light mb-8">
              We employ <strong>Space Syntax Theory</strong> to analyze the visibility and accessibility of every corner. By identifying "Cold Zones"—areas that are underutilized or naturally avoided—we introduce architectural catalysts like biophilic hubs or refreshment nodes to reactivate the square footage. This "Heat Mapping" approach guarantees that you are getting 100% value from your real estate investment.
            </p>
            <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-10">
              <div>
                <p className="text-3xl font-serif italic text-[#828a1c]">~22%</p>
                <p className="text-[9px] uppercase tracking-widest text-gray-500">Avg. Space Recovery</p>
              </div>
              <div>
                <p className="text-3xl font-serif italic text-[#828a1c]">Zero</p>
                <p className="text-[9px] uppercase tracking-widest text-gray-500">Unresolved Corridors</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 aspect-square bg-[#2a2a2a] p-1 border border-white/5 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#828a1c]/20 to-transparent"></div>
             <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80" alt="Technical Blueprint" className="w-full h-full object-cover opacity-40 grayscale" />
          </div>
        </div>
      </section>

      {/* SECTION 4: THE RESIDENTIAL VS. COMMERCIAL LOGIC */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-px bg-black/5 border border-black/5">
            <div className="bg-white p-16">
               <h4 className="text-2xl font-serif italic mb-6">The Corporate Machine.</h4>
               <p className="text-gray-500 leading-relaxed mb-8 font-light">
                  For institutional and office clients, our planning revolves around <strong>Agility and Scalability</strong>. We design "Neighborhood" layouts that allow teams to expand or contract without requiring structural renovations. By integrating modular power grids and movable partitions, the layout becomes a tool for business growth.
               </p>
               <ul className="space-y-4">
                  {['Activity-Based Working (ABW)', 'Huddle Room Placement', 'Logistics Synchronization'].map(t => (
                    <li key={t} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#828a1c]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#828a1c]" /> {t}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="bg-[#FAF9F6] p-16">
               <h4 className="text-2xl font-serif italic mb-6">The Domestic Sanctuary.</h4>
               <p className="text-gray-500 leading-relaxed mb-8 font-light">
                  Residential planning is about the <strong>Chronology of the Day</strong>. We map your morning rituals and evening wind-downs to ensure the spatial sequence supports your lifestyle. From Vastu-logic alignment to sightline privacy from neighboring structures, we curate the flow of intimacy.
               </p>
               <ul className="space-y-4">
                  {['Morning Sun Alignment', 'Private vs. Social Zoning', 'Storage Invisibility'].map(t => (
                    <li key={t} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#6b4411]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6b4411]" /> {t}
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION (MODULAR) */}
      <ServiceFeatureCards 
        title="The Planning Lifecycle"
        subtitle="From Data to Blueprint"
        items={processItems}
      />

      {/* SECTION 5: TECHNICAL AUDIT (CONVERSION TRIGGER) */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <PenTool className="text-[#828a1c] w-12 h-12 mx-auto" />
          <h2 className="text-4xl font-serif italic text-white">The Spatial Audit.</h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Before we design, we audit. Bixbite offers a comprehensive <strong>Site Potential Report</strong> 
            that analyzes current bottlenecks, lighting deficits, and occupancy leaks in your existing space.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
             <div className="px-8 py-4 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-pointer">Request Audit</div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <FAQSection 
        items={spaceFAQ} 
        title="Planning Intelligence" 
        subtitle="Operational Questions" 
      />

      {/* 7. REFINED TRUST BANNER */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale contrast-125">
            {['ISO 9001 QUALITY', 'BIM ACCREDITED', 'ESG COMPLIANT', 'CIBSE STANDARDS'].map((text, i) => (
              <p key={i} className="text-[10px] font-black tracking-[0.4em] hover:opacity-100 transition-opacity cursor-default">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONVERSION CTA */}
      <ServiceCTA 
        title="Don't just fill space. Engineer it."
        description="Book a technical spatial audit with our lead architects to unlock the hidden potential of your square footage."
        buttonText="Analyze My Space"
        link="/contact"
      />

    </div>
  );
};

export default SpacePlanningandLayout;