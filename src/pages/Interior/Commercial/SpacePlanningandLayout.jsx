import React, { useEffect } from 'react';
import { 
  Maximize, ShieldCheck, Layers, Compass, Zap, Quote 
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

// Data
import { processItems, spaceFAQ } from '../../../Data';

const SpacePlanningandLayout = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#d4af37] selection:text-white overflow-x-hidden">
      
      {/* 1. HERO */}
      <HeroSection 
        subtitle="Operational Excellence"
        title="Space Planning"
        highlight="Optimization."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
      />

      {/* 2. THE MANIFESTO */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">The Manifesto</span>
        <h2 className="text-4xl md:text-6xl font-serif italic mb-10 text-[#1a1a1a]">Logic meets Liminality.</h2>
        <p className="text-gray-500 text-xl leading-relaxed font-light italic px-4 md:px-0">
          "At Bixbite, we don't just fill rooms; we engineer the invisible flow of human energy. 
          Our spatial logic optimizes movement to transform static areas into living ecosystems."
        </p>
      </section>

      {/* 3. KPI DATA GRID */}
      <section className="py-16 bg-[#1a1a1a] text-white overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: "Efficiency Gain", val: "38%" },
            { label: "BIM Compliance", val: "Gold" },
            { label: "Technical Precision", val: "0.5mm" },
            { label: "Client ROI", val: "High" }
          ].map((s, i) => (
            <div key={i} className="border-r border-white/5 last:border-0 group">
              <p className="text-5xl font-serif italic text-[#d4af37] mb-2 transition-transform group-hover:-translate-y-1">{s.val}</p>
              <p className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-bold">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EDITORIAL IMAGE SPLIT */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] overflow-hidden border border-black/5 bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80" 
                alt="Spatial Architecture" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#d4af37] p-8 hidden md:block shadow-xl">
              <Layers className="text-black mb-4" />
              <p className="text-black text-[10px] font-black uppercase tracking-widest">Multi-Layer Zoning</p>
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] mb-8 leading-tight">Strategic <br /> Circulation.</h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              We analyze the <strong>DNA of your space</strong>. Whether it's a high-traffic commercial 
              showroom or a private residence, our layouts ensure that natural light and 
              ergonomics dictate the final form.
            </p>
            <div className="space-y-6">
              {['Occupancy Analysis', 'Thermal Comfort Pathing', 'Vastu-Logic Integration'].map((item) => (
                <div key={item} className="flex items-center gap-4 group cursor-default">
                  <div className="w-10 h-[1px] bg-[#d4af37] group-hover:w-16 transition-all duration-500" />
                  <span className="text-[11px] font-black uppercase tracking-widest group-hover:text-[#d4af37] transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. REUSABLE PROCESS CARDS */}
      <ServiceFeatureCards 
        title="Layout Methodology"
        subtitle="Technical Excellence"
        items={processItems}
      />

      {/* 6. SERVICE SECTORS GRID */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {[
              { title: "Corporate", desc: "Productivity-driven layouts.", icon: <Maximize size={20} /> },
              { title: "Residential", desc: "Privacy & flow optimization.", icon: <Compass size={20} /> },
              { title: "Retail", desc: "Customer journey engineering.", icon: <Zap size={20} /> }
            ].map((sector, i) => (
              <div key={i} className="bg-white p-12 hover:bg-[#1a1a1a] group transition-all duration-700">
                <div className="text-[#d4af37] mb-6 group-hover:scale-110 transition-transform">{sector.icon}</div>
                <h4 className="text-[12px] font-black uppercase tracking-widest mb-4 group-hover:text-white">{sector.title}</h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest leading-loose group-hover:text-gray-500">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ENHANCED QUOTE SECTION */}
      <section className="py-40 bg-[#0a0a0a] relative flex justify-center items-center">
        <Quote className="absolute top-10 left-10 text-[#d4af37]/10 w-40 h-40" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <p className="text-white text-3xl md:text-5xl font-serif italic leading-tight">
            "A well-planned space is not seen, it is <span className="text-[#d4af37]">felt</span>."
          </p>
          <div className="mt-12 flex justify-center gap-3">
             {[...Array(5)].map((_, i) => <ShieldCheck key={i} size={16} className="text-[#d4af37]/40" />)}
          </div>
        </div>
      </section>

      {/* 8. REUSABLE FAQ SECTION */}
      <FAQSection 
        items={spaceFAQ} 
        title="Layout Inquiries" 
        subtitle="Common Questions" 
      />

      {/* 9. REFINED TRUST BANNER */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-wrap justify-between items-center opacity-30 grayscale gap-10">
            {['ISO 9001 Certified', 'BIM Level 2 Accredited', 'Sustainability Partner', 'Award Winning 2024'].map((text, i) => (
              <p key={i} className="text-xs font-serif italic tracking-tighter hover:opacity-100 transition-opacity cursor-default">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CONVERSION CTA */}
      <ServiceCTA 
        title="Ready to engineer your future layout?"
        description="Book a technical spatial audit with our lead architects."
        buttonText="Begin Consultation"
        link="/contact"
      />

    </div>
  );
};

export default SpacePlanningandLayout;