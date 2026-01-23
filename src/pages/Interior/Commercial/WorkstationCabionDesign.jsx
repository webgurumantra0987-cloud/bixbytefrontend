import React, { useEffect } from 'react';
import { 
  Monitor, ShieldAlert, Coffee, PencilRuler, 
  Maximize2, Laptop, UserCheck, Wind, 
  Ear, Lightbulb, Box, Command
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const WorkstationCabinDesign = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#6b4411] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <HeroSection 
        subtitle="Ergonomic & Executive Engineering"
        title="Workstations"
        highlight="& Private Cabins."
        backgroundImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: THE ERGONOMIC MANIFESTO */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#6b4411] text-[10px] font-black uppercase tracking-[0.6em]">01 — Performance</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#1a1a1a]">The Science of <br /><span className="text-[#6b4411]">Deep Work.</span></h2>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              At Bixbite, we view the workstation not as a piece of furniture, but as a performance-enhancing tool. In the age of digital distraction, the physical environment must act as a filter. Our <strong>Workstation and Cabin designs</strong> are built on the principles of <strong>Proxemics</strong>—the study of human spatial requirements. By optimizing the reach-zone, visual privacy, and acoustic dampening of each desk, we create "Flow-State" environments that significantly reduce cognitive load and physical fatigue.
            </p>
          </div>
          <div className="aspect-video bg-gray-100 overflow-hidden shadow-2xl relative group">
            <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80" alt="Executive Office Ergonomics" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
            <div className="absolute -bottom-6 -right-6 bg-[#1a1a1a] p-10 text-white hidden md:block">
               <UserCheck className="text-[#6b4411] mb-2" />
               <p className="text-[10px] uppercase tracking-widest">User-Centric <br /> Geometry</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EXECUTIVE CABINS - THE PRESTIGE FACTOR */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white border-y border-gray-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-square bg-gray-50 overflow-hidden shadow-xl border-l-[12px] border-[#6b4411]">
             <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80" alt="Executive Cabin Luxury Design" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#6b4411] text-[10px] font-black uppercase tracking-[0.6em]">02 — Leadership</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Architectural <br /><span className="text-[#6b4411]">Authority.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              An executive cabin must balance two conflicting roles: it is a sanctuary for sensitive decision-making and a stage for leadership. We design <strong>Bespoke Executive Suites</strong> that reflect organizational stature through monolithic joinery, hand-stitched leathers, and integrated technology. We utilize "Transition Zones"—small ante-rooms or soft-seating clusters—within the cabin to allow for a shift from formal desk-work to collaborative mentoring without leaving the private office.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 3: LINEAR & CLUSTER WORKSTATIONS */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#6b4411] text-[10px] font-black uppercase tracking-[0.6em]">03 — Agility</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Modular <br /><span className="text-[#6b4411]">Ecosystems.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Modern teams require varying degrees of collaboration. We deploy <strong>Cluster Workstations</strong> for high-interaction departments (Creative, Marketing) and <strong>Linear Bench-systems</strong> for focus-intensive roles (Engineering, Legal). Each cluster is engineered with 360-degree cable management and acoustic "Privacy Fins" that allow for peripheral communication while blocking direct line-of-sight distractions. Our workstations are ready for the hybrid-future, featuring hot-desking lockers and mobile pedestals.
            </p>
            
          </div>
          <div className="aspect-video bg-[#1a1a1a] flex items-center justify-center p-12">
            <div className="relative w-full h-full border border-white/5 flex items-center justify-center">
                <Box className="text-[#6b4411] w-20 h-20 opacity-20" />
                <span className="absolute bottom-4 text-[10px] text-white/40 uppercase tracking-[0.5em]">Scalable Joinery Logic</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ACOUSTIC PRIVACY & SOUND MASKING */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1 aspect-video border border-white/10 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&q=80" alt="Acoustic Panels in Office" className="w-full h-full object-cover opacity-40" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#6b4411] text-[10px] font-black uppercase tracking-[0.6em]">04 — Privacy</span>
            <h3 className="text-4xl font-serif italic text-white">The Cone of <span className="text-[#6b4411]">Silence.</span></h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              In open-plan offices, acoustic leakage is the #1 productivity killer. We integrate <strong>STC-Rated (Sound Transmission Class)</strong> glass partitions and felt-lined desk dividers that absorb high-frequency speech. For executive cabins, we specify "Double-Glazed" systems with acoustic PVB interlayers, ensuring that private board discussions remain truly private. By layering passive absorption with active sound-masking technology, we create a library-like quietude even in high-density environments.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: ILLUMINATION & BIOPHILIA */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#6b4411] text-[10px] font-black uppercase tracking-[0.6em]">05 — Wellness</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Circadian <span className="text-[#6b4411]">Alignment.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Visual fatigue is a byproduct of poor lighting contrast. We utilize <strong>Indirect Ambient Lighting</strong> to wash the ceiling, paired with personalized <strong>Task Lighting</strong> at each workstation. This allows users to control their micro-environment. To humanize the tech-heavy workspace, we integrate biophilic desk-planters and natural timber surfaces, which have been proven to lower heart rates and improve mental clarity during high-stress work cycles.
            </p>
            
          </div>
          <div className="aspect-square bg-gray-200 overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1527192491265-7e15c65f1f8c?auto=format&fit=crop&q=80" alt="Biophilic Office Desk" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 6: SMART CABIN TECHNOLOGY */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-video shadow-xl overflow-hidden bg-[#FAF9F6] flex items-center justify-center">
             <Command className="w-24 h-24 text-[#6b4411] opacity-20" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#6b4411] text-[10px] font-black uppercase tracking-[0.6em]">06 — Intelligence</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Frictionless <span className="text-[#6b4411]">Interactions.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              The modern cabin is a command center. We integrate <strong>IoT Controls</strong> for lighting, climate, and privacy-glass frosting directly into the desk surface. Our executive designs feature "Zero-Cable" conferencing—where displays and microphones are hidden within the joinery, activating only when needed. This technical invisibility ensures that the focus remains on human connection and strategic dialogue rather than troubleshooting hardware.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: MATERIAL HONESTY */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#6b4411] text-[10px] font-black uppercase tracking-[0.6em]">07 — Tactility</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Enduring <span className="text-[#6b4411]">Surfaces.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Work surfaces face daily abrasion. We specify <strong>Anti-Fingerprint Laminates</strong> and self-healing linoleum for workstations, which offer a warm tactile feel while resisting stains. For cabins, we utilize <strong>Full-Grain Leathers</strong> and book-matched veneers. Every edge is ergonomically chamfered to prevent pressure-point fatigue during long typing sessions, ensuring that the luxury of the space is matched by its physical comfort.
            </p>
          </div>
          <div className="aspect-video bg-gray-100 overflow-hidden shadow-2xl relative">
             <img src="https://images.unsplash.com/photo-1542623024-a797a7abcafc?auto=format&fit=crop&q=80" alt="Office Material Finishes" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 8: STORAGE & ORGANIZATION LOGIC */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#FAF9F6]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-square max-h-[500px] overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80" alt="Hidden Office Storage" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#6b4411] text-[10px] font-black uppercase tracking-[0.6em]">08 — Clarity</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Invisible <span className="text-[#6b4411]">Efficiency.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Visual clutter is mental clutter. We implement <strong>Vertical Storage Systems</strong> and "Floating Credenzas" that keep the desk surface clear. In executive cabins, we design "Secret Storage"—push-to-open cabinets integrated into wall paneling to hide files and coat-racks. By removing the visual noise of office supplies, we emphasize the architectural lines of the room and foster a sense of mental calm.
            </p>
          </div>
        </div>
      </section>

      {/* KPI PERFORMANCE STRIP */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Ergonomics", val: "BIFMA Compliant" },
            { label: "Acoustics", val: "STC 45+ Rated" },
            { label: "Wellness", val: "HCL Lighting" },
            { label: "Joinery", val: "Bespoke Grade" }
          ].map((kpi, i) => (
            <div key={i}>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">{kpi.label}</p>
              <p className="text-3xl font-serif italic text-[#6b4411]">{kpi.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REUSABLE FAQS */}
      <FAQSection 
        title="Workstation Inquiries"
        items={[
            { q: "What is the ideal size for an executive cabin?", a: "Typically, 150-250 sq. ft. allows for a desk, a small meeting table, and adequate circulation space." },
            { q: "Do you offer sit-stand desk integrations?", a: "Yes, we integrate motorized lift systems directly into our bespoke joinery to maintain aesthetics while providing ergonomic flexibility." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Invest in your team's focus."
        description="Book a technical audit for your workstation layout and executive cabin standards."
        buttonText="Get a Design Proposal"
        link="/contact"
      />

      {/* TRUST STRIP */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['BIFMA Certified Furniture', 'ISO 9001 Joinery', 'E1 Grade Materials', 'Ergonomic Excellence Accredited'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default WorkstationCabinDesign;