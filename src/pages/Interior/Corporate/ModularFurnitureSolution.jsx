import React, { useEffect } from 'react';
import { 
  Box, Maximize2, Layers, RefreshCcw, 
  Settings2, Puzzle, ShieldCheck, Truck,
  Zap, PenTool, Layout, Component
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const ModularFurnitureSolution = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white selection:bg-[#6b4411] selection:text-white">
      
      {/* 1. HERO: THE SYSTEMIC APPROACH */}
      <HeroSection 
        subtitle="Agile Asset Engineering"
        title="Modular"
        highlight="Furniture Solutions."
        backgroundImage="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: THE MODULAR PHILOSOPHY */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-[#6b4411] text-[10px] font-black uppercase tracking-[0.6em]">01 — Adaptability</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight">Furniture that <br /> Evolves with <span className="text-[#6b4411]">Speed.</span></h2>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              Static offices are a liability in a dynamic economy. At Bixbite, we design <strong>Living Inventories</strong>. Our modular furniture solutions are built on a "Plug-and-Play" architecture, allowing your team to reconfigure entire departments in a single weekend. By utilizing standardized components and universal connectors, we ensure that your furniture is never obsolete—only redefined.
            </p>
            <div className="flex gap-10 pt-4">
                <div className="text-center">
                    <RefreshCcw className="text-[#6b4411] mb-2 mx-auto" size={24} />
                    <p className="text-[9px] font-black uppercase tracking-widest">100% Reconfigurable</p>
                </div>
                <div className="text-center">
                    <Layers className="text-[#6b4411] mb-2 mx-auto" size={24} />
                    <p className="text-[9px] font-black uppercase tracking-widest">Stackable Logic</p>
                </div>
                <div className="text-center">
                    <Box className="text-[#6b4411] mb-2 mx-auto" size={24} />
                    <p className="text-[9px] font-black uppercase tracking-widest">Flat-Pack Logistics</p>
                </div>
            </div>
          </div>
          <div className="relative p-12 bg-[#FAF9F6] border border-black/5">
             <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-gray-400 uppercase tracking-widest">System_Assembly_v3</div>
             
          </div>
        </div>
      </section>

      {/* SECTION 2: THE COMPONENT LIBRARY */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-[#6b4411] text-[10px] font-black uppercase tracking-[0.6em]">02 — Standardization</span>
              <h3 className="text-4xl font-serif italic">The "Kit of <span className="text-[#6b4411]">Parts".</span></h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                We eliminate the complexity of procurement by creating a unified <strong>Component Library</strong> for your organization. This allows facility managers to pull from a central inventory to create private pods, collaborative clusters, or linear benches. Every piece uses the same hardware, drastically reducing the "Spare Parts" footprint and simplifying maintenance across multiple office locations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { title: "Universal Brackets", icon: <Puzzle /> },
                 { title: "Modular Raceways", icon: <Zap /> },
                 { title: "Interchangeable Tops", icon: <Layout /> },
                 { title: "Snap-on Privacy", icon: <Component /> }
               ].map((item, i) => (
                 <div key={i} className="p-8 border border-white/10 hover:border-[#6b4411] transition-all group">
                    <div className="text-[#6b4411] mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <p className="text-[10px] font-black uppercase tracking-widest">{item.title}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: COLLABORATIVE PODS & CONCENTRATION COCOONS */}
      <section className="py-32 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 aspect-video bg-gray-100 shadow-2xl overflow-hidden grayscale">
             <img src="https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&q=80" alt="Modular Privacy Pods" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#6b4411] text-[10px] font-black uppercase tracking-[0.6em]">03 — Diversity</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">From Focus to <span className="text-[#6b4411]">Flow.</span></h3>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
               Our modular systems aren't just for desks. We offer <strong>Portable Acoustic Pods</strong> and "Huddle Hives" that can be moved with a simple pallet jack. These units provide instant privacy in open-plan offices without the need for fixed-wall construction, allowing you to bypass building permits and long-term lease modifications.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 4: SUSTAINABILITY & RECIRCULATION */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <span className="text-[#6b4411] text-[10px] font-black uppercase tracking-[0.6em]">04 — Sustainability</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Circular <span className="text-[#6b4411]">Inventory.</span></h3>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              We help you avoid the landfill. Bixbite's modular furniture is designed for the <strong>Circular Economy</strong>. Every part is individually replaceable; if a table top is damaged, you replace the top, not the whole desk. Furthermore, we offer a "Trade-Back" program where unused modular components can be refurbished and recirculated into new projects, maximizing your initial capital expenditure.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Recycled Content", val: "45%" },
                { label: "Repairability Score", val: "9.8/10" },
                { label: "VOC Emissions", val: "Zero" },
                { label: "Carbon Offset", val: "Net Neutral" }
              ].map((stat, i) => (
                <div key={i} className="text-center p-8 bg-[#FAF9F6]">
                  <p className="text-3xl font-serif italic text-[#6b4411]">{stat.val}</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mt-2">{stat.label}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* KPI PERFORMANCE STRIP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Lead Time", val: "2-4 Weeks" },
            { label: "Warranty", val: "10 Years" },
            { label: "Installation", val: "Rapid-Build" },
            { label: "Customization", val: "Infinite" }
          ].map((kpi, i) => (
            <div key={i}>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">{kpi.label}</p>
              <p className="text-3xl font-serif italic text-[#6b4411]">{kpi.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REUSABLE FAQS */}
      <FAQSection 
        title="Modular Logic FAQs"
        items={[
            { q: "Can we integrate modular furniture with our existing desks?", a: "We provide universal adaptors and color-matching services to ensure Bixbite modular units blend seamlessly with your current furniture assets." },
            { q: "Is modular furniture less stable than fixed furniture?", a: "Not at Bixbite. We use heavy-gauge steel interlocking beams that offer higher lateral stability than traditional screw-and-glue joinery." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Build for the unknown future."
        description="Connect with our furniture engineers to design a modular inventory that grows with your team."
        buttonText="Get Modular Catalog"
        link="/contact"
      />

      {/* TRUST STRIP */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['FSC Certified Timber', 'E1 Grade Laminates', 'Powder Coated Steel', 'Tool-less Assembly Options'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default ModularFurnitureSolution;