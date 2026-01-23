import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  VolumeX, Waves, Mic2, Layers, 
  ChevronRight, Activity, Target, Zap, Sliders, ShieldCheck
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const AcousticTreatment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#828a1c] selection:text-white pb-20">
      
      {/* 1. HERO SECTION */}
      <HeroSection 
        subtitle="Forensic Sound Engineering"
        title="Acoustic"
        highlight="Treatment."
        backgroundImage="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: THE PHILOSOPHY OF SOUND */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">01 — Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#1a1a1a]">Designing for the <span className="text-[#828a1c]">Subconscious.</span></h2>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              In high-end architecture, the most profound luxury is often invisible: <strong>Silence.</strong> While marble and light define the visual palette, it is the acoustic signature that defines the psychological comfort of a space. At Bixbite, we approach sound as a physical material—a force to be shaped, absorbed, or reflected to enhance the human experience.
            </p>
          </div>
          <div className="aspect-video bg-gray-100 overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&q=80" alt="Architectural Sound Design" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PHYSICS OF ISOLATION */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-square bg-gray-200 shadow-xl">
             <img src="https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80" alt="Acoustic Insulation Materials" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">02 — Engineering</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">The Triple-Leaf <span className="text-[#6b4411]">Barrier.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              To achieve forensic-level silence, we follow the <strong>Triple-Leaf Principle</strong> of sound isolation. This involves utilizing high-density <strong>Mass-Loaded Vinyl (MLV)</strong> and decoupled wall systems. By breaking the physical connection between rooms, we ensure that vibrations from urban traffic or mechanical plants cannot penetrate the structural joists of your sanctuary.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: REVERBERATION CONTROL */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">03 — Clarity</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Managing the <span className="text-[#828a1c]">RT60 Spectrum.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              A room without treatment suffers from "Acoustic Pollution"—the chaotic bouncing of waves off hard surfaces like glass and concrete. We calculate the <strong>RT60 (Reverberation Time)</strong> with mathematical precision. For a boardroom, we aim for a crisp 0.6 seconds; for a cinema, a tight 0.4 seconds, ensuring speech is clear and music is immersive.
            </p>
          </div>
          <div className="aspect-video bg-gray-100 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80" alt="Professional Studio Reverb Control" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 4: LOW FREQUENCY MANAGEMENT */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#828a1c]/5 blur-3xl"></div>
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1 aspect-video border border-white/10">
            <img src="https://images.unsplash.com/photo-1751806524631-565725f5bb74?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UHJlc3N1cmUlMjBCYXNlZCUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww" alt="Bass Traps in Modern Interior" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">04 — The Low End</span>
            <h3 className="text-4xl font-serif italic">Pressure Based <span className="text-[#828a1c]">Bass Trapping.</span></h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              Bass energy congregates in corners, creating "muddiness." Our custom <strong>Corner-Loaded Bass Traps</strong> act as structural lungs. They breathe in high-pressure low-end energy, converting kinetic vibration into microscopic heat, ensuring that deep frequencies remain punchy and do not resonate through the building's skeleton.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE LEDE METHODOLOGY */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">05 — Layout Strategy</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Live End / <span className="text-[#828a1c]">Dead End.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              We apply the <strong>LEDE principle</strong> to create a natural "breathable" atmosphere. The front of the room is "Dead"—treated with heavy mineral wool to kill interference. The rear is "Live"—utilizing <strong>Quadratic Residue Diffusers (QRD)</strong> to scatter sound, making a small room feel like a grand auditorium without the claustrophobia of over-damping.
            </p>
          </div>
          <div className="aspect-[4/3] bg-gray-200">
             <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80" alt="LEDE Acoustic Room Mapping" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 6: INVISIBLE INTEGRATION */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-video shadow-xl">
             <img src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80" alt="Hidden Acoustic Panels" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">06 — Aesthetics</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Acoustically <span className="text-[#6b4411]">Transparent.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Technical performance shouldn't compromise beauty. We specialize in <strong>Invisible Integration</strong>, where high-performance baffles are hidden behind luxury silks, suedes, or custom-perforated timber slats. Your space looks like a designer masterpiece but performs like a world-class studio.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: RAY-TRACING SIMULATION */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">07 — Pre-Construction</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Predictive <span className="text-[#828a1c]">Modeling.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Before a single panel is installed, we conduct <strong>EASE Modeling</strong> and <strong>Ray-Tracing simulations</strong>. We provide a "Predictive Decibel Map," allowing us to identify potential flanking paths and "hot zones" in the digital phase, saving thousands in construction errors and ensuring guaranteed results.
            </p>
          </div>
          <div className="aspect-video bg-[#0f1108] p-4">
             <div className="w-full h-full border border-[#828a1c]/20 flex items-center justify-center text-[#828a1c] text-[10px] uppercase tracking-[0.5em]">
                [ 3D Acoustic Simulation Render ]
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CALIBRATION */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#FAF9F6]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-square max-h-[500px] overflow-hidden">
             <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80" alt="Audio Calibration Tools" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">08 — Delivery</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Forensic <span className="text-[#828a1c]">Handover.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Our process concludes with a post-installation audit. We measure the <strong>NC-20 (Noise Criteria)</strong> levels and conduct impulse response tests. The result is a certified environment that meets international standards for acoustic excellence, ready for its place in the Bixbite portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* REUSABLE COMPONENTS */}
      <FAQSection 
        title="Technical FAQ"
        items={[
            { q: "Can this be applied to existing structures?", a: "Yes, we specialize in acoustic retrofitting for penthouses and commercial offices without structural demolition." },
            { q: "Are the materials fire-rated?", a: "Every material Bixbite uses is ASTM E84 Class A fire-rated for safety." }
        ]} 
      />

      <ServiceCTA 
        title="Command your sonic environment."
        description="Connect with our lead acoustic engineer for a site audit."
        buttonText="Book Site Audit"
        link="/contact"
      />
    </div>
  );
};

export default AcousticTreatment;