import React, { useEffect } from 'react';
import { 
  Zap, Cpu, Wifi, Server, 
  ShieldCheck, Cable, Database, Activity,
  Maximize, GitMerge
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

// Data
import { processItems } from '../../../Data';

const ElectricalAndNetworkingLayout = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#d4af37] selection:text-white">
      
      {/* 1. HERO: THE NERVOUS SYSTEM */}
      <HeroSection 
        subtitle="Power & Data Engineering"
        title="Electrical &"
        highlight="Networking."
        backgroundImage="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=2000&auto=format&fit=crop"
      />

      {/* 2. THE CONNECTIVITY MANIFESTO (300 Words Content) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">System Architecture</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight mb-8">Powering the <br /> Digital Backbone.</h2>
            <p>
              In the modern commercial era, a building’s worth is measured by its connectivity. At Bixbite, our <strong>Electrical and Networking Layouts</strong> are engineered for the high-bandwidth demands of 2026. We don't just place outlets; we design integrated power ecosystems that support <strong>Edge Computing</strong>, IoT sensors, and high-speed fiber-optic backbones. 
            </p>
            <p>
              We prioritize <strong>Redundancy and Resilience</strong>. For institutional and office projects, we implement Tier-III data center standards for server rooms and seamless UPS/Generator failovers for critical workstations. Our electrical blueprints are meticulously mapped to reduce electromagnetic interference (EMI) and optimize thermal dissipation, ensuring that your hardware runs at peak efficiency while maintaining 100% safety compliance.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-[#1a1a1a] p-8 flex flex-col justify-between aspect-square">
                <Cpu className="text-[#d4af37] w-10 h-10" />
                <p className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Smart Load Balancing</p>
             </div>
             <div className="bg-[#d4af37] p-8 flex flex-col justify-between aspect-square">
                <Wifi className="text-black w-10 h-10" />
                <p className="text-black text-[10px] font-black uppercase tracking-[0.2em]">6E Wireless Mesh</p>
             </div>
             <div className="bg-gray-200 p-8 flex flex-col justify-between aspect-square col-span-2">
                <p className="text-[#1a1a1a] text-sm font-serif italic">"Integrated networking reduces latency by up to 40% through optimized cable pathing."</p>
                <Activity className="text-gray-400 w-6 h-6" />
             </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SCHEMATIC VISUALIZATION */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#f0f0f0] border border-black/5 overflow-hidden">
            
            <img 
              src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80" 
              className="w-full h-[400px] object-cover mix-blend-multiply opacity-50" 
              alt="Technical Schematics"
            />
          </div>
        </div>
      </section>

      {/* 4. DATA INFRASTRUCTURE GRID */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { label: "Bandwidth", val: "10 Gbps", sub: "Fiber Ready" },
              { label: "Reliability", val: "99.99%", sub: "Uptime Goal" },
              { label: "Security", val: "AES-256", sub: "Hardwired" },
              { label: "Efficiency", val: "PUE 1.2", sub: "Energy Star" }
            ].map((stat, i) => (
              <div key={i} className="bg-[#0a0a0a] p-10 text-center">
                <p className="text-[#d4af37] text-4xl font-serif italic mb-2">{stat.val}</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-gray-500">{stat.label}</p>
                <p className="text-[8px] uppercase tracking-tighter mt-4 text-gray-600">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REUSABLE FEATURE CARDS (Hardware Focus) */}
      <ServiceFeatureCards 
        title="Hardware Ecosystem"
        subtitle="Infrastructure Components"
        items={[
            { icon: <Server size={20} />, title: "Server Room Design", description: "Precision cooling, fire suppression, and racks optimized for high-density compute." },
            { icon: <Database size={20} />, title: "Structured Cabling", description: "Cat6A and Fiber-optic layouts organized for easy maintenance and scaling." },
            { icon: <GitMerge size={20} />, title: "IoT Integration", description: "Centralized controls for smart lighting, climate, and security sensors." }
        ]} 
      />

      {/* 6. THE CIRCUITRY EDITORIAL (Visual Split) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
                <h3 className="text-4xl font-serif italic text-[#1a1a1a] mb-8 leading-tight">Future-Proof <br /> Load Management.</h3>
                <p className="text-gray-500 leading-relaxed text-lg mb-8">
                    We utilize <strong>Smart DB (Distribution Boards)</strong> that allow for real-time energy monitoring. This allows facility managers to identify power-hungry zones and optimize consumption, leading to a significant reduction in operational costs.
                </p>
                <div className="space-y-4">
                   {['Sub-Metering Systems', 'Harmonic Filter Integration', 'Lightning Protection Systems'].map(t => (
                        <div key={t} className="flex items-center gap-3">
                            <Zap size={14} className="text-[#d4af37]" />
                            <span className="text-[10px] font-black uppercase tracking-widest">{t}</span>
                        </div>
                   ))}
                </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="aspect-video relative">
                    <img src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Data Center" />
                    <div className="absolute inset-0 border-[20px] border-[#FAF9F6] pointer-events-none"></div>
                </div>
            </div>
        </div>
      </section>

      {/* 7. REUSABLE PROCESS SECTION */}
      <ServiceFeatureCards 
        title="Technical Pipeline"
        subtitle="The Layout Workflow"
        items={processItems} 
      />

      {/* 8. FAQ SECTION (REUSABLE) */}
      <FAQSection 
        title="Electrical & IT FAQs"
        items={[
            { q: "Do you handle Phase-3 power installations?", a: "Yes, we handle the complete industrial-grade 3-phase wiring and transformer coordination for large showrooms and offices." },
            { q: "Can you upgrade networking for an existing office?", a: "We provide 'Live-Upgrade' plans that replace old cabling with modern fiber-ready systems without disrupting daily operations." }
        ]} 
      />

      {/* 9. THE "NERVOUS SYSTEM" TRUST STRIP */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-30 grayscale hover:grayscale-0 transition-all">
        {['IE Rule 1956 Compliant', 'BICSI Standards', 'IEEE Certified Designs'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap">{t}</span>
        ))}
      </section>

      {/* 10. REUSABLE CTA */}
      <ServiceCTA 
        title="Empower your infrastructure."
        description="Book a technical site audit to optimize your building's power and data flow."
        buttonText="Get Technical Audit"
        link="/contact"
      />

    </div>
  );
};

export default ElectricalAndNetworkingLayout;