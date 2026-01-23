import React, { useEffect } from 'react';
import { 
  Leaf, Sun, Wind, Recycle, 
  Droplets, Globe, ShieldCheck, TreePine,
  Sprout, Award, ClipboardCheck, Zap
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const SustaibleAndGreenInteriosSetup = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcfdfa] selection:bg-[#4a5d45] selection:text-white text-[#1a1a1a]">
      
      {/* 1. HERO: THE LIVING OFFICE */}
      <HeroSection 
        subtitle="Regenerative Spatial Design"
        title="Sustainable"
        highlight="& Green Interiors."
        backgroundImage="https://images.unsplash.com/photo-1542601098-3ade3a5d5ee3?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: THE BIOPHILIC IMPERATIVE */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-[#4a5d45] text-[10px] font-black uppercase tracking-[0.6em]">01 — Biophilia</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight">Designing for <br /> the <span className="text-[#4a5d45]">Human Organism.</span></h2>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              Sustainability at Bixbite is not a checkbox; it is a philosophy of <strong>Biological Alignment</strong>. We integrate biophilic design principles that reconnect office inhabitants with the natural world. By utilizing living walls, natural circadian light-wells, and organic fractal patterns, we reduce cortisol levels and boost cognitive recovery rates, proving that what is good for the planet is inherently good for the person.
            </p>
            
            <div className="flex gap-8 pt-4">
                <div className="flex items-center gap-3">
                    <Sprout className="text-[#4a5d45]" size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Phytoremediation</span>
                </div>
                <div className="flex items-center gap-3">
                    <Sun className="text-[#4a5d45]" size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Passive Solar Gain</span>
                </div>
            </div>
          </div>
          <div className="relative group overflow-hidden">
             <div className="aspect-[4/5] bg-gray-100 shadow-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80" alt="Sustainable Interior Materials" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
             </div>
             <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-6 border-l-4 border-[#4a5d45]">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Material Source</p>
                <p className="text-xl font-serif italic">100% Regenerative</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE CIRCULAR MATERIAL PALETTE */}
      <section className="py-24 bg-[#f4f6f2] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif italic">Circular Materiality</h3>
            <p className="text-gray-400 text-[10px] uppercase tracking-[0.4em] mt-4">Lowering Embodied Carbon through Intelligent Sourcing</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                title: "Carbon-Negative Finishes", 
                desc: "Mycelium-based acoustic panels and cork flooring that sequester more carbon than they emit during production.",
                icon: <TreePine className="text-[#4a5d45]" /> 
              },
              { 
                title: "Low-VOC Ecosystems", 
                desc: "Non-toxic adhesives and water-based coatings that ensure medical-grade indoor air quality (IAQ).",
                icon: <Droplets className="text-[#4a5d45]" /> 
              },
              { 
                title: "Upcycled Composites", 
                desc: "Surface materials engineered from ocean-bound plastics and reclaimed construction timber.",
                icon: <Recycle className="text-[#4a5d45]" /> 
              }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white shadow-sm border border-[#4a5d45]/10 hover:shadow-md transition-all">
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-[11px] font-black uppercase tracking-widest mb-4">{item.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: NET-ZERO OPERATIONAL STRATEGY */}
      <section className="py-32 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="aspect-video bg-gray-200 relative">
             <img src="https://images.unsplash.com/photo-1506091900743-a8bb6331821c?auto=format&fit=crop&q=80" alt="Energy Efficient Office Layout" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-[#4a5d45]/10 mix-blend-multiply"></div>
          </div>
          <div className="space-y-6">
            <span className="text-[#4a5d45] text-[10px] font-black uppercase tracking-[0.6em]">03 — Efficiency</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Passive <span className="text-[#4a5d45]">Intelligence.</span></h3>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
               We utilize <strong>Dynamic Thermal Modeling</strong> to optimize furniture placement for maximum airflow and natural cooling. Our designs integrate smart shading systems that react to the sun’s angle, reducing the load on HVAC units. This results in a "Net-Zero Ready" interior that slashes operational carbon footprint while significantly lowering utility overheads.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 4: THE CERTIFICATION PATHWAY */}
      <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-6">
            <span className="text-[#4a5d45] text-[10px] font-black uppercase tracking-[0.6em]">04 — Accreditation</span>
            <h3 className="text-4xl font-serif italic">Validated <span className="text-[#4a5d45]">Excellence.</span></h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              We guide your project through the complexities of global sustainability standards. Whether aiming for <strong>LEED Platinum, WELL Building Gold, or BREEAM Outstanding</strong>, we manage the documentation, material auditing, and performance testing required to earn the world's most prestigious environmental accolades.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="flex items-center gap-3">
                    <ClipboardCheck className="text-[#4a5d45]" size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Audit Management</span>
                </div>
                <div className="flex items-center gap-3">
                    <ShieldCheck className="text-[#4a5d45]" size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest">ESG Compliance</span>
                </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {[
               { name: 'LEED', desc: 'Efficiency' },
               { name: 'WELL', desc: 'Human Health' },
               { name: 'BREEAM', desc: 'Environment' },
               { name: 'FITWEL', desc: 'Wellness' }
             ].map((cert, i) => (
               <div key={i} className="p-10 border border-white/10 flex flex-col items-center justify-center text-center hover:border-[#4a5d45] transition-colors">
                  <Award className="text-[#4a5d45] mb-4" size={32} />
                  <p className="text-xl font-serif italic mb-1">{cert.name}</p>
                  <p className="text-[9px] uppercase tracking-widest text-gray-500">{cert.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* KPI PERFORMANCE STRIP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Carbon Reduction", val: "35% Avg." },
            { label: "Water Efficiency", val: "20% Gain" },
            { label: "Productivity Boost", val: "+15%" },
            { label: "Energy Savings", val: "30% Lower" }
          ].map((kpi, i) => (
            <div key={i}>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">{kpi.label}</p>
              <p className="text-3xl font-serif italic text-[#4a5d45]">{kpi.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REUSABLE FAQS */}
      <FAQSection 
        title="Sustainability FAQs"
        items={[
            { q: "Is green design significantly more expensive?", a: "While initial material costs can be 5-10% higher, the ROI is realized through lower utility bills, reduced employee turnover, and enhanced brand equity for ESG-conscious investors." },
            { q: "What is 'Biophilic Design' exactly?", a: "It is the integration of nature into the built environment. This includes living plants, natural light, and using 'Biomorphic' shapes that reflect patterns found in nature." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Build a future-proof workplace."
        description="Book a Green-Spatial Audit to learn how sustainable design can transform your corporate culture and environmental impact."
        buttonText="Get Sustainability Audit"
        link="/contact"
      />

      {/* TRUST STRIP */}
      <section className="py-16 bg-[#fcfdfa] border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['FSC Certified Materials', 'Carbon Neutral Studio', 'LEED AP Lead Designers', 'Circular Economy Partner'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default SustaibleAndGreenInteriosSetup;