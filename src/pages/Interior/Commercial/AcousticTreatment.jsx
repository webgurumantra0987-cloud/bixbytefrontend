import React, { useEffect } from 'react';
import { 
  VolumeX, Waves, Mic2, ShieldAlert, 
  Layers, ChevronRight, Activity, Headphones,
  Target, Zap
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

// Data
import { processItems } from '../../../Data';

const AcousticTreatment = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#d4af37] selection:text-white">
      
      {/* 1. HERO: THE SCIENCE OF SILENCE */}
      <HeroSection 
        subtitle="Sound Engineering & Isolation"
        title="Acoustic"
        highlight="Treatment."
        backgroundImage="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
      />

      {/* 2. TECHNICAL NARRATIVE (300 Words Content) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-8 text-gray-500 text-lg leading-relaxed">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] block">Sound Theory</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight">Mastering the <br /> Sonic Environment.</h2>
            <p>
              Acoustic design is often the most overlooked aspect of interior architecture, yet it has the most profound impact on human comfort. At Bixbite, we treat sound as a physical material that can be shaped, absorbed, or reflected. Our <strong>Acoustic Treatment services</strong> go beyond simple padding; we provide forensic-level analysis of sound transmission paths.
            </p>
            <p>
              We utilize <strong>NRC-rated (Noise Reduction Coefficient)</strong> materials and <strong>STC-certified (Sound Transmission Class)</strong> partitions to ensure that private conversations remain private and loud environments remain contained. Whether it is a corporate boardroom requiring speech privacy or a luxury home cinema demanding perfect reverberation times, our engineering ensures that the "soundstage" of your room is perfectly balanced.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-12 flex flex-col justify-center">
             <Activity className="text-[#d4af37] mb-8 w-12 h-12" />
             <h3 className="text-white text-2xl font-serif italic mb-6">The Decibel Delta</h3>
             <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Our goal is to achieve a noise floor reduction of up to $30dB$ through strategic multi-layered wall assemblies and decoupled flooring systems.
             </p>
             <div className="h-px bg-white/10 w-full mb-8"></div>
             <div className="grid grid-cols-2 gap-6">
                <div>
                    <p className="text-[#d4af37] font-black text-[10px] uppercase tracking-widest">Absorption</p>
                    <p className="text-white text-xs mt-1">NRC 0.95+</p>
                </div>
                <div>
                    <p className="text-[#d4af37] font-black text-[10px] uppercase tracking-widest">Isolation</p>
                    <p className="text-white text-xs mt-1">STC 65 Typical</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. ACOUSTIC ANALYSIS IMAGE (Educational Diagram Style) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="aspect-video overflow-hidden grayscale opacity-80 hover:opacity-100 transition-opacity duration-1000">
            <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80" alt="Sound Wave Diffusion" className="w-full h-full object-cover" />
          </div>
          <p className="text-center mt-6 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Fig 1.1: Specular Reflection and Diffusion Mapping</p>
        </div>
      </section>

      {/* 4. THE THREE PILLARS (Grid Design) */}
      <section className="py-24 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          {[
            { icon: <VolumeX />, title: "Sound Isolation", desc: "Blocking external noise and containing internal volume through mass-loaded vinyl and decoupled studs." },
            { icon: <Waves />, title: "Reverb Control", desc: "Using fabric-wrapped panels and acoustic baffles to eliminate flutter echo and 'room ring'." },
            { icon: <Target />, title: "Bass Trapping", desc: "Managing low-frequency energy in corners to prevent muddy sound and standing waves." }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="text-[#d4af37] mb-6 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h4 className="text-[12px] font-black uppercase tracking-widest mb-4">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. REUSABLE SERVICE CARDS (The Tech) */}
      <ServiceFeatureCards 
        title="Industrial Grade Materials"
        subtitle="The Acoustic Inventory"
        items={[
            { icon: <Layers size={20} />, title: "Mass Loaded Vinyl", description: "Thin yet incredibly dense barriers used to stop sound transmission through walls." },
            { icon: <Mic2 size={20} />, title: "Perforated Panels", description: "Aesthetic wood or metal panels that allow sound to be absorbed by hidden glass-wool." },
            { icon: <Zap size={20} />, title: "Diffusion Arrays", description: "Mathematical surfaces that scatter sound to create a sense of space." }
        ]} 
      />

      {/* 6. ACOUSTIC ZONING CASE STUDY (Editorial) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
                <img src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&q=80" className="w-full h-[500px] object-cover" alt="Home Cinema" />
            </div>
            <div className="lg:col-span-5">
                <h3 className="text-4xl font-serif italic mb-8">The Professional Studio Standard.</h3>
                <p className="text-gray-500 leading-relaxed mb-10">
                    From home theaters to large-scale auditoriums, we apply the <strong>LEDE (Live End, Dead End)</strong> principle to ensure that spaces feel natural yet controlled. Our designs are vetted through EASE modeling to predict acoustic behavior before construction.
                </p>
                <div className="space-y-4">
                    {['Boardroom Speech Privacy', 'Mechanical Plant Room Isolation', 'Auditorium Tuning'].map(t => (
                        <div key={t} className="flex items-center gap-3">
                            <ChevronRight size={14} className="text-[#d4af37]" />
                            <span className="text-[10px] font-black uppercase tracking-widest">{t}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 7. REUSABLE PROCESS */}
      <ServiceFeatureCards 
        title="Diagnostic Path"
        subtitle="Strategy"
        items={processItems} 
      />

      {/* 8. FAQ SECTION (REUSABLE) */}
      <FAQSection 
        title="Acoustic Engineering FAQs"
        items={[
            { q: "Is soundproofing the same as acoustic treatment?", a: "No. Soundproofing stops sound from entering/leaving a room. Acoustic treatment improves the sound quality inside the room." },
            { q: "Can treatment be hidden behind interior design?", a: "Yes, we use 'Acoustically Transparent' fabrics that allow us to hide all technical materials behind beautiful decor." }
        ]} 
      />

      {/* 9. TECHNICAL TRUST STRIP */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5 flex flex-wrap justify-center gap-12 opacity-30 grayscale">
        {['STC Rated Certified', 'NRC Laboratory Tested', 'ASTM E84 Class A Fire Rated'].map(t => (
            <p key={t} className="text-[10px] font-black uppercase tracking-[0.4em]">{t}</p>
        ))}
      </section>

      {/* 10. REUSABLE CTA */}
      <ServiceCTA 
        title="Don't let noise define your space."
        description="Connect with our acoustic engineers for a decibel-level site audit."
        buttonText="Book Acoustic Audit"
        link="/contact"
      />

    </div>
  );
};

export default AcousticTreatment;