import React, { useEffect } from 'react';
import { 
  Sun, Moon, Cpu, Zap, 
  Smartphone, Thermometer, Eye, ShieldCheck,
  Wind, CloudSun, Timer, Activity
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const SmartLightingAndAutomation = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-[#ffb400] selection:text-black">
      
      {/* 1. HERO: THE INTELLIGENT ATMOSPHERE */}
      <HeroSection 
        subtitle="Cognitive Environmental Control"
        title="Smart Lighting"
        highlight="& Automation."
        backgroundImage="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: CIRCADIAN LOGIC */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-[#ffb400] text-[10px] font-black uppercase tracking-[0.6em]">01 — Biological Rhythm</span>
            <h2 className="text-5xl font-serif italic leading-tight">Lighting that <br /> Understands <span className="text-[#ffb400]">Time.</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Standard office lighting is static; the human body is not. Bixbite implements <strong>Circadian Lighting Systems</strong> that mimic the sun's natural progression. By shifting from high-intensity cool blue light in the morning to warm, low-intensity tones in the late afternoon, we regulate melatonin production, reducing employee burnout and increasing focus by up to 20%.
            </p>
            
            <div className="flex gap-8 pt-4">
                <div className="flex items-center gap-3">
                    <Sun className="text-[#ffb400]" size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Daylight Harvesting</span>
                </div>
                <div className="flex items-center gap-3">
                    <Moon className="text-cyan-400" size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Blue-Light Mitigation</span>
                </div>
            </div>
          </div>
          <div className="relative group p-1 bg-gradient-to-br from-[#ffb400]/20 to-transparent">
             <div className="bg-[#111] p-12 border border-white/5">
                <h4 className="text-[11px] font-black uppercase tracking-widest mb-8 text-white/50">System Response Map</h4>
                <div className="space-y-8">
                   {['Occupancy Sensing', 'Photocell Integration', 'DALI Protocol Control', 'RGBW Scene Management'].map((sys, i) => (
                       <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                          <span className="text-sm font-light text-gray-300">{sys}</span>
                          <div className="w-2 h-2 rounded-full bg-[#ffb400] shadow-[0_0_10px_#ffb400]"></div>
                       </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE IOT ECOSYSTEM (AUTOMATION) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#ffb400] text-[10px] font-black uppercase tracking-[0.6em]">02 — Intelligence</span>
            <h3 className="text-4xl font-serif italic text-black">Total Spatial <span className="text-[#ffb400]">Autonomy.</span></h3>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
               Our automation goes beyond lighting. We integrate <strong>HVAC, Shading, and Security</strong> into a single "Sense-and-Act" network. Using high-fidelity occupancy sensors, the office learns usage patterns—pre-cooling meeting rooms before a scheduled call and powering down entire zones when vacant. This isn't just convenience; it's an operational strategy that reduces energy expenditure by 30-45%.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERFACE DESIGN */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <span className="text-[#ffb400] text-[10px] font-black uppercase tracking-[0.6em]">03 — UX/UI</span>
            <h3 className="text-4xl font-serif italic text-white">The Central <span className="text-[#ffb400]">Dashboard.</span></h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              We replace wall-clutter with elegant, custom-coded interfaces. Whether through a sleek brass-finished keypad or a tablet-based dashboard, you have granular control over your environment. We specialize in <strong>"One-Touch Scenes"</strong>: 'Presentation Mode' dims lights and lowers shades simultaneously, while 'Focus Mode' optimizes air quality and task lighting for deep work.
            </p>
            
          </div>
          <div className="aspect-video bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-[#ffb400]/10 to-transparent"></div>
             <Smartphone className="text-[#ffb400] w-24 h-24 mb-4 relative z-10" />
          </div>
        </div>
      </section>

      {/* SECTION 4: SENSORY COMFORT (IAQ) */}
      <section className="py-24 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          {[
            { icon: <Wind />, label: "Air Quality (CO2)", val: "< 800ppm" },
            { icon: <Thermometer />, label: "Thermal Variance", val: "± 0.5°C" },
            { icon: <Activity />, label: "Luminous Flux", val: "500 Lux" }
          ].map((metric, i) => (
            <div key={i} className="space-y-4">
              <div className="text-[#ffb400] flex justify-center">{metric.icon}</div>
              <p className="text-3xl font-serif italic text-white">{metric.val}</p>
              <p className="text-[9px] font-black uppercase tracking-widest text-gray-500">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KPI PERFORMANCE STRIP */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Energy Savings", val: "Up to 40%" },
            { label: "Protocol", val: "Matter/KNX" },
            { label: "Response Time", val: "< 50ms" },
            { label: "ROI Period", val: "18 Months" }
          ].map((kpi, i) => (
            <div key={i}>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-2">{kpi.label}</p>
              <p className="text-3xl font-serif italic text-[#ffb400]">{kpi.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REUSABLE FAQS */}
      <FAQSection 
        title="Automation FAQs"
        items={[
            { q: "What happens during a system or internet outage?", a: "Our systems use 'Local Logic' controllers. This means even if the internet goes down, your manual switches and primary sensors continue to function perfectly." },
            { q: "Can we control the office remotely?", a: "Yes. We provide secure, encrypted VPN access for facility managers to monitor and adjust office parameters from anywhere in the world." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="The future is autonomous."
        description="Connect with our automation engineers to transform your office into an intelligent, self-regulating organism."
        buttonText="Book Systems Consult"
        link="/contact"
      />

      {/* TRUST STRIP */}
      <section className="py-16 bg-[#0a0a0a] border-t border-white/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['KNX Partner', 'DALI Certified', 'Matter Protocol Ready', 'LEED v4 Smart Tech'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-white font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default SmartLightingAndAutomation;