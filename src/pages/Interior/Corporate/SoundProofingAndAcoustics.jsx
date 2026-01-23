import React, { useEffect } from 'react';
import { 
  VolumeX, Waves, Shield, MicOff, 
  Ear, Layers, Sliders, Zap,
  Activity, CheckCircle2, Info, Wind
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const SoundProofingAndAcoustics = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#1a1a1a] selection:text-white">
      
      {/* 1. HERO: THE SILENT REVOLUTION */}
      <HeroSection 
        subtitle="Acoustic Engineering & Privacy"
        title="Soundproofing &"
        highlight="Acoustics."
        backgroundImage="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: THE PHYSICS OF SILENCE */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.6em]">01 — Science</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight">Mastering the <br /><span className="text-[#828a1c]">Auditory Space.</span></h2>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              In an open-plan world, <strong>Acoustic Privacy</strong> is the ultimate luxury. At Bixbite, we don't just "quiet" a room; we tune it. We utilize <strong>Reverberation Time Analysis (RT60)</strong> to identify exactly how sound waves interact with your office surfaces. Our mission is to eliminate "Speech Distraction" while maintaining a vibrant, energetic atmosphere that supports both deep focus and collaborative flow.
            </p>
            <div className="flex gap-12 border-l border-[#828a1c] pl-8">
              <div>
                <p className="text-2xl font-serif italic text-[#1a1a1a]">STC 55+</p>
                <p className="text-[9px] uppercase tracking-widest text-gray-400">Transmission Class</p>
              </div>
              <div>
                <p className="text-2xl font-serif italic text-[#1a1a1a]">NRC 0.95</p>
                <p className="text-[9px] uppercase tracking-widest text-gray-400">Absorption Coeff.</p>
              </div>
            </div>
          </div>
          <div className="relative p-8 bg-white shadow-2xl">
            
          </div>
        </div>
      </section>

      {/* SECTION 2: THE ACOUSTIC TRIAD */}
      <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-serif italic">The Triad of Control</h3>
            <p className="text-gray-500 uppercase text-[10px] tracking-[0.4em] mt-2">Managing Sound from Source to Receiver</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {[
              { 
                title: "Absorption", 
                desc: "Utilizing PET felt, micro-perforated wood, and fabric-wrapped panels to soak up mid-to-high frequency reflections.",
                icon: <Waves className="text-[#828a1c]" />
              },
              { 
                title: "Insulation", 
                desc: "High-density mass-loaded vinyl and decoupled wall systems to stop sound transfer between sensitive rooms.",
                icon: <Shield className="text-[#828a1c]" />
              },
              { 
                title: "Diffusion", 
                desc: "Mathematical surfaces that scatter sound waves to eliminate flutter echoes without making the room feel 'dead'.",
                icon: <Activity className="text-[#828a1c]" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#1a1a1a] p-12 hover:bg-[#222] transition-all">
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-[11px] font-black uppercase tracking-widest mb-4">{item.title}</h4>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SOUND MASKING (WHITE NOISE 2.0) */}
      <section className="py-32 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="aspect-square bg-gray-100 overflow-hidden relative shadow-inner">
             
             <div className="absolute inset-0 bg-black/5" />
          </div>
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">03 — Innovation</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Active <span className="text-[#828a1c]">Sound Masking.</span></h3>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              Sometimes the best way to deal with noise is to add more. We design <strong>Active Sound Masking Systems</strong>—a discreet network of emitters that produce a scientifically engineered background sound. By subtly raising the "ambient floor," we make peripheral conversations unintelligible, effectively creating an invisible wall of privacy without the need for physical barriers.
            </p>
            <div className="pt-6 space-y-4">
               {['Speech Privacy Enhancement', 'Radius of Distraction Reduction', 'Adaptive Volume Control'].map(feat => (
                   <div key={feat} className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#828a1c]" size={18} />
                      <span className="text-[11px] font-black uppercase tracking-widest text-gray-700">{feat}</span>
                   </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE GLASS PROBLEM (TRANSPARENT PRIVACY) */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">04 — Translucency</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Glass <span className="text-[#828a1c]">Acoustics.</span></h3>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              Modern offices love glass, but sound loves it more. We solve the "Fishbowl Effect" by utilizing <strong>Double-Glazed Partitioning</strong> with laminated acoustic interlayers. For high-privacy areas like HR or Finance, we integrate drop-seals and acoustic baffles that prevent sound from "leaking" over the ceiling grid, ensuring your glass office remains as quiet as a vault.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="aspect-[4/5] bg-gray-200">
                <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80" alt="Acoustic Baffles in Glass Office" className="w-full h-full object-cover grayscale" />
             </div>
             <div className="aspect-[4/5] bg-gray-100 flex items-center justify-center p-8">
                <VolumeX className="text-[#828a1c] w-16 h-16 opacity-20" />
             </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE METRICS SECTION */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="bg-[#1a1a1a] rounded-[3rem] p-12 md:p-24 text-white">
           <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h3 className="text-4xl font-serif italic">Target <span className="text-[#828a1c]">Output.</span></h3>
                <p className="text-gray-400 font-light text-lg">We hold our designs to the highest measurable standards in the industry.</p>
                <ul className="space-y-6">
                   {[
                     { label: 'Conference Rooms', val: '< 0.6s RT60' },
                     { label: 'Private Cabins', val: 'STC 50 Rated' },
                     { label: 'Open Office', val: 'NRC 0.85 Average' }
                   ].map((metric, i) => (
                     <li key={i} className="flex justify-between border-b border-white/10 pb-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">{metric.label}</span>
                        <span className="font-serif italic text-[#828a1c] text-2xl">{metric.val}</span>
                     </li>
                   ))}
                </ul>
              </div>
              <div className="flex items-center justify-center bg-white/5 border border-white/10 p-12">
                 
              </div>
           </div>
        </div>
      </section>

      {/* REUSABLE FAQS */}
      <FAQSection 
        title="Acoustic Engineering FAQs"
        items={[
            { q: "Is soundproofing the same as sound absorption?", a: "No. Absorption (panels) stops sound from bouncing within a room. Soundproofing (insulation) stops sound from traveling through walls into the next room." },
            { q: "Can we improve acoustics without changing the architecture?", a: "Yes. Through active sound masking, floating clouds, and high-NRC furniture, we can transform the sonic profile of a space without a single brick being moved." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Hear the difference of design."
        description="Book a professional sonic audit and discover how acoustic engineering can double your team's concentration."
        buttonText="Schedule Sonic Audit"
        link="/contact"
      />

      {/* TRUST STRIP */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['ISO 3382-3 Certified', 'ASTM E413 Rated', 'LEED v4 Acoustic Credit', 'WELL Standard v2 Compliant'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default SoundProofingAndAcoustics;