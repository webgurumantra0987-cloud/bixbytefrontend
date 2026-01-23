import React, { useEffect } from 'react';
import { 
  Sun, Moon, Layers, Maximize, 
  Lightbulb, Zap, Sparkles, Eye,
  Layout, ShieldCheck, Ruler, Thermometer
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const FlaseCeilingandlightsolution = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#828a1c] selection:text-white">
      
      {/* 1. HERO: THE FIFTH WALL */}
      <HeroSection 
        subtitle="Illumination & Verticality"
        title="Ceiling &"
        highlight="Lighting."
        backgroundImage="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2000&auto=format&fit=crop"
      />

      {/* SECTION 1: THE PHILOSOPHY OF THE FIFTH WALL */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">01 — Perspective</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#1a1a1a]">Sculpting the <span className="text-[#828a1c]">Fifth Wall.</span></h2>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              In premium interior architecture, the ceiling is the most expansive canvas for defining a room's character. At Bixbite, our <strong>False Ceiling and Lighting Solutions</strong> are engineered to harmonize structural aesthetics with physiological comfort. We don't just hide electrical conduits; we create vertical interest that directs the eye and defines functional zones. From monolithic gypsum spans to intricate modular systems, we treat the ceiling as a structural instrument for light and sound.
            </p>
          </div>
          <div className="aspect-video bg-gray-100 overflow-hidden shadow-2xl relative group">
            <img src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1500&auto=format&fit=crop" alt="Modern Ceiling Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE TRI-LAYER LIGHTING PROTOCOL */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white border-y border-gray-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-square bg-gray-50 overflow-hidden shadow-xl">
             <img src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80" alt="Layered Lighting Design" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">02 — Luminescence</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">The Tri-Layer <span className="text-[#6b4411]">Hierarchy.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Effective illumination is never accidental. We employ a <strong>Tri-Layer approach</strong>: Ambient, Task, and Accent. Ambient lighting provides the base "wash" of the room, Task lighting ensures productivity in work zones without glare, and Accent lighting highlights architectural features or artworks. By balancing these three layers, we eliminate flat, uninspiring spaces and create a dynamic environment that feels alive and textured.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 3: CIRCADIAN SYSTEM INTEGRATION */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">03 — Wellness</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Circadian <span className="text-[#828a1c]">Rythms.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Human biology is inextricably linked to the sun’s spectrum. Our <strong>Human-Centric Lighting</strong> systems utilize automated color temperature tuning (2700K to 6500K). In the morning, the system emits a crisp, blue-enriched light to stimulate cortisol and focus. In the evening, it transitions to a warm, amber glow to support melatonin production. This "Natural Sync" technology reduces office fatigue and enhances occupant well-veing in spaces with limited window access.
            </p>
          </div>
          <div className="aspect-video bg-gray-200 shadow-2xl overflow-hidden p-12 flex items-center justify-center">
             <div className="relative w-full h-full border border-[#828a1c]/20 flex items-center justify-center">
                <Sun className="text-[#828a1c] w-20 h-20 absolute animate-pulse" />
                <Moon className="text-[#6b4411] w-20 h-20 opacity-20" />
             </div>
          </div>
        </div>
      </section>


      {/* SECTION 4: ACOUSTIC CEILING ENGINEERING */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1 aspect-video border border-white/10 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80" alt="Acoustic Ceiling Tiles" className="w-full h-full object-cover opacity-60" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">04 — Physics</span>
            <h3 className="text-4xl font-serif italic">The Sonic <span className="text-[#828a1c]">Absorber.</span></h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              Ceilings are the primary reflectors of sound. To manage reverberation, we integrate <strong>NRC-rated (Noise Reduction Coefficient)</strong> materials directly into our ceiling designs. Whether utilizing perforated gypsum, mineral wool clouds, or baffle systems, we ensure the ceiling works as a giant acoustic sponge. This is critical for open-plan offices and hospitality venues where speech intelligibility and noise control are paramount for a premium user experience.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 5: SMART AUTOMATION & DALI CONTROLS */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">05 — Intelligence</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Digital <span className="text-[#828a1c]">Dimming.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Precision control is the hallmark of luxury lighting. We implement <strong>DALI (Digital Addressable Lighting Interface)</strong> and KNX protocols to allow for individual fixture control. This enables "Scene Management"—pre-programmed lighting moods for meetings, presentations, or evening events. By integrating occupancy sensors and daylight harvesting, our lighting layouts reduce wasted energy, automatically dimming fixtures in unoccupied zones or when natural sunlight is abundant.
            </p>
          </div>
          <div className="aspect-[4/3] bg-gray-200 overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1558000593-f796546f0c0d?auto=format&fit=crop&q=80" alt="Smart Lighting Control Panel" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 6: MATERIALITY: GYPSUM TO STRETCH FABRIC */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-video shadow-xl overflow-hidden">
             <img src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80" alt="Stretch Fabric Ceiling" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">06 — Surfaces</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Seamless <span className="text-[#6b4411]">Expansion.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              The choice of ceiling material defines the visual volume of a space. We specialize in <strong>Monolithic Gypsum</strong> for a minimalist, clean-line look, and <strong>Stretch PVC Ceilings</strong> for a high-gloss, futuristic reflection. For industrial-chic environments, we design "Open-Plenum" layouts where structural elements and black-painted conduits are exposed but curated, using suspended track lighting to anchor the visual plane.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: COVE LIGHTING & INDIRECT ILLUMINATION */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">07 — Shadow Play</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Floating <span className="text-[#828a1c]">Architecture.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              To create a sense of height and weightlessness, we utilize <strong>Cove Lighting</strong>. By hiding high-output LED strips within ceiling recesses, we bounce light off the upper vertical surface, creating a "Halo Effect" that makes the ceiling appear to float. This indirect illumination reduces harsh shadows and creates a soft, luxurious glow that is far more comfortable for long-term occupancy than direct downlighting.
            </p>
          </div>
          <div className="aspect-video bg-[#0f1108] p-4 border border-[#828a1c]/20 flex items-center justify-center">
             <div className="w-full h-[1px] bg-[#828a1c] shadow-[0_0_20px_#828a1c]"></div>
          </div>
        </div>
      </section>

      {/* SECTION 8: TECHNICAL HANDOVER & LUX AUDIT */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#FAF9F6]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-square max-h-[500px] overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80" alt="Light Measurement Audit" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">08 — Delivery</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Forensic <span className="text-[#828a1c]">Lux Mapping.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Our process concludes with a technical <strong>Lux Audit</strong>. We use digital light meters to verify that task areas meet international standards (e.g., 500 Lux for workstations). We calibrate every dimmer and verify the <strong>CRI (Color Rendering Index)</strong> of installed fixtures to ensure your brand colors and materials look exactly as intended. With Bixbite, you receive a certified lighting environment that is as precise as it is beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* REUSABLE DATA STRIP */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-12">
          {[
            { label: "CRI Rating", val: "95+" },
            { label: "Color Temp", val: "2700K - 6500K" },
            { label: "NRC Rating", val: "0.85+" },
            { label: "Efficiency", val: "140 Lm/W" }
          ].map((kpi, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">{kpi.label}</p>
              <p className="text-3xl font-serif italic text-[#828a1c]">{kpi.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REUSABLE FAQS */}
      <FAQSection 
        title="Lighting & Ceiling FAQs"
        items={[
            { q: "Can smart lighting be retrofitted into existing ceilings?", a: "Yes, we use wireless protocols like Zigbee or Bluetooth Mesh to integrate smart controls without tearing down existing structures." },
            { q: "What is the fire rating of your ceiling materials?", a: "We exclusively use Class-A fire-rated gypsum and mineral wool that meet international safety norms for commercial occupancy." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Illuminate your architectural vision."
        description="Book a technical lighting audit to redefine your space's vertical impact."
        buttonText="Get Lighting Audit"
        link="/contact"
      />

      {/* TRUST STRIP */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['ASHRAE 90.1 Compliant', 'LEED Accredited Lighting', 'CIE Standardized Lux'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default FlaseCeilingandlightsolution;