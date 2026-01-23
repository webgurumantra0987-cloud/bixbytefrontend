import React, { useEffect } from 'react';
import { 
  Crown, ShieldCheck, PenTool, Eye, 
  Wind, Coffee, Layers, Lock, 
  TrendingUp, Compass, Award, Star 
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const CeoCabinandManagementOffices = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#6b4411] selection:text-white">
      
      {/* 1. HERO: THE PINNACLE OF LEADERSHIP */}
      <HeroSection 
        subtitle="Executive Sanctuary Design"
        title="CEO & Management"
        highlight="Offices."
        backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: THE ANATOMY OF AUTHORITY */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-[#6b4411] text-[10px] font-black uppercase tracking-[0.6em]">01 — Presence</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight">The Architecture <br /> of <span className="text-[#6b4411]">Influence.</span></h2>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              An executive office is more than a workspace; it is a physical manifestation of corporate values and personal legacy. At Bixbite, we design <strong>Sanctuaries of Strategy</strong>. Our approach to CEO cabin design moves beyond opulence, focusing on the "Psychology of Space"—engineering environments that command respect while fostering the mental stillness necessary for high-stakes decision making. 
            </p>
            <p className="text-gray-500 text-lg font-light">
              We balance <strong>Power Geometry</strong> (the positioning of the desk relative to the entry) with <strong>Hospitality Nodes</strong>, ensuring the room can shift from a fortress of deep focus to a welcoming lounge for intimate mentorship.
            </p>
          </div>
          <div className="relative group">
            <div className="aspect-[4/5] bg-gray-200 overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80" alt="Bespoke CEO Desk Design" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
            </div>
            <div className="absolute -top-10 -right-10 bg-[#1a1a1a] p-12 text-white hidden xl:block border-l-4 border-[#6b4411]">
                <Award className="text-[#6b4411] mb-4" size={32} />
                <p className="text-[10px] uppercase tracking-[0.3em] leading-loose">Pinnacle <br /> Material <br /> Curation</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ZONAL LOGIC - THE THREE SPHERES */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-serif italic">The Tri-Zonal Approach</h3>
            <p className="text-gray-400 uppercase text-[10px] tracking-[0.4em] mt-2">Functional Hierarchy in Management Suites</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16 mt-16">
            {[
              { title: "The Command Zone", desc: "The ergonomic epicenter. Featuring a monolithic desk, integrated tech, and optimized sightlines to the door and view." },
              { title: "The Collaborative Hub", desc: "Soft seating and low tables designed for lateral communication, mentoring, and informal negotiation." },
              { title: "The Private Gallery", desc: "A curated space for personal artifacts, a private library, or a hidden refreshment bar for late-night strategy." }
            ].map((zone, i) => (
              <div key={i} className="space-y-4">
                <span className="text-xs font-serif italic text-[#6b4411]">Part 0{i+1}</span>
                <h4 className="text-[11px] font-black uppercase tracking-widest">{zone.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-light">{zone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: MATERIAL HONESTY & TACTILITY */}
      <section className="py-32 px-6 max-w-[1600px] mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1541190990694-4a612732721c?auto=format&fit=crop&q=80" alt="Luxury Leather and Wood Detail" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <img src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80" alt="Executive Furniture Texture" className="w-full h-80 object-cover mt-12 grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#6b4411] text-[10px] font-black uppercase tracking-[0.6em]">03 — Tactility</span>
            <h3 className="text-4xl font-serif italic">Sensory <span className="text-[#6b4411]">Quietude.</span></h3>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              We specify materials that absorb sound and provide thermal comfort. Hand-stitched leathers, book-matched Italian walnut, and silk-infused rugs aren't just for show—they create a "Sonic Cocoon." In management offices, we prioritize <strong>Natural Ventilation</strong> and <strong>HCL (Human Centric Lighting)</strong> to maintain the executive's peak cognitive performance during 12-hour workdays.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: DISCREET SECURITY & PRIVACY */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: <Lock />, label: "Acoustic Sealing", val: "STC 55+" },
                  { icon: <ShieldCheck />, label: "Access Control", val: "Biometric" },
                  { icon: <Eye />, label: "Visual Privacy", val: "Switchable Glass" },
                  { icon: <Wind />, label: "Air Purity", val: "HEPA 13" }
                ].map((stat, i) => (
                  <div key={i} className="p-6 border border-white/10 hover:border-[#6b4411] transition-colors">
                    <div className="text-[#6b4411] mb-4">{stat.icon}</div>
                    <p className="text-[9px] uppercase tracking-widest text-gray-500 mb-1">{stat.label}</p>
                    <p className="text-xl font-serif italic">{stat.val}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#6b4411] text-[10px] font-black uppercase tracking-[0.6em]">04 — Security</span>
            <h3 className="text-4xl font-serif italic">The Invisible <span className="text-[#6b4411]">Shield.</span></h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Confidentiality is the hallmark of the executive suite. Our designs feature <strong>Double-Glazed Partitioning</strong> with sound-masking technology embedded in the door frames. We also offer "Smart Glass" solutions that transition from transparent to opaque at the touch of a button, ensuring that sensitive data on screens remains private during visitor tours.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: SMART INTEGRATION */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <span className="text-[#6b4411] text-[10px] font-black uppercase tracking-[0.6em]">05 — Intelligence</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Frictionless <span className="text-[#6b4411]">Control.</span></h3>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              We integrate <strong>IoT Command Hubs</strong> directly into the executive desk. With a single interface, the CEO can adjust room temperature, dim the lights for a presentation, lock the suite, or signal for refreshments. This technical integration is seamless, often hidden behind touch-sensitive timber panels to maintain the room's organic aesthetic.
            </p>
            
          </div>
          <div className="aspect-video bg-gray-200 shadow-2xl overflow-hidden">
             <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80" alt="Smart Executive Office" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* REUSABLE PROCESS SECTION */}
      <ServiceFeatureCards 
        title="The Bespoke Path"
        subtitle="Executive Journey"
        items={[
            { icon: <PenTool size={20} />, title: "Personality Audit", description: "Mapping the executive's workflow, habits, and personal aesthetic." },
            { icon: <Layers size={20} />, title: "Zonal Prototyping", description: "3D walkthroughs of the interaction flow within the office." },
            { icon: <Crown size={20} />, title: "Master Craftsmanship", description: "On-site installation by our specialist luxury joinery teams." }
        ]} 
      />

      {/* REUSABLE FAQ SECTION */}
      <FAQSection 
        title="Executive Office FAQs"
        items={[
            { q: "How do you handle 'visitor power dynamics' in office layout?", a: "We use 'Lateral Seating' logic. By placing visitor chairs at a 90-degree angle or in a separate lounge, we remove the barrier of the desk, facilitating more collaborative and open dialogue." },
            { q: "Can you incorporate personal collections or art into the design?", a: "Yes, we specialize in 'Curation Design'—building museum-grade lighting and climate-controlled display units into the office architecture for personal legacy items." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Architect your leadership legacy."
        description="Connect with our principal architects to begin the design of your executive command center."
        buttonText="Book a Private Audit"
        link="/contact"
      />

      {/* TRUST STRIP */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['Veneer Selection Grade A', 'Hand-Stitched Leather', 'STC 55 Certified', 'HEPA 13 Air Filtration'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default CeoCabinandManagementOffices;