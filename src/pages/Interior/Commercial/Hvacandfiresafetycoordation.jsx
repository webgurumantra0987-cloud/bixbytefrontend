import React, { useEffect } from 'react';
import { 
  Wind, ShieldAlert, Thermometer, Flame, 
  Settings, Droplets, Fan, Gauge,
  Activity, ShieldCheck, Zap, Waves
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const Hvacandfiresafetycoordation = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#828a1c] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <HeroSection 
        subtitle="MEP Engineering & Life Safety"
        title="HVAC &"
        highlight="Fire Safety."
        backgroundImage="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2000&auto=format&fit=crop"
      />

      {/* SECTION 1: THE INVISIBLE ARCHITECTURE */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">01 — Infrastructure</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#1a1a1a]">Atmospheric <span className="text-[#828a1c]">Engineering.</span></h2>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              In large-scale commercial architecture, the "invisible" services define the building's operational success. At Bixbite, our <strong>HVAC and Fire Safety Coordination</strong> is built on the principle of unified MEP (Mechanical, Electrical, and Plumbing) integration. We don't just install ducts; we design airflow ecosystems that manage <strong>IAQ (Indoor Air Quality)</strong> while optimizing energy consumption through high-performance Variable Refrigerant Flow (VRF) technology. This ensures that every square foot of your facility is both breathable and energy-efficient.
            </p>
          </div>
          <div className="aspect-video bg-gray-100 overflow-hidden shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1500&auto=format&fit=crop" alt="Industrial HVAC Ducting" className="w-full h-full object-cover" />
            <div className="absolute top-0 right-0 bg-[#828a1c] p-6 text-white">
                <Wind size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BIM-DRIVEN CLASH DETECTION */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">02 — Digital Precision</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">BIM-Driven <span className="text-[#6b4411]">Clash Detection.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              One of the greatest challenges in MEP engineering is the physical conflict between HVAC ducts and fire suppression lines within tight ceiling cavities. We utilize <strong>Building Information Modeling (BIM)</strong> to create a digital twin of your mechanical systems. By running automated clash detection reports before a single pipe is cut, we eliminate costly on-site modifications and ensure that your fire sprinkler heads are perfectly positioned according to both safety codes and architectural aesthetics.
            </p>
            
          </div>
          <div className="order-1 lg:order-2 aspect-square bg-gray-50 overflow-hidden shadow-xl">
             <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop" alt="Technical Engineering Review" className="w-full h-full object-cover grayscale" />
          </div>
        </div>
      </section>

      {/* SECTION 3: ADVANCED FIRE SUPPRESSION LOGIC */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-video bg-gray-200 shadow-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&q=80" alt="Fire Sprinkler System" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">03 — Life Safety</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Active & Passive <span className="text-[#828a1c]">Suppression.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Our fire safety protocols meet the rigorous <strong>NFPA and NBC 2026</strong> standards. We design integrated networks of smoke detectors, addressable fire panels, and automated sprinkler systems. For data centers or sensitive document storage, we implement clean-agent gas suppression systems that extinguish fire without water damage. This active defense is paired with passive fire-stopping measures in HVAC dampers to prevent the spread of smoke through ventilation shafts during an emergency.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 4: INDOOR AIR QUALITY (IAQ) & FILTRATION */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">04 — Wellness</span>
            <h3 className="text-4xl font-serif italic text-white">Pure Air <span className="text-[#828a1c]">Protocols.</span></h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              Modern commercial spaces must prioritize the health of their occupants. We implement <strong>MERV 13+ filtration systems</strong> and UV-C germicidal irradiation within our AHUs (Air Handling Units) to neutralize pathogens. By calculating the precise Air Change per Hour (ACH) required for different occupancy zones, we ensure that stagnant air is purged and replaced with filtered fresh air, significantly reducing the transmission of airborne pollutants and enhancing employee productivity.
            </p>
          </div>
          <div className="aspect-video border border-white/10 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80" alt="Clean Air Filtration System" className="w-full h-full object-cover opacity-50" />
          </div>
        </div>
      </section>

      {/* SECTION 5: THERMAL COMFORT & VRF TECHNOLOGY */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] bg-gray-200 overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80" alt="Modern VRF AC Units" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">05 — Efficiency</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Zoned Thermal <span className="text-[#828a1c]">Control.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              One-size-fits-all cooling is a relic of the past. Our <strong>Variable Refrigerant Flow (VRF)</strong> layouts allow for independent temperature control in different office zones. This modular approach ensures that a sun-drenched corner office receives more cooling than a central conference room, without wasting energy. By utilizing inverter technology and smart thermostats, we help commercial facilities reduce their HVAC energy overheads by up to 30% while maintaining perfect thermal comfort.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 6: BMS INTEGRATION & ENERGY ANALYTICS */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">06 — Intelligence</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Centralized <span className="text-[#6b4411]">BMS Control.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Knowledge is power. We integrate all HVAC and Fire Safety systems into a centralized <strong>Building Management System (BMS)</strong>. This digital dashboard allows facility managers to monitor temperature, humidity, and fire alarm status in real-time. With automated pressure zone control and predictive maintenance alerts, you can address mechanical issues before they lead to system downtime, ensuring your building remains a high-performance business asset.
            </p>
          </div>
          <div className="order-1 lg:order-2 aspect-video shadow-xl overflow-hidden">
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" alt="BMS Control Dashboard" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 7: SMOKE EXTRACTION & EXHAUST SYSTEMS */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-video bg-gray-100 overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1585338661918-2adce282672b?auto=format&fit=crop&q=80" alt="Industrial Exhaust Fans" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">07 — Ventilation</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Smoke <span className="text-[#828a1c]">Management.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              In the event of a fire, smoke inhalation is the primary threat. Our engineering team designs <strong>Specialized Smoke Extraction Systems</strong> for basements and large atrium spaces. These high-capacity exhaust fans are triggered by the fire alarm system to create a "Smoke-Free Zone" at the floor level, providing occupants with a clear path to emergency exits. This coordination between air movement and life safety is what separates a standard building from a Bixbite sanctuary.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 8: COMPLIANCE AUDIT & COMMISSIONING */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#FAF9F6]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">08 — Finalization</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Technical <span className="text-[#828a1c]">Commissioning.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              The project is only complete once it has been fully commissioned. We perform rigorous <strong>Functional Testing</strong> on every damper, valve, and sensor. Our handover includes comprehensive documentation for local municipal audits to secure your Final Fire NOC. We ensure that your staff is trained on the BMS interface, guaranteeing that the building’s climate and safety systems operate at peak efficiency from the very first day of occupancy.
            </p>
          </div>
          <div className="aspect-square max-h-[500px] overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80" alt="Technical Commissioning Audit" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* TECH STATS STRIP */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { label: "Air Filtration", val: "MERV 13+", sub: "Health First" },
              { label: "Fire Integrity", val: "240 MIN", sub: "Passive Defense" },
              { label: "Energy Savings", val: "Up to 30%", sub: "Inverter VRF" },
              { label: "Compliance", val: "NFPA/NBC", sub: "Regulatory Grade" }
            ].map((stat, i) => (
              <div key={i} className="bg-[#0a0a0a] p-12 text-center group hover:bg-[#1a1a1a] transition-all">
                <p className="text-[#828a1c] text-4xl font-serif italic mb-2 group-hover:scale-110 transition-transform">{stat.val}</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-gray-500">{stat.label}</p>
                <p className="text-[8px] uppercase tracking-tighter mt-4 text-[#6b4411] font-bold">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REUSABLE FAQS */}
      <FAQSection 
        title="HVAC & Safety FAQs"
        items={[
            { q: "What is IAQ monitoring?", a: "Indoor Air Quality monitoring involves sensors that track CO2, humidity, and VOC levels, automatically adjusting fresh air intake to maintain a healthy environment." },
            { q: "How does VRF coordination benefit the design?", a: "Because VRF uses smaller refrigerant pipes instead of large bulky water pipes, it saves ceiling space, allowing for higher, more aesthetic false ceiling designs." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Command your climate and safety."
        description="Book a technical MEP coordination audit with our engineering team today."
        buttonText="Book Site Audit"
        link="/contact"
      />

      {/* TRUST STRIP */}
      <section className="py-16 bg-white border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['ASHRAE Standards', 'NFPA Compliant', 'NBC 2026 Certified'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default Hvacandfiresafetycoordation;