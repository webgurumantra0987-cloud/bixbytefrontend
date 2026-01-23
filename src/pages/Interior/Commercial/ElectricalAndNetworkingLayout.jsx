import React, { useEffect } from 'react';
import { 
  Zap, Cpu, Wifi, Server, 
  ShieldCheck, Cable, Database, Activity,
  Maximize, GitMerge, Radio, Binary, Info
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const ElectricalAndNetworkingLayout = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#828a1c] selection:text-white">
      
      {/* 1. HERO: THE DIGITAL GENESIS */}
      <HeroSection 
        subtitle="Power & Data Engineering"
        title="Electrical &"
        highlight="Networking."
        backgroundImage="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=2000&auto=format&fit=crop"
      />

      {/* SECTION 1: THE CONNECTIVITY MANIFESTO */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">01 — Infrastructure</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#1a1a1a]">Powering the <span className="text-[#828a1c]">Digital Backbone.</span></h2>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              In the modern commercial era, a building’s worth is measured by its connectivity. At Bixbite, our <strong>Electrical and Networking Layouts</strong> are engineered for the high-bandwidth demands of 2026. We don't just place outlets; we design integrated power ecosystems that support <strong>Edge Computing</strong>, IoT sensors, and high-speed fiber-optic backbones. Every layout is a "Nervous System" designed for zero-latency operations and scalable growth.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-[#1a1a1a] p-8 flex flex-col justify-between aspect-square border-b-4 border-[#828a1c]">
                <Cpu className="text-[#828a1c] w-10 h-10" />
                <p className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Smart Load Balancing</p>
             </div>
             <div className="bg-[#828a1c] p-8 flex flex-col justify-between aspect-square">
                <Wifi className="text-white w-10 h-10" />
                <p className="text-white text-[10px] font-black uppercase tracking-[0.2em]">6E Wireless Mesh</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: STRUCTURED CABLING THEORY */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white border-y border-gray-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-video bg-gray-50 relative group overflow-hidden">
             <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80" alt="Structured Data Cabling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-[#6b4411]/20 group-hover:bg-transparent transition-all"></div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">02 — Data Architecture</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Precision <span className="text-[#6b4411]">Pathing.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Messy wiring is more than an eyesore—it's a thermal hazard and a signal bottleneck. We implement <strong>Structured Cabling</strong> protocols using Cat6A and Single-Mode Fiber Optics. Our pathing maps prioritize the separation of high-voltage lines from data cables to prevent <strong>Electromagnetic Interference (EMI)</strong>. By utilizing overhead cable trays and under-floor busbar systems, we ensure that your network is both organized and easily accessible for future 100G upgrades.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 3: REDUNDANCY & FAILOVER SYSTEMS */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">03 — Resilience</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Zero-Downtime <span className="text-[#828a1c]">Logic.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              For institutional and luxury corporate environments, power failure is not an option. Our layouts include <strong>Tier-III Data Center Standards</strong>, featuring seamless UPS (Uninterruptible Power Supply) integration and automated DG (Diesel Generator) failovers. We design the electrical "Heart" of your building with N+1 redundancy, ensuring that even if one circuit fails, the digital pulse of your business continues without a millisecond of interruption.
            </p>
          </div>
          <div className="aspect-video bg-gray-100 shadow-2xl border-l-8 border-[#828a1c]">
            <img src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80" alt="Server Room Power Management" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 4: SMART LOAD MANAGEMENT */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1 aspect-[4/3] border border-white/10 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80" alt="Digital Circuit Monitoring" className="w-full h-full object-cover grayscale opacity-60" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">04 — Efficiency</span>
            <h3 className="text-4xl font-serif italic text-white">Intelligent <span className="text-[#828a1c]">Load Balancing.</span></h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              We utilize <strong>Smart Distribution Boards (DBs)</strong> equipped with IoT sensors that provide real-time energy analytics. This forensic-level monitoring allows facility managers to identify harmonic distortions and energy-hungry zones. By integrating sub-metering and automated demand-response systems, Bixbite layouts can reduce overall operational energy expenditure by up to 25%, making your building both smarter and more sustainable.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 5: WIRELESS TOPOLOGY & MESH NETWORKS */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">05 — Airwaves</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Ubiquitous <span className="text-[#828a1c]">6E Wireless.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Modern mobility demands a "no-dead-zone" policy. Our networking specialists perform <strong>Heat-Map Analysis</strong> to determine the optimal placement of Wi-Fi 6E Access Points. We design mesh topologies that support high-density user environments, ensuring that whether you are in a glass-walled boardroom or an underground parking facility, your connection remains stable at gigabit speeds with low-latency handoffs.
            </p>
          </div>
          <div className="aspect-video bg-gray-200 shadow-xl border border-gray-100 p-8 flex items-center justify-center">
             <div className="text-center">
                <Radio className="w-16 h-16 text-[#828a1c] mx-auto mb-4 animate-ping" />
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Signal Mapping In Progress</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: THERMAL DISSIPATION & SERVER COOLING */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-video shadow-2xl">
             <img src="https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80" alt="Server Cooling and Airflow" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">06 — Thermal</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Climate-Controlled <span className="text-[#6b4411]">Compute.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              High-performance hardware generates immense heat. Our server room layouts are designed with <strong>Hot-Aisle/Cold-Aisle containment</strong>. We integrate precision air conditioning (PAC) units with the electrical layout to ensure that your CPU temperatures remain optimal. By calculating the total BTU output of your hardware, we design a cooling environment that prevents hardware throttling and extends the lifecycle of your IT investment.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 7: IOT & BUILDING AUTOMATION (BMS) */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">07 — Integration</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Unified <span className="text-[#828a1c]">BMS Control.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              The future of architecture is autonomous. We integrate your electrical layout with a centralized <strong>Building Management System (BMS)</strong>. This allows for unified control over smart lighting (DALI/KNX), climate sensors, and biometric security. Our layouts provide the hardwired "Grid" that allows these disparate systems to communicate over a single IP-based backbone, creating a truly intelligent, responsive environment.
            </p>
          </div>
          <div className="aspect-video bg-[#FAF9F6] border-2 border-dashed border-[#828a1c]/30 flex items-center justify-center">
             <Binary className="w-20 h-20 text-[#828a1c] opacity-20" />
          </div>
        </div>
      </section>

      {/* SECTION 8: GROUNDING & LIGHTNING PROTECTION */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#FAF9F6]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-square max-h-[500px] overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" alt="Lightning Protection Systems" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">08 — Shielding</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Surge & <span className="text-[#828a1c]">Static Defense.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Protecting your infrastructure from atmospheric and electrical surges is our final safety layer. We design comprehensive <strong>Lightning Protection Systems (LPS)</strong> and low-impedance chemical earthing. This forensic approach to grounding prevents static discharge and voltage spikes from destroying sensitive PCB components, ensuring your building remains a safe harbor for the millions of dollars of technology housed within.
            </p>
          </div>
        </div>
      </section>

      {/* TECH STATS STRIP */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { label: "Bandwidth Capacity", val: "100 Gbps+", sub: "Future Proof" },
              { label: "Uptime SLA", val: "99.999%", sub: "High Resilience" },
              { label: "Safety Standard", val: "IEC 60364", sub: "Global Compliance" },
              { label: "Thermal Limit", val: "22°C ±2", sub: "Precision Control" }
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
        title="Technical & IT FAQs"
        items={[
            { q: "What is the benefit of Fiber vs Copper in your layouts?", a: "Fiber-optics offer immune-to-interference data transmission over long distances, which is essential for modern high-bandwidth office backbones." },
            { q: "Do you provide electrical load calculations for heavy machinery?", a: "Yes, we provide full load balancing and harmonic analysis for industrial showrooms and specialized medical or production equipment." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Command your building's nervous system."
        description="Book a forensic electrical audit to optimize your power and data infrastructure."
        buttonText="Enquire Technical Audit"
        link="/contact"
      />

      {/* TRUST STRIP */}
      <section className="py-16 bg-white border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['IEEE Standards', 'IEC 60364 Compliant', 'TIA-942 Certified Designs'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default ElectricalAndNetworkingLayout;