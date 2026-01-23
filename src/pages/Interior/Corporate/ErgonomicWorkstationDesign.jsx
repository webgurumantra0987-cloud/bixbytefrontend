import React, { useEffect } from 'react';
import { 
  Activity, Move, Monitor, MousePointer2, 
  Dna, Ruler, ShieldCheck, Zap, 
  Wind, Lightbulb, Thermometer, User
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const ErgonomicWorkstationDesign = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#2b4c7e] selection:text-white">
      
      {/* 1. HERO: THE HUMAN INTERFACE */}
      <HeroSection 
        subtitle="Biomechanical Spatial Engineering"
        title="Ergonomic"
        highlight="Workstations."
        backgroundImage="https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: THE ERGONOMIC IMPERATIVE */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-[#2b4c7e] text-[10px] font-black uppercase tracking-[0.6em]">01 — Biomechanics</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight">The Desk as a <br /><span className="text-[#2b4c7e]">Performance Tool.</span></h2>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              At Bixbite, we define ergonomics not as a feature, but as a fundamental human right within the workspace. Our <strong>Workstation Engineering</strong> is based on the 95th percentile of anthropometric data. We don't just provide furniture; we solve the "Sedentary Crisis" by designing active stations that facilitate micro-movements, reduce Repetitive Strain Injury (RSI), and sustain cognitive clarity over long work cycles.
            </p>
            <div className="flex gap-8 border-t border-black/5 pt-8">
               <div className="flex items-center gap-3">
                  <Dna className="text-[#2b4c7e]" size={20} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-black">Anatomical Alignment</span>
               </div>
               <div className="flex items-center gap-3">
                  <Ruler className="text-[#2b4c7e]" size={20} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-black">Precision Geometry</span>
               </div>
            </div>
          </div>
          <div className="bg-white p-2 border border-black/5 shadow-2xl">
             
          </div>
        </div>
      </section>

      {/* SECTION 2: THE 90-90-90 RULE (TECHNICAL DEPTH) */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
               
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-[#2b4c7e] text-[10px] font-black uppercase tracking-[0.6em]">02 — Standards</span>
              <h3 className="text-4xl font-serif italic">The Geometry of <span className="text-[#2b4c7e]">Comfort.</span></h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Our designs strictly adhere to the <strong>BIFMA and OSHA standards</strong> for seated and standing work. We implement the "90-90-90" geometry: ensuring the elbows, hips, and knees are maintained at optimal angles to promote circulation. By integrating adjustable monitor arms and height-adjustable surfaces (Sit-Stand), we empower the user to shift their posture every 45 minutes, a critical factor in metabolic health and focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: NEURAL-FRIENDLY LIGHT & SOUND */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-px bg-black/10 border border-black/10">
          {[
            { 
              title: "Flicker-Free Tasking", 
              desc: "Personalized task lighting with 90+ CRI to eliminate eye strain and headaches.",
              icon: <Lightbulb size={24} />
            },
            { 
              title: "Acoustic Shielding", 
              desc: "Felt-lined desk dividers with NRC 0.75 ratings to absorb peripheral speech noise.",
              icon: <Activity size={24} />
            },
            { 
              title: "Thermal Micro-Climates", 
              desc: "Optimizing desk placement relative to air-flow to prevent stagnant hot spots.",
              icon: <Wind size={24} />
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-12 hover:bg-[#FAF9F6] transition-all group">
              <div className="text-[#2b4c7e] mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-[11px] font-black uppercase tracking-widest mb-4">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: SMART INTEGRATION & CABLE LOGIC */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <span className="text-[#2b4c7e] text-[10px] font-black uppercase tracking-[0.6em]">04 — Utility</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Frictionless <span className="text-[#2b4c7e]">Surfaces.</span></h3>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              A cluttered desk is a cluttered mind. We engineer <strong>Invisible Cable Management</strong> systems into every workstation. Power hubs, data ports, and docking stations are integrated into the desk surface using "Push-to-Open" flush-mount units. This "Zero-Cable" aesthetic minimizes visual noise and maximizes the usable work surface for cognitive tasks.
            </p>
            <div className="flex gap-4 pt-6">
                {['Wireless Qi-Charging', 'Thunderbolt 4 Hubs', 'Under-Desk Cable Spines'].map(t => (
                    <span key={t} className="px-4 py-2 bg-gray-100 text-[9px] font-black uppercase tracking-widest text-gray-600">{t}</span>
                ))}
            </div>
          </div>
          <div className="aspect-video bg-gray-50 shadow-inner p-8 border border-black/5 overflow-hidden">
             
          </div>
        </div>
      </section>

      {/* SECTION 5: SIT-STAND TRANSITION DATA */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-serif italic mb-12">The <span className="text-[#2b4c7e]">Dynamic</span> Workflow.</h3>
        <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 border border-black/5 bg-white relative">
                <p className="text-5xl font-serif italic text-[#2b4c7e] mb-4">60%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Increase in Afternoon Energy</p>
                <p className="mt-6 text-sm text-gray-500 font-light">By utilizing height-adjustable desks to stand for just 20 minutes every hour.</p>
            </div>
            <div className="p-12 border border-black/5 bg-white relative">
                <p className="text-5xl font-serif italic text-[#2b4c7e] mb-4">45°</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Optimal Monitor Tilt</p>
                <p className="mt-6 text-sm text-gray-500 font-light">To reduce cervical spine pressure and prevent "Tech-Neck" syndrome.</p>
            </div>
        </div>
      </section>

      {/* REUSABLE FAQS */}
      <FAQSection 
        title="Ergonomic Inquiries"
        items={[
            { q: "What is the difference between a standard desk and an ergonomic one?", a: "A standard desk is static. An ergonomic station is an adjustable system that adapts to your height, reach-zone, and visual requirements to prevent musculoskeletal disorders." },
            { q: "How do you select the right chair?", a: "We specify chairs with 4D adjustable armrests, synchronized tilt mechanisms, and dynamic lumbar support that follows the natural 'S-curve' of your spine." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Optimize your team's biological health."
        description="Connect with our ergonomic specialists to audit your current workstations and improve employee longevity."
        buttonText="Book Ergonomic Audit"
        link="/contact"
      />

      {/* TRUST STRIP */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['BIFMA Compliant Seating', 'ISO 9241 Ergonomics', 'LEED WELL Standard', 'OSHA Safety Accredited'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default ErgonomicWorkstationDesign;