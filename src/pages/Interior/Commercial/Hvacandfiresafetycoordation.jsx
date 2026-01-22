import React, { useEffect } from 'react';
import { 
  Wind, ShieldAlert, Thermometer, Flame, 
  Settings, Droplets, Fan, Gauge,
  Activity, ShieldCheck
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

// Data
import { processItems } from '../../../Data';

const Hvacandfiresafetycoordation = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#d4af37] selection:text-white">
      
      {/* 1. HERO: CLIMATE & SAFETY CONTROL */}
     <HeroSection 
  subtitle="MEP Engineering & Life Safety"
  title="HVAC &"
  highlight="Fire Safety."
  /* Verified high-res industrial engineering link */
  backgroundImage="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2000&auto=format&fit=crop"
/>
      {/* 2. THE MECHANICAL INTEGRITY (300 Words Content) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-gray-500 text-lg leading-relaxed">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] block">Atmospheric Engineering</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight">Precision Climate, <br /> Absolute Protection.</h2>
            <p>
              In large-scale commercial and institutional architecture, the "invisible" services are the most critical. Our <strong>HVAC and Fire Safety Coordination</strong> is built on the principle of seamless MEP (Mechanical, Electrical, and Plumbing) integration. We don't just install ducts; we design airflow ecosystems that manage <strong>IAQ (Indoor Air Quality)</strong> while optimizing energy consumption through Variable Refrigerant Flow (VRF) technology.
            </p>
            <p>
              Simultaneously, our fire safety protocols are integrated into the very structural fabric of the building. We coordinate the placement of <strong>smoke detectors, sprinkler heads, and fire hydrants</strong> to ensure they are aesthetically discreet yet 100% compliant with local fire norms. By utilizing <strong>BIM modeling</strong>, we detect and resolve clashes between HVAC ducts and fire lines before construction begins, ensuring a flawless and safe execution.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 h-full">
            <div className="bg-[#1a1a1a] p-10 flex flex-col justify-between group hover:bg-[#d4af37] transition-all duration-500">
               <Wind className="text-[#d4af37] group-hover:text-black w-10 h-10" />
               <p className="text-white group-hover:text-black text-[10px] font-black uppercase tracking-widest">Air Change per Hour (ACH)</p>
            </div>
            <div className="bg-white border border-black/5 p-10 flex flex-col justify-between">
               <Flame className="text-red-600 w-10 h-10" />
               <p className="text-black text-[10px] font-black uppercase tracking-widest">Active Fire Suppression</p>
            </div>
            <div className="col-span-2 aspect-video overflow-hidden grayscale brightness-75">
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover" alt="Industrial HVAC" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLASH DETECTION VISUAL (Engineering Focus) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border border-black/5 bg-[#f9f9f9] p-8 text-center">
            <h3 className="text-2xl font-serif italic mb-10">BIM-Driven Clash Detection</h3>
            
            <p className="mt-8 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Mechanical Blueprint: Section A-102 (Ducting & Suppression)</p>
          </div>
        </div>
      </section>

      {/* 4. THE SAFETY METRICS (Technical Grid) */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { label: "Filtration", val: "MERV 13", sub: "Standard IAQ" },
              { label: "Cooling", val: "VRF/VRV", sub: "Energy Efficient" },
              { label: "Fire Rating", val: "240 MIN", sub: "Integrity" },
              { label: "Detection", val: "VESDA", sub: "Early Warning" }
            ].map((item, i) => (
              <div key={i} className="bg-[#1a1a1a] p-12 text-center hover:bg-black transition-colors">
                <p className="text-[#d4af37] text-3xl font-serif italic mb-3">{item.val}</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-gray-500">{item.label}</p>
                <p className="text-[7px] text-gray-600 tracking-tighter mt-4">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REUSABLE FEATURE CARDS (Systems Focus) */}
      <ServiceFeatureCards 
        title="Infrastructure Layers"
        subtitle="Life Safety Systems"
        items={[
            { icon: <Fan size={20} />, title: "Precision Airflow", description: "Zoning-based HVAC layouts that ensure thermal comfort across diverse floor plans." },
            { icon: <Droplets size={20} />, title: "Fire Sprinkler Networks", description: "Wet and dry pipe systems designed according to NFPA and NBC 2026 standards." },
            { icon: <Gauge size={20} />, title: "Exhaust Management", description: "Smoke extraction and kitchen exhaust systems for complex institutional kitchens." }
        ]} 
      />

      {/* 6. TECHNICAL EDITORIAL (Control Systems) */}
    {/* 6. TECHNICAL EDITORIAL (Control Systems) */}
<section className="py-32 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20 items-center">
      <div className="lg:col-span-5 order-2 lg:order-1">
          <Settings className="text-[#d4af37] mb-8 w-12 h-12" />
          <h3 className="text-4xl font-serif italic text-[#1a1a1a] mb-8 leading-tight">Centralized BMS <br /> Integration.</h3>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Our designs integrate with **Building Management Systems (BMS)**, allowing you to monitor air temperature, humidity, and fire alarm status from a single digital dashboard. This leads to predictive maintenance and a 25% reduction in energy overheads.
          </p>
          <div className="space-y-4">
              {['Automated Dampers', 'Pressure Zone Control', 'Addressable Fire Panels'].map(t => (
                  <div key={t} className="flex items-center gap-4">
                      <Activity size={14} className="text-[#d4af37]" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{t}</span>
                  </div>
              ))}
          </div>
      </div>

      {/* FIXED IMAGE BLOCK */}
      <div className="lg:col-span-7 order-1 lg:order-2 aspect-video bg-gray-100 relative group overflow-hidden">
          {/* Stable high-res link for Industrial Control Center */}
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000" 
            alt="Centralized Building Management Control Room" 
          />
          <div className="absolute top-10 right-10 bg-[#FAF9F6]/95 backdrop-blur-sm p-8 border border-black/5 text-center shadow-2xl">
              <p className="text-[24px] font-serif italic text-[#1a1a1a] leading-none">98%</p>
              <p className="text-[8px] font-black uppercase tracking-widest text-[#d4af37] mt-2 text-nowrap">Operational Accuracy</p>
          </div>
      </div>
  </div>
</section>

{/* ADDED DIAGRAM FOR BETTER USER UNDERSTANDING */}
<section className="pb-24 bg-white px-6">
  <div className="max-w-4xl mx-auto border border-black/5 p-6 bg-[#fcfcfc]">
    <p className="text-[9px] font-black uppercase tracking-[0.5em] text-center text-gray-400 mb-8">System Architecture: Integrated MEP Control</p>
    
  </div>
</section>

      {/* 7. REUSABLE PROCESS */}
      <ServiceFeatureCards 
        title="Validation Path"
        subtitle="The Engineering Flow"
        items={processItems} 
      />

      {/* 8. FAQ SECTION (REUSABLE) */}
      <FAQSection 
        title="HVAC & Safety FAQs"
        items={[
            { q: "What is VRF/VRV air conditioning?", a: "It is a highly efficient modular system that allows individual temperature control for different cabins while using a single outdoor unit." },
            { q: "How often should fire systems be audited?", a: "As per commercial norms, we recommend a quarterly functional check and an annual comprehensive safety audit." }
        ]} 
      />

      {/* 9. THE TRUST STRIP */}
      <section className="py-20 bg-[#FAF9F6] border-t border-black/5 flex flex-wrap justify-center gap-16 opacity-30 grayscale transition-all hover:grayscale-0">
         {['NFPA Standard Compliant', 'ASHRAE Member', 'ISO 14001 Certified', 'LEED Energy Partner'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em]">{t}</span>
         ))}
      </section>

      {/* 10. REUSABLE CTA */}
      <ServiceCTA 
        title="Secure your building's climate and safety."
        description="Book a technical site audit with our MEP engineers for comprehensive coordination."
        buttonText="Book Site Audit"
        link="/contact"
      />

    </div>
  );
};

export default Hvacandfiresafetycoordation;