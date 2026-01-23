import React, { useEffect } from 'react';
import { 
  Fingerprint, Type, Palette, Share2, 
  Lightbulb, Maximize, Target, Rocket,
  Puzzle, Eye, Layers, Zap
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const CorporateBrandingIntregration = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white selection:bg-[#d4af37] selection:text-white">
      
      {/* 1. HERO: THE BRANDED ARCHITECTURE */}
      <HeroSection 
        subtitle="Environmental Graphic Design"
        title="Corporate Brand"
        highlight="Integration."
        backgroundImage="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: THE BRANDED DNA */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 sticky top-32">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">Manifesto</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight mb-8">Architecture is the <br /><span className="text-[#d4af37]">Last Touchpoint.</span></h2>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              At Bixbite, we believe that corporate interiors should not just house a brand; they should <strong>be</strong> the brand. Branding integration is the art of translating a 2D logo into a 3D experience. We move beyond simple signage, embedding your core values, mission, and visual language into the very materials, textures, and navigation of the office. 
            </p>
          </div>
          <div className="lg:col-span-8 space-y-32">
            <div className="aspect-video bg-[#1a1a1a] p-12 relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
               <Fingerprint className="text-[#d4af37] w-32 h-32 opacity-20 animate-pulse" />
               <h3 className="absolute bottom-12 left-12 text-white/40 text-[10px] font-black uppercase tracking-[0.5em]">Identity Blueprinting</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-6">
                  <h4 className="text-2xl font-serif italic text-[#1a1a1a]">Environmental Graphics</h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    We utilize wall supergraphics, custom typography installations, and etched glass manifestations to turn blank surfaces into narrative canvases. These elements act as "Internal Marketing," reinforcing company culture to employees and building immediate trust with visitors.
                  </p>
               </div>
               <div className="space-y-6">
                  <h4 className="text-2xl font-serif italic text-[#1a1a1a]">Material Semantics</h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    A tech brand might require brushed aluminum and neon accents; a legal firm might demand heavy oak and leather. We select materials that subconsciously communicate your brand’s personality—be it transparency, stability, or disruptive innovation.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE 360 INTEGRATION MAP */}
      <section className="py-24 bg-[#FAF9F6] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">The Integration Matrix</h3>
            <p className="text-gray-400 uppercase text-[10px] tracking-[0.4em] mt-2">Translating Identity to Physical Space</p>
          </div>
          
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              { icon: <Palette />, title: "Color Theory", desc: "Coordinating brand palettes with architectural lighting to ensure brand colors remain accurate under different lux levels." },
              { icon: <Layers />, title: "Texture Layering", desc: "Using materials that mimic the brand’s digital touchpoints—matte, gloss, or tactile organic finishes." },
              { icon: <Type />, title: "Wayfinding", desc: "Bespoke signage systems that use brand typography to guide visitors intuitively through the space." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 shadow-sm border border-black/5 hover:border-[#d4af37] transition-all">
                <div className="text-[#d4af37] mb-6">{item.icon}</div>
                <h4 className="text-[11px] font-black uppercase tracking-widest mb-4">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: IMMERSIVE BRANDING (THE STORY WALL) */}
      <section className="py-32 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.6em]">03 — Storytelling</span>
            <h3 className="text-5xl font-serif italic text-[#1a1a1a]">The "Culture Wall" <br /><span className="text-[#d4af37]">Engineering.</span></h3>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
               We design <strong>Interactive History Timelines</strong> and <strong>Brand Museums</strong> within the office lobby or social hubs. Using a mix of digital displays, physical artifacts, and integrated LED lighting, we tell the story of your company's journey. This creates a sense of pride for employees and offers a powerful icebreaker for potential clients during site visits.
            </p>
            
            <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest hover:text-[#d4af37] transition-colors pt-4">
                <div className="w-10 h-[1px] bg-[#d4af37]" /> Explore Interactive Examples
            </button>
          </div>
          <div className="aspect-square bg-gray-100 overflow-hidden shadow-2xl relative">
             <img src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&q=80" alt="Corporate Branding Graphics" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-[#d4af37]/10 mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      {/* SECTION 4: KINETIC BRANDING & LIGHTING */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 aspect-video border border-white/10 flex items-center justify-center p-20">
             <Zap className="text-[#d4af37] w-24 h-24 opacity-20" />
             <p className="absolute bottom-8 text-[10px] text-white/30 uppercase tracking-[0.5em]">Dynamic Identity Integration</p>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.6em]">04 — Technology</span>
            <h3 className="text-4xl font-serif italic">Light as <span className="text-[#d4af37]">Identity.</span></h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              In 2026, branding is no longer static. We use <strong>Programmable RGBW Lighting</strong> integrated into ceiling coves and wall panels to shift the office "mood" to match brand events. For global companies, we design "World Clock" installations and digital portals that connect satellite offices, making the brand feel unified across continents through real-time architectural feedback.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: WAYFINDING & NAVIGATION PSYCHOLOGY */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.6em]">05 — Flow</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Intuitive <span className="text-[#d4af37]">Wayfinding.</span></h3>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              We treat navigation as a brand touchpoint. By using floor inlays, lighting paths, and custom iconographies, we guide people through your space without the need for cluttered signage. This "Environmental Literacy" ensures that even a first-time visitor feels like they belong in your brand's world, reducing stress and enhancing the spatial experience.
            </p>
            
          </div>
          <div className="aspect-video bg-gray-200 shadow-2xl overflow-hidden">
             <img src="https://images.unsplash.com/photo-1542623024-a797a7abcafc?auto=format&fit=crop&q=80" alt="Office Signage and Wayfinding" className="w-full h-full object-cover grayscale" />
          </div>
        </div>
      </section>

      {/* KPI PERFORMANCE STRIP */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Culture Retention", val: "+40%" },
            { label: "Brand Recall", val: "High" },
            { label: "Navigability", val: "99.9%" },
            { label: "Customization", val: "Bespoke" }
          ].map((kpi, i) => (
            <div key={i} className="group cursor-default">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2 group-hover:text-[#d4af37] transition-colors">{kpi.label}</p>
              <p className="text-4xl font-serif italic text-[#1a1a1a]">{kpi.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REUSABLE FAQS */}
      <FAQSection 
        title="Branding Integration FAQs"
        items={[
            { q: "How do you integrate a brand without making it look like an advertisement?", a: "We focus on 'Subtle Branding'—using the brand's primary shapes, color ratios, and material preferences rather than just repeating the logo. It's about a mood, not a billboard." },
            { q: "Can branding be updated if the company undergoes a rebrand?", a: "Yes. We design with 'Interchangeable Modules' for graphic zones and programmable lighting to ensure the space can evolve with your brand identity." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Turn your office into a brand asset."
        description="Book a Brand-Spatial Audit to see how we can weave your identity into your physical architecture."
        buttonText="Begin Brand Integration"
        link="/contact"
      />

      {/* TRUST STRIP */}
      <section className="py-16 bg-white border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['Custom Typography Panels', 'RAL Color Accuracy', 'Digital Signage Integrated', 'Cultural Narrative Design'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default CorporateBrandingIntregration;