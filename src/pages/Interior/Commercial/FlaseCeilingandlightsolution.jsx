import React, { useEffect } from 'react';
import { 
  Sun, Moon, Layers, Maximize, 
  Lightbulb, Zap, Sparkles, Eye,
  Layout, ShieldCheck
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

// Data
import { processItems } from '../../../Data';

const FlaseCeilingandlightsolution = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#d4af37] selection:text-white">
      
      {/* 1. HERO: THE FIFTH WALL */}
      <HeroSection 
        subtitle="Illumination & Verticality"
        title="Ceiling &"
        highlight="Lighting."
        backgroundImage="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2000&auto=format&fit=crop"
      />

      {/* 2. THE LUMINANCE PHILOSOPHY (300 Words Content) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8 text-gray-500 text-lg leading-relaxed">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] block">The Fifth Wall</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight">Sculpting Space <br /> with Light.</h2>
            <p>
              In premium interior architecture, the ceiling is often referred to as the "Fifth Wall"—the most expansive canvas for defining a room's character. At Bixbite, our <strong>False Ceiling and Lighting Solutions</strong> are engineered to harmonize structural aesthetics with physiological comfort. We don't just hide wires; we create vertical interest that directs the eye and defines functional zones within an open plan.
            </p>
            <p>
              Our lighting design follows a <strong>Tri-Layer approach</strong>: Ambient, Task, and Accent. By utilizing high-CRI (Color Rendering Index) LED technology and automated dimming systems, we ensure that your space adapts to the time of day. For commercial offices, we focus on glare reduction and uniform lux levels to prevent eye strain, while for luxury showrooms, we use "Dramatic Spotlight Contrast" to focus customer attention on key products.
            </p>
          </div>
          <div className="relative pt-12">
            <div className="aspect-[3/4] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Modern Lighting" />
            </div>
            <div className="absolute top-0 right-0 bg-[#d4af37] p-12 text-black max-w-xs hidden md:block">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4">Lux Standard</p>
                <p className="text-sm font-bold leading-relaxed uppercase tracking-widest">Architectural precision in every lumen. We design for 500+ LUX in task areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIGHTING LAYERS VISUALIZATION (Interactive Grid) */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-px bg-black/10 border border-black/10">
          {[
            { title: "Gypsum & POP", icon: <Layers />, desc: "Seamless, monolithic finishes for minimalist luxury and clean coves." },
            { title: "Grid & Modular", icon: <Layout />, desc: "Acoustic-integrated ceiling tiles for high-occupancy institutional zones." },
            { title: "Smart Automation", icon: <Zap />, desc: "DALI and KNX integrated lighting controls for energy-saving automation." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-12 group hover:bg-[#1a1a1a] transition-all duration-700">
              <div className="text-[#d4af37] mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-[12px] font-black uppercase tracking-widest mb-4 group-hover:text-white">{item.title}</h4>
              <p className="text-xs text-gray-400 group-hover:text-gray-500 leading-loose">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE SPECTRUM CHART (Technical Data) */}
      <section className="py-20 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-12">
          {[
            { label: "Color Temp", val: "3000K - 6000K" },
            { label: "Rendering Index", val: "CRI 95+" },
            { label: "Efficiency", val: "140 Lm/W" },
            { label: "Standards", val: "ASHRAE 90.1" }
          ].map((kpi, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-2">{kpi.label}</p>
              <p className="text-3xl font-serif italic text-[#d4af37]">{kpi.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. REUSABLE FEATURE CARDS (Product Focus) */}
      <ServiceFeatureCards 
        title="Ceiling Engineering"
        subtitle="Structural Aesthetics"
        items={[
            { icon: <Maximize size={20} />, title: "Cove & Indirect Light", description: "Floating ceiling designs that provide soft, shadow-free illumination." },
            { icon: <Lightbulb size={20} />, title: "Magnetic Track Lighting", description: "Versatile, movable lighting fixtures for dynamic showroom environments." },
            { icon: <Sparkles size={20} />, title: "Stretch Ceilings", description: "High-gloss or translucent fabric finishes for a futuristic, seamless look." }
        ]} 
      />

      {/* 6. EDITORIAL SHOWCASE (Verticality) */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 aspect-video overflow-hidden">
             <img src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Architectural Lighting" />
          </div>
          <div className="lg:col-span-4 lg:pl-10">
            <Eye className="text-[#d4af37] mb-6 w-10 h-10" />
            <h3 className="text-4xl font-serif italic text-[#1a1a1a] mb-6">Visual Comfort First.</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We specialize in "Circadian Lighting"—systems that adjust color temperature automatically to support the human body's natural clock, increasing energy in the morning and promoting calm in the evening.
            </p>
            <ul className="space-y-4">
              {['Flicker-Free Drivers', 'Glare Cut-off Fixtures', 'Sustainable LED Arrays'].map(item => (
                <li key={item} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-black">
                   <div className="w-6 h-[1px] bg-[#d4af37]" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. REUSABLE PROCESS */}
      <ServiceFeatureCards 
        title="Illumination Path"
        subtitle="Strategy"
        items={processItems} 
      />

      {/* 8. FAQ SECTION (REUSABLE) */}
      <FAQSection 
        title="Lighting & Ceiling FAQs"
        items={[
            { q: "Is a false ceiling mandatory for LED lighting?", a: "Not mandatory, but it provides the necessary cavity for recessed fixtures and concealment of electrical conduits." },
            { q: "How long does a gypsum ceiling installation take?", a: "A standard 1000 sq.ft office space typically takes 10-14 days for framing, boarding, and finishing." }
        ]} 
      />

      {/* 9. THE QUALITY BANNER */}
      <section className="py-20 bg-[#FAF9F6] border-t border-black/5 opacity-40 grayscale flex justify-center gap-16 overflow-hidden">
        {['Energy Star Certified', 'Class-A Fire Rated', 'VOC-Free Materials'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap">{t}</span>
        ))}
      </section>

      {/* 10. REUSABLE CTA */}
      <ServiceCTA 
        title="Light up your brand's potential."
        description="Schedule a luxury lighting consultation to redefine your ceiling's architectural impact."
        buttonText="Book Site Audit"
        link="/contact"
      />

    </div>
  );
};

export default FlaseCeilingandlightsolution;