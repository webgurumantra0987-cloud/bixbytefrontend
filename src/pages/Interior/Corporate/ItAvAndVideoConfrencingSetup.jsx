import React, { useEffect } from 'react';
import { 
  Cpu, Video, Wifi, Mic2, 
  Server, ShieldAlert, Monitor, Zap,
  Settings, Network, Cast, HardDrive
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const ItAvAndVideoConfrencingSetup = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#0070f3] selection:text-white">
      
      {/* 1. HERO: THE CONNECTED HUB */}
      <HeroSection 
        subtitle="Intelligent Systems Integration"
        title="IT, AV & Video"
        highlight="Conferencing."
        backgroundImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: THE FRICTIONLESS INTERFACE */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-[#0070f3] text-[10px] font-black uppercase tracking-[0.6em]">01 — Connectivity</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight">Technology <br /> without <span className="text-[#0070f3]">Boundaries.</span></h2>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              In a world of hybrid work, your office technology must be as intuitive as a smartphone. At Bixbite, we bridge the gap between complex IT infrastructure and human interaction. We design <strong>AV-over-IP ecosystems</strong> that eliminate "Meeting Start Fatigue." Whether it's a huddle room or a global town hall, our setups ensure that 4K video, beam-forming audio, and wireless screen-sharing work with a single touch.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center gap-3">
                    <Cast className="text-[#0070f3]" size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-black">Zero-Latency Casting</span>
                </div>
                <div className="flex items-center gap-3">
                    <Mic2 className="text-[#0070f3]" size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-black">AI Noise Suppression</span>
                </div>
            </div>
          </div>
          <div className="relative group">
            <div className="aspect-video bg-[#1a1a1a] flex items-center justify-center p-12 overflow-hidden border border-black/10">
               <Network className="text-[#0070f3] w-32 h-32 opacity-20 animate-pulse" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white shadow-xl p-8 border-l-4 border-[#0070f3]">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">System Status</p>
                <p className="text-xl font-serif italic">Optimized & Active</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SIGNAL PATH ARCHITECTURE */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif italic">The Signal <span className="text-[#0070f3]">Integrity.</span></h3>
            <p className="text-gray-400 text-[10px] uppercase tracking-[0.4em] mt-4">Native End-to-End Encryption & Hardware Logic</p>
          </div>
          
          
          
          <div className="grid md:grid-cols-3 gap-12 mt-20">
            {[
              { title: "Network Backbone", desc: "Dedicated high-speed VLANs for AV traffic to prevent stuttering and data bottlenecks.", icon: <Server /> },
              { title: "Acoustic Echo Cancellation", desc: "Hardware-level AEC processing to ensure crystal clear audio even in glass-walled rooms.", icon: <Settings /> },
              { title: "One-Touch Control", desc: "Custom-coded interfaces for Crestron, Extron, or iPad-based control systems.", icon: <Zap /> }
            ].map((feature, i) => (
              <div key={i} className="space-y-4">
                <div className="text-[#0070f3]">{feature.icon}</div>
                <h4 className="text-[11px] font-black uppercase tracking-widest">{feature.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: VIDEO CONFERENCING MODALITIES */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="aspect-video bg-gray-100 shadow-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
             <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80" alt="Corporate Video Conferencing Room" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <span className="text-[#0070f3] text-[10px] font-black uppercase tracking-[0.6em]">03 — Modality</span>
            <h3 className="text-4xl font-serif italic">Hybrid <span className="text-[#0070f3]">Excellence.</span></h3>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              We specialize in <strong>Multi-Platform Integration</strong>. Our rooms are engineered to be "Agnostic," meaning you can switch between Microsoft Teams, Zoom, and Webex with zero hardware reconfiguration. By utilizing intelligent framing cameras that follow the speaker, we recreate the "In-Person" feel for remote participants, bridging the physical-digital divide.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVER ROOMS & DATA SECURITY */}
      <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-6">
            <span className="text-[#0070f3] text-[10px] font-black uppercase tracking-[0.6em]">04 — Infrastructure</span>
            <h3 className="text-4xl font-serif italic text-white">The <span className="text-[#0070f3]">Nerve Center.</span></h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Beyond the screens, we design robust <strong>Server Rooms and IDF Closets</strong>. We prioritize thermal management, redundant power supply, and fire suppression systems. Our setups include structured cabling (Cat6A and Fiber) that is labeled and documented, making future upgrades or troubleshooting surgical and efficient.
            </p>
            <div className="flex items-center gap-6 mt-10">
                <div className="flex items-center gap-2">
                    <ShieldAlert className="text-[#0070f3]" size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Cyber-Physical Security</span>
                </div>
            </div>
          </div>
          <div className="aspect-square bg-gray-900 border border-white/5 flex items-center justify-center relative">
             <HardDrive className="text-[#0070f3] w-48 h-48 opacity-10" />
             
          </div>
        </div>
      </section>

      {/* KPI PERFORMANCE STRIP */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Bandwidth Capacity", val: "100 Gbps" },
            { label: "Audio Latency", val: "< 2ms" },
            { label: "Uptime SLA", val: "99.99%" },
            { label: "Security", val: "AES-256" }
          ].map((kpi, i) => (
            <div key={i}>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">{kpi.label}</p>
              <p className="text-3xl font-serif italic text-[#0070f3]">{kpi.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REUSABLE FAQS */}
      <FAQSection 
        title="AV & IT Solutions FAQs"
        items={[
            { q: "Do you provide software training for our staff?", a: "Yes, every handover includes a 'Systems Training' session and a simplified 'Quick Start Guide' for every conference room." },
            { q: "Can we integrate old hardware with new Bixbite systems?", a: "We prioritize sustainability. We audit your existing inventory and integrate legacy hardware whenever possible through converters and new control logic." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Connect your global team."
        description="Book a technical AV audit to modernize your communication infrastructure."
        buttonText="Get Systems Proposal"
        link="/contact"
      />

      {/* TRUST STRIP */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['CTS Certified Engineers', 'Crestron Master Dealer', 'Zoom Rooms Certified', 'Dante Audio Partner'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default ItAvAndVideoConfrencingSetup;