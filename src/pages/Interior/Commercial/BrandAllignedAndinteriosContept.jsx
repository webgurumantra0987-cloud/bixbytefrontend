



import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, Fingerprint, Rocket, Globe, 
  Layers, PenTool, Heart, Sparkles,
  Command, Box, ChevronRight, Eye
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const BrandAllignedAndinteriosContept = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#828a1c] selection:text-white">
      
      {/* 1. HERO: SPATIAL STORYTELLING */}
      <HeroSection 
        subtitle="Identity & Narrative Design"
        title="Brand-Aligned"
        highlight="Interiors."
        backgroundImage="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: THE BRAND MANIFESTO */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">01 — Genesis</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#1a1a1a]">A Physical <span className="text-[#828a1c]">Manifesto.</span></h2>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              At Bixbite, we believe that an office, showroom, or hotel is more than a structure—it is a three-dimensional expression of your brand’s DNA. We bridge the gap between graphic identity and architectural reality. We don't just place a logo on a wall; we infuse your brand’s "Essence" into the textures, lighting, and movement patterns of the space, creating a **Brand-Aligned Interior** that speaks without words.
            </p>
          </div>
          <div className="aspect-video bg-gray-100 overflow-hidden shadow-2xl relative group">
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" alt="Brand Identity Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 bg-[#828a1c] p-6 text-white text-[10px] font-black uppercase tracking-widest">Identity Protocol 1.1</div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CHROMATIC LOGIC */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-square bg-gray-200 shadow-xl overflow-hidden">
             <img src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80" alt="Color Theory in Architecture" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">02 — Psychology</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Chromatic <span className="text-[#6b4411]">Logic.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Color is the most immediate trigger of brand recognition. Our designers utilize <strong>Chromatic Theory</strong> to ensure your brand palettes are translated correctly into architectural finishes. We account for Metamerism—the way colors change under different lighting temperatures—ensuring that your brand’s signature green or gold feels consistent from the sunlit lobby to the dimly lit executive lounge.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: TACTILE STORYTELLING */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">03 — Materiality</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Tactile <span className="text-[#828a1c]">Heritage.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              The materials we select are a physical extension of your brand story. A tech-forward brand might utilize brushed aluminum and dichroic glass to signal innovation. Conversely, a heritage luxury brand might require reclaimed timber and hand-burnished brass. This **Sensory Branding** approach ensures that the touch of a door handle or the sound of a footfall reinforces your market position.
            </p>
          </div>
          <div className="aspect-video bg-gray-100 shadow-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80" alt="Texture and Material selection" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 4: SPATIAL ZONING & CULTURE */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-video border border-white/10 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80" alt="Office Culture Zoning" className="w-full h-full object-cover opacity-60" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">04 — Culture</span>
            <h3 className="text-4xl font-serif italic">Zoning for <span className="text-[#828a1c]">Human Synergy.</span></h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              Brand alignment is as much about people as it is about pixels. We design spatial zones that reflect your internal culture. Does your company value hierarchy or flat collaboration? By designing "Serendipity Zones"—areas where cross-departmental interaction occurs naturally—we use architecture to foster the specific behaviors your brand values most, turning your space into a culture-accelerator.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: WAYFINDING & NAVIGATION */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">05 — Precision</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Bespoke <span className="text-[#828a1c]">Wayfinding.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Navigation within a building should feel like an organic extension of your digital interface. Our **Bespoke Wayfinding** systems utilize custom icons and typography that mirror your brand’s visual language. From custom-etched floor markers to integrated digital displays, we ensure the journey through your building is seamless, intuitive, and distinctly yours.
            </p>
          </div>
          <div className="aspect-[4/3] bg-gray-200 overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80" alt="Modern Wayfinding Signage" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 6: THE EMOTIONAL JOURNEY */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-video shadow-xl overflow-hidden">
             <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80" alt="Customer Journey Design" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">06 — Emotion</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Designing <span className="text-[#6b4411]">Connectivity.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              We map the <strong>Customer Journey</strong> from the moment they step out of the elevator. Every touchpoint is a chance to build trust. Through "Theatrical Lighting" and curated acoustic zones, we lead the user through a narrative arc that concludes in your primary conversion zone—be it a boardroom, a retail counter, or a gallery space.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: VIRTUAL SYNTHESIS */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">07 — Visualization</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Digital <span className="text-[#828a1c]">Twins.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Before construction, we create high-fidelity **3D Concept Visualizations**. This allows your marketing team and stakeholders to "walk through" the brand environment. We test how logos look on various materials and how brand colors interact with shadow, ensuring the physical reality perfectly matches the strategic vision before a single brick is laid.
            </p>
          </div>
          <div className="aspect-video bg-[#0f1108] p-4 flex items-center justify-center border border-[#828a1c]/20">
             <Eye className="text-[#828a1c] w-12 h-12 animate-pulse" />
          </div>
        </div>
      </section>

      {/* SECTION 8: BRAND FLEXIBILITY */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#FAF9F6]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-square max-h-[500px] overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80" alt="Flexible Office Space" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">08 — Evolution</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Future <span className="text-[#828a1c]">Proofing.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Brands evolve, and their spaces should too. We design with **Adaptive Shells**—architectural layouts that allow for easy updates to graphics, signage, and upholstery. This ensure that as your company scales or rebrands, your physical environment can be updated without the need for a total structural renovation.
            </p>
          </div>
        </div>
      </section>

      {/* REUSABLE FAQS */}
      <FAQSection 
        title="Identity Design FAQs"
        items={[
            { q: "Do you collaborate with brand agencies?", a: "Extensively. We work alongside your existing branding team to translate their 2D brand guidelines into 3D architectural standards." },
            { q: "How long does a brand-aligned concept take?", a: "The conceptual synthesis typically takes 4–6 weeks, depending on the scale and complexity of the brand narrative." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Translate your brand into a sanctuary."
        description="Book a strategy session with our concept architects to start your spatial storytelling."
        buttonText="Begin the Vision"
        link="/contact"
      />
    </div>
  );
};

export default BrandAllignedAndinteriosContept;