import React, { useEffect } from 'react';
import { 
  Palette, Fingerprint, Rocket, Globe, 
  Layers, PenTool, Heart, Sparkles,
  Command, Box
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

// Data
import { processItems } from '../../../Data';

const BrandAllignedAndinteriosContept = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#d4af37] selection:text-white">
      
      {/* 1. HERO: SPATIAL STORYTELLING */}
      <HeroSection 
        subtitle="Identity & Narrative Design"
        title="Brand-Aligned"
        highlight="Concepts."
        backgroundImage="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80"
      />

      {/* 2. THE BRAND GENESIS (300 Words Content) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="aspect-square overflow-hidden bg-gray-200">
               <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" alt="Brand Interior" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
            </div>
            {/* Overlay UI element */}
            <div className="absolute top-0 right-0 p-8 bg-white/90 backdrop-blur-md border border-black/5 translate-x-10 -translate-y-10 hidden lg:block">
                <Fingerprint className="text-[#d4af37] w-12 h-12 mb-4" />
                <p className="text-[10px] font-black uppercase tracking-widest text-black">Unique Identity <br /> Protocol</p>
            </div>
          </div>
          <div className="space-y-8 text-gray-500 text-lg leading-relaxed">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] block">Narrative Architecture</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight">Your Brand in <br /> Three Dimensions.</h2>
            <p>
              At Bixbite, we believe that an office or showroom is more than a workplace—it is a physical manifesto. Our <strong>Brand-Aligned Interior Concepts</strong> bridge the gap between graphic identity and architectural reality. We don't just put your logo on a wall; we infuse your brand’s "DNA" into the textures, lighting, and movement patterns of the space.
            </p>
            <p>
              Through a process of <strong>Spatial Storytelling</strong>, we translate your core values into design decisions. If your brand is "Transparent," we utilize glass partitions and open-plan vistas. If your brand is "Heritage-focused," we integrate reclaimed woods and artisanal metalwork. This creates a cohesive environment where employees and clients feel the brand's culture without reading a single word.
            </p>
          </div>
        </div>
      </section>

      {/* 3. BRAND COLOR & TEXTURE THEORY (Visual Section) */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-px bg-black/5 border border-black/5">
          {[
            { title: "Chromatic Logic", desc: "Using psychological color theory to align spatial moods with brand palettes." },
            { title: "Tactile Heritage", desc: "Selecting materials that speak to the brand’s origin—industrial, organic, or tech-forward." },
            { title: "Signage Integration", desc: "Wayfinding systems that feel like an organic extension of the interior architecture." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-12 hover:bg-[#FAF9F6] transition-colors group">
              <Command className="text-[#d4af37] mb-6 group-hover:rotate-90 transition-transform duration-500" />
              <h4 className="text-[12px] font-black uppercase tracking-widest mb-4">{item.title}</h4>
              <p className="text-xs text-gray-400 uppercase tracking-[0.2em] leading-loose">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE CONCEPTUAL MOOD (Full Width Image) */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="h-[60vh] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Moodboard visualization" />
          </div>
          <div className="mt-8 flex justify-between items-center border-b border-black/5 pb-8">
            <p className="font-serif italic text-2xl">01. Conceptual Synthesis</p>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Translating Vision to Form</p>
          </div>
        </div>
      </section>

      {/* 5. REUSABLE FEATURE CARDS (Core Elements) */}
      <ServiceFeatureCards 
        title="Identity Elements"
        subtitle="Design Components"
        items={[
            { icon: <Palette size={20} />, title: "Custom Color Matching", description: "Ensuring architectural finishes match brand HEX codes across different lighting." },
            { icon: <PenTool size={20} />, title: "Bespoke Wayfinding", description: "Custom signage and icons designed specifically for your building's navigation." },
            { icon: <Globe size={20} />, title: "Culture-First Zoning", description: "Designing collaborative zones that reflect your company's social hierarchy." }
        ]} 
      />

      {/* 6. THE STORYTELLING GRID (Editorial Layout) */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20">
            <div className="flex-1">
                <h3 className="text-4xl font-serif italic text-[#d4af37] mb-10">Emotional <br /> Connectivity.</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                    We create <strong>Experience Centers</strong>. By mapping the 'Emotional Journey' of a client through your space, we ensure that every touchpoint—from the door handle to the boardroom acoustics—reinforces trust and innovation.
                </p>
                <div className="grid grid-cols-2 gap-8">
                    {['Brand Rituals', 'Sensory Branding', 'Interactive Art', 'Legacy Walls'].map(t => (
                        <div key={t} className="flex items-center gap-3">
                            <Box size={14} className="text-[#d4af37]" />
                            <span className="text-[10px] font-black uppercase tracking-widest">{t}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] bg-gray-800"><img src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-60" alt="Detail" /></div>
                <div className="aspect-[3/4] bg-gray-800 mt-12"><img src="https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-60" alt="Detail" /></div>
            </div>
        </div>
      </section>

      {/* 7. REUSABLE PROCESS SECTION */}
      <ServiceFeatureCards 
        title="The Design Evolution"
        subtitle="Strategy"
        items={processItems} 
      />

      {/* 8. FAQ SECTION (REUSABLE) */}
      <FAQSection 
        title="Conceptual Design FAQs"
        items={[
            { q: "Do you collaborate with our marketing team?", a: "Extensively. We work with your brand guardians to ensure spatial designs match your existing digital and print identity." },
            { q: "What if our brand is undergoing a rebrand?", a: "We design 'Flexible Shells'—layouts that allow for easy updates to color and signage as your brand evolves." }
        ]} 
      />

      {/* 9. BRAND TRUST STRIP */}
      <section className="py-20 bg-[#FAF9F6] border-t border-black/5 flex flex-wrap justify-center gap-16 opacity-30 grayscale transition-all hover:grayscale-0">
         <span className="text-sm font-serif italic">Consistent Identity</span>
         <span className="text-sm font-serif italic">Cultural Integration</span>
         <span className="text-sm font-serif italic">User Experience Design</span>
      </section>

      {/* 10. REUSABLE CTA */}
      <ServiceCTA 
        title="Bring your brand to life in 3D."
        description="Connect with our concept designers to transform your business values into a physical sanctuary."
        buttonText="Envision Your Space"
        link="/contact"
      />

    </div>
  );
};

export default BrandAllignedAndinteriosContept;