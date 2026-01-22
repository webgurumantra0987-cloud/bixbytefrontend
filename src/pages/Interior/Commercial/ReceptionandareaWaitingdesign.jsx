import React, { useEffect } from 'react';
import { 
  Coffee, Armchair, Sparkles, Smile, 
  ShieldCheck, Globe, Star, Clock, 
  MapPin, PhoneCall 
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

// Data
import { processItems } from '../../../Data';

const ReceptionandareaWaitingdesign = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#d4af37] selection:text-white">
      
      {/* 1. HERO: THE FIRST IMPRESSION */}
      <HeroSection 
        subtitle="Hospitality & Corporate Entry"
        title="Reception &"
        highlight="Waiting Areas."
        backgroundImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80"
      />

      {/* 2. THE PSYCHOLOGY OF WAITING (Content Section ~300 words) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Spatial Psychology</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight mb-8">Seven Seconds to <br /> Define Your Brand.</h2>
            <p>
              The reception area is the handshake of your building. At Bixbite, we understand that <strong>Reception and Waiting Area design</strong> is not merely about seating; it is about the transition from the external world into your brand's internal ecosystem. We utilize "Decompression Zones" that allow visitors to shed the stress of travel and enter a state of calm receptivity.
            </p>
            <p>
              Our layouts prioritize <strong>Sightline Engineering</strong>—ensuring that the front desk is immediately visible but not overwhelming. We integrate soft indirect lighting, biophilic elements, and curated acoustic layers to reduce "waiting anxiety." By balancing luxury finishes with ergonomic comfort, we transform the idle time of a visitor into an experience of brand immersion.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden border border-black/5">
              <img src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80" alt="Luxury Reception" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-[#1a1a1a] p-10 text-white hidden md:block">
                <Star className="text-[#d4af37] mb-4" />
                <p className="text-[10px] uppercase tracking-widest leading-loose">Premium <br /> Material Selection</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MATERIAL & FINISH GRID */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif italic">Curated Tactility</h3>
            <p className="text-gray-400 uppercase text-[10px] tracking-[0.4em] mt-2">Sensory Design Elements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Natural Stone", desc: "Italian marble and honed granite for desk monoliths." },
              { title: "Acoustic Fabric", desc: "Wall paneling that absorbs echo and creates intimacy." },
              { title: "Warm Timbers", desc: "Sustainably sourced oak and walnut for thermal comfort." }
            ].map((m, i) => (
              <div key={i} className="group cursor-default">
                <div className="h-1 w-full bg-black/5 mb-6 group-hover:bg-[#d4af37] transition-all duration-500" />
                <h4 className="text-[11px] font-black uppercase tracking-widest mb-3">{m.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE FLOW CHART (Visual Design Section) */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif italic text-[#d4af37] mb-12">The Visitor Journey Map</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {['Arrival', 'Check-in', 'Decompression', 'Transition'].map((step, i) => (
                    <div key={i} className="relative">
                        <div className="w-16 h-16 border border-[#d4af37]/30 rounded-full flex items-center justify-center mx-auto mb-6 text-[#d4af37] font-serif italic text-2xl">
                            {i+1}
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest">{step}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. REUSABLE SERVICE CARDS */}
      <ServiceFeatureCards 
        title="Bespoke Amenities"
        subtitle="The Waiting Experience"
        items={[
            { icon: <Coffee size={20} />, title: "Hospitality Bars", description: "Integrated refreshment zones that feel like five-star lounges." },
            { icon: <Armchair size={20} />, title: "Ergonomic Seating", description: "Designer furniture selected for long-dwell postural support." },
            { icon: <Sparkles size={20} />, title: "Ambience Control", description: "Smart lighting and scent marketing integration." }
        ]} 
      />

      {/* 6. EDITORIAL IMAGE SPLIT (Interactive Hover) */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
                <h3 className="text-5xl font-serif italic text-[#1a1a1a] mb-8 leading-tight">Beyond the <br /> Front Desk.</h3>
                <p className="text-gray-500 leading-relaxed text-lg mb-8">
                    We specialize in <strong>Multi-Functional Receptions</strong>. In 2026, the waiting area is also a casual meeting space, a brand museum, and a social hub. Our designs incorporate hidden power outlets and high-speed Wi-Fi zones discreetly into the furniture.
                </p>
                <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest hover:text-[#d4af37] transition-colors">
                    <div className="w-10 h-[1px] bg-[#d4af37]" /> View Technical Detail
                </button>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80" className="w-full h-80 object-cover" alt="Detail 1" />
                <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80" className="w-full h-80 object-cover mt-12" alt="Detail 2" />
            </div>
        </div>
      </section>

      {/* 7. REUSABLE PROCESS SECTION */}
      <ServiceFeatureCards 
        title="Execution Path"
        subtitle="Strategy"
        items={processItems} 
      />

      {/* 8. FAQ SECTION (REUSABLE) */}
      <FAQSection 
        title="Reception Area FAQs"
        items={[
            { q: "How much space is needed for a reception desk?", a: "Standard desk depth is 600-750mm, but the total zone requires at least 3 meters for comfortable visitor flow." },
            { q: "Can you design for small medical clinics?", a: "Yes, we specialize in high-efficiency, small-footprint waiting areas that maximize seating without feeling crowded." }
        ]} 
      />

      {/* 9. THE QUALITY BANNER */}
      <section className="py-20 bg-[#1a1a1a] text-white/40 flex justify-center gap-20 overflow-hidden">
        {['Durability Tested', 'Anti-Microbial Finishes', 'Acoustically Treated'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap">{t}</span>
        ))}
      </section>

      {/* 10. REUSABLE CTA */}
      <ServiceCTA 
        title="Redefine your first impression."
        description="Book a spatial audit for your building's entrance and lobby area."
        buttonText="Get a Quote"
        link="/contact"
      />

    </div>
  );
};

export default ReceptionandareaWaitingdesign;