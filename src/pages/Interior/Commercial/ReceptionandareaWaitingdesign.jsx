import React, { useEffect } from 'react';
import { 
  Coffee, Armchair, Sparkles, Smile, 
  ShieldCheck, Globe, Star, Clock, 
  MapPin, PhoneCall, Zap, Eye, Volume2, Move
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const ReceptionandareaWaitingdesign = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#828a1c] selection:text-white">
      
      {/* 1. HERO: THE FIRST IMPRESSION */}
      <HeroSection 
        subtitle="Hospitality & Corporate Entry"
        title="Reception &"
        highlight="Waiting Areas."
        backgroundImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: THE PSYCHOLOGY OF ARRIVAL */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">01 — Spatial Psychology</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#1a1a1a]">Seven Seconds to <br /><span className="text-[#828a1c]">Define Your Brand.</span></h2>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              The reception area is the handshake of your building. At Bixbite, we understand that <strong>Reception and Waiting Area design</strong> is not merely about seating; it is about the transition from the chaotic external world into your brand's internal ecosystem. We utilize "Decompression Zones" that allow visitors to shed the stress of travel and enter a state of calm receptivity. Every element—from the height of the desk to the scent in the air—is engineered to validate the visitor’s decision to do business with you.
            </p>
          </div>
          <div className="aspect-video bg-gray-100 overflow-hidden shadow-2xl relative group">
            <img src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80" alt="Luxury Lobby Decompression Zone" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
            <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SIGHTLINE ENGINEERING */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white border-y border-gray-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-square bg-gray-50 overflow-hidden shadow-xl">
             <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80" alt="Lobby Sightline Analysis" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">02 — Navigation</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Sightline <span className="text-[#6b4411]">Clarity.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              A visitor should never feel lost. We prioritize <strong>Sightline Engineering</strong>, ensuring the front desk is immediately visible upon entry without appearing aggressive. By using architectural leading lines—floor patterns, lighting troughs, or ceiling coves—we intuitively guide the guest toward the check-in point. This reduces "waiting anxiety" and provides a sense of security, allowing the visitor to understand the spatial hierarchy of the building within three seconds of entry.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 3: THE MONOLITHIC DESK */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">03 — Centerpiece</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">The Desk <span className="text-[#828a1c]">Statement.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              The reception desk is the anchor of the lobby. We design <strong>Monolithic Reception Units</strong> using Italian engineered stones, hand-finished brass, and integrated LED halos. These desks are more than furniture; they are bespoke architectural installations. We integrate "Floating Plinths" and recessed kick-plates to give massive structures a sense of weightlessness. Behind the scenes, we engineer the "Working Core"—ensuring cable management, printer housing, and security monitors are invisible to the guest.
            </p>
          </div>
          <div className="aspect-video bg-[#1a1a1a] flex items-center justify-center p-12">
            <div className="w-full h-full border border-[#828a1c]/20 flex flex-col items-center justify-center space-y-4">
                <Move className="text-[#828a1c] w-12 h-12" />
                <p className="text-[10px] text-white/30 uppercase tracking-[0.4em]">Bespoke Joinery Detail</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ACOUSTIC LOBBY LAYERING */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1 aspect-video border border-white/10 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80" alt="Acoustic Treatments in Luxury Waiting Area" className="w-full h-full object-cover opacity-60" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">04 — Physics</span>
            <h3 className="text-4xl font-serif italic text-white">Sonic <span className="text-[#828a1c]">Intimacy.</span></h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              High-traffic lobbies can be echo chambers. We utilize <strong>NRC-rated Wall Paneling</strong> and heavy-pile custom rugs to absorb ambient noise. In waiting areas, we design "Acoustic Islands"—seating clusters where private conversations can happen without being overheard across the lobby. By layering sound-masking technology with natural soundscapes, we create an auditory environment that feels private, exclusive, and expensive.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 5: ERGONOMIC WAITING MODES */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">05 — Ergonomics</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Postural <span className="text-[#828a1c]">Support.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Waiting should not be a test of endurance. We curate <strong>Multi-Mode Seating</strong> for different dwell times. For quick check-ins, we provide high-lean perches; for long-dwell waits, we specify deep-pocket lounge chairs with integrated lumbar support. Every seat is equipped with discreet "Induction Charging" zones and high-speed Wi-Fi access, turning the waiting area into a high-productivity hub or a total relaxation lounge depending on the guest's needs.
            </p>
          </div>
          <div className="aspect-[4/3] bg-gray-200 overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&q=80" alt="High-End Ergonomic Waiting Furniture" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 6: BIOPHILIC GREETING */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-video shadow-xl overflow-hidden">
             <img src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&q=80" alt="Lobby Living Wall and Natural Light" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">06 — Wellness</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Living <span className="text-[#6b4411]">Boundaries.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              We integrate <strong>Biophilic Design</strong> to humanize corporate lobbies. Using living walls, preserved moss panels, and indoor trees, we bridge the gap between architecture and nature. These elements aren't just aesthetic; they filter air, provide organic sound-baffling, and lower cortisol levels in waiting guests. We coordinate light spectrums to ensure that greenery thrives even in windowless lobbies, maintaining a lush, vibrant welcome year-round.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 7: LIGHTING CHOREOGRAPHY */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">07 — Illumination</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Atmospheric <span className="text-[#828a1c]">Choreography.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Lighting in a reception area must perform multiple roles. We use <strong>Task Lighting</strong> for the desk operations and <strong>Accent Lighting</strong> for the architectural features. Most importantly, we implement "Dynamic White" technology—adjusting the color temperature from a crisp 5000K in the morning to a warm 2700K in the evening. This mimics the natural circadian cycle, ensuring that the lobby feels energetic during the day and sophisticatedly warm after hours.
            </p>
          </div>
          <div className="aspect-video bg-[#FAF9F6] border-2 border-dashed border-[#828a1c]/30 flex items-center justify-center overflow-hidden">
             <Zap className="w-24 h-24 text-[#828a1c] opacity-20" />
          </div>
        </div>
      </section>

      {/* SECTION 8: HYGIENIC LUXURY FINISHES */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#FAF9F6]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-square max-h-[500px] overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1541190990694-4a612732721c?auto=format&fit=crop&q=80" alt="Easy-Clean Luxury Fabrics" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">08 — Durability</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Enduring <span className="text-[#828a1c]">Elegance.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Reception areas face extreme wear. We specify <strong>High-Performance Textiles</strong> with 100,000+ Martindale rub counts and anti-microbial coatings. Our floor selections include Grade 5 vitrified tiles or diamond-polished stones that resist heel marks and trolley wheels. By choosing finishes that are as resilient as they are beautiful, we ensure that your lobby maintains its "Day One" luster even under thousands of weekly footfalls.
            </p>
          </div>
        </div>
      </section>

      {/* KPI PERFORMANCE STRIP */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center md:text-left">
          {[
            { label: "Sightline", val: "3-Second Rule" },
            { label: "Acoustics", val: "NRC 0.85+" },
            { label: "Wellness", val: "WELL V2 Ready" },
            { label: "Durability", val: "Grade 5 Stone" }
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
        title="Lobby Design FAQs"
        items={[
            { q: "How do you calculate reception desk ergonomics?", a: "We design with two heights: a 750mm desk for the receptionist and a 1100mm transaction ledge for the guest, ensuring ADA accessibility." },
            { q: "Can biophilic walls be maintained in windowless lobbies?", a: "Absolutely. We install full-spectrum grow lights integrated into the ceiling design to support photosynthesis." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Redefine your first impression."
        description="Book a spatial audit for your building's entrance and transform your lobby into a brand asset."
        buttonText="Get a Quote"
        link="/contact"
      />

      {/* TRUST STRIP */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['Hospitality Grade Fabrics', 'ADA Compliant Design', 'Acoustically Vetted', 'LED Efficiency Accredited'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default ReceptionandareaWaitingdesign;