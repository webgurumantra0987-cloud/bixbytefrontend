import React, { useEffect } from 'react';
import { 
  Users, Video, Volume2, Mic2, 
  Wifi, Monitor, ShieldCheck, Zap,
  Layers, Coffee, Cpu, Globe
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const BoardroomAndConfrenceRoomDesign = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#1a1a1a] selection:text-white">
      
      {/* 1. HERO: THE DECISION CENTER */}
      <HeroSection 
        subtitle="High-Stakes Environments"
        title="Boardrooms &"
        highlight="Conference Suites."
        backgroundImage="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: THE PSYCHOLOGY OF DECISION MAKING */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">01 — Strategy</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight">Where Vision <br /> Meets <span className="text-[#828a1c]">Velocity.</span></h2>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              The modern boardroom is no longer just a room with a large table; it is a high-tech nerve center where global strategies are forged. At Bixbite, we design <strong>Decision-Support Environments</strong>. Our approach balances the gravity of executive presence with the agility of digital collaboration. We analyze <strong>Interaction Hierarchies</strong> to ensure that whether a participant is physically in the room or joining via 4K beam-forming video, they have an equal seat at the table.
            </p>
            <div className="flex gap-12 border-l border-[#828a1c] pl-8">
              <div>
                <p className="text-2xl font-serif italic text-[#1a1a1a]">Hybrid</p>
                <p className="text-[9px] uppercase tracking-widest text-gray-400">First Engineering</p>
              </div>
              <div>
                <p className="text-2xl font-serif italic text-[#1a1a1a]">Zero</p>
                <p className="text-[9px] uppercase tracking-widest text-gray-400">Cable Visibility</p>
              </div>
            </div>
          </div>
          <div className="aspect-[4/5] bg-gray-200 shadow-2xl overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80" alt="Bespoke Boardroom Table and Lighting" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
          </div>
        </div>
      </section>

      {/* SECTION 2: THE ACOUSTIC ENVELOPE */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">02 — Physics</span>
            <h3 className="text-4xl font-serif italic">Acoustic <span className="text-[#828a1c]">Sanctity.</span></h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              In a boardroom, every syllable matters. We implement <strong>Acoustic Shadowing</strong> and NRC-rated hidden paneling to eliminate flutter echoes and reverberation. Our designs include specialized ceiling clouds that direct sound toward beam-forming microphones while dampening peripheral HVAC noise. This ensures crystal-clear audio for remote participants and absolute speech privacy between the boardroom and the surrounding office.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTEGRATED TECHNOLOGY (UI/UX) */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">03 — Intelligence</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Frictionless <span className="text-[#828a1c]">AV Integration.</span></h3>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              Technology should be felt, not seen. We specialize in <strong>Disappearing Tech</strong>: motorized 4K displays that retract into custom cabinetry, under-table cable management hubs, and integrated touch-panels that control lighting, climate, and AV with a single swipe. Our "One-Touch Start" philosophy ensures that meetings begin in seconds, not minutes, eliminating the technical fatigue often associated with complex boardroom setups.
            </p>
            
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="aspect-square bg-white border border-black/5 p-8 flex flex-col justify-center items-center text-center group hover:bg-[#828a1c] transition-all">
                <Video className="text-[#828a1c] group-hover:text-white mb-4" size={32} />
                <p className="text-[10px] font-black uppercase tracking-widest group-hover:text-white">4K Beamtracking</p>
             </div>
             <div className="aspect-square bg-white border border-black/5 p-8 flex flex-col justify-center items-center text-center group hover:bg-[#828a1c] transition-all">
                <Wifi className="text-[#828a1c] group-hover:text-white mb-4" size={32} />
                <p className="text-[10px] font-black uppercase tracking-widest group-hover:text-white">Wi-Fi 7 Ready</p>
             </div>
             <div className="aspect-square bg-white border border-black/5 p-8 flex flex-col justify-center items-center text-center group hover:bg-[#828a1c] transition-all">
                <Cpu className="text-[#828a1c] group-hover:text-white mb-4" size={32} />
                <p className="text-[10px] font-black uppercase tracking-widest group-hover:text-white">IoT Automation</p>
             </div>
             <div className="aspect-square bg-white border border-black/5 p-8 flex flex-col justify-center items-center text-center group hover:bg-[#828a1c] transition-all">
                <Globe className="text-[#828a1c] group-hover:text-white mb-4" size={32} />
                <p className="text-[10px] font-black uppercase tracking-widest group-hover:text-white">Global Sync</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE MONOLITHIC TABLE */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-video bg-gray-100 overflow-hidden shadow-2xl">
               <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dee6b?auto=format&fit=crop&q=80" alt="Custom Executive Boardroom Table" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">04 — Joinery</span>
              <h3 className="text-4xl font-serif italic text-[#1a1a1a]">The <span className="text-[#828a1c]">Central Totem.</span></h3>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                The boardroom table is the center of gravity for the room. We design bespoke, <strong>Monolithic Surfaces</strong> using book-matched veneers, liquid metal finishes, or Corian inserts. We consider the <strong>"V-Shaped" Geometry</strong> for video conferencing, ensuring that every person's face is visible to the camera without obstruction. Our tables are engineered with internal ventilation systems for cooling high-performance hardware housed within the base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LIGHTING FOR PERFORMANCE & VIDEO */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">05 — Illumination</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Broadcast-Quality <br /><span className="text-[#828a1c]">Lighting.</span></h3>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              Standard office lighting often creates harsh shadows during video calls. We implement <strong>Dual-Layer Lighting</strong>: soft, indirect ambient lighting to reduce glare on screens, and high-CRI (Color Rendering Index) directional lighting to illuminate faces naturally. This ensures that every stakeholder looks professional and energetic on global broadcasts, mirroring a television studio's precision within a corporate environment.
            </p>
            
          </div>
          <div className="aspect-video bg-[#1a1a1a] flex items-center justify-center border border-white/5">
              <Zap className="text-[#828a1c] w-16 h-16 opacity-20" />
          </div>
        </div>
      </section>

      {/* SECTION 6: THE ANTECABINET & HOSPITALITY */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#FAF9F6]">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 aspect-square max-h-[500px] overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80" alt="Executive Coffee Station and Credenza" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">06 — Amenities</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Seamless <span className="text-[#828a1c]">Hospitality.</span></h3>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              Strategic sessions require sustained energy. We integrate <strong>Concealed Hospitality Stations</strong>—discreet credenzas housing high-end coffee systems, refrigeration, and catering storage. By keeping refreshments within the room but hidden behind bespoke paneling, we maintain the professional decorum of the meeting while ensuring that stakeholders never need to break their focus.
            </p>
          </div>
        </div>
      </section>

      {/* KPI PERFORMANCE STRIP */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Acoustics", val: "RT60 < 0.4s" },
            { label: "Connectivity", val: "10Gbps Ready" },
            { label: "Privacy", val: "STC 50+ Rated" },
            { label: "Visuals", val: "8K UHD Ready" }
          ].map((kpi, i) => (
            <div key={i}>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">{kpi.label}</p>
              <p className="text-3xl font-serif italic text-[#828a1c]">{kpi.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REUSABLE FAQS */}
      <FAQSection 
        title="Boardroom Design FAQs"
        items={[
            { q: "What is the best table shape for video conferencing?", a: "A 'V' or 'U' shape is ideal as it gives the camera a clear line of sight to every participant without people blocking each other." },
            { q: "How do you handle privacy for sensitive board meetings?", a: "We utilize double-glazed acoustic glass, switchable privacy film, and sound-masking systems outside the door to prevent eavesdropping." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Upgrade your decision center."
        description="Book a technical spatial audit for your boardroom and discover how hybrid-first design can accelerate your strategy."
        buttonText="Get Technical Proposal"
        link="/contact"
      />

      {/* TRUST STRIP */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['THX Certified Acoustics', 'Crestron Integration Partner', 'BIFMA Compliant Seating', 'LEED Energy Efficient'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default BoardroomAndConfrenceRoomDesign;